import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Category from './components/Category';

const App = () => {

  
  const [data, setData] = useState(null);

  useEffect(() => { 
    const fetchData = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
      const res = await axios.get(url);
      console.log(res);
      setData(res.data);
    }
 
    fetchData();
  }, [])  
  return (
    <div className="App">
       <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/'  element={<div><Home /><Category /></div> }/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
