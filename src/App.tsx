import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppWrapper, PageWrapper, Spacer1Rem } from "./styles";

// Header & Footer
// import Header from './components/Header';
// import Footer from './components/Footer';

// App Pages
import Playground from "./pages/Playground";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppWrapper>
          <PageWrapper>
            {/* <Header /> // Header can be hidden until there's more pages */}
            <Routes>
              <Route path="/" element={<Playground />} />
            </Routes>
          </PageWrapper>
          {/* <Footer /> // Footer can be hidden until there's more pages */}
        </AppWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
