import React from "react";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Link from "@mui/material/Link";
import menShoes from '../mockdata/dummyProduct'
import { Routes, Route, Outlet, NavLink,useParams } from "react-router-dom";

const THEME = createTheme({
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const images = [
  {
    id: 0,
    path: "assets/MenShoes/pureWhite.webp",
    colors: 3,
    description: "Mens Nike Air Max 97 Casual Shoes",
    price: "$170.00",
  },
  {
    id: 1,
    path: "assets/MenShoes/red.webp",
    colors: 4,
    description: "Mens Nike Air Max 97 Casual Shoes",
    price: "$170.00",
  },
  {
    id: 2,
    path: "assets/MenShoes/pureWhite.webp",
    colors: 2,
    description: "Mens Nike Air Max 97 Casual Shoes",
    price: "$170.00",
  },
  {
    id: 3,
    path: "assets/MenShoes/white.webp",
    colors: 1,
    description: "Mens Nike Air Max 97 Casual Shoes",
    price: "$170.00",
  },
  {
    id: 3,
    path: "assets/MenShoes/white.webp",
    colors: 1,
    description: "Mens Nike Air Max 97 Casual Shoes",
    price: "$170.00",
  },
  {
    id: 3,
    path: "assets/MenShoes/white.webp",
    colors: 1,
    description: "Mens Nike Air Max 97 Casual Shoes",
    price: "$170.00",
  },
];

const logos = [
  {
    id: 0,
    path:
      "https://media.designrush.com/inspiration_images/134805/conversions/_1512076803_93_Nike-desktop.jpg",
    value: "nikelogo",
  },
  {
    id: 1,
    path: "https://1000logos.net/wp-content/uploads/2017/05/PUMA-Logo-1978.jpg",
    value: "pumalogo",
  },
  {
    id: 2,
    path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBGdZlNvYXGjZ7za-fY82_g4e2Kpbp4xoxhsLg6B6A-ywjpbRP4e8nCZqo2bbqOzObVDk&usqp=CAU",
    value: "nikelogo",
  },
  {
    id: 3,
    path:
      "data:image/png;base64,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",
    value: "nikelogo",
  },
  {
    id: 4,
    path:
      "https://freepngdesign.com/content/uploads/images/p-2740-1-brooks-logo-png-transparent-logo-298054416265.png",
    value: "nikelogo",
  },
  {
    id: 5,
    path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWeRDtLTFzFR8v5RWuqaBBySYV1c5_IG06iTPNN7Gprzzq97PBOv_aM4prdIsSlhxADo&usqp=CAU",
    value: "nikelogo",
  },
  {
    id: 6,
    path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWeRDtLTFzFR8v5RWuqaBBySYV1c5_IG06iTPNN7Gprzzq97PBOv_aM4prdIsSlhxADo&usqp=CAU",
    value: "nikelogo",
  },
];

const Price = [
  {
    id: 0,
    value: "Under 50$",
  },
  {
    id: 1,
    value: "$50-$100",
  },
  {
    id: 2,
    value: "$100-$150",
  },
  {
    id: 3,
    value: "$150-$200",
  },
  {
    id: 4,
    value: "$200-$250",
  },
  {
    id: 5,
    value: "Over $250",
  },
];

const width = [
  {
    id: 0,
    value: `2E - Men's Wide`,
  },
  {
    id: 1,
    value: `4E - Men's X-Wide`,
  },
];

const type = [
  {
    id: 0,
    value: "High Tops",
  },
  {
    id: 1,
    value: "Retro",
  },
  {
    id: 2,
    value: "Slip Ons",
  },
  {
    id: 3,
    value: "Performance Running",
  },
  {
    id: 4,
    value: "Neutral",
  },
  {
    id: 5,
    value: "Stability",
  },
  {
    id: 6,
    value: "Lightweight",
  },
];
const color = [
  {
    id: 0,
    value: "High Tops",
    color: "black",
  },
  {
    id: 1,
    value: "Retro",
    color: "white",
  },
  {
    id: 2,
    value: "Slip Ons",
    color: "#9ba3a9",
  },
  {
    id: 3,
    value: "Performance Running",
    color: "blue",
  },
  {
    id: 4,
    value: "Neutral",
    color: "green",
  },
  {
    id: 5,
    value: "Stability",
    color: "orange",
  },
  {
    id: 6,
    value: "Lightweight",
    color: "red",
  },
  {
    id: 6,
    value: "Lightweight",
    color: "#ddd3c8",
  },
  {
    id: 6,
    value: "Lightweight",
    color: "#6f491d",
  },
  {
    id: 6,
    value: "Lightweight",
    color: "#ffa544",
  },
  {
    id: 6,
    value: "Lightweight",
    color: "#8454c4",
  },
  {
    id: 6,
    value: "Lightweight",
    color: "#fe6790",
  },
];
function Home() {
  const data = menShoes
  const value = 3.5;
  return (
    <ThemeProvider theme={THEME}>
      <Box sx={{ padding: "2%", marginLeft: "1%" }}>
        <Grid container spacing={2} sx={{}}>
          <Grid item xs={2}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItem: "center",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  margin: "0 0 20px 3px",
                  width: "100%",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                BRAND
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                }}
              >
                {logos.map((item, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    style={{
                      maxWidth: "52px",
                      maxHeight: "52px",
                      minWidth: "52px",
                      minHeight: "52px",
                      margin: "2px",
                    }}
                  >
                    <img
                      src={item.path}
                      alt={item.path}
                      width="100%"
                      height="auto"
                    ></img>
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  margin: "20px 0 20px 3px",
                  width: "100%",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                PRICE
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                }}
              >
                {Price.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      my: -1,
                    }}
                  >
                    <Typography variant="body2">{item.value}</Typography>
                    <Checkbox {...label} />
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  margin: "20px 0 20px 3px",
                  width: "100%",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                Size
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                }}
              >
                {logos.map((item, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    style={{
                      maxWidth: "45px",
                      maxHeight: "45px",
                      minWidth: "45px",
                      minHeight: "45px",
                      margin: "2px",
                    }}
                  >
                    <img
                      src={item.path}
                      alt={item.path}
                      width="100%"
                      height="auto"
                    ></img>
                  </Button>
                ))}
              </Box>
              <Box
                sx={{
                  margin: "20px 0 20px 3px",
                  width: "100%",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                Wide Width
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                }}
              >
                {width.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      my: -1,
                    }}
                  >
                    <Typography variant="body2">{item.value}</Typography>
                    <Checkbox {...label} />
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  margin: "20px 0 20px 3px",
                  width: "100%",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                Type
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                }}
              >
                {type.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      my: -1,
                    }}
                  >
                    <Typography variant="body2">{item.value}</Typography>
                    <Checkbox {...label} />
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  margin: "20px 0 20px 3px",
                  width: "100%",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                Colors
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "flex-start",
                }}
              >
                {color.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      my: 1,
                    }}
                  >
                    <Typography variant="body2">{item.value}</Typography>
                    <Box
                      sx={{
                        border: 1,
                        borderRadius: "30px",
                        backgroundColor: `${item.color}`,
                        padding: "12px 12px",
                      }}
                    ></Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={10}>
            <Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 400, fontSize: 30 }}>
                  MEN'S RUNNING SHOES (685)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontWeight: 300, fontSize: 20 }}>
                  Shop your store:
                </Typography>
                <Button variant="text" sx={{ fontWeight: 300, fontSize: 20 }}>
                  Location
                </Button>
              </Box>

              <Box
                display="flex"
                flexWrap="wrap"
                direction="row"
                justifyContent="start"
                alignItems="center"
              >
                {data.map((item, ind) => (
                  <Box
                    key={ind}
                    sx={{ width: "23%", minWidth: 200, padding: "10px" }}
                  >
                    <Card>
                      <CardMedia
                        component="img"
                        width="100%"
                        height="auto"
                        image={item.card_img}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          sx={{ fontWeight: 450, fontSize: 14 }}
                        >
                          {item.total_colors} colors
                        </Typography>
                        <Divider />
                        <Link href={`/${item.id}`} underline="hover" color="black">
                          <Typography
                            gutterBottom
                            variant="body1"
                            sx={{ fontWeight: 450, fontSize: 14, color:'black' }}
                          >
                            {item.name}
                          </Typography>
                        </Link>

                        <Typography
                          gutterBottom
                          variant="body1"
                          sx={{ fontWeight: 400, fontSize: 14 }}
                        >
                          {item.price}
                        </Typography>
                        <Box
                          sx={{
                            width: 200,
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Rating
                            name="text-feedback"
                            value={value}
                            readOnly
                            precision={0.5}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          <Box sx={{ ml: 2 }}>{labels[value]}</Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
