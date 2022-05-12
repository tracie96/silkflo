import React, { useEffect ,useState} from "react";
import { Grid,CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// data
import {axiosPetTable} from "./api";

export default function Tables() {
  const [data,setData]=useState([])

    const getData=()=>{
      axiosPetTable("get").then(data=>{
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
            title="Crypto Chart"
            data={data}
            columns={["symbol", "priceChange", "weightedAvgPrice","lastPrice", "lastQty","bidPrice","askPrice","openPrice"]}
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
