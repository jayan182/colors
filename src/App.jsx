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
import PermittedRoute from "./Config/permittedRoute";

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
              <Route 
                path="/home" 
                element={ 
                  <PermittedRoute>
                    <Home/> 
                  </PermittedRoute>
                }
               />
              <Route path="*" element={ 
                <PermittedRoute>
                  <About/> 
                </PermittedRoute>  
              } />
              <Route 
                path="about" 
                element={ 
                  <PermittedRoute>
                    <About/> 
                  </PermittedRoute>
                } 
              />
              <Route 
                path="memo" 
                element={ 
                  <PermittedRoute>
                    <Memo/> 
                  </PermittedRoute>
                } 
              />
              <Route 
                path="movie" 
                element={ 
                  <PermittedRoute>
                    <Movie/> 
                  </PermittedRoute>
                } 
              />
              <Route 
                path="/movie/:movieId" 
                element={ 
                  <PermittedRoute>
                    <MovieDetail/ >
                  </PermittedRoute>
                } 
              />
              <Route 
                path="reducer" 
                element={ 
                  <PermittedRoute>
                    <Index/> 
                  </PermittedRoute>
                } 
              />
              <Route 
                path="fruits" 
                element={ 
                  <PermittedRoute>
                    <Fruits/>
                  </PermittedRoute>
                } 
              />
              <Route 
                path="class_component" 
                element={ 
                  <PermittedRoute>
                    <ClassComponent/> 
                  </PermittedRoute>
                } 
              />
              <Route 
                path="weather" 
                element={ 
                  <PermittedRoute>
                    <Weather/> 
                  </PermittedRoute>
                } 
              />

              <Route path=":productName/detail/" 
                element={ 
                  <PermittedRoute>
                    <Detail/> 
                  </PermittedRoute>
                } 
              />

              <Route path="contacts" element={ 
                <PermittedRoute>
                    <Contacts/> 
                  </PermittedRoute>
              }>
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