import {
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../constants/styleConstants";
import PortfolioItem from "../components/PortfolioItem/PortfolioItem";
import mgh from "../images/mgh.jpg";
import ach from "../images/ach.jpg";

const portFolioItems = [
  {
    image: mgh,
    name: "Logistics company website",
    technologies: "React, Typescript, Mui, ETC, ETC",
    describsion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione laboriosam quibusdam sint ipsam quo. Maxime enim perferendis vero libero, veniam assumenda corporis porro laboriosam voluptas neque! Iste, autem sequi!",
  },
  {
    image: ach,
    name: "makeup artist personal website",
    technologies: "React, Typescript, Mui, ETC, ETC",
    describsion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione laboriosam quibusdam sint ipsam quo. Maxime enim perferendis vero libero, veniam assumenda corporis porro laboriosam voluptas neque! Iste, autem sequi!",
  },
  {
    image: mgh,
    name: "Logistics company website",
    technologies: "React, Typescript, Mui, ETC, ETC",
    describsion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione laboriosam quibusdam sint ipsam quo. Maxime enim perferendis vero libero, veniam assumenda corporis porro laboriosam voluptas neque! Iste, autem sequi!",
  },
  {
    image: ach,
    name: "makeup artist personal website",
    technologies: "React, Typescript, Mui, ETC, ETC",
    describsion:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit ratione laboriosam quibusdam sint ipsam quo. Maxime enim perferendis vero libero, veniam assumenda corporis porro laboriosam voluptas neque! Iste, autem sequi!",
  },
];

const PortfolioPage = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery(`(min-width:${minWidth})`);

  return (
    <Grid
      container
      width="100%"
      maxWidth="80%"
      justifyContent="space-between"
      margin="auto"
      zIndex={1}
      gap={2}
      // overflow="hidden"
    >
      {portFolioItems.map((item, index) => (
        <PortfolioItem
          image={item.image}
          name={item.name}
          technologies={item.technologies}
          description={item.describsion}
          key={index}
        />
      ))}
    </Grid>
  );
};

export default PortfolioPage;
