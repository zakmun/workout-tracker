import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, TextField, Select, InputLabel , MenuItem, Slider } from '@mui/material';

const Popup = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button className='search-btn' sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', height: '70px', width: { lg: '200px', xs: '80px' },fontSize: { lg: '20px', xs: '14px' } }} onClick={handleClickOpen}>
        Track Workout
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogContent sx={{width: '500px'}}>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="exercise"
            label="Exercise"
            type="exercise"
            fullWidth
            variant="standard"
          />
          <InputLabel sx={{mt: '20px'}}>Sets</InputLabel>
          <Select sx={{width: '100px'}}>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>

        </DialogContent>
        <DialogActions>
          <Button  sx={{ display: 'flex', justifyContent: 'center', width: '500px' }}>Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Popup