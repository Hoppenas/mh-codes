import { FC, ReactNode } from "react";
import { Grid, Typography, useMediaQuery, Box, Avatar } from "@mui/material";
import Draggable from "react-draggable";

// React/Redux/Styled Components/Typescript/MUI/Zustand/

interface IDraggableItem {
  logo: string;
  name: string;
}

const DraggableItem: FC<IDraggableItem> = ({ logo, name }) => {
  return (
    <Draggable>
      <Box width="100px" height="100px" border="1px solid Blue">
        <img src={logo} alt={`${name} logo`} />
        <Typography>{name}</Typography>
      </Box>
    </Draggable>
  );
};

export default DraggableItem;
