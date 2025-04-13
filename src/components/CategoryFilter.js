import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleClick(category) {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  }

  const categoryButtons = categories.map((category) => (
    <button
      key={category}
      className={selectedCategory === category ? "selected" : ""}
      onClick={() => handleClick(category)}
    >
      {category}
    </button>
  ));

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
