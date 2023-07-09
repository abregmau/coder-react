import { Grid } from "@mui/material";

const Material = () => {
  return (
    <div>
      <h1>Material UI</h1>
      <Grid container>
        <Grid item xs={12} md={6}>
          <h2 style={{ width: "100%", backgroundColor: "red" }}>Caja 1</h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <h2 style={{ width: "100%", backgroundColor: "blue" }}>Caja 2</h2>
        </Grid>
      </Grid>
    </div>
  );
};

export default Material;
