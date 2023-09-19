import ReactDOM from "react-dom/client";
import "./App.css";

import {Routes, Route } from "react-router-dom";
import Register from "../Register/Register";
import Gallery from "../gallery/gallery";
import ContactUs from "../contactUs/contactUs";
import Login from "../Login/Login";
import Plan from "../Plan/Plan";
import Payment from "../payment/payment";
import NoPage from "../NoPage/NoPage";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Admin from "../Admin/Admin";



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="Login" element={<Login />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="Plan" element={<Plan />} />
          <Route path="Payment" element={<Payment />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
