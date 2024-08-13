import Header from "../src/components/header/Header.tsx"
import TodoGallery from "../src/components/todogallery/TodoGallery.tsx"
import AddTodo from "../src/components/addtodo/AddTodo.tsx"
import Footer from "../src/components/footer/Footer.tsx"

import './App.css'

function App() {

  return (
    <>
      <Header/>
      <TodoGallery/>
      <AddTodo/>
      <Footer/>
    </>
  )
}

export default App
