import React, { useEffect ,useState} from "react";
import { Grid,CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// data
import {axiosUniData} from "./api";


export default function Tables() {
  const [data,setData]=useState([])
    const getData=()=>{
     axiosUniData("get").then(data=>{
      //  let new=
        console.log(data)
        setData(data)
      })

}
useEffect(() => {
  getData()
}, []);
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
        {data?(
          <MUIDataTable
            title="University Data"
            data={data}
            columns={["alpha_two_code", "country", "name","domains","web_pages"]}
            options={{
              filterType: "checkbox",
            }}
          />
          )
  :  <CircularProgress size={26} />
    }
        </Grid>
      </Grid>
    </>
  );
}
