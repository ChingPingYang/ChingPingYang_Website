import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';





function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_block"></div>
      <Main />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
