import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { fetchDataFromApi } from "./utils/api";

import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Details from "./pages/Details/Details";
import SearchResult from "./pages/searchResult/searchResult";
import Explore from "./pages/Explore/Explore";
import pageNoteFound from "./pages/404/pageNoteFound";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    apiTesting();
  }, []);
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };
  return (

    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/search/:query" element={<SearchResult/>}/>
        <Route path="/explore/:merdiaType" element={<Explore/>}/>
        <Route path="*" element={<pageNoteFound/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
