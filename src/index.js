import { ThemeProvider } from "@material-ui/core";
import reactDom from "react-dom";
import App from "./App";
import { theme } from "./theme";


reactDom.render(
<ThemeProvider theme={theme}><App></App></ThemeProvider>
    ,document.getElementById('root'))