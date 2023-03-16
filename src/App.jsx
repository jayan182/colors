import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import List from "./Components/Contact/list";
import Create from "./Components/Contact/create";
import Detail from "./Components/Contact/detail";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="*" element={ <About/> } />
            <Route path="about" element={ <About/> } />
            <Route path=":productName/detail/" element={ <Detail/> } />
            <Route path="contacts" element={ <Contacts/> }>
                <Route path="list" element={ <List/ >} />
                <Route path="create" element={ <Create/ >} />
            </Route>
        </Routes>
    </div>
  )
}

export default App;