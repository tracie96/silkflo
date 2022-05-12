import React,{useState} from "react";
import { Grid,Button } from "@material-ui/core";
import {axiosActivity} from "../apiData/api";

// styles

// components
import Widget from "../../components/Widget/Widget";

export default function TypographyPage() {
  const [newActivity,setnewActivity]=useState("Silk FLo Team Meeting")

  const findNewActivity=()=>{
  axiosActivity("get").then(data=>{
      setnewActivity(data.activity)
    })
  }
  return (

    <>
    <Grid container spacing={4}>
    <Grid item xs={12} md={6}>
<Widget title="Random Activities for Today">
  <p>{newActivity}</p>
</Widget>
</Grid>
  
    </Grid>
    <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={findNewActivity}
      >
Find New Activity       
</Button>
  </>
  );
}
