import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
} from "@mui/material";
import CustomEditor from "../CustomEditor";
import { useQuery, useQueryClient } from "react-query";
import { getCategoriesApi } from "../../pages/api/category-api-client";
import { getSubcategoriesApi } from "../../pages/api/subcategory-api-client";

const paymentMethods = [
  {
    label: "Visa Credit/Debit Card",
    value: "visa",
  },
  {
    label: "PayPal",
    value: "paypal",
  },
];

export const AddPost = () => {
  // const { data, isLoading, isError } = useQuery(
  //   ["categories"],
  //   async () => await getCategoriesApi()
  // );
  const { subcategorydata, isSubcategoryLoading, isSubcategoryError } =
    useQuery(["subcategory"], async () => await getSubcategoriesApi());

  console.log("category data",  subcategorydata);

  return (
    <Box
      sx={{
        backgroundColor: "background.paper",
        minHeight: "100%",
        p: 3,
      }}
    >
      <form onSubmit={(event) => event.preventDefault()}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 20,
              display: "flex",
              height: 40,
              justifyContent: "center",
              width: 40,
            }}
          >
            <Typography sx={{ fontWeight: "fontWeightBold" }} variant="h6">
              1
            </Typography>
          </Box>
          <Typography sx={{ ml: 2 }} variant="h6">
            Report what you found or Lost
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
              <InputLabel id="grade-label">Category</InputLabel>
              <Select
                name="grade"
                id="category"
                fullWidth
                margin="dense"
                label="Grade"
              >
                {paymentMethods.map((opt) => (
                  <MenuItem value={opt._id} key={opt._id}>
                    {opt.name}
                  </MenuItem>
                ))}
              </Select>

              {/* <TextField
                fullWidth
                label="First Name"
                name="firstName"
              /> */}
            </Grid>
            <Grid item sm={6} xs={12}>
              {/* <TextField fullWidth label="Last Name" name="lastName" /> */}
              <InputLabel id="grade-label">SubCategory</InputLabel>
              <Select
                name="grade"
                id="category"
                fullWidth
                margin="dense"
                label="Grade"
              >
                {paymentMethods.map((opt) => (
                  <MenuItem value={opt._id} key={opt._id}>
                    {opt.name}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <RadioGroup
                  overlay
                  sx={{ flexDirection: "row" }}
                  defaultValue="losr"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    label="Lost"
                    value="lost"
                    id="lost"
                    control={<Radio />}
                  />
                  <FormControlLabel
                    label="Found"
                    value="found"
                    id="found"
                    control={<Radio />}
                  />
                </RadioGroup>
              </FormControl>
              {/* <InputLabel>Type</InputLabel>
            <RadioGroup name="radio-buttons-group">
              <Radio id="lost"  value="lost" label="Lost" />
              <Radio id="found" value="found" label="Found"  />
            </RadioGroup> */}
              {/* <TextField fullWidth label="Street Address" name="address" /> */}
            </Grid>
            {/* <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              label="Report title"
              name="optionalAddress"
            />
          </Grid> */}
            <Grid item sm={12} xs={12}>
              <TextField fullWidth label="Report title" name="name" />
            </Grid>
            <Grid item sm={12} xs={12}>
              <InputLabel>Description</InputLabel>
              <CustomEditor

              // content={formik.values.changeLog}
              // handleEditorChange={(content) => formik.setFieldValue("changeLog", content)}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 6,
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 20,
              display: "flex",
              height: 40,
              justifyContent: "center",
              width: 40,
            }}
          >
            <Typography sx={{ fontWeight: "fontWeightBold" }} variant="h6">
              2
            </Typography>
          </Box>
          <Typography sx={{ ml: 2 }} variant="h6">
            Address
          </Typography>
        </Box>
        <Box
          sx={{
            color: "text.primary",
            mt: 3,
          }}
        >
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12}></Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 6,
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              border: (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 20,
              display: "flex",
              height: 40,
              justifyContent: "center",
              width: 40,
            }}
          >
            <Typography sx={{ fontWeight: "fontWeightBold" }} variant="h6">
              3
            </Typography>
          </Box>
          <Typography sx={{ ml: 2 }} variant="h6">
            Payment Method
          </Typography>
        </Box>
        <Box sx={{ mt: 3 }}>
          <RadioGroup name="paymentMethod" sx={{ flexDirection: "row" }}>
            {paymentMethods.map((paymentMethod) => (
              <FormControlLabel
                control={<Radio sx={{ ml: 1 }} />}
                key={paymentMethod.value}
                label={
                  <Typography variant="body1">{paymentMethod.label}</Typography>
                }
                value={paymentMethod.value}
              />
            ))}
          </RadioGroup>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <CustomEditor
              // content={formik.values.changeLog}
              // handleEditorChange={(content) => formik.setFieldValue("changeLog", content)}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField fullWidth label="Name on Card" name="cardOwner" />
            </Grid>
            <Grid item sm={6} />
            <Grid item sm={6} xs={12}>
              <TextField fullWidth label="Card Number" name="cardNumber" />
            </Grid>
            <Grid item sm={6} />
            <Grid item sm={3} xs={12}>
              <TextField
                fullWidth
                label="Expire Date"
                name="cardExpirationDate"
                placeholder="MM/YY"
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              <TextField
                fullWidth
                label="Security Code"
                name="cardSecurityCode"
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 3,
          }}
        >
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};
