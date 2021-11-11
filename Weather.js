import React,{useEffect,useState} from "react";
import './style.css'

const  Weatherapp = () => {
     const [city, setCity] = useState(null);
     const [search, setSearch] = useState("Mumbai");

     useEffect(() => {
          const fetchApi = async() => {
             const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=29ad4c74341cb21ab613ab31528e752c`;
             const response = await fetch(url);
             const resJson = await response.json();
             console.log(resJson);

             setCity(resJson);

         };
         fetchApi();
     },[search])
    return(
        <>
        <div className="box">
        <div className="inputData"></div>
        <input type="search" className="inputField" onChange={ (event) => {
            setSearch(event.target.value)
        } }/>
       {
           !city ? (
               <p>No Data Found</p>
           ) : (<div>
               <div className="info">

        <h2 className="location">
        <i class="fas fa-street-view"><font color="black">{search}</font></i>
        </h2>

        <h1 className="weath">
        {city.main.temp}
        </h1>


        <h3 className="weathermin_max">Min : 5.25degCel | Max : 5.25degCel</h3>
        </div>
        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>

        </div>
    )}
    </div>
    </>
    )
}
export default Weatherapp;




