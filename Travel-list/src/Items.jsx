export function Items({ item, delItem, onToggleItem, onClearList }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.id}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => delItem(item.id)}>❌</button>
    </li>
  );
}
