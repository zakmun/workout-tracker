import React, {useState} from 'react';
import {Box} from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/Exercises';
import HeroBanner from '../components/Exercises';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home