import {
    Navbar,
    NFTGallery,
} from '../components';
import React from 'react';


const Home = () => {
  return (
    <div className='min-h-screen main_bg text-white overflow-hidden' id='top'>
      <Navbar />
      <NFTGallery />
    </div>
  );
};

export default Home;
