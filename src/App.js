
// Import Styles ===============
import GlobalStyle from "./Components/GlobalStyle";
import Nav from "./Components/Nav";

// Import Pages =================
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import NotFound from "./Pages/NotFound";
import WorkDetail from "./Pages/WorkDetail";

// Router========================
import { Routes, Route, useLocation } from "react-router-dom";

// Animation
import { AnimatePresence } from "framer-motion";




function App() {

  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter >
        <Routes key={location.pathname} location={location}>
          <Route path="/Capture" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
