
import { TextField, Button, Container, Typography } from '@mui/material';
import React from 'react';

const PalindromeChecker=({s})=>{

const isPalindrome=(str)=>{
    str=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reverseStr=str.split('').reverse().join('');
    return str===reverseStr;
}

    return(
        <>
<Container maxWidth="sm">
    <Typography variant='h4' gutterBottom>
Palindrome
    </Typography>
<TextField
label="Enter a phrase"
variant="outlined"
fullWidth
value={s}
margin='normal'
/>
<Button variant='contained' color="primary">
{isPalindrome(s) ? 'Is Palindrome' : 'Not Palindrome'}
</Button>
</Container>
        </>
    )
}

export default  PalindromeChecker;