import { FC } from "react";
import { Grid, Typography } from "@mui/material";

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
    <Grid container margin={1}>
      <Grid item container xs={12} justifyContent="flex-end">
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
      <Grid item xs={12} border={2}>
        <Typography padding={2}>{text}</Typography>
      </Grid>
    </Grid>
  );
};

export default TextWithHeaderContainer;
