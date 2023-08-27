import { useState } from "react"
import { TextField, Button, Container, Typography } from '@mui/material';

const DuplicatorChecker=()=>{
    const [nums, setNums] = useState('');
    const [hasDuplicate, setHasDuplicate] = useState(false);
  
    const checkDuplicates = () => {
      const numArray = nums.split(',').map(num => parseInt(num.trim()));
      const numSet = new Set();
  
      for (const num of numArray) {
        if (numSet.has(num)) {
          setHasDuplicate(true);
          return;
        }
        numSet.add(num);
      }
  
      setHasDuplicate(false);
    };
  
    return (
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom>
          Duplicate Checker
        </Typography>
        <TextField
          label="Enter numbers (comma-separated)"
          variant="outlined"
          fullWidth
          value={nums}
          onChange={(e) => setNums(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={checkDuplicates}>
          Check for Duplicates
        </Button>
        {hasDuplicate && (
          <Typography variant="h5" color="error" gutterBottom>
            Array contains duplicates
          </Typography>
        )}
        {!hasDuplicate && (
          <Typography variant="h5" color="success" gutterBottom>
            No duplicates found
          </Typography>
        )}
      </Container>
    );
}
export default DuplicatorChecker;