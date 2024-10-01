import { Grid, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { minWidth } from "../constants/styleConstants";
import PortfolioItem from "../components/PortfolioItem/PortfolioItem";
import mgh from "../images/mgh.jpg";
import ach from "../images/ach.jpg";
import mhpersonal from "../images/MHpersonal.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";

const portFolioItems = [
  {
    image: mgh,
    name: "Logistics company website",
    technologies: "React, Typescript, Mui, css",
    describsion:
      "A minimalistic, responsive website for a logistics company, optimized for all devices. Features smooth navigation with scroll-to-section functionality for a seamless user experience.",
  },
  {
    image: ach,
    name: "Makeup artist personal website",
    technologies: "React, Typescript, Mui, Firebase, css",
    describsion:
      "A personal webpage for a makeup artist featuring a dynamic portfolio page. The site is powered by Firebase, allowing the owner to log in and update all website content seamlessly.",
  },
  {
    image: mhpersonal,
    name: "My personal personal website",
    technologies: "React, Typescript, Mui",
    describsion:
      "My personal website for a web developer, crafted using TypeScript, React, and Material UI (MUI). It showcases projects, skills, and experience in a clean, modern, and fully responsive design.",
  },
  {
    logo: (
      <GitHubIcon
        style={{
          width: "100%",
          padding: "3px 0",
          height: "150px",
        }}
      />
    ),
    name: "https://www.github.com/hoppenas",
    describsion: "Eplore more of my coding style on my GitHub account",
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
          key={item.name}
          logo={item.logo}
        />
      ))}
    </Grid>
  );
};

export default PortfolioPage;
