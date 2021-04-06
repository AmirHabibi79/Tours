import './App.css';
import {useEffect,useState} from "react";
import Tours from './tours';
function App() {
  const url = 'https://course-api.com/react-tours-project'
  const[loading,setLoading]=useState(true)
  const[tours,setTours]=useState([]);
  const getTours=async()=>{
    setLoading(true)
    try{
      const response=await fetch(url)
      const tours=await response.json();
      setLoading(false)
      setTours(tours)
    }catch(er){
      setLoading(false)
      console.error(er)
    }
  }
  const removeTour=(id)=>{
    const newTours=tours.filter(tour=>tour.id!==id)
    setTours(newTours)
  }
  useEffect(()=>{
    getTours()
  },[])
  if(loading){
    return(
      <h1>loading...</h1>
    )
  }if(tours.length===0){
    return(
      <div className="loading">
      <h2>no tours left</h2>
      <button onClick={()=>getTours()}>refresh</button>
    </div>
    )
  }else{
    return(
      <Tours tours={tours} removeTour={removeTour}/>
    )
  }
 
}

export default App;
