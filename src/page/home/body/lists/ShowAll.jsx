import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip, Stack } from "@mui/material";
import ShowRating from "../../Rating/ShowRating";

const arr = [
  {
    name: "tets1",
    avata: "https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg",
    service: "Ra mắt người yêu",
    other: ["nắm tay", "nói yêu", "ôm", "nhõng nhẽo"],
    rate:"1.5",
  },
  {
    name: "tets2",
    avata:
      "https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg",
    service: "Ra mắt bạn bè",
    other: ["nắm tay", "ôm", "nhõng nhẽo"],
    rate:"3.5",
  },
  {
    name: "tets3",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK9vn0VJVTn1pNf5ndnh5Qdxya_FawSalSXg&usqp=CAU",
    service: "Đi chơi chung",
    other: ["nắm tay", "cử chỉ thân mật", "nhõng nhẽo"],
    rate:"4",
  },
  {
    name: "tets4",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLZDYSfNL9iOPREeKpMD5jVcRHuHxdojUjQ&usqp=CAU",
    service: "Du lịch cùng nhóm bạn",
    other: ["nắm tay", "ôm"],
    rate:"2.5",
  },
  {
    name: "tets5",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETbvF4QqtkmVjN7m_Ao7IU6EqoC1ZEsBfBQ&usqp=CAU",
    service: "Tham dự sinh nhật",
    other: ["nắm tay", "nhõng nhẽo"],
    rate:"4.5",
  },
  {
    name: "tets5",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7STeWXWPel7ZU1-ea9JkDPAgHnArAxjuXQ&usqp=CAU",
    service: "Trò chuyện offline",
    other: ["nắm tay", "nói yêu"],
    rate:"4",
  },
  {
    name: "tets5",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6E7iwqGqARBLoErwKaaPyCHqB3VfI8A3QRQ&usqp=CAU",
    service: "Trò chuyện online",
    other: ["nắm tay", "nói yêu", "ôm"],
    rate:"5",
  },
  {
    name: "tets5",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_IDcD1EZJ9xTGhS5ru-HEf4JOFk2THm2yEg&usqp=CAU",
    service: "Đi chơi tết",
    other: ["ôm", "nhõng nhẽo"],
    rate:"2.5",
  },
  {
    name: "tets5",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50gUoEMwWWdbKe3c8e1ZWrTucEuNzek4ATg&usqp=CAU",
    service: "Đi chơi ngày lễ",
    other: ["nắm tay", "ôm"],
    rate:"4",
  },
  {
    name: "tets5",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1AMOpkcc0POdVnnAegL_tGPNXp3d7N09ITg&usqp=CAU",
    service: "Đi chơi chung",
    other: ["nắm tay", "nhõng nhẽo"],
    rate:"3.5",
  },
  {
    name: "tets5",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQvmikVZYnVWk46DenvmYSA7BY0sq3f7szg&usqp=CAU",
    service: "Đi chơi chung",
    other: ["ôm"],
    rate:"4",
  },
  {
    name: "tets5",
    avata:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzhEEMmQkzDqvcUZk9KtSim-hgcg5eDHXSA&usqp=CAU",
    service: "Đi chơi chung",
    other: ["nắm tay"],
    rate:"3",
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
