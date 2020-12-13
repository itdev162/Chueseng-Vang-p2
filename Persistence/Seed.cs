using System.Collections.Generic;
using System.Linq;
using Domain;

namespace Persistence
{

    public class Seed
    {
        public static void SeedData(DataContext context)
        {
            if(context.Posts.Count() ==0)
            { 
                List<Post> seedPosts = new List<Post>
                {
                    new Post() {Title = "Khalil M", Body = "Best fish I've had. Great Service, Good Food, Quick and Fast."},
                    new Post() {Title = "Deborah M", Body = "Food is very tasty and affordable. My favorite food is the chicken Philly."},
                    new Post() {Title = "Joseph G", Body = "Great cod. The jumbo shrimp are delicious."},
                    new Post() {Title = "Emma T", Body = "Excellent food large portion of food for a greate price!!."},
                    new Post() {Title = "Bob F", Body = "Great Food, Love the Chicken!!"},
                };   
    
                context.Posts.AddRange(seedPosts);
                context.SaveChanges();
            }
        }
    }
}