import { useState } from "react";
import { Items } from "./Items";

export function PackingList({ items, delItem, onToggleItem, onsetItems }) {
  const [sortBy, setSortBy] = useState("");
  const [optionSort, setoptionSort] = useState("asc");

  const handleFilter = () => {
    let sortItem;
    sortItem = items;
    switch (sortBy) {
      case "input":
        if (optionSort === "asc") {
          sortItem = items.slice().sort((a, b) => a.quantity - b.quantity);
        } else {
          sortItem = items.slice().sort((a, b) => b.quantity - a.quantity);
        }
        break;
      case "description":
        sortItem = items
          .slice()
          .sort((a, b) => a.description.localeCompare(b.description));
        break;
      case "packed":
        sortItem = items
          .slice()
          .sort((a, b) => Number(a.packed) - Number(b.packed));
        break;
      default:
        sortItem = items;
        break;
    }
    onsetItems(sortItem);
  };

  function handleClearList() {
    const confirmed = window.confirm("are you want clear list ? ");
    if (confirmed) {
      onsetItems([]);
    }
  }

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Items
            item={item}
            key={item.id}
            onToggleItem={onToggleItem}
            delItem={delItem}
          />
        ))}
      </ul>

      <div className="filter">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input orders</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <select
          value={optionSort}
          onChange={(e) => setoptionSort(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

        <button onClick={handleFilter}>filter</button>
        <button onClick={() => handleClearList()}>Clear list</button>
      </div>
    </div>
  );
}
