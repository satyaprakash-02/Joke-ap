import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://v2.jokeapi.dev/joke/Programming");
    res.render("joke.ejs", {
      joke: result.data.joke
    });
  } catch (error) {
    console.error(error.message); 
    console.error(error.response.data); 
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
