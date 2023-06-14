import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {Box, Button, CardActionArea, CardActions, Chip, Stack} from "@mui/material";
import ShowRating from "../../Rating/ShowRating";
import { useDispatch, useSelector } from "react-redux";
import {filterProvider,getProvider} from "../../../../services/providerService";
import {Link} from "react-router-dom";

export default function ShowAll({ service, setService }) {
  const dispatch = useDispatch();

  const showProvider = useSelector((state) => {
    return state.provider.currenProvider;
  });

  console.log(showProvider,888)

  React.useEffect(() => {
    dispatch(filterProvider({ service: service, listProvider: showProvider }));
  }, []);

  React.useEffect(() => {
    dispatch(getProvider());
  }, []);

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%", gap: 1 }}>
      {showProvider &&
        showProvider.map((item, key) => (
          <Card sx={{ width: 250 }} key={key}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={item.avatar}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name} {item.status.status}
                </Typography>

              </CardContent>
            </CardActionArea>

            <CardContent sx={{ padding: "0 15px" }}>
              <Typography variant="body2" color="text.secondary">
                <ShowRating
                    // rate={item.rate}
                />
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="baseline"
                  spacing={2}
                  mt={2}
                >
                  {/*<Chip color="primary" />*/}
                  <Stack direction="row" gap="5px" flexWrap="wrap">
                    {/*{item.other.map((otherItem, otherIndex) => (*/}
                    {/*  <Chip label={otherItem} size="small" key={otherIndex} />*/}
                    {/*))}*/}
                    {item.desc}
                  </Stack>
                </Stack>
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={`/detail-provider/${item.id}`} >View Detail</Link>
            </CardActions>
          </Card>
        ))}
    </Box>
  );
}
