import React,{useState} from "react";
import { Grid,Button } from "@material-ui/core";
import {axiosFindPet} from "../apiData/api";

// styles

// components
import PageTitle from "../../components/PageTitle/PageTitle";

export default function TypographyPage() {
  const [newpet,setNewPet]=useState("https://img.freepik.com/free-vector/dog-silhouette-collection-white-background-different-kinds-dog-breeds-silhouette-collection-dog-sitting-standing-position-silhouette-vector-set-doggie-silhouette-vector-bundle_585735-205.jpg?w=2000")

  const fetchNewPet=()=>{
   axiosFindPet("get").then(data=>{
      console.log(data.message)
      setNewPet(data.message)
    })
  }
console.log(newpet)
  return (

    <>
    <PageTitle title="Find Adorable Pet" />
    <Grid container spacing={4}>
      <Grid item xs={12} md={6} >
        <div style={{width:"500px"}}>
       <img src={newpet} style={{height:"100%",width:"100%",objectFit:"contain"}} alt="Pet"></img>
       </div>
      </Grid>
  
    </Grid>
    <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={fetchNewPet}
      >
Find Pet       
</Button>
  </>
  );
}
