import Navbar from "./components/Navbar/Navbar"
import Navigation from "./components/Content/Navigation"
import Footer from "./components/Footer/Footer"
import BackToTop from "./components/BackToTop/BackToTop";
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import Options from "./components/Options/Options";

const client = new ApolloClient({
  uri: process.env.REACT_APP_ADDRESS_TO_DATABASE + "/graphql",
  cache: new InMemoryCache()
})

function App() {

  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
        {/* <div className="loader active"></div> */}
        <header>
          <Navbar />
          <BackToTop />
          <Options />
        </header>
        <main>
          <Navigation />
        </main>
        <footer>
          <Footer />
        </footer>
      </ApolloProvider>
    </BrowserRouter>
    </>
  );
}

// window.addEventListener('load', () => {
//   document.querySelector('.loader').classList.remove('active')
// })

export default App;
