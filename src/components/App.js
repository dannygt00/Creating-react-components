import Header from "./Header";

import Speakers from "./Speakers";
import Layout
    from "./Layout";
export const ThemeContext = createContext();

function App() {
    return (
        <Layout startingTheme="light">
            <div>
                <Header />
                <Speakers />
            </div>
        </Layout>
    );
}

export default App;