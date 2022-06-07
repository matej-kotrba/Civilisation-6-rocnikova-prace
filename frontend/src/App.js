import Navbar from "./components/Navbar/Navbar"
import Navigation from "./components/Content/Navigation"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <header>
        <Navbar />
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
