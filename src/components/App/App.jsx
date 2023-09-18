import ReactDOM from "react-dom/client";
import {Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contacts/Contacts";
import NoPage from "../NoPage/NoPage";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
