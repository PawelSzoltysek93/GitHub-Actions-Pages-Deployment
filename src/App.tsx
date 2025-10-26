import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
