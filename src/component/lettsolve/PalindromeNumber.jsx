import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";

const PalindromeChecker = () => {
  const [inputNumber, setInputNumber] = useState("");
  const [isPalindrome, setIsPalindrome] = useState(false);

  const checkPalindrome = () => {
    const originalNumber = inputNumber.toString();
    const reversedNumber = originalNumber.split("").reverse().join("");
    setIsPalindrome(originalNumber === reversedNumber);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Palindrome Checker
      </Typography>
      <TextField
        label="Input Number"
        variant="outlined"
        fullWidth
        value={inputNumber}
        onChange={(e) => setInputNumber(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={checkPalindrome}>
        Check Palindrome
      </Button>
      {inputNumber && (
        <Typography variant="h6" style={{ marginTop: "16px" }}>
          {isPalindrome ? "Palindrome" : "Not Palindrome"}
        </Typography>
      )}
    </Container>
  );
};

export default PalindromeChecker;
