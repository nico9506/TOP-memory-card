import CardsGrid from "./components/CardsGrid";
import Footer from "./components/Footer";
import GameInfo from "./components/GameInfo";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <GameInfo></GameInfo>
      <CardsGrid></CardsGrid>
      <Footer></Footer>
    </>
  );
}

export default App;
