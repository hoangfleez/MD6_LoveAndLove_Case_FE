import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip, Stack } from "@mui/material";
import ShowRating from "../../Rating/ShowRating";
import { useDispatch, useSelector } from "react-redux";
import { filterProvider, getProvider } from "../../../../sevives/getProvider";


export default function ShowAll({ service, setService }) {
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(filterProvider(service))
  },[service])


  const showProvider = useSelector((state) => {
    return state.provider.currenProvider
  });

  React.useEffect(() => {
    dispatch(getProvider());
  }, []);

  const checkboxValue = useSelector((state) => {

    console.log(state.provider)
  });

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%", gap: 1 }}>
      {showProvider &&
        showProvider.map((item, key) => (
          <Card sx={{ width: 250 }} key={key}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={item.avata}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardContent sx={{padding:"0 15px"}}>
              <Typography variant="body2" color="text.secondary">
                <ShowRating  rate={item.rate}/>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="baseline"
                  spacing={2}
                  mt={2}
                >
                  <Chip label={item.service} color="primary" />
                  <Stack direction="row" gap="5px" flexWrap="wrap">
                    {item.other.map((otherItem, otherIndex) => (
                      <Chip label={otherItem} size="small" key={otherIndex} />
                    ))}
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
          </Card>
        ))}
    </Box>
  );
}
