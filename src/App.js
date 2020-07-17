import React from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Posts from './components/Posts';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className='main'>
        <Banner />
        <Services />
        <Posts />
      </main>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;
