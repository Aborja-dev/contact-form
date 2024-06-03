import { ToastContainer } from "react-toastify"
import Form from "./Form"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <main>
        <article>
          <h1>Contact Us</h1>
          <Form />
        </article>
        <ToastContainer />
      </main>
    </>
  )
}


export default App
