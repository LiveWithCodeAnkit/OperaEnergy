import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainBanner from "./components/ MainBanner/MainBanner";
import IntroPage from "./components/Who_We_Are/IntroPage";
import SmartTurbine from "./components/SmartTurbine/SmartTurbine";
import WorkingProcess from "./components/WorkingProcess/WorkingProcess";
import OurClient from "./components/OurClient/OurClient";
import OurLatestBlog from "./components/ OurLatestBlog/ OurLatestBlog";
import FooterPage from "./components/Footer/FooterPage";

function App() {
  return (
    <>
      <Navbar />
      <MainBanner/>
      <IntroPage/>
      <SmartTurbine/>
      <WorkingProcess/>
      <OurClient/>
      <OurLatestBlog/>
      <FooterPage/>
    </>
  );
}

export default App;
