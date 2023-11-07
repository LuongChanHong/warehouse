import React, { useState, useEffect } from "react";
import { Grid, Hidden } from "@mui/material";

import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

function Wrapper({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Grid container>
      {/*component ẩn khi màn hình bằng và trên 600px */}
      <Hidden smUp>
        <span>mobile</span>
        <div>
          <p>Chiều ngang màn hình: {windowWidth}px</p>
          <p>Chiều dọc màn hình: {windowHeight}px</p>
        </div>
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
