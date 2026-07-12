import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Hotels from "./pages/Hotels";
import Contracts from "./pages/Contracts";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div style={{ display: "flex" }}>
                <Sidebar />

<div
    style={{
        marginLeft: "220px",
        width: "calc(100vw - 220px)",
        minHeight: "100vh",
        backgroundColor: "#111827"
    }}
>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/clients" element={<Clients />} />
                        <Route path="/hotels" element={<Hotels />} />
                        <Route path="/contracts" element={<Contracts />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;