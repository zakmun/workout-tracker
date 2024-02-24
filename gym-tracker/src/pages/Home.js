import React, {useState} from 'react';
import {Box} from '@mui/material';

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExcersizes />
      <Excersize />
    </Box>
  )
}

export default Home