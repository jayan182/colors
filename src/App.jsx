import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Contact from "./Components/Contact";
import NewContact from "./Components/NewContact";
import Comments from "./Components/Comments";
import ContactIndex from "./Components/ContactIndex";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="*" element={ <About/> } />
            <Route path="about" element={ <About/> } />
            <Route path="contacts" element={ <Contacts/> }>
                <Route path='new' element={<NewContact />} /> 
                <Route path=':postId' element={<Contact />}> 
                    <Route index element={<ContactIndex />} />
                    <Route path='comments' element={<Comments />} />
                </Route>
            </Route>
        </Routes>
    </div>
  )
}

export default App;