import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoxBreathing from "./pages/BoxBreathing";
import Soundscapes from "./pages/Soundscapes";
import Inspiration from "./pages/Inspiration";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MuiTheme from "./lib/MuiTheme";
import "./styles/global/App.css";

function App() {
    const theme = createTheme(MuiTheme);

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/boxbreathing"
                            element={<BoxBreathing />}
                        />
                        <Route path="/soundscapes" element={<Soundscapes />} />
                        <Route path="/inspiration" element={<Inspiration />} />
                        {/* <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} /> */}
                        <Route path="*" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
