import React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import { Routes, Route, Link, Outlet, NavLink,useParams } from "react-router-dom";
import menShoes from '../mockdata/dummyProduct'
import {useSelector, useDispatch} from 'react-redux';
import {Add, Remove} from '../actions/cartActions';




function Detail() {
	const myState = useSelector((state)=>state.reducer)
	const dispatch = useDispatch();

	const { id } = useParams();
    const data = menShoes[id]

	const [activeStep, setActiveStep] = React.useState(data.thumbnail_img[0]);
	const handleNext = (path) => {
		setActiveStep(path);
	};

	const [open, setOpen] = React.useState(true);
	const handleClick = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ padding: '0 5%' }}>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<Box sx={{ width: '100%', maxWidth: '600px', height: 'auto' }}>
						<img src={activeStep} alt={activeStep} width="100%" height="auto"></img>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'start',
								paddingBottom: '300px',
							}}
						>
							{data.thumbnail_img.map((item, index) => (
								<Box
									key={index}
									onClick={() => handleNext(item)}
									sx={{ width: '75px', height: '75px', padding: '0 5px 5px 0' }}
								>
									<img src={item} alt={item} width="100%" height="auto"></img>
								</Box>
							))}
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box>
						<Box>
							<Typography variant="h4" sx={{ fontWeight: 500, fontSize: 25 }}>
								{data.name}
							</Typography>
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
							<Typography sx={{ fontWeight: 500, fontSize: 18 }}>{data.price}</Typography>
						</Box>
						<Divider />
						<Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
							<Typography sx={{ fontWeight: 500, fontSize: 15 }}>Color</Typography>
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center', my: -1 }}>
							<Typography sx={{ fontWeight: 300, fontSize: 15 }}>
								Black/White/Anthracite - 921826 015
							</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',

								alignItems: 'center',
								justifyContent: 'space-between',
								my: 2,
							}}
						>
							{data.color_image.map((item,index)=>(
							   <Box>
							   <img
								   src={item}
								   alt={item}
								   width="100%"
							   ></img>
						   </Box>	
							))}
						</Box>
						<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Typography sx={{ fontWeight: 500, fontSize: 15 }}>Size</Typography>
							<Box>Size Chart</Box>
						</Box>
						<Box sx={{ display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
							{data.sizes.map((item, index) => (
								<Button
									key={index}
									variant="outlined"
									style={{
										width: '65px',
										height: '25px',
										margin: '2px',
									}}
								>
									{item}
								</Button>
							))}
						</Box>
						<Box sx={{ my: 2 }}>
							<Divider />
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Radio value="a" name="radio-buttons" />
							<Box>
								<Typography sx={{ fontWeight: 500, fontSize: 15 }}>Ship to an address</Typography>
								<Typography sx={{ fontWeight: 350, fontSize: 10, my: 0 }}>FREE SHIPPING</Typography>
							</Box>
						</Box>
						<Box sx={{ display: 'flex', alignItems: 'center' }}>
							<Radio value="a" name="radio-buttons" />
							<Box>
								<Box sx={{ display: 'flex' }}>
									<Typography sx={{ fontWeight: 500, fontSize: 15 }}>Store Pickup:</Typography>
									<Typography sx={{ fontWeight: 500, fontSize: 15, mx: 1 }}>Location</Typography>
								</Box>
								<Typography sx={{ fontWeight: 350, fontSize: 10, my: 0 }}>FREE Pickup</Typography>
							</Box>
						</Box>
						<Box>
						<Link to="/cart" >
							<Button 
							href=""
							 onClick={() => { dispatch( Add({id:id,title:data.name,price:data.price,free_shipment:true}) )} }
							 variant="contained" 
							 sx={{ width: '100%', maxWidth: '800px' }}
							 >
								{' '}
								ADD TO CART{' '}
							</Button>
					    </Link>
						</Box>
					</Box>
				</Grid>
			</Grid>

			<Box sx={{ my:-34 }}>
				<List
					sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
					component="nav"
					aria-labelledby="nested-list-subheader"
				>
					<ListItemButton onClick={handleClick}>
						<ListItemText primary="Product Details" />
						{open ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box>
							<Typography variant="body1" sx={{ fontWeight: 500, fontSize: 13 }}>
								Sizing Information
							</Typography>
							<Typography variant="body1" sx={{ fontWeight: 370, fontSize: 12 }}>
								Runs Small: We recommend sizing up for a more comfortable fit
							</Typography>
							<Typography variant="body1" sx={{ fontWeight: 500, fontSize: 13 }}>
								Women’s Nike Air Max 97 Casual Shoes:
							</Typography>
							<Typography variant="body1" sx={{ fontWeight: 370, fontSize: 12 }}>
								With fluid lines and an iconic Air Max cushioning, the Nike Air Max 97 has a sleek look
								for style-savvy ladies everywhere. First released in 1997, this Air Max model has seen a
								number of iterations to end up with the design we know and love today. A low-key sneaker
								that has a futuristic vibe, the Air Max 97 will reign as a favorite among trendsetters
								and OG sneaker-lovers alike. Retro meets modern on the attention-grabbing Women’s Nike
								Air Max 97 Casual Shoes.
							</Typography>
							<Typography variant="body1" sx={{ fontWeight: 500, fontSize: 13 }}>
								Nike Air Max 97 Features:
							</Typography>
							<ListItem>Light and breathable leather and textile upper</ListItem>
							<ListItem>
								Welded overlays are a direct callout to the original Air Max 97 and provide durability
							</ListItem>
							<ListItem>
								Welded overlays are a direct callout to the original Air Max 97 and provide durability
							</ListItem>
							<ListItem>
								Welded overlays are a direct callout to the original Air Max 97 and provide durability
							</ListItem>
							<ListItem>
								Welded overlays are a direct callout to the original Air Max 97 and provide durability
							</ListItem>
						</Box>
					</Collapse>
				</List>
			</Box>
		</Box>
	);
}

export default Detail;
