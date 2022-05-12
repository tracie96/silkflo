import React, { useEffect ,useState} from "react";
import { Grid,CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
// data
import {axiosPopData} from "./api";


export default function Tables() {
  const [data,setData]=useState([])
  const getData=()=>{
   axiosPopData("get").then(data=>{
      setData(data.data)
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
    title="United State Population Data"
    data={data}
    columns={["ID Nation", "Nation", "ID Year", "Year","Population","Slug Nation"]}
    options={{
      filterType: "checkbox",
    }}
  />)
  :  <CircularProgress size={26} />
    }
</Grid>

</Grid>

     
    </>
  );
}
