import React from "react";

// Global style
import GlobalStyle from "./components/GlobalStyle";

// Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";

// Router
import { Switch, Route } from "react-router-dom";

// Import components
import Nav from "./components/Nav";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Nav />

            <Switch>
                <Route path="/" exact>
                    <AboutUs />
                </Route>

                <Route path="/work">
                    <OurWork />
                </Route>

                <Route path="/contact">
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
