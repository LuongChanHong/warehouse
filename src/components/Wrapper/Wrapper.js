import React from "react";
import { Grid, Hidden } from "@mui/material";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

function Wrapper({ children }) {
  return (
    <Grid container>
      {/*component ẩn khi màn hình bằng và trên 600px */}
      <Hidden smUp>
        <span>mobile</span>
      </Hidden>
      {/*component ẩn khi màn hình nhỏ hơn (không bao gồm) 600px */}
      <Hidden smDown>
        <Grid item sm={4}>
          <Sidebar />
        </Grid>
        <Grid item sm={8}>
          <Topbar />
          <section>{children}</section>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Wrapper;
