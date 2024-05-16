import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <ToDoInput/>
      <ToDoList/>
    </main>
  )
}

export default App
