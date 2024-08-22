import { useState } from "react";

import "./App.css";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const initalItems = [
  { id: 1, description: "Passport", Quantity: 2, packed: true },
  { id: 2, description: "Socks", Quantity: 12, packed: false },
  { id: 3, description: "Phone", Quantity: 1, packed: true },
];
function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handletoggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onaddItem={handleAddItem} />
      <PackingList
        items={items}
        delItem={handleDelItem}
        onToggleItem={handletoggleItem}
        onsetItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}
export default App;
