import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoxBreathing from "./pages/BoxBreathing";
import Soundscapes from "./pages/Soundscapes";
import Inspiration from "./pages/Inspiration";
import Journal from "./pages/Journal";
import Compose from "./pages/Compose";
import Archive from "./pages/Archive";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RestoreSession from "./RestoreSession";
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
                                index
                                element={
                                    <RestoreSession>
                                        <Home />
                                    </RestoreSession>
                                }
                            />
                            <Route
                                path="/boxbreathing"
                                element={
                                    <RestoreSession>
                                        <BoxBreathing />
                                    </RestoreSession>
                                }
                            />
                            <Route
                                path="/soundscapes"
                                element={
                                    <RestoreSession>
                                        <Soundscapes />
                                    </RestoreSession>
                                }
                            />
                            <Route
                                path="/inspiration"
                                element={
                                    <RestoreSession>
                                        <Inspiration />
                                    </RestoreSession>
                                }
                            />
                            <Route path="journal">
                                <Route
                                    index
                                    element={
                                        <RestoreSession>
                                            <PrivateRoute userShouldBe="loggedIn">
                                                <Journal />
                                            </PrivateRoute>
                                        </RestoreSession>
                                    }
                                />
                                <Route
                                    path="compose"
                                    element={
                                        <RestoreSession>
                                            <PrivateRoute userShouldBe="loggedIn">
                                                <Compose />
                                            </PrivateRoute>
                                        </RestoreSession>
                                    }
                                />
                                <Route
                                    path="archive"
                                    element={
                                        <RestoreSession>
                                            <PrivateRoute userShouldBe="loggedIn">
                                                <Archive />
                                            </PrivateRoute>
                                        </RestoreSession>
                                    }
                                />
                            </Route>
                            <Route
                                path="/login"
                                element={
                                    <RestoreSession>
                                        <PrivateRoute userShouldBe="loggedOut">
                                            <Login />
                                        </PrivateRoute>
                                    </RestoreSession>
                                }
                            />
                            <Route
                                path="/signup"
                                element={
                                    <RestoreSession>
                                        <PrivateRoute userShouldBe="loggedOut">
                                            <Signup />
                                        </PrivateRoute>
                                    </RestoreSession>
                                }
                            />
                            <Route
                                path="/logout"
                                element={<Home isLoggingOut={true} />}
                            />
                            <Route
                                path="*"
                                element={
                                    <RestoreSession>
                                        <Home />
                                    </RestoreSession>
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
