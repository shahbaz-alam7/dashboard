import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "components/smallComponents/ProductHeader";

const Dashboard = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="DASHBOARD" subTitle="Welcome to my dashboard" />
    </Box>
  );
};

export default Dashboard;
