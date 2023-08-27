import React,{useState} from 'react';
import { TextField, Button, Typography } from '@mui/material';
export default function FindFirstoccurence(){
const[haystack,setHaystack]=useState('');
const[needle,setNeedle]=useState('');
const[result,setResult]=useState('');

const findIndex = () => {
    const index = haystack.indexOf(needle);
    setResult(index);
  };


    return(
        <>
        <div>

<Typography variant='h3'> Find the index of needle in Haystack</Typography>
<TextField
label="Haystack"
variant='outlined'
fullWidth
value={haystack}
onChange={(e)=>setHaystack(e.target.value)}
style={{margin:'10px'}}
/>
<TextField
label="Needle"
variant='outlined'
fullWidth
onChange={(e)=>setNeedle(e.target.value)}
style={{margin:'10px'}}
/>
<Button variant="contained" onClick={findIndex}>Find Index</Button>
<Typography>
<Typography variant="body1" style={{ margin: '10px 0' }}>
        {result === -1 ? 'Needle not found' : `Index: ${result}`}
      </Typography>

</Typography>
            
        </div>

        
        </>
    )
}