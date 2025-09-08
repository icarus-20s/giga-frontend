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
import Notices from "./Notices/Notices";
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
import ProtectedRoutes from "./Components/Context/ProtectedRoutes";
import LoginForm from "./Components/LoginForm";
import QuotationForm from "./Components/QuotationForm";
const App = () => {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/products" element={<Products />} />

                    <Route element={<ProtectedRoutes />}>
                    
                <Route path="/products/giga-accounting" element={<GigaAccounting />} />
                <Route path="/products/giga-erp" element={<GigaERP />} />
                <Route path="/products/giga-hrms" element={<GigaHRMS />} />
                <Route path="/products/giga-ims" element={<GigaIMS />} />
                </Route>

                <Route path="/about" element={<About />} />

                <Route path="/services" element={<Services />} />
                <Route path="/quotation" element={<QuotationForm />} />
                <Route path="/notices" element={<Notices/>} />

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
                <Route path="/login" element={<LoginForm />} />
            </Routes>

            <FadeUp><GigaFooter /></FadeUp>
        </>
    );
};

export default App;
