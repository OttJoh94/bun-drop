import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Welcome from "../../components/Welcome/Welcome";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";

function Home() {
  const [category, setCategory] = useState("all");
  return (
    <>
      <Navbar />
      <Welcome />
      <CategorySelector category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </>
  );
}

export default Home;
