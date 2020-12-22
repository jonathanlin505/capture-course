import React from "react";

// Global style
import GlobalStyle from "./components/GlobalStyle";

// Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";

// Router
import {
    Switch,
    Route,
    useLocation,
    HashRouter as Router,
} from "react-router-dom";

// Framer Motion Router
import { AnimatePresence } from "framer-motion";

// Import components
import Nav from "./components/Nav";

function App() {
    const location = useLocation();
    console.log(location);

    return (
        <Router basename="/">
            <div className="App">
                <GlobalStyle />
                <Nav />
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route path="/" exact>
                            <AboutUs />
                        </Route>

                        <Route path="/work" exact>
                            <OurWork />
                        </Route>

                        <Route path="/work/:id">
                            <MovieDetail />
                        </Route>

                        <Route path="/contact">
                            <ContactUs />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </div>
        </Router>
    );
}

export default App;
