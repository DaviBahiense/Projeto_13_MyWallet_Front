import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Login, Register, Home, EnterReg, ExitReg } from "./pages";

export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/enterreg" element={<EnterReg />} />
                    <Route path="/exitreg" element={<ExitReg />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}