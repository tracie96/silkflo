import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// data
import { axiosCryptoTable } from "./api";

export default function Tables() {
  const retrievedObject = localStorage.getItem("cryptoData");
  const newdata = JSON.parse(retrievedObject);
  const [data, setData] = useState(newdata ? newdata : []);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axiosCryptoTable("get").then((data) => {
      setData(data);
      localStorage.setItem("cryptoData", JSON.stringify(data));
      setLoading(false);
    });
  };
  useEffect(() => {
    try {
      if (!retrievedObject) {
        getData();
      }
    } catch (e) {
      console.log(e);
    }
  }, [retrievedObject]);

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          {loading ? (
            <CircularProgress size={26} />
          ) : (
            <MUIDataTable
              title="Crypto Chart"
              data={data}
              columns={[
                "symbol",
                "priceChange",
                "weightedAvgPrice",
                "lastPrice",
                "lastQty",
                "bidPrice",
                "askPrice",
                "openPrice",
              ]}
              options={{
                filterType: "checkbox",
              }}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}
