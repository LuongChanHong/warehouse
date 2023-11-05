import React from "react";

import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const WarehouseMap = () => {
  const theme = useTheme();
  // console.log(theme.palette.primary.main);
  return (
    <section>
      <Button color="button">WarehouseMap</Button>
    </section>
  );
};

export default WarehouseMap;
