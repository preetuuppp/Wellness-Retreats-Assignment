import "./App.css";

import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import RetreatList from "./component/RetreatList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroSection />
      <RetreatList />
      <Footer />
    </div>
  );
}

export default App;
