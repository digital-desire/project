import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import protest from "./images/protest.jpeg";

export default function CardBig() {
  return (
    <Card sx={{ maxWidth: 500, marginLeft:'10vw', marginTop:"5vh" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={protest}
          
        />
        
      </CardActionArea>
    </Card>
  );
}
