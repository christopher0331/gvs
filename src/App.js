import { Suspense, lazy, React }  from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Provider from './components/DataProvider.js';
import ErrorBoundary from './components/ErrorBoundary.jsx';

require('dotenv').config({ path: '../.env' })

console.log( 'PUBLIC +==========> ',  process.env,
'SECRET KEY =============+>' , process.env)



// import AwesomeLoader from './AwesomeLoader.js';
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
const Backflow = lazy(() => import('./components/BackFlow.jsx'));
const CommercialFencing = lazy(() => import('./components/CommercialFencing.jsx'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy.jsx'));
const FAQ = lazy(() => import('./components/FAQ.jsx'));
const ProjectOverviewForm = lazy(() => import('./components/ProjectOverviewForm.jsx'));
const AdminUseLogin = lazy(() => import('./components/AdminUseLogin.jsx'));
const FenceCalculator = lazy(() => import('./components/Calculator.jsx'));
const FencingProcess = lazy(() => import('./components/OurProcess.jsx'));
const DataDisplay = lazy(() => import('./components/DataDisplay.jsx'));
const WarrantyForm = lazy(() => import('./components/WarrantyForm.jsx'));

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
      <Provider>
        <Router>
          <Suspense fallback={<div>Loading...</div> }>
              <Header />
                <Switch>
                      <Route path="/" exact component={HomePage} />
                      <Route path="/services" component={HomePage}/>
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
                      <Route path="/commercial-fences" component={CommercialFencing} />
                      <Route path="/backflow" component={Backflow} />

                      <Route path="/fence-calculator" component={FenceCalculator} />
                      <Route path="/fencing-process" component={FencingProcess} />
                      <Route path="/project-overview-form" component={ProjectOverviewForm} />

                      <Route path="/adminuse" component={AdminUseLogin} />
                      <Route path="/customers" component={DataDisplay} />
                      <Route path="/warranty-form" component={WarrantyForm} />

                      <Route path="/privacy-policy" component={PrivacyPolicy} />
                      <Route path="/faq" component={FAQ} />
                      <Route path="*" component={HomePage} />
                  </Switch>
              <Footer />
          </Suspense>
        </Router>
      </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
