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
const WoodFences = lazy(() => import('./components/WoodFences.jsx'));
const ChainLinkFences = lazy(() => import('./components/ChainLinkFences.jsx'));
const WroughtIronFences = lazy(() => import('./components/WroughtIronFences.jsx'));
const CustomFences = lazy(() => import('./components/CustomFences.jsx'));

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
                    <Route path="/wood-fences" component={WoodFences} />
                    <Route path="/chainlink-fences" component={ChainLinkFences} />
                    <Route path="/wrought-iron-fences" component={WroughtIronFences} />
                    <Route path="/custom-fences" component={CustomFences} />

                </Switch>
            <Footer />
        </Suspense>
      </Router>
        
    </div>
  );
}

export default App;
