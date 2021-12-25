import "./asset/scss/main.css";
import { AppContextProvider } from "./context/App";
import { Home } from "./page";

export default function App() {
    return (
        <AppContextProvider>
            <Home />
        </AppContextProvider>
    );
}
