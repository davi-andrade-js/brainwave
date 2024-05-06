import ButtonGradient from "../public/assets/svg/ButtonGradient.jsx";
import Benefits from "./components/Benefits.jsx";
import Collaboration from "./components/Collaboration.jsx";
// import Button from './components/Button.jsx';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Services from "./components/Services.jsx";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
