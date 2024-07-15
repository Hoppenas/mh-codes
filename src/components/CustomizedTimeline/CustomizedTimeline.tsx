import * as React from "react";
import {
  TimelineDot,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineItem,
  Timeline,
} from "@mui/lab";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import SchoolIcon from "@mui/icons-material/School";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

import { Typography } from "@mui/material";

const timeLineItems = [
  {
    name: "Neurotechnology",
    title: "Front-end developer",
    description: [
      "Technologies: Typescript, React, Rest API, MUI, Angular, Figma, Git, React Native. ",
      "Transitioned project from Angular to React. ",
      "Planning and development of time critical project. ",
      "Collaborated closely with product owners, UX/UI designers, and backend developers. ",
      "Conducted thorough code reviews and provided constructive feedback to ensure code quality and adherence to best practices. ",
      "Actively participated in Agile/Scrum ceremonies. ",
      "Wrote clean, maintainable, and scalable code. ",
    ],
    date: "2021 - Present",
    isEducation: false,
    icon: <FingerprintIcon sx={{ color: "black" }} fontSize="large" />,
  },
  {
    name: "Kilo Health Academy",
    title: "React native academy",
    description:
      "TypeScript / React / CSS / Firebase / Animation / Debugging / Authentification / Localization / Mobile design",
    date: "2021.06-09",
    isEducation: true,
    icon: <HealthAndSafetyIcon sx={{ color: "black" }} fontSize="large" />,
  },
  {
    name: "KAYAK WCC Academy",
    title: "Full stack Academy ",
    description:
      "Javascript / CSS / React / Redux / Node.js / GraphQL / Testing / Data Bases",
    date: "2021.03-06",
    isEducation: true,
    icon: <TravelExploreIcon sx={{ color: "black" }} fontSize="large" />,
  },
  {
    name: "Devbridge Sourcery Academy",
    title: "High intensity Front-End Academy",
    description:
      "Agile / Git / HTML / SCSS / BEM / React / JS / Accessibility / Webpack ",
    date: "2020.11-2021.01",
    isEducation: true,
    icon: <DeveloperBoardIcon sx={{ color: "black" }} fontSize="large" />,
  },
  {
    name: "Code Academy",
    title: "Front end course",
    description: "HTML / CSS / JS / Git",
    date: "2020.06-09",
    isEducation: true,
    icon: <SchoolIcon sx={{ color: "black" }} fontSize="large" />,
  },
  {
    name: "Hellmann Worldwide Logistics UAB",
    title: "Airfreight cargo manager",
    description: [
      "Special airfreight services: courier on board, time critical shipments, temperature cargo, transportation of dangerous and explosive goods. ",
      "Supply of spare parts for AOG* accidents. ",
      "Analysis and forecast of shipping data, rates and flight schedules. ",
      "Participation in military and government tenders. ",
      "Documentation for customs, International Air Transport Association (IATA) and Dangerous Goods Regulation (DGR). ",
    ],
    date: "2013 - 2021",
    isEducation: false,
    icon: <LocalAirportIcon sx={{ color: "black" }} fontSize="large" />,
  },
  {
    name: "Abipa logistics",
    title: "Airfreight cargo manager",
    description: "",
    date: "2008-2013",
    isEducation: false,
    icon: <FlightTakeoffIcon sx={{ color: "black" }} fontSize="large" />,
  },
  {
    name: "VGTU",
    title: "Bachelor of telecommunication engineering",
    description: "",
    date: "2006-2011",
    isEducation: true,
    icon: <HistoryEduIcon sx={{ color: "black" }} fontSize="large" />,
  },
];

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {timeLineItems.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot
              sx={{
                borderRadius: 2,
                height: "3rem",
                width: "3rem",
                background: "#FFF",
                border: 1,
              }}
            >
              {item.icon}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "20px", px: 2 }}>
            <Typography
              fontSize="2rem"
              color="rgB(228, 86, 62)"
              fontWeight="900"
              letterSpacing="0.1rem"
            >
              {item.date}
            </Typography>
            <Typography fontSize="1.4rem" fontWeight="700" color="#008577">
              {item.name}
            </Typography>
            <Typography>{item.title}</Typography>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
