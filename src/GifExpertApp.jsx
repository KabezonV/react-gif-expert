import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //categories.push(NewCategory);
    // una forma de hacerlo tambien  es : setCategories([...categories,'Valorant'])
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      {/* <li>ABC</li> */}
    </>
  );
};
