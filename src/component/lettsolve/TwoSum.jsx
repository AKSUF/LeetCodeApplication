import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const TwoSum = () => {
  const [nums, setNums] = useState("");
  const [target, setTarget] = useState("");
  const [result, setResult] = useState([]);

  const findTwoSum = () => {
    const numArray = nums.split(",").map(Number);
    const numToIndex = {};

    for (let i = 0; i < numArray.length; i++) {
      const complement = target - numArray[i];
      if (numToIndex.hasOwnProperty(complement)) {
        setResult([numToIndex[complement], i]);
        return;
      }
      numToIndex[numArray[i]] = i;
    }

    setResult([]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Two Sum
      </Typography>
      <TextField
        label="Enter array (comma-separated)"
        variant="outlined"
        fullWidth
        value={nums}
        onChange={(e) => setNums(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Enter target"
        variant="outlined"
        fullWidth
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={findTwoSum}>
        Find Two Sum
      </Button>
      {result.length > 0 && (
        <Typography variant="h6" style={{ marginTop: "16px" }}>
          Indices: [{result.join(", ")}]
        </Typography>
      )}
    </Container>
  );
};

export default TwoSum;