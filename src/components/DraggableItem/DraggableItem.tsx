import { FC, useState } from "react";
import { Typography, Box } from "@mui/material";
import DraggableCore from "react-draggable";

interface IDraggableItem {
  logo: string;
  name: string;
}

const DraggableItem: FC<IDraggableItem> = ({ logo, name }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <DraggableCore
      onStart={() => setIsSelected(true)}
      onStop={() => setIsSelected(false)}
    >
      <Box width="100px" margin={2}>
        <img
          src={logo}
          alt={`${name} logo`}
          style={{ cursor: isSelected ? "move" : "grab" }}
        />
        <Typography>{name}</Typography>
      </Box>
    </DraggableCore>
  );
};

export default DraggableItem;
