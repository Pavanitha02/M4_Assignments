export default function Sidebar({ todos, selectedId, onSelect }) {
  return (
    <div className="w-64 border-r p-4 overflow-y-auto">
      <h3 className="font-semibold mb-3">Your Todos</h3>

      {todos.map(todo => (
        <div
          key={todo.id}
          onClick={() => onSelect(todo)}
          className={`p-2 rounded cursor-pointer mb-2 
          ${selectedId === todo.id ? "bg-gray-200" : "hover:bg-gray-100"}`}
        >
          {todo.title}
        </div>
      ))}
    </div>
  );
}
