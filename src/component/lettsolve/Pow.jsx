import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const PowerCalculator=({})=>{
    const[x,setX]=useState('');
    const[n,setN]=useState('');
    const[result,setResult]=useState('');

    const calculatorPower=()=>{
        const base=parseFloat(x);
        const exponent=parseInt(n);

        if(!isNaN(base) && !isNaN(exponent)){
            setResult(Math.pow(base,exponent));

        }else{
            setResult("Invalid input");
        }
    }

    return(
        <>
        
        
        
        
        </>
    )
}