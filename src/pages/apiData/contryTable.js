import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import MUIDataTable from "mui-datatables";
// data
import { axiosPopData } from "./api";

export default function Tables() {
  const retrievedObject = localStorage.getItem("countryData");
  const newdata = JSON.parse(retrievedObject);

  const [data, setData] = useState(newdata ? newdata : []);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axiosPopData("get").then((data) => {
      setData(data.data);
      localStorage.setItem("countryData", JSON.stringify(data.data));
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
              title="United State Population Data"
              data={data}
              columns={[
                "ID Nation",
                "Nation",
                "ID Year",
                "Year",
                "Population",
                "Slug Nation",
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
