import React, { useState } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/users'); // Assuming your users endpoint is at http://localhost:3000/users
      const users = await response.json();

      // Check if the provided username and password match any user in the database
      const authenticatedUser = users.find(user => user.username === username && user.password === password);
console.log("authenticatedUser++++++++++++",authenticatedUser)
      if (authenticatedUser) {
        alert('Login successful');
        // Add code to handle successful login, such as redirecting to another page
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: '20px auto' };
  const avtarStyle = { backgroundColor: '#41d041' };
  const buttonStyle = { margin: '8px 0' };
  const passStyle = { margin: '8px 0' };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avtarStyle}>
            <LockOutlinedIcon></LockOutlinedIcon>
          </Avatar>
          <h2> Sign In</h2>
        </Grid>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          placeholder="Enter Username"
          fullWidth
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="standard-basic"
          style={passStyle}
          label="Password"
          variant="standard"
          placeholder="Enter Password"
          type="password"
          fullWidth
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <FormGroup>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        </FormGroup>
        <Button
          type="button"
          color="primary"
          fullWidth
          variant="contained"
          style={buttonStyle}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Typography>
          <Link href="#">Forgot Password ?</Link>
        </Typography>
        <Typography>
          Do you have an account ? <Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
