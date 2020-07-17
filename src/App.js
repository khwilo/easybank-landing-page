import React from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Posts from './components/Posts';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Banner />
        <Services />
        <Posts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
