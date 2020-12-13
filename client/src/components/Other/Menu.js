import React from 'react';
import './styles.css'

const Menu = props => {

    return (
        <div className = "menu">
            <body>
            <img src="https://flagsandsigns.com/shop/images/A38187_Fried_Chicken_3x8-banner-sign.jpg" alt="Chicken-Banner" width="1380" height="150"></img>
            <h1>Menu</h1>
                <h2>Chicken Wings</h2>
                <h4>3 Pieces...............................$6.48</h4>
                <h4>6 Pieces...............................$11.68</h4>
                <h4>10 Pieces..............................$16.88</h4>
                <h4>20 Pieces..............................$27.28</h4>
                <br></br> 
                <h2>Family Meals</h2>
                <h4>12 Piece Catfish Meal............$38.98</h4>
                <h4>21 Piece Catfish Meal............$61.08</h4>
                <br></br>
                <h2>Catfish</h2>
                <h4>Small (4 Pieces)...................$14.93</h4>
                <h4>Large (5 Pieces)...................$17.53</h4>
                <br></br>
                <h2>Catfish Fillet</h2>
                <h4>Small (4 Pieces)...................$11.68</h4>
                <h4>Large (5 Pieces)...................$15.58</h4>
                <br></br>
                <h2>Shrimp</h2>
                <h4>Small (20 Pieces).................$12.98</h4>
                <h4>Large (30 Pieces).................$20.78</h4>
                <br></br>
                <h2>Jumbo Shrimp</h2>
                <h4>Small (20 Pieces).................$14.95</h4>
                <h4>Large (30 Pieces).................$28.58</h4>
                <br></br>
                <footer>
                <p>Author: ChickenV<br></br>
                <a href="mailto:Chicken@mail.com">Chicken21@mail.com</a></p>
                </footer>
            </body>
        </div>
    )
}

export default Menu;