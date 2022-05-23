import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@material-ui/core";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import randomColor from "randomcolor";
import {useSelector, useDispatch} from 'react-redux';
import {Add, Remove} from '../actions/cartActions'

const cart = [
  {
    id: "0",
    img_path: "assets/detail/small/921733_001.jpg",
    price: "12$",
    quantity: "2",
  },
];
function Cart() {
  const myState = useSelector((state)=>state.addedItems)
  console.log(myState)
  return (
    <Box sx={{ padding: "0 5%" }}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 600,
          fontSize: 30,
          textAlign: "center",
          padding: "0 0 20px 0",
        }}
      >
        YOUR BAG {myState}
      </Typography>
      <Grid
        container
        spacing={5}
        sx={{
          border: 1,
        }}
      >
        <Grid item xs={12} md={7}>
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell scope="row">
                      <Box sx={{ display: "flex" }}>
                        <img src={item.img_path} alt={item.img_path}></img>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 500,
                            fontSize: 13,
                            width: "270px",
                            mx: 1,
                          }}
                        >
                          Women's Nike Air Max 97 Casual Shoes
                          <br />
                          Size: 5.5 <br />
                          Color: Black/Dark Grey <br />
                          Qualifies for Free Shipping
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ width: "100%", my: 2, padding: "3px 0 3px 3px" }}>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: 13, width: "200px" }}
            >
              GET POINTS. GAIN ACCESS. BOOST YOUR STATUS.
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontWeight: 500, fontSize: 12, width: "280px" }}
            >
              Use your STATUS across our brand family, JD Sports and Finish
              Line. Join STATUS Now
            </Typography>
          </Box>
          <Box sx={{ flexWrap: "wrap", my: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 500, fontSize: 13 }}>
              Purchase Summary
            </Typography>
            <Divider />
            <Typography variant="body1" sx={{ fontWeight: 500, fontSize: 13 }}>
              Enter a coupon code
            </Typography>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, fontSize: 13 }}
              >
                Subtotal (4 items)
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, fontSize: 13 }}
              >
                $700.00
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, fontSize: 13 }}
              >
                Estimated Shipping:
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, fontSize: 13 }}
              >
                Free
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                my: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, fontSize: 13 }}
              >
                Tax:
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, fontSize: 13 }}
              >
                TBD
              </Typography>
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, fontSize: 13 }}
              >
                Total:
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontWeight: 500, fontSize: 13 }}
              >
                $700.00
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{ width: "100%", maxWidth: "800px", my: 2 }}
            >
              {" "}
              PROCEED TO CHECKOUT{" "}
            </Button>
            <Button
              variant="contained"
              sx={{ width: "100%", maxWidth: "800px", my: 2 }}
            >
              {" "}
              MORE PAYMENT OPTIONS{" "}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Cart;
