import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const ReverseWords = () => {
  const [inputString, setInputString] = useState("");
  const [reversedString, setReversedString] = useState("");

  const reverseWords = () => {
    const wordsArray = inputString.trim().split(/\s+/); // Split input string into words
    const reversedArray = wordsArray.reverse(); // Reverse the order of words
    const reversedResult = reversedArray.join(" "); // Join words with a single space

    setReversedString(reversedResult);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Reverse Words
      </Typography>
      <TextField
        label="Input String"
        variant="outlined"
        fullWidth
        value={inputString}
        onChange={(e) => setInputString(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={reverseWords}>
        Reverse
      </Button>
      {reversedString && (
        <Typography variant="h6" style={{ marginTop: "16px" }}>
          Reversed: {reversedString}
        </Typography>
      )}
    </Container>
  );
};

export default ReverseWords;