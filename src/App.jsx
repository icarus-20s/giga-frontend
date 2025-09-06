import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Contactus from "./Contactus/Contactus";
import Products from "./Products/Products";
import About from "./About/About";
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import Career from "./Career/Career";
import Navbar from "./Navbar/Navbar";
import GigaFooter from "./GigaFooter/GigaFooter";
import ScrollToTop from "./Components/ScrollToTop";
import SoftwareDev from "./Services/SoftwareDev";
import WebDev from "./Services/WebDev";
import MobileDev from "./Services/MobileDev";
import GigaAccounting from "./Components/Features/GigaAccounting";
import GigaERP from "./Components/Features/GigaErp";
import GigaHRMS from "./Components/Features/GigaHrms";
import GigaIMS from "./Components/Features/GigaIms";
import FadeUp from "./Components/Fadeup";

const App = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/giga-accounting" element={<GigaAccounting />} />
                <Route path="/products/giga-erp" element={<GigaERP />} />
                <Route path="/products/giga-hrms" element={<GigaHRMS />} />
                <Route path="/products/giga-ims" element={<GigaIMS />} />

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<Services />} />

                <Route
                 path="/services/web-development"
                  element={<WebDev />} 
                />
                <Route
                    path="/services/mobile-development"
                    element={<MobileDev />}
                />
                <Route
                    path="/services/software-development"
                    element={<SoftwareDev />}
                />

                <Route path="/gallery" element={<Gallery />} />
                <Route path="/career" element={<Career />} />
            </Routes>

            <FadeUp><GigaFooter /></FadeUp>
        </>
    );
};

export default App;
