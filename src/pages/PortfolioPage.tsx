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
import GitHubIcon from "@mui/icons-material/GitHub";

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
  {
    logo: (
      <GitHubIcon
        style={{ width: "100%", padding: "3px 0", border: "1px solid #FFF" }}
      />
    ),
    name: "My github",
  },
];

const PortfolioPage = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery(`(min-width:${minWidth})`);

  return (
    <Grid
      container
      justifyContent="space-between"
      margin="auto"
      zIndex={1}
      gap={2}
      minWidth="100%"
      paddingX={2}
    >
      {portFolioItems.map((item, index) => (
        <PortfolioItem
          image={item.image}
          name={item.name}
          technologies={item.technologies}
          description={item.describsion}
          key={index}
          logo={item.logo}
        />
      ))}
    </Grid>
  );
};

export default PortfolioPage;
