// Import express and axios
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://api.spoonacular.com/recipes/complexSearch?fillIngredients=true&addRecipeInformation=true&number=12";

const api_key = "eb8ce86459164d3a8a7151655ee5b99c";

// Use the public folder for static files.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// 4. When the user goes to the home page it should render the index.ejs file.
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/search", (req, res) => {
  res.render("search.ejs");
})

app.post("/search", async (req, res) => {
    let searchResult = req.body.recipe;
    // console.log(searchResult);

    try {
      const result = await axios.get(API_URL + "&query=" + searchResult + "&apiKey=" + api_key);
      res.render("random.ejs", { content: result.data });
      
    } catch (error) {
      res.render("random.ejs", { error: error.response.data});
    }
    
})

app.get("/surpriseDish", (req, res) => {
  res.render("random.ejs")
})

app.post("/surpriseDish", async (req, res) => {
  let random = Math.floor(Math.random() * random_food.length);
  // console.log(random);
  
  try {
    const result = await axios.get(API_URL + "&query=" + random_food[random] + "&apiKey=" + api_key);
    res.render("random.ejs", { content: result.data });
    
  } catch (error) {
    res.render("random.ejs", { error: error.response.data});
  }
  
})

// Listen on predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });




  const random_food = [
    "Apple,",  
    "Banana,",  
    "Broccoli,",  
    "Carrot,",  
    "Chicken,",  
    "Chocolate,",  
    "Coconut,",  
    "Curry,",  
    "Doughnut,",  
    "Egg,",  
    "Eggplant,",  
    "Fish,",  
    "Flour,",  
    "Garlic,",  
    "Grapes,",  
    "Greenbean,",  
    "Honey,",  
    "Icecream,",  
    "Jam,",  
    "Jelly,",  
    "Kale,",  
    "Kiwi,",  
    "Lemon,",  
    "Lettuce,",  
    "Lime,",  
    "Mango,",  
    "Melon,",  
    "Mushroom,",  
    "Nut,",  
    "Noodles,",  
    "Onion,",  
    "Orange,",  
    "Pancake,",  
    "Pasta,",  
    "Peach,",  
    "Peas,",  
    "Pepper,",  
    "Pineapple,",  
    "Pizza,",  
    "Potato,",  
    "Raisin,",  
    "Raspberry,",  
    "Rice,",  
    "Salad,",  
    "Shrimp,",  
    "Soy,",  
    "Spinach,",  
    "Squash,",  
    "Strawberry,",  
    "Sugar,", 
    "Taco,",  
    "Tofu,",  
    "Tomato,",  
    "Tuna,",  
    "Turkey,",  
    "Vanilla,",  
    "Vegetable,",  
    "Waffle,",  
    "Watermelon,",  
    "Zucchini,",  
    "Baguette,",  
    "Baklava,",  
    "Barbecue,",  
    "Beetroot,",  
    "Berry,",  
    "Biscuit,",  
    "Bruschetta,",  
    "Cabbage,",  
    "Cauliflower,",  
    "Chili,",  
    "Churro,",  
    "Clam,",  
    "Couscous,",  
    "Cracker,",
    "Frittata,",  
    "Gazpacho,",  
    "Granola,",  
    "Jambalaya,",  
    "Lasagna,",  
    "Macaroni,",  
    "Meatball,",  
    "Naan,",  
    "Paella,",  
    "Ratatouille,",  
    "Risotto,",  
    "Sushi,",  
    "Tortilla,",
    "Yogurt,"  
]