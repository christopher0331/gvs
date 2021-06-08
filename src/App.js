import { Suspense, lazy, React }  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const HomePage = lazy(() => import('./components/HomePage.jsx'));
const AboutUs = lazy(() => import('./components/AboutUs.jsx'));
const Header = lazy(() => import('./components/Header.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const ContactUs = lazy(() => import('./components/ContactUs.jsx'));
const Irrigation = lazy(() => import('./components/Irrigation.jsx'));
const Portfolio = lazy(() => import('./components/Portfolio.jsx'));
const Fencing = lazy(() => import('./components/Fencing.jsx'));
const Tools = lazy(() => import('./components/Tools.jsx'));

function App() {

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
              <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/about-us" component={AboutUs}/>
                    <Route path="/fencing" component={Fencing} />
                    <Route path="/irrigation" component={Irrigation} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/tools" component={Tools} />
                </Switch>
            <Footer />
        </Suspense>
      </Router>
        
    </div>
  );
}

export default App;
