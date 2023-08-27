import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CardContents from "../commoncom/ponentcommon";

import Sidebar from "../commoncom/Sidebar";
export default function LeetcodeSolve() {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const theme = useTheme();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            {/* Pass setSelectedTitle as a prop */}
            <CardContents setSelectedTitle={setSelectedTitle} />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
          

          {selectedTitle && (
  <div style={{ marginTop: '100px' }}>
    <Sidebar selectedTitle={selectedTitle} />
  </div>
)}

          </Grid>
        </Grid>
      </Box>
    </>
  );
}