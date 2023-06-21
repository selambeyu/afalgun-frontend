import { useRef ,useState} from "react";
import PropTypes from "prop-types";
import {
  Box,
  Checkbox,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Radio,
  Stack,
  Switch,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  useMediaQuery,MenuItem,FormHelperText, Menu
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { DatePicker } from '@mui/lab';
import { Search as SearchIcon } from "../../icons/search";
import { X } from "../../icons/x";

const customers = [
  "Female Baby",
  "Male Baby",
  "Female Kid",
  "Male Kid",
  "Girl",
  "Boy",
  "Woman",
  "Man",
  "Old Woman",
  "Old Man",
  "Physically Challenged",
];
const date_posted = ["24 hours", "3 days", "7 days", "30 days"];

const FiltersDrawerDesktop = styled(Drawer)({
  flexShrink: 0,
  width: 380,
  "& .MuiDrawer-paper": {
    position: "relative",
    width: 380,
  },
});

const FiltersDrawerMobile = styled(Drawer)({
  maxWidth: "100%",
  width: 380,
  "& .MuiDrawer-paper": {
    height: "calc(100% - 64px)",
    maxWidth: "100%",
    top: 64,
    width: 380,
  },
});

export const PostListFilters = (props) => {
  const {
    containerRef,
    filters = {},
    onChange,
    onClose,
    open,
    ...other
  } = props;
  const queryRef = useRef(null);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  const handleQueryChange = (event) => {
    event.preventDefault();
    onChange?.({
      ...filters,
      query: queryRef.current?.value,
    });
  };

  const handleStartDateChange = (date) => {
    const newFilters = {
      ...filters,
      startDate: date,
    };

    // Prevent end date to be before start date
    if (newFilters.endDate && date && date > newFilters.endDate) {
      newFilters.endDate = date;
    }

    onChange?.(newFilters);
  };

  const handleEndDateChange = (date) => {
    const newFilters = {
      ...filters,
      endDate: date,
    };

    // Prevent start date to be after end date
    if (newFilters.startDate && date && date < newFilters.startDate) {
      newFilters.startDate = date;
    }

    onChange?.(newFilters);
  };

  const handleCustomerChange = (event) => {
    if (event.target.checked) {
      onChange?.({
        ...filters,
        customer: [...(filters.customer || []), event.target.value],
      });
    } else {
      onChange?.({
        ...filters,
        customer: (filters.customer || []).filter(
          (customer) => customer !== event.target.value
        ),
      });
    }
  };

  const handleStatusChange = (event) => {
    onChange?.({
      ...filters,
      status: event.target.checked ? "paid" : undefined,
    });
  };

  const content = (
    <Box
      sx={{
        pb: 3,
        pt: {
          xs: 3,
          lg: 8,
        },
        px: 3,
      }}
    >
      <Box
        sx={{
          display: {
            lg: "none",
          },
          mb: 2,
        }}
      >
        <IconButton onClick={onClose}>
          <X fontSize="small" />
        </IconButton>
      </Box>
      <Box component="form" onSubmit={handleQueryChange}>
        {/* <TextField
          defaultValue=""
          fullWidth
          inputProps={{ ref: queryRef }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          label="Search"
          placeholder="Search by invoice number"
        /> */}

        <FormControl >
          <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
          <Select
          fullWidth
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>1-17</MenuItem>
            <MenuItem value={20}>18-25</MenuItem>
            <MenuItem value={30}>26-30</MenuItem>
            <MenuItem >31-40</MenuItem>
            <MenuItem>41-50</MenuItem>
            <MenuItem>51-60</MenuItem>
            <MenuItem>61-80</MenuItem>
            <MenuItem>81-100</MenuItem>
          </Select>
          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>
      </Box>
      <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle2">
        Date Posted
      </Typography>
      <Box
        sx={{
          // backgroundColor: "background.default",
          borderColor: "divider",
          borderRadius: 1,
          // borderStyle: "solid",
          borderWidth: 1,
          mt: 2,
          mb: 2,
        }}
      >
        <FormGroup
          sx={{
            py: 1,
            px: 1.5,
          }}
        >
          {date_posted.map((customer) => (
            <FormControlLabel
              control={
                <Radio
                  checked={filters.customer?.includes(customer)}
                  onChange={handleCustomerChange}
                />
              }
              key={customer._id}
              label={customer}
              value={customer}
            />
          ))}
        </FormGroup>
      </Box>
      <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle2">
        All Categories
      </Typography>
      <Box
        sx={{
          // backgroundColor: "background.default",
          borderColor: "divider",
          borderRadius: 1,
          // borderStyle: "solid",
          borderWidth: 1,
          mt: 2,
          mb: 2,
        }}
      >
        <FormGroup
          sx={{
            py: 1,
            px: 1.5,
          }}
        >
          {customers.map((customer) => (
            <FormControlLabel
              control={
                <Radio
                  checked={filters.customer?.includes(customer)}
                  onChange={handleCustomerChange}
                />
              }
              key={customer._id}
              label={customer}
              value={customer}
            />
          ))}
        </FormGroup>
      </Box>
      {/* <FormControlLabel
        control={
          <Switch
            checked={filters.status === "paid"}
            onChange={handleStatusChange}
          />
        }
        label="Show paid only"
        sx={{ mt: 2 }}
      /> */}
    </Box>
  );

  if (lgUp) {
    return (
      <FiltersDrawerDesktop
        anchor="left"
        open={open}
        SlideProps={{ container: containerRef?.current }}
        variant="persistent"
        {...other}
      >
        {content}
      </FiltersDrawerDesktop>
    );
  }

  return (
    <FiltersDrawerMobile
      anchor="left"
      ModalProps={{ container: containerRef?.current }}
      onClose={onClose}
      open={open}
      SlideProps={{ container: containerRef?.current }}
      variant="temporary"
      {...other}
    >
      {content}
    </FiltersDrawerMobile>
  );
};

PostListFilters.propTypes = {
  containerRef: PropTypes.any,
  filters: PropTypes.object,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
