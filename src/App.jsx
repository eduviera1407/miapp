import { useState } from 'react'
import reactLogo from './assets/descarga.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import { Avatar, Typography } from '@mui/material';
                        
function App() {
  const datos={
uno:'soy',
dos: ' perro'

  }
  const [count, setCount] = useState(0)
function handleClick(){

  setCount(count+1)
}



  return (                                                          
    <>
    <Stack
    direction={{xs:'column',sm:'column',md:'row',lg:'row',xl:'row'}}

    spacing={4}>  
    <Typography variant="h1" >Hola {datos.uno} un{datos.dos}   </Typography>
    <Avatar className='avatar' src ={reactLogo} alt='logo' sx= {{width:150, height:150, }}></Avatar> 
  
   {/* <Button variant= {handleClick} >Haz click aqui : {count} perros </Button>*/}

    <Button sx={{color: 'orange', backgroundColor: 'black'}} onClick={handleClick}> Haz click aqui {count} </Button>
    </Stack>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Typography>EYY</Typography>
        </Grid>
        <Grid size={8}>
          <Button>Yeka</Button>
    
        </Grid>
      </Grid>
    </Box>
    </>

  )


}

export default App
