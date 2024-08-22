export function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  if (numItems == 0) {
    return (
      <footer className="stats">
        <em>you need add some item</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      <em>
        {numItems === numPacked
          ? `you got everything ready to go ✈️`
          : `👜 You have ${numItems} items on your list , and you already packed  ${numPacked} , ${percentage}%  `}
      </em>
    </footer>
  );
}
