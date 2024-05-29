import * as React from "react";
import { Timeline } from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

import { Grid, Typography, IconButton } from "@mui/material";

const timeLineItems = [
  {
    name: "VGTU",
    title: "Bachelor of telecommunication engineering",
    description: "",
    date: "2006-2011",
    isEducation: true,
  },
  {
    name: "Code Academy",
    title: "Front end course",
    description: "HTML / CSS / JS / Git",
    date: "2020.06-09",
    isEducation: true,
  },
  {
    name: "Devbridge Sourcery Academy",
    title: "High intensity Front-End Academy",
    description:
      "Agile / Git / HTML / SCSS / BEM / React / JS / Accessibility / Webpack ",
    date: "2020.11-2021.01",
    isEducation: true,
  },
  {
    name: "KAYAK WCC Academy",
    title: "Full stack Academy ",
    description:
      "Javascript / CSS / React / Redux / Node.js / GraphQL / Testing / Data Bases",
    date: "2021.03-06",
    isEducation: true,
  },
  {
    name: "",
    title: "",
    description: "",
    date: "",
    isEducation: true,
  },
  {
    name: "Kilo Health Academy",
    title: "React native academy",
    description:
      "TypeScript / React / CSS / Firebase / Animation / Debugging / Authentification / Localization / Mobile design",
    date: "2021.06-09",
    isEducation: true,
  },
  {
    name: "Neurotechnology",
    title: "Front-end developer",
    description: [
      "Technologies: Typescript, React, Rest API, MUI, Angular, Figma, Git, React Native",
      "Transitioned project from Angular to React",
      "Planning and development of time critical project",
      "Collaborated closely with product owners, UX/UI designers, and backend developers",
      "Conducted thorough code reviews and provided constructive feedback to ensure code quality and adherence to best practices",
      "Actively participated in Agile/Scrum ceremonies.",
      "Wrote clean, maintainable, and scalable code",
    ],
    date: "2021 - Present",
    isEducation: false,
  },
  {
    name: "Hellmann Worldwide Logistics UAB",
    title: "Airfreight cargo manager",
    description: [
      "Special airfreight services: courier on board, time critical shipments, temperature cargo, transportation of dangerous and explosive goods",
      "Supply of spare parts for AOG* accidents",
      "Analysis and forecast of shipping data, rates and flight schedules",
      "Participation in military and government tenders",
      "Documentation for customs, International Air Transport Association (IATA) and Dangerous Goods Regulation (DGR)",
    ],
    date: "2013 - 2021",
    isEducation: false,
  },
  {
    name: "Abipa logistics",
    title: "Airfreight cargo manager",
    description: "",
    date: "2008-2013",
    isEducation: false,
  },
];

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      {timeLineItems.map((item, index) => (
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            // color="text.secondary"
          >
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              {item.name}
            </Typography>
            <Typography>{item.title}</Typography>
            <Typography>{item.description}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
      {/* <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}
