import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoxBreathing from "./pages/BoxBreathing";
import Soundscapes from "./pages/Soundscapes";
import Inspiration from "./pages/Inspiration";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiTheme from "./lib/MuiTheme";
import "./styles/global/App.css";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
    const theme = createTheme(MuiTheme);

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <AuthContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/boxbreathing"
                                element={<BoxBreathing />}
                            />
                            <Route
                                path="/soundscapes"
                                element={<Soundscapes />}
                            />
                            <Route
                                path="/inspiration"
                                element={<Inspiration />}
                            />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </AuthContextProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
