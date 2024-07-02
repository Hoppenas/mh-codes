import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

interface ITextWithHeaderContainer {
  header: string;
  text: string;
  fullwith: boolean;
}

const TextWithHeaderContainer: FC<ITextWithHeaderContainer> = ({
  header,
  text,
  fullwith,
}) => {
  return (
    <Grid margin={1} display="flex" flexDirection="column">
      <Grid container justifyContent="flex-end" style={{ flexShrink: 0 }}>
        <Grid item xs={fullwith ? 12 : 6}>
          <Typography
            bgcolor="#FFF"
            color="black"
            textAlign="center"
            padding={2}
            variant="h5"
            fontWeight="600"
          >
            {header}
          </Typography>
        </Grid>
      </Grid>
      <Grid item flexGrow={1} border={1}>
        <Typography padding={2}>{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default TextWithHeaderContainer;
