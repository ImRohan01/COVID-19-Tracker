import React,{useState,useEffect} from 'react';
import FirstPage from './components/FirstPage.js'
import SecondPage from './components/SecondPage.js'
import ThirdPage from './components/ThirdPage.js'
import axios from 'axios'
import './App.css';

function App() {
  const [countries,setCountries] = useState([])
  const [stats,setStats] = useState([])
  const [worldwide,setWorldwide] = useState({})
  const [location,setLocation] = useState("")
  const [current,setCurrent] = useState({})
  const [timeStats,setTimeStats] = useState({})

  useEffect(() => {
    const fetchWorldwide = async () => {
      const result = await axios(`https://disease.sh/v3/covid-19/all`)
      if(result.data.active/(Math.pow(10,6)) >= 1){
        result.data["active_short"] = String(Math.floor(result.data.active/(Math.pow(10,6)))) + "M+"
      }
      else{
        result.data["active_short"] = String(Math.floor(result.data.active/(Math.pow(10,3)))) + "K+"
      }
      if(result.data.recovered/(Math.pow(10,6)) >= 1){
        result.data["recovered_short"] = String(Math.floor(result.data.recovered/(Math.pow(10,6)))) + "M+"
      }
      else{
        result.data["recovered_short"] = String(Math.floor(result.data.recovered/(Math.pow(10,3)))) + "K+"
      }
      if(result.data.deaths/(Math.pow(10,6)) >= 1){
        result.data["deaths_short"] = String(Math.floor(result.data.deaths/(Math.pow(10,6)))) + "M+"
      }
      else{
        result.data["deaths_short"] = String(Math.floor(result.data.deaths/(Math.pow(10,3)))) + "K+"
      }
      if(result.data.cases/(Math.pow(10,6)) >= 1){
        result.data["cases_short"] = String(Math.floor(result.data.cases/(Math.pow(10,6)))) + "M+"
      }
      else{
        result.data["cases_short"] = String(Math.floor(result.data.cases/(Math.pow(10,3)))) + "K+"
      }
      setWorldwide(result.data)
    }

    const fetchItems = async () => {
      const result = await axios(`https://disease.sh/v3/covid-19/countries`)
      result.data.forEach((obj) => {
      if(obj.active/(Math.pow(10,6)) >= 1){
        obj["active_short"] = String(Math.floor(obj.active/(Math.pow(10,5)))) + "M+"
      }
      else if(obj.active/(Math.pow(10,3)) >= 1){
        obj["active_short"] = String(Math.floor(obj.active/(Math.pow(10,3)))) + "K+"
      }
      else {
        obj["active_short"] = String(obj.active)
      }
      if(obj.recovered/(Math.pow(10,6)) >= 1){
        obj["recovered_short"] = String(Math.floor(obj.recovered/(Math.pow(10,5)))) + "M+"
      }
      else if(obj.recovered/(Math.pow(10,3)) >= 1){
        obj["recovered_short"] = String(Math.floor(obj.recovered/(Math.pow(10,3)))) + "K+"
      }
      else {
        obj["recovered_short"] = String(obj.recovered)
      }
      if(obj.deaths/(Math.pow(10,6)) >= 1){
        obj["deaths_short"] = String(Math.floor(obj.deaths/(Math.pow(10,5)))) + "M+"
      }
      else if(obj.deaths/(Math.pow(10,3)) >= 1){
        obj["deaths_short"] = String(Math.floor(obj.deaths/(Math.pow(10,3)))) + "K+"
      }
      else {
        obj["deaths_short"] = String(obj.deaths)
      }
      if(obj.cases/(Math.pow(10,6)) >= 1){
        obj["cases_short"] = String(Math.floor(obj.cases/(Math.pow(10,5)))) + "M+"
      }
      else if(obj.cases/(Math.pow(10,3)) >= 1){
        obj["cases_short"] = String(Math.floor(obj.cases/(Math.pow(10,3)))) + "K+"
      }
      else {
        obj["cases_short"] = String(obj.cases)
      }
    })
      let arr = []
      result.data.forEach((obj) => arr.push(obj.country))
      setLocation("Worldwide")
      setCountries(arr)
      console.log(result.data)
      setStats(result.data)
    }

    const fetchTimeStats = async () => {
      const result = await axios(`https://disease.sh/v3/covid-19/historical/all?lastdays=120`)
      console.log(result.data)
      setTimeStats(result.data)
    }
    fetchWorldwide()
    fetchItems()
    fetchTimeStats()
  },[])

  useEffect(() => {
    const fetchCurrent = () => {
      if(location === "Worldwide"){
        setCurrent(worldwide)
      }
      else if(location === ""){
      }
      else{
        setCurrent(stats.filter((obj) => obj.country === location)[0])
      }
    }
    fetchCurrent()
    console.log(timeStats)
  },[location,worldwide,stats,timeStats])


  return (
    <div className="app-window">
      <FirstPage />
      <SecondPage countries = {countries} 
                  current = {current} 
                  location = {location} 
                  setLocation = {setLocation}
                  timeStats = {timeStats}
                  />
      <ThirdPage stats={stats} countries = {countries} worldwide = {worldwide}/>
    </div>
  );
}

export default App;
