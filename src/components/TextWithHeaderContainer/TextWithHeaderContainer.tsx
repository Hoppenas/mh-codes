import { FC, ReactNode } from "react";
import { Box, Grid, Typography } from "@mui/material";

interface ITextWithHeaderContainer {
  header: string;
  text?: string | ReactNode;
  items?: ReactNode;
  fullwith: boolean;
}

const TextWithHeaderContainer: FC<ITextWithHeaderContainer> = ({
  header,
  text,
  fullwith,
  items,
}) => {
  return (
    <Grid
      item
      container
      xs={12}
      margin={1}
      display="flex"
      flexDirection="column"
    >
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
      <Grid
        item
        container
        flexGrow={1}
        border={1}
        alignContent="center"
        direction="row"
        justifyContent="space-between"
      >
        {text && (
          <Typography padding={2} textAlign="center">
            {text}
          </Typography>
        )}
        {items}
      </Grid>
    </Grid>
  );
};

export default TextWithHeaderContainer;
