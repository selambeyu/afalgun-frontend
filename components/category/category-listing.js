import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Link,
  Grid,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableBody,
  Avatar,
} from "@mui/material";

import { Logo } from "../logo";
// import ''

const catogories = [
  {
    image: "/assets/avatars/people.png",
    name: "People",
    category: "people",
    current: true,
  },
  {
    image: "/assets/avatars/mobile.png",
    name: "Mobile",
    category: "mobile",
    current: false,
  },
  {
    image: "/assets/avatars/pets.png",
    name: "Pets",
    category: "pets",
    current: false,
  },
];

export const CategoryList = (props) => {
  const [selected, setSelected] = useState("Standard");

  return (
    <div {...props}>
      <Card>
        <CardContent>
          <div>
            <Typography variant="h6">Brows By category </Typography>
            <Typography color="textSecondary" sx={{ mt: 1 }} variant="body2">
              You can browse lost and found item by their category
            </Typography>
          </div>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              {catogories.map((plan) => (
                <Grid item key={plan.name} sm={3} xs={12}>
                  <Card
                    elevation={0}
                    onClick={() => setSelected(plan.name)}
                    variant="outlined"
                    sx={{
                      width: 200,
                      cursor: "pointer",
                      ...(selected === plan.name && {
                        borderColor: "primary.main",
                        borderWidth: 2,
                        m: "-1px",
                      }),
                    }}
                  >
                    <CardContent>
                      <Link href={`/category/${plan.category}`}>
                        <Avatar
                          sx={{ mx: "auto", width: 60, height: 60 }}
                          sizes="md"
                          src={plan.image}
                        />
                        <Box sx={{ textAlign: "center" }}>
                          <Typography variant="h5"></Typography>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography variant="overline">
                            {plan.name}
                          </Typography>
                        </Box>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};
