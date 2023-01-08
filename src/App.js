import { Routes, Route } from "react-router-dom";

// Layout
import Header from "./layout/Header/Header";
import Main from "./layout/Main/Main";

import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";

import { AuthProvider } from "./services/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<Admin />} />

            <Route path="detail/:id" element={<Detail />} />
          </Routes>
        </Main>
      </div>
    </AuthProvider>
  );
}

export default App;
