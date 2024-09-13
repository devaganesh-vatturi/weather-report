import React,{useState} from 'react'
import Search from './components/Search';
import axios from 'axios';
import WeatherInfo from './components/WeatherInfo';
import './App.css';
 function App(){
  const [weatherdata, setweatherdata] = useState('');
  const [error, seterror] = useState('');
  const fetchit =async(city) => {
    
  const apiKey='c53e18dfd5affb234bfff79f5a93178d';
    try{
      const response= await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
     setweatherdata(response.data);
     console.log(weatherdata);
     seterror(null);
    }
    catch(error)
    {
      seterror('city not found');
      setweatherdata(null);
    }

  } 

  return (
    <div className='weather-back'>
   <div className='weather-main'>
   <div className='weather-head'>
  <p>Weather report</p>
   </div>
   <div className='weather-sea'>
   <Search fetchit={fetchit}/>
   </div>
   <div className='weather-data'>
     {weatherdata && <WeatherInfo data={weatherdata}/>}
   </div>
   </div>
   </div>
  )
}
export default App;
