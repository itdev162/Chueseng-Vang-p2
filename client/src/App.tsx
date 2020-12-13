import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostList from './components/PostList/PostList';
import Post from './components/Post/Post';
import CreatePost from './components/Post/CreatePost';
import EditPost from './components/Post/EditPost';
import Home from './components/Other/Home';
import Menu from './components/Other/Menu';
import './App.css';

class App extends React.Component {

  state = {
    posts: [],
    post: null
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/posts')
    .then((response) => {
      this.setState({
        posts: response.data
      })
    })
    .catch((error) => {
      console.error(`Error fetching data: ${error}`);
    })
  }

  viewPost = (post) => {
    console.log(`view ${post.title}`);
    this.setState({ 
      post: post 
    });
  }

  deletePost = post => {
    axios 
      .delete(`http://localhost:5000/api/posts/${post.id}`)
      .then(response => {
        const newPosts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({
          posts: [...newPosts]
        });
      })
      .catch(error => {
        console.error(`Error deleteing post: ${error}`);
      })
  };

  editPost = post => {
    this.setState({
      post: post
    });
  };

  onPostCreated = post => {
    const newPosts = [...this.state.posts, post];

    this.setState({
      posts: newPosts
    });
  };

  onPostUpdated = post => {
    console.log('updated post: ', post);
    const newPosts = [...this.state.posts];
    const index = newPosts.findIndex(p => p.id === post.id);

    newPosts[index] = post;

    this.setState({
      posts: newPosts
    });
  };

  render() {
    const { posts, post } = this.state;
 
    return (
      <Router>
        <div className="App">
          <header className="App-Header">Jay's Fish and Chicken</header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/write-review">Write a Review</Link>
            <Link to="/Review">Reviews</Link>
            <Link to="/Menu">Menu</Link>
          </nav>
          <main className="App-Content">
            <Switch>
              <Route exact path="/">
                <img src="https://flagsandsigns.com/shop/images/A38187_Fried_Chicken_3x8-banner-sign.jpg" alt="Chicken-Banner" width="1380" height="150"></img>
                <h1>Jays Fish and Chicken</h1>
                <h1>1234 Random rd, RandomCity, RandomState, 11223</h1>
                <Home></Home>
              </Route>
              <Route path="/posts/:postId">
                <Post post={post}/>
              </Route>
              <Route path="/write-review">
              <img src="https://flagsandsigns.com/shop/images/A38187_Fried_Chicken_3x8-banner-sign.jpg" alt="Chicken-Banner" width="1380" height="150"></img>
                <CreatePost onPostCreated={this.onPostCreated} />
              </Route>
              <Route path="/edit-post/:postId">
                <EditPost post={post} onPostUpdated/>
              </Route>
              <Route path="/Review">
              <img src="https://flagsandsigns.com/shop/images/A38187_Fried_Chicken_3x8-banner-sign.jpg" alt="Chicken-Banner" width="1380" height="150"></img>
                <h1>Top Reviews</h1>
                <PostList posts={posts} 
                          clickPost={this.viewPost}
                          deletePost={this.deletePost}
                          editPost={this.editPost}
                          />
              </Route>
              <Route path="/Menu">
                <Menu></Menu>
              </Route>
            </Switch>
          </main>
        </div>
      </Router>     
    );
  }
}

export default App;   

