import React, { useState } from "react";
import { RecipeList } from "./RecipeList";
import styles from "./searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiOutlineSearch } from "react-icons/ai";
import ReactLoading from "react-loading";

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className={styles["search"]}>
      {" "}
      <input
        class="searchTerm"
        placeholder="What are you looking for?"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />{" "}
      <button
        onClick={handleSearch}
        type="submit"
        className={styles["searchButton"]}
      >
        <AiOutlineSearch />
      </button>
    </div>
  );
};

export const SearchBar = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchRecipes = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=62797b9e&app_key=d2672d172c0bc9197eabeff298978239`
      );
      const data = await response.json();
      setRecipes(data.hits);
    } catch (err) {
      setError("An error occurred while fetching recipes.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {" "}
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ReactLoading
            type={"spin"}
            color={"#00B4CC"}
            height={"50px"}
            width={"50px"}
          />
        </div>
      ) : (
        <>
          <SearchForm onSearch={fetchRecipes} />
          {error && <div>{error}</div>}{" "}
          {recipes.length > 0 ? (
            <RecipeList recipes={recipes} />
          ) : (
            <div>No recipes yet, please submit a recipe!</div>
          )}{" "}
        </>
      )}
    </div>
  );
};
