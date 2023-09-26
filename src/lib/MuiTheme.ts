import { ThemeOptions } from "@mui/material/styles";

const MuiTheme: ThemeOptions = {
    palette: {
        primary: {
            main: "#769469",
            dark: "#5B794C",
        },
        secondary: {
            main: "#aaa",
            light: "#eee",
        },
    },
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                },
            },
        },
    },
};

export default MuiTheme;
