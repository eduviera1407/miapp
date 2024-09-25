
import './App.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import foto from './assets/descarga.jpg'

import { Avatar, Typography } from '@mui/material';
        

  export default function BasicGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            
        <Grid size={{xs: 8,sm:8,md:8,lg:10,xl:8}}>
            <Typography>Esto es un texto</Typography>
          </Grid>
          
          <Grid size={{xs: 8,sm:8,md:8,lg:10,xl:8}}>
            <Button variant='containded' fullWi>Esto es un boton</Button>
          </Grid>
          <Grid>
          </Grid>
          <Grid size={{xs: 8,sm:8,md:8,lg:10,xl:8}}>
            <Button>Esto es otro boton</Button>

          </Grid>
       
        </Grid>
      </Box>
    );
  }
  