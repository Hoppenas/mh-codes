import { Avatar, Grid, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface IPortfolioItem {
  image?: string;
  name: string;
  description?: string;
  technologies?: string;
  logo?: ReactNode;
}

const PortfolioItem: FC<IPortfolioItem> = ({
  image,
  name,
  description,
  technologies,
  logo,
}) => {
  return (
    <Grid
      container
      item
      direction="column"
      width="320px"
      height="490px"
      padding={2}
      margin="10px auto"
      borderRadius={2}
      bgcolor="rgba(135, 145, 154, 0.4)"
      style={{ cursor: "pointer" }}
    >
      {image && (
        <Avatar
          alt="MGH transport"
          src={image}
          variant="rounded"
          style={{ width: "100%", height: "fit-content" }}
        />
      )}
      {logo && <Grid style={{ width: "100%" }}>{logo}</Grid>}
      <Typography paddingY={2}>{name}</Typography>
      <Typography paddingY={2}>{technologies}</Typography>
      <Typography>{description}</Typography>
    </Grid>
  );
};

export default PortfolioItem;
