import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoxBreathing from "./pages/BoxBreathing";
import Soundscapes from "./pages/Soundscapes";
import Inspiration from "./pages/Inspiration";
import Journal from "./pages/Journal";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
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
                            <Route
                                path="/"
                                element={
                                    <PrivateRoute userShouldBe="loggedOut">
                                        <Home />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/boxbreathing"
                                element={
                                    <PrivateRoute>
                                        <BoxBreathing />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/soundscapes"
                                element={
                                    <PrivateRoute>
                                        <Soundscapes />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/inspiration"
                                element={
                                    <PrivateRoute>
                                        <Inspiration />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/journal"
                                element={
                                    <PrivateRoute userShouldBe="loggedIn">
                                        <Journal />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/login"
                                element={
                                    <PrivateRoute userShouldBe="loggedOut">
                                        <Login />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/signup"
                                element={
                                    <PrivateRoute userShouldBe="loggedOut">
                                        <Signup />
                                    </PrivateRoute>
                                }
                            />
                            <Route
                                path="/logout"
                                element={<Home isLoggingOut={true} />}
                            />
                            <Route
                                path="*"
                                element={
                                    <PrivateRoute>
                                        <Home />
                                    </PrivateRoute>
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </AuthContextProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
