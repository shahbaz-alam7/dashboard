import React from "react";
import { Box } from "@mui/material";
import Header from "components/smallComponents/ProductHeader";
import BreakdownChart from "helper/BreakdownChart";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="BREAKDOWN" subTitle="Breakdown of sales By Category" />
      <Box mt="40px" height="74vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
