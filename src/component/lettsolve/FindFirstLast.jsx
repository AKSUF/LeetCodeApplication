import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';



export default function FindFirstLast(){
const[nums,setNums]=useState('');
const[target,setTarget]=useState('');
const[result,setResult]=useState('');

const findRange=()=>{
    const numArrays=nums.split(',').map(Number).sort((a,b)=>a-b);
    const startIndex=numArrays.indexOf(Number(target));

    if(startIndex===-1){
        setResult('[-1,-1]');
    }else{
        let endIndex=startIndex;
        while(numArrays[endIndex]===Number(target)){
            endIndex++;
        }
        setResult(`[${startIndex}, ${endIndex - 1}]`);
    }
}
    return(
        <>
  <div>
<Typography variant='h5'>Find Target Range</Typography>
<TextField
label="Array (comma-separated)"
variant='outlined'
fullWidth
value={nums}
onChange={(e)=>setNums(e.target.value)}
style={{margin:'10px'}}
/>
<TextField
label="Target"
variant='outlined'
fullWidth
value={target}
onChange={(e)=>setTarget(e.target.value)}
style={{margin:'10px'}}
/>
<Button variant='contained' onClick={findRange}>Find Range</Button>
<Typography variant='contained' style={{margin:'10px'}}>
    Result:{result}
</Typography>



  </div>
        
        </>
    )
}