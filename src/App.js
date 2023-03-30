import React,{useState,useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import WholeApp from "./pages/WholeApp";
import {apihost} from "../src/services/api";
import { AppProvider } from "./contexts/AppProvider";


axios.defaults.baseURL = apihost;
// axios.defaults.headers.post["content-type"] = "application/json";
// // axios.defaults.headers.post["content-type"] = "multipart/form-data: boundary=add-random-characters";
// axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("saasapp-token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});



function App() {
  const [appToView,setAppToView] = useState(()=>{
    let objectApp = {}
    const website = 'http://localhost:3000/'
    const profile = window.location.toString().split('?');
    let profile_name = "";
    if(profile.length > 1){
     profile_name = profile[1].toString().split('=')[1];
    }
    var appName = (profile_name.toString().split('.'));
    if(appName.length == 1){
    objectApp = {itsApp: false, appName: ''};
    return objectApp 
  
    }else{
      objectApp = {itsApp: true, appName: appName[0].split('//')[1],url: profile[1]}
      return objectApp 
    }
    return objectApp;
});


  return (
    <AppProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<WholeApp appToView={appToView} />}/>
      
        <Route exact path="*" element={<WholeApp appToView={appToView}/>}/>
       </Routes>
    </Router>
    </AppProvider>
  );
}

export default App;

