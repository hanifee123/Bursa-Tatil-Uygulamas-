import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import Categories from "./Categories";
import MapContainer from "./Harita";


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    setMenuItems(category === "all" ? items : items.filter((item) => item.category === category));
  };

  return (
    <main>
      <section className="holiday section">
        <div className="title">
          <h2>Bursa Halk Plajları</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
        <h5 style={{ textAlign: 'center', marginTop: '2rem' }}>created by Hanife Ekinci © 2024</h5>
      </section>
    </main>
    
  );
};

export default App;
