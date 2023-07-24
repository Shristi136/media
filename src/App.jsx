import React, { Component } from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Class-component/Navbar';
import Home from './Class-component/Home';
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home category="all" />}></Route>
            <Route path="/education" element={<Home category="education" />}></Route>
            <Route path="/health" element={<Home category="health" />}></Route>
            <Route path="/stocks" element={<Home category="stocks" />}></Route>
            <Route path="/entertainment" element={<Home category="entertainment" />}></Route>
            <Route path="/sports" element={<Home category="sports" />}></Route>
            <Route path="/jokes" element={<Home category="jokes" />}></Route>
          </Routes>
        </BrowserRouter>
         </>
        )
  }
}
