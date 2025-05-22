import { useEffect, useState } from "react";
import "./App.css";
import CoctailItem from "./CoctailItem";

function App() {
  const [coctails, setCoctails] = useState(null);

  const [query, setQuery] = useState("");

  // const [input, setInput] = useState("");

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

      setCoctails(posts.drinks);
    };

    fetchPost();
  }

  function handleInputChange(e) {
    setQuery(e.target.value);

    console.log(query);

    const fetchPost = async () => {
      const response = await fetch(
        ` https://thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
      );
      const posts = await response.json();
      console.log(posts.drinks);
      setCoctails(posts.drinks);
    };

    fetchPost();
  }

  // function handleInputChange(event) {
  //   setInput(event.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const fetchPost = async () => {
  //     const response = await fetch(
  //       ` https://thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
  //     );
  //     const posts = await response.json();
  //     // console.log(posts.drinks);
  //     setCoctails(posts.drinks);
  //   };

  //   fetchPost();

  //   setInput("");
  // }
  // napraviti const arr ingredients i svaki ing ima name
  // staviti name kao attribute na btn i iskoristiti za text
  // debounce

  const ingredients = [
    { name: "Gin" },
    { name: "Vodka" },
    { name: "Rum" },
    { name: "Tequila" },
    { name: "Wine" },
    { name: "Whiskey" },
    { name: "Aperol" },
    { name: "Campari" },
    { name: "Jagermeister" },
    { name: "Grenadine" },
    { name: "Mint" },
    { name: "Lemon" },
    { name: "Pineapple" },
  ];

  return (
    <>
      <h1>Our Coctails</h1>

      <div className="btn-cont">
        {ingredients.map((ingredient, index) => {
          return (
            <button key={index} onClick={() => handleClick([ingredient.name])}>
              {ingredient.name}
            </button>
          );
        })}
      </div>

      {/* <form onSubmit={handleSubmit}> */}
      <label>Search by name:</label>
      <input
        type="text"
        className="input-name"
        value={query}
        onChange={(e) => handleInputChange(e)}
        // value={input}
        // onChange={handleInputChange}
      />
      <button className="hidden"></button>
      {/* </form> */}

      <div className="coctails-list">
        {coctails &&
          coctails.map((item, index) => {
            return (
              <CoctailItem
                key={index}
                name={item.strDrink}
                image={item.strDrinkThumb}
                id={item.idDrink}
              />
            );
          })}
      </div>
    </>
  );
}

export default App;
