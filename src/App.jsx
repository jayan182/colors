import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import List from "./Components/Contact/list";
import Create from "./Components/Contact/create";
import Detail from "./Components/Contact/detail";
import Memo from "./Components/Memo";
import Movie from "./Components/Movie/index";
import MovieDetail from "./Components/Movie/detail";
import Index from './Components/Reducer';
import Store from '../src/Components/Reducer/store';
import Fruits from '../src/Components/Fruits';
import ClassComponent from "./Components/ClassComponent";
import FruitStore from './Context/fruitProvider';
import Weather from '../src/Components/Weather';
import Login from '../src/Components/Login/login';
import Register from '../src/Components/Login/register';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(()=>{
    setUser(user);

    if(user === null || user === ""){
      navigate("/");
    }
  },[user]);


  return (
    <div className="App">
        <FruitStore>
          <Store>
            <Routes>
              <Route path="/" element={ <Login/> } />
              <Route path="/register" element={ <Register/> } />
              <Route path="/home" element={ <Home/> } />
              <Route path="*" element={ <About/> } />
              <Route path="about" element={ <About/> } />
              <Route path="memo" element={ <Memo/> } />
              <Route path="movie" element={ <Movie/> } />
              <Route path="/movie/:movieId" element={ <MovieDetail/ >} />
              <Route path="reducer" element={ <Index/> } />
              <Route path="fruits" element={ <Fruits/> } />
              <Route path="class_component" element={ <ClassComponent/> } />
              <Route path="weather" element={ <Weather/> } />

              <Route path=":productName/detail/" element={ <Detail/> } />

              <Route path="contacts" element={ <Contacts/> }>
                  <Route path="list" element={ <List/ >} />
                  <Route path="create" element={ <Create/ >} />
              </Route>
            </Routes>
          </Store>
        </FruitStore>
    </div>
  )
}

export default App;