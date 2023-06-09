import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import TextRating from './Rate';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="https://yt3.googleusercontent.com/inhxgLbhHuXL6IllrpCH9jw7jdb0aQLv4hpVdATYsBGJAwFYs8OpuvBKnKz-8M2eHp1oXvoyIQ=s900-c-k-c0x00ffffff-no-rj"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
              <TextRating/>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}