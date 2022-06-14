import Navbar from "./components/Navbar/Navbar"
import Navigation from "./components/Content/Navigation"
import Footer from "./components/Footer/Footer"
import BackToTop from "./components/BackToTop/BackToTop";

function App() {

  return (
    <>
      <header>
        <Navbar />
        <BackToTop />
      </header>
      <main>
        <Navigation />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
