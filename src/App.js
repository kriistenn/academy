import MainComponent from "./components/MainComponent";
import TwoComponentLayout from "./components/TwoComponentLayout";
import ThreeComponentLayout from "./components/ThreeComponentLayout";
import FourComponentLayout from "./components/FourComponentLayout";
import FiveComponentLayout from "./components/FiveComponentLayout";
import SevenComponentLayout from "./components/SevenComponentLayout";
import EightComponentLayout from "./components/EightComponentLayout";
import NineComponentLayout from "./components/NineComponentLayout";
import TenComponentLayout from "./components/TenComponentLayout";
import LocationBlock from "./components/LocationBlock";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MainComponent/>
        <EightComponentLayout/>
      <TwoComponentLayout/>
      <ThreeComponentLayout/>
      <FourComponentLayout/>
      <FiveComponentLayout/>
      <SevenComponentLayout/>
        <LocationBlock/>
      <NineComponentLayout/>
      <TenComponentLayout/>
        <Footer/>
    </div>
  );
}

export default App;
