import Header from './Components/Header';
import './App.css'
import Navbar from './Components/Navbar';
import UseFetch from './Components/hooks/fetch';
import AboutUs from './Components/AboutUs'
import { Route,Routes } from 'react-router-dom';
import Services from './Components/Services';

function App() {
  let {data,loading,error}= UseFetch("http://localhost:1337/api/service?populate=*")
  if(loading) return(<p>{loading}</p>)
  if(error)return(<p>{error}</p>)
  return (
    <div >
<Routes>
  <Route path='/' element={<Navbar  blog={data?data:" "}/>}/>
    <Route path="/" element={ <AboutUs />}/>
    <Route path='/blog/:id' element={<Services blog={data?data:" "}/>}/>
</Routes>
      
      
     

    </div>
  );
}

export default App;
