import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import ShowRating from "../../Rating/ShowRating";


const arr = [
  {
    name: "tets1",
    avata: "https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg",
  },
  {
    name: "tets2",
    avata:
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
  },
  {
    name: "tets3",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9vn0VJVTn1pNf5ndnh5Qdxya_FawSalSXg&usqp=CAU",
  },
  {
    name: "tets4",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLZDYSfNL9iOPREeKpMD5jVcRHuHxdojUjQ&usqp=CAU",
  },
  {
    name: "tets5",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETbvF4QqtkmVjN7m_Ao7IU6EqoC1ZEsBfBQ&usqp=CAU",
  },
  {
    name: "tets5",
    avata:
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
  },
  {
    name: "tets5",
    avata:
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
  },
  {
    name: "tets5",
    avata:
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
  },
  {
    name: "tets5",
    avata:
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
  },
  {
    name: "tets5",
    avata:
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
  },
  {
    name: "tets5",
    avata:
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
  },
  {
    name: "tets5",
    avata:
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
  },
];
export default function ShowAll() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%", gap: 1 }}>
      {arr &&
        arr.map((item, key) => (
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
                <Typography variant="body2" color="text.secondary">
                <ShowRating />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
    </Box>
  );
}
