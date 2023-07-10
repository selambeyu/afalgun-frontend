import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid, Stack, Pagination } from "@mui/material";

const items = [
  {
    _id: "1",
    title: "Lost Item 1",
    description: "This is a lost item.",
    category: "Lost and Found",
    subcategory: "Lost",
    image: "/assets/avatars/avatar-anika-visser.png",
  },
  {
    _id: "2",
    title: "Found Item 1",
    description: "This is a found item.",
    category: "Lost and Found",
    subcategory: "Found",
  },
  {
    _id: "1",
    title: "Lost Item 1",
    description: "This is a lost item.",
    category: "Lost and Found",
    subcategory: "Lost",
    image: "/assets/avatars/avatar-anika-visser.png",
  },
  {
    _id: "2",
    title: "Found Item 1",
    description: "This is a found item.",
    category: "Lost and Found",
    subcategory: "Found",
  },
  {
    _id: "1",
    title: "Lost Item 1",
    description: "This is a lost item.",
    category: "Lost and Found",
    subcategory: "Lost",
    image: "/assets/avatars/avatar-anika-visser.png",
  },
  {
    _id: "2",
    title: "Found Item 1",
    description: "This is a found item.",
    category: "Lost and Found",
    subcategory: "Found",
  },
  // ... more items
];

const LostItemCard = () => {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={4}>
          <Card key={item._id} variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                {item.title}
              </Typography>
              <img
                src={item.image}
                alt={`Item ${item._id} Image`}
                style={{ marginBottom: "1rem", maxWidth: "50%" }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {item.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Category: {item.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Subcategory: {item.subcategory}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Pagination count={10} color="primary" />
      </div>
    </Grid>
  );
};

export default LostItemCard;
