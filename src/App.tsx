import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Error404 from "./pages/ErrorPage/Error404"
import Footer from "./components/Footer"
import Services from "./pages/Services"
import AboutUs from "./pages/AboutUs"
import ContactPage from "./pages/ContactPage"
import BookDemo from "./components/BookDemo"
import { useEffect } from "react"
import WorkPage from "./pages/WorkPage"
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      disable: window.innerWidth < 1024,
      duration: 700,
      easing: "ease-out-cubic",
      once: true
    });
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Work" element={<WorkPage />} />
        <Route path="/BookDemo" element={<BookDemo />} />

        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
