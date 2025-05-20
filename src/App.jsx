import { useEffect, useState } from "react";
import "./App.css";
import CoctailItem from "./CoctailItem";

function App() {
  const [coctails, setCoctails] = useState(null);
  const [ingredient, setIngredient] = useState("Tequila");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
        // ` https://thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      );
      const posts = await response.json();
      console.log(posts.drinks);
      setCoctails(posts.drinks);
    };

    fetchPost();
  }, [ingredient]);

  return (
    <>
      <h1>Our Coctails</h1>

      <div className="btn-cont">
        <button onClick={() => setIngredient("Gin")}>Gin</button>
        <button onClick={() => setIngredient("Vodka")}>Vodka</button>
        <button onClick={() => setIngredient("Rum")}>Rum</button>
        <button onClick={() => setIngredient("Tequila")}>Tequila</button>
        <button onClick={() => setIngredient("Wine")}>Wine</button>
        <button onClick={() => setIngredient("Whiskey")}>Whiskey</button>
        <button onClick={() => setIngredient("Aperol")}>Aperol</button>
      </div>

      <form>
        <label>Search by name:</label>
        <input
          type="text"
          className="input-name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
