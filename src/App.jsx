import { useEffect, useState } from "react";
import "./App.css";
import CoctailItem from "./CoctailItem";
import { throttle } from "throttle-debounce";
import { debounce } from "throttle-debounce";

function App() {
  const [coctails, setCoctails] = useState(null);

  const [query, setQuery] = useState("");

  // const throttleFunc = throttle(
  //   1000,
  //   (num) => {
  //     console.log("(throttle) num:", num);
  //   },
  //   { noLeading: false, noTrailing: false }
  // );

  // // Can also be used like this, because noLeading and noTrailing are false by default
  // // const throttleFunc = throttle(1000, (num) => {
  // //   console.log("num:", num);
  // // });

  // throttleFunc(1); // Will execute the callback
  // throttleFunc(2); // Won’t execute callback
  // throttleFunc(3); // Won’t execute callback

  // const debounceFunc = debounce(
  //   1000,
  //   (num) => {
  //     console.log("(debounce) num:", num);
  //   },
  //   { atBegin: false }
  // );

  // // Can also be used like this, because atBegin is false by default
  // // const debounceFunc = debounce(1000, (num) => {
  // //   console.log("num:", num);
  // // });

  // // Won’t execute the callback, because atBegin is false,
  // // but if we set atBegin to true, this callback will be executed.
  // debounceFunc(1);

  // debounceFunc(2); // Won’t execute callback
  // debounceFunc(3); // Won’t execute callback

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`
        );
        const posts = await response.json();
        setCoctails(posts.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  function handleClick(e) {
    let ingredient = e.target.getAttribute("name");
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
    console.log(e.target.value);
    setQuery(e.target.value);
    console.log(query);
    const newQuery = e.target.value;
    if (!newQuery) return;
    setQuery(newQuery);
    const fetchPost = async () => {
      try {
        const response = await fetch(
          ` https://thecocktaildb.com/api/json/v1/1/search.php?s=${newQuery}`
        );
        const posts = await response.json();
        console.log(posts);
        console.log(response);
        console.log(posts.drinks);
        if (!posts.drinks) return;
        setCoctails(posts.drinks);
        // if (!posts.drinks) alert("Error");
      } catch (error) {
        // if (!posts.drinks) alert("Error");
        console.log("error", error);
      }
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

  // prettier-ignore
  const ingredients = [{ name: "Gin" }, { name: "Vodka" }, { name: "Rum" }, { name: "Tequila" }, { name: "Wine" }, { name: "Whiskey" }, { name: "Aperol" }, { name: "Campari" }, { name: "Jagermeister" }, { name: "Grenadine" }, { name: "Mint" }, { name: "Lemon" }, { name: "Pineapple" } ];

  return (
    <>
      <h1>Our Coctails</h1>

      <div className="btn-cont">
        {ingredients.map((ingredient, index) => {
          return (
            // prettier-ignore
            <button key={index} name={ingredient.name} onClick={(e) => handleClick(e)}> {ingredient.name} </button>
          );
        })}
      </div>

      <label>Search by name:</label>
      {/* prettier-ignore */}
      <input type="text" className="input-name" value={query} onChange={(e) => handleInputChange(e)} />

      <div className="coctails-list">
        {coctails &&
          coctails.map((item, index) => {
            return (
              // prettier-ignore
              <CoctailItem key={index} name={item.strDrink} image={item.strDrinkThumb} id={item.idDrink} />
            );
          })}
      </div>
    </>
  );
}

export default App;
