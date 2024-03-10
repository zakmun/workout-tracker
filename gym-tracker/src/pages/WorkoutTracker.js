import React from 'react'
import { Button, Stack } from '@mui/material';
import Popup from '../components/Popup';

const WorkoutTracker = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', height: '70px', width: { lg: '200px', xs: '80px' },fontSize: { lg: '20px', xs: '14px' } }} >Track My Workout</Button>
    </Stack>
    
  )
}

export default WorkoutTracker