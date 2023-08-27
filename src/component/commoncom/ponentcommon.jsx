import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Paper,
} from "@mui/material";
import problemsData from "../../json/userdata.json";
import CardContents from "./CardContents";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
export default function CardsContent({setSelectedTitle}) {
  const [problemDetails, setProblemDetails] = useState(null);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    flexGrow: 1,
  }));

  useEffect(() => {
    // Assuming problemsData is an array of objects containing problem details
    setProblemDetails(problemsData);
  }, []);

  return (
    <>
      {problemDetails ? (
        problemDetails.map((problem, index) => (
          <Card
            style={{ border: "4px", borderBlockColor: "primary" }}
            key={index}
            sx={{ marginTop: "10px" }}
            xs={2}
            sm={2}
            md={2}
            lg={2}
          >
            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              useFlexGap
              flexWrap="wrap"
            >
              <Item>
                {" "}
                <CardContents setSelectedTitle={setSelectedTitle} title={problem.title}>
                  <Typography>{problem.details}</Typography>
                </CardContents>{" "}
              </Item>
            </Stack>
          </Card>
        ))
      ) : (
        <Typography>Loading...</Typography>
      )}
    </>
  );
}
