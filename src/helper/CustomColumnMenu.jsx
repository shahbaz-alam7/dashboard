import React from "react";
import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
} from "@mui/x-data-grid";
const CustomColumnMenu = (props) => {
  const { open, hideMenu, currentColumn } = props;
  return (
    <GridColumnMenuContainer
      open={open}
      hideMenu={hideMenu}
      currentColumn={currentColumn}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
