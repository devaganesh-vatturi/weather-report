import React,{useState} from 'react'
import './Search.css';
 function Search({fetchit}) {
   const [city, setCity] = useState('');
    function gofetch()
    {
        if(city)
        {
        fetchit(city);
        }
    }
  return (
   <div className='search-it'>
   <input type='text' value={city}   onChange={(e) => setCity(e.target.value)} placeholder='Enter city'/>
   <button id="search-button" onClick={gofetch}>Submit</button>
   </div>
  )
}
export default Search;