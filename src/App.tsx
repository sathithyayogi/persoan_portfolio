import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import TechStack from './pages/TechStack';
import ReactGA from "react-ga4";
import { GrowthBook } from "@growthbook/growthbook-react";
import { useEffect } from "react";
import { GrowthBookProvider } from "@growthbook/growthbook-react";

const growthbook = new GrowthBook({
  apiHost: "http://localhost:3100",
  clientKey: "sdk-KYTLZ8mqyNiMY3MM",
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key
    });
  }
});

if (growthbook.isOn("testing")) {
  console.log("Feature is enabled!")
}

growthbook.setAttributes({
  "id": "foo",
  "deviceId": "foo",
  "company": "foo",
  "loggedIn": true,
  "employee": true,
  "country": "foo",
  "browser": "foo",
  "url": "foo"
});

function App() {
  
  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
  }, []);


  useEffect(()=>{

    const TRACKING_ID = 'G-QQ2LR9T5CS';
    ReactGA.initialize(TRACKING_ID);
  },[])


  return (
    <div className="App">
      <GrowthBookProvider growthbook={growthbook}>
         <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/tech-stack' element={<TechStack />} />
      </Routes>
      </GrowthBookProvider>
    </div>
  )
}

export default App
