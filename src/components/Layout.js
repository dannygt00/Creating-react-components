import react, { creatContext } from "react";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

export const ThemeContext = creatContext();

function Layout({ startingTheme, children }) {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider>{children}</LayoutNoThemeProvider>
        </ThemeProvider>
    )
}

function LayoutNoThemeProvider(startingTheme, children) {

    const [theme, setTheme] = useState(startingTheme);

    return (
        <div
            className={
                theme === "light" ? "container-fluid light" : "container-fluid dark"
            }
        >
            {children}
        </div>
    )
}

export default Layout;