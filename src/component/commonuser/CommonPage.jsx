import React from 'react';
import BackImage from '../../image/_5459e381-01d9-4b36-9a65-c7f5aa7c9b55.jpeg';
import { Button,Typography,Grid } from '@mui/material';
export default function CommonPage(){
    return(
        <>
   
  <div>
  <div style={{ backgroundColor: '#ced9e092', minHeight: '91vh',  backgroundImage: `url(${BackImage})`,  backgroundSize: 'cover' ,backgroundRepeat:'no-repeat',}}>
  <Typography variant='h5'>hello</Typography>

</div>
  </div>
        </>
    )
}