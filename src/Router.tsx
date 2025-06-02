import {Routes, Route} from "react-router-dom"
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs"
import Home from "./pages/Home"
import DevelopmentInProgress from "./pages/DevelopmentInProgress"
import Policies from "./pages/Policies"

const Router = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<DevelopmentInProgress />} />
        <Route path="/ai-transformation-services" element={<DevelopmentInProgress />} />
        <Route path="/ai-partner-services" element={<DevelopmentInProgress />} />
        <Route path="/ai-as-a-service" element={<DevelopmentInProgress />} />
        <Route path="/tailored-ai-products" element={<DevelopmentInProgress />} />
        
        {/* Solutions Routes */}
        <Route path="/solutions" element={<DevelopmentInProgress />} />
        <Route path="/solutions/by-industry" element={<DevelopmentInProgress />} />
        <Route path="/solutions/by-technology" element={<DevelopmentInProgress />} />
        <Route path="/solutions/by-business-stage" element={<DevelopmentInProgress />} />
        <Route path="/solutions/by-business-function" element={<DevelopmentInProgress />} />
        
        {/* Products Routes */}
        <Route path="/products" element={<DevelopmentInProgress />} />
        <Route path="/products/gpt-hub" element={<DevelopmentInProgress />} />
        <Route path="/products/ai-analytics-engine" element={<DevelopmentInProgress />} />
        <Route path="/products/ai-assistant" element={<DevelopmentInProgress />} />
        <Route path="/products/virtual-advisor" element={<DevelopmentInProgress />} />
        
        {/* Company Routes */}
        <Route path="/career" element={<DevelopmentInProgress />} />
        <Route path="/blogs" element={<DevelopmentInProgress />} />
        <Route path="/media-kit" element={<DevelopmentInProgress />} />
        <Route path="/policies" element={<Policies   />} />
    </Routes>
}

export default Router;