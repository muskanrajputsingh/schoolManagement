import React from 'react';
import Poster from '../Poster/Poster';
import {craousel} from '../Poster/PosterData';
import Facility from '../Facility/Facility';
import Achivement from '../Achivement/Achivement';
import Hero from '../Hero/Hero';

const Home = () => {
  return (
    <>
    <div>
    <Hero />
    <Facility />
    <Achivement/>
    <Poster images={craousel}/>
    </div>
    </>
  )
}

export default Home