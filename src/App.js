import AddTodo from "./components/AddTodo/AddTodo";
import TodoLists from "./components/AddTodo/TodoLists/TodoLists";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="my-bg-gradient h-[100vh] overflow-scroll">
      <Hero />
      <AddTodo />
      <TodoLists />
    </div>
  );
}

export default App;
