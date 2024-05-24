import React, { useEffect, useState } from "react";
import "./CategorySelector.css";
import burgerImage from "../../assets/food/burger-1.png";
import sidesImage from "../../assets/food/sides-2.png";
import useFetch from "../../hooks/useFetch";

function CategorySelector({ category, setCategory }) {
  const [categories, setCategories] = useState([]);

  const { data, loading, error } = useFetch("http://localhost:3010/categories");

  //Hämta categories
  useEffect(() => {
    if (data) {
      setCategories(data);
    }
  }, [data]);

  return (
    <div className="category-selector">
      {categories.map((c) => (
        <div
          className="category-card"
          //   Sätt category till det som klickas på.
          //   All ifall man klickar på samma igen
          onClick={() => {
            if (category !== c.category) {
              setCategory(c.category);
            } else {
              setCategory("all");
            }
          }}
          key={c.id}
        >
          <div
            // Gör så jag kan styla den kategorin jag har klickat på
            className={`category-img ${
              category === c.category ? "active" : ""
            }`}
          >
            <img src={c.image} alt="" />
          </div>
          <div>
            <p
              className={`category-name ${
                category === c.category ? "active-name" : ""
              }`}
            >
              {c.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySelector;
