import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, Register } from "./pages";


export default function App() {
    return (
       // <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
      //  </AuthProvider>
    )
}