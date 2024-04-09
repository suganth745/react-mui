import { BrowserRouter, Routes, Route } from "react-router-dom";

import Details from "./pages/details";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
