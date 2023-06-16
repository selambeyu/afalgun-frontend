import { Card,CardMedia,CardContent,Typography } from "@mui/material";


export const CategoryCard = ({ title, imageUrl }) => {
    return (
      <Card>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography variant="h6">{title}</Typography>
        </CardContent>
      </Card>
    );
  };
  
 