import styled from "styled-components";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
const Item = styled.div`
  height: 250px;
  width: 300px;
  padding: 20px 0px;
`;

function GridItem(props: any) {
  return (
    <Item>
      <Card variant="outlined" sx={{ maxWidth: 360 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography gutterBottom variant="h5" component="div" sx={{
            fontWeight: "bold",
            fontFamily: "Nunito",
            textAlign: "center",
          }}>
            {props.name}
          </Typography>
        </Stack>
        <Typography color="text.secondary" variant="body2">
            {props.description}
        </Typography>
      </Box>

      <Button
        size="small"
        variant="contained"
        sx={{ color: "#fff", fontWeight: "bold", margin: "20px"}}
        endIcon={<SendIcon />}
        href={props.reference}
      >
        Saiba Mais
      </Button>
    </Card>
    </Item>
  );
}

export default GridItem;
