import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// data
import { axiosUniData } from "./api";

export default function Tables() {
  const retrievedObject = localStorage.getItem("uniData");
  const newdata = JSON.parse(retrievedObject);
  const [data, setData] = useState(newdata ? newdata : []);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axiosUniData("get").then((data) => {
      console.log(data,"kk")
      setData(data.results);
      localStorage.setItem("uniData", JSON.stringify(data));
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
              title="University Data"
              data={data}
              columns={[
                "url",
                "title",
                "type",
                "episodes",
                "score",
                "rated"
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
