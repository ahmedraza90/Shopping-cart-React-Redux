import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import { Routes, Route, Link, Outlet, NavLink } from "react-router-dom";

const navItems = [
  {
    id: 0,
    title: "Women",
    value: "womenshoes",
  },
  {
    id: 1,
    title: "Men",
    value: "men",
  },
  {
    id: 2,
    title: "kids",
    value: "kids",
  },
  {
    id: 3,
    title: "brands",
    value: "brands",
  },
  {
    id: 4,
    title: "Accessories",
    value: "accessories",
  },
  {
    id: 5,
    title: "Sell",
    value: "sell",
  },
  {
    id: 6,
    title: "Your Offers",
    value: "youroffers",
  },
];
const settings = [
  "NEW ARRIVALS",
  "MEN",
  "WOMEN",
  "BOYS",
  "GIRLS",
  "ACCESSORIES",
  "SALE",
  "BRANDS",
  "RELEASES",
];
const steps = [
  {
    label: "BOOST YOUR STATUS",
    description: `stay in the loop for realeses, shipping promotions and more`,
  },
  {
    label: "GET THE APP",
    description: "the best way to shop, redeem and get access",
  },
  {
    label: "Buy Now, Pay Later",
    description: `Interest Free`,
  },
];

const ResponsiveAppBar = () => {
  const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (id) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: "30%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
    },
    display: "flex",
    justifyContent: "space-between",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <Box sx={{ padding: "0 2% 0 2%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.2%",
        }}
      >
        <Link to="/" >
          <Box
            component="img"
            sx={{
              height: 40,
              width: 190,
            }}
            alt="Your logo."
            src="https://www.finishline.com/store/assets/images/FINISH_LINE_2_COLOR_MED_300x44.png"
          />
        </Link>
        <Search sx={{ color: "black" }}>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        {navItems.map((navItems, ind) => (
          <Box
            key={ind}
            onClick={() => handleCloseNavMenu(navItems.id)}
            value={navItems.value}
            sx={{ my: 2, mx: 2, display: "block" }}
          >
            {navItems.title}
          </Box>
        ))}
      </Box>
      

      <Box sx={{ maxWidth: 400, flexGrow: 1 }}></Box>
    </Box>
  );
};

export default ResponsiveAppBar;
