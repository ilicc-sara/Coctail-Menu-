import { useEffect, useState } from "react";
import "./App.css";
import CoctailItem from "./CoctailItem";

function App() {
  const [coctails, setCoctails] = useState(null);
  const [ingredient, setIngredient] = useState("Tequila");

  // const BASE_URL = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  // const BASE_URL = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka`;
  useEffect(() => {
    const fetchPost = async () => {
      // const response = await fetch(`${BASE_URL}`);
      const response = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
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
      </div>

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
