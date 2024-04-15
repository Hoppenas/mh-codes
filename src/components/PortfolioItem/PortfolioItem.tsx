import { Avatar, Grid, Typography } from "@mui/material";
import { FC } from "react";
import mgh from "../images/mgh.jpg";

interface IPortfolioItem {
  image: string;
  name: string;
  description: string;
  technologies: string;
}

const PortfolioItem: FC<IPortfolioItem> = ({
  image,
  name,
  description,
  technologies,
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
    >
      <Avatar
        alt="MGH transport"
        src={image}
        variant="rounded"
        style={{ width: "100%", height: "fit-content" }}
      />
      <Typography paddingY={2}>{name}</Typography>
      <Typography paddingY={2}>{technologies}</Typography>
      <Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit
        ratione laboriosam quibusdam sint ipsam quo. Maxime enim perferendis
        vero libero, veniam assumenda corporis porro laboriosam voluptas neque!
        Iste, autem sequi!
      </Typography>
    </Grid>
  );
};

export default PortfolioItem;
