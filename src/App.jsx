import { useEffect, useState } from "react";
import "./App.css";
import CoctailItem from "./CoctailItem";

function App() {
  const [coctails, setCoctails] = useState(null);
  const [ingredient, setIngredient] = useState("Tequila");
  // const [query, setQuery] = useState("");

  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`
      );
      const posts = await response.json();
      setCoctails(posts.drinks);
    };

    fetchPost();
  }, []);

  function handleClick(ingredient) {
    const fetchPost = async () => {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const posts = await response.json();
      console.log(posts.drinks);
      setCoctails(posts.drinks);
      setIngredient(ingredient);
    };

    fetchPost();
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const fetchPost = async () => {
      const response = await fetch(
        ` https://thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
      );
      const posts = await response.json();
      console.log(posts.drinks);
      setCoctails(posts.drinks);
    };

    fetchPost();

    setInput("");
  }

  return (
    <>
      <h1>Our Coctails</h1>

      <div className="btn-cont">
        <button onClick={() => handleClick("Gin")}>Gin</button>
        <button onClick={() => handleClick("Vodka")}>Vodka</button>
        <button onClick={() => handleClick("Rum")}>Rum</button>
        <button onClick={() => handleClick("Tequila")}>Tequila</button>
        <button onClick={() => handleClick("Wine")}>Wine</button>
        <button onClick={() => handleClick("Whiskey")}>Whiskey</button>
        <button onClick={() => handleClick("Aperol")}>Aperol</button>
        <button onClick={() => handleClick("Grenadine")}>Grenadine</button>
        <button onClick={() => handleClick("Mint")}>Mint</button>
        <button onClick={() => handleClick("Lemon")}>Lemon</button>
        <button onClick={() => handleClick("Campari")}>Campari</button>
        <button onClick={() => handleClick("Pineapple")}>Pineapple</button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Search by name:</label>
        <input
          type="text"
          className="input-name"
          // value={query}
          // onChange={(e) => setQuery(e.target.value)}
          value={input}
          onChange={handleInputChange}
        />
        <button className="hidden"></button>
      </form>

      <div className="coctails-list">
        {coctails &&
          coctails.map((item, index) => {
            return (
              <CoctailItem
                key={index}
                name={item.strDrink}
                image={item.strDrinkThumb}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
