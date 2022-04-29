import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import pic from '../images/logo2.jpg';
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { Navigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const [nums, setNums] = useState('');
  const [res, setRes] = useState('');
  const [show, setShow] = useState(false);
  const theme = createTheme();

  const handleChange = (event) => {
    //console.log(event.target.value);
    setNums(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    var numb = {
      num: nums,
    };
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(numb),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.msg === 'dialog') {
          setShow(true);
        }
        setRes(data.msg);
      });
  }

  const performRedirect = () =>{
    if(res==="redirect"){return (<Navigate to={
      {pathname: '/odd'}
    } />)}
  }

  const handleClose = () => {
    setShow(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt='Piratelogo'
            src={pic}
            sx={{ width: 72, height: 72 }}
          ></Avatar>
          <Typography component='h1' variant='h5'>
            Check your Treaure Amount.
          </Typography>
          <Box component='form' onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              onChange={handleChange}
              margin='normal'
              required
              fullWidth
              label='Treasure Amount'
              type="number"
              name='num'
              autoComplete='Number'
              autoFocus
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Check!
            </Button>
          </Box>
        </Box>
        {performRedirect()}
        <Modal
          open={show}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Text in a modal
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
};

export default Home;
