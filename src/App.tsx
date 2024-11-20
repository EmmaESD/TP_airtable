import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex bg-black justify-between w-100 px-8 py-5 bg-dark">
        <div className="flex flex-row items-center gap-2.5">
          <img src="/assets/Logo.png" alt="" className="w-12 h-12" />
          <h2 className="text-xl text-pinkLight">ContactYou</h2>
        </div>
        <div className="py-2.5 px-4 bg-pinkLight rounded-3xl hover:bg-pinkHover cursor-pointer">
          <Link to="/">Home</Link>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <Link className="text-white" to="/admin">
            Admin
          </Link>
          <img src="/assets/admin.png" alt="" />
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
