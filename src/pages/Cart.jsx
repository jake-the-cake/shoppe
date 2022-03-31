import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import {Colors} from '../colors.js';
import { Add, Remove } from '@material-ui/icons';

const Container = styled.div`
	width: 100%;
`;

const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	column-gap: 20px;
`;

const Button = styled.button`
	border-radius: 10px;
	text-transform: uppercase;
	font-size: 12x;
	font-weight: bold;
	padding: 10px 15px;
	background-color: ${props=>props.color};
	margin: ${props=>props.margin === "auto" ? "10px auto 0px" : "inherit"};
	color: white;
	cursor: pointer;
	border: 2px solid white;
	transition: all 0.5s ease;

  &:hover{
		background-color: ${Colors.lightGreen};
		border: 2px solid ${Colors.darkGreen};
		color: ${Colors.darkGreen};
	}
`;

const TopTexts = styled.div`
	display: flex;
	align-items: center;
	column-gap: 10px;
`;

const TopText = styled.a`
	padding-top: 2px;
	color: ${Colors.darkGreen};
	cursor: pointer;


	&:hover{
		color: ${Colors.lightGreen};
		text-decoration: none;
	}
`;

const Divider = styled.h2`
	margin: 0px;
	padding: 0px;
	color: black;
`;

const Bottom = styled.div`
	border: 1px solid ${Colors.darkGreen};
	display: flex;
	justify-content: space-between;
`;

const Info = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	padding: 10px;

`;

const Product = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px dotted ${Colors.darkGreen};
	padding-bottom: 10px;
	
	&:last-child{
		border: none;
		padding-bottom: 0px;
	}
`;

const ProductDetail = styled.div`
	flex: 2;
	display: flex;
`;

const Details = styled.div`
 	padding: 0px 20px;
	display: flex;
	flex-direction: column;
	row-gap: 6px;
	justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
	display: flex;
	column-gap: 5px;
`;

const ProductColorCirlce = styled.div`
	background-color: ${props => props.color};
	width: 20px;
	height: 20px;
	border-radius: 50%;
`;

const ProductSize = styled.span``;

const Image = styled.img`
	width: 150px;
`;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const ProductAmountContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 5px;
	margin-bottom: 20px;
`;

const ProductAmount = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${Colors.darkGreen};
	padding: 5px 10px;
	border-radius: 5px;
	font-weight: 700;
	font-size: 20px;
`;

const ProductPrice = styled.div`
	font-size: 28px;
	font-weight: 500;
`;

const Summary = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	border: 1px solid ${Colors.darkGreen};
	background-color: rgba(23, 230, 69, 0.1);
	border-radius: 10px;
	padding: 20px;
	margin: 10px;
`;

const SummaryTitle = styled.h1`
	font-weight: 200;
`;

const SummaryItem = styled.div`
	margin: 8px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${props => props.type === "total" && "500"};
	font-size: ${props => props.type === "total" && "24px"};
	border-top: ${props=>props.type === "total" ? `1px solid ${Colors.darkGreen}` : "none"};
	padding-top: ${props=>props.type === "total" ? "16px" : "0px"}
`;

const SummaryItemText = styled.span`
`;

const SummaryItemPrice = styled.span`
`;
const Cart = () => {
	return (
		<Container>
			<Navbar/>
			<Announcement/>
			<Wrapper>
				<Title>Your Cart</Title>
				<Top>
					<Button color={Colors.lightGreen}>Continue Shopping</Button>
					<TopTexts>	
						<TopText href="#">Shopping Cart (2)</TopText>
						<Divider>|</Divider>
						<TopText href="#">Your Wishlist (1)</TopText>
					</TopTexts>
					<Button color={Colors.darkGreen}>Check Out</Button>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg" />
								<Details>
									<ProductName><b>Product:</b> Fake Item</ProductName>
									<ProductId><b>ID:</b> 8675309</ProductId>
									<ProductColor><b>Color: </b>
										<ProductColorCirlce color={Colors.veryRed} />
									</ProductColor>
									<ProductSize><b>Size:</b> 69</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Remove/>
									<ProductAmount>2</ProductAmount>
									<Add/>
								</ProductAmountContainer>
								<ProductPrice>$37</ProductPrice>
							</PriceDetail>
						</Product>
						<Product>
							<ProductDetail>
								<Image src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
								<Details>
									<ProductName><b>Product:</b> Other Item</ProductName>
									<ProductId><b>ID:</b> 7730301</ProductId>
									<ProductColor><b>Color: </b>
										<ProductColorCirlce color={Colors.jelli} />
									</ProductColor>
									<ProductSize><b>Size:</b> 1</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Remove />
									<ProductAmount>8</ProductAmount>
									<Add />
								</ProductAmountContainer>
								<ProductPrice>$14</ProductPrice>
							</PriceDetail>
						</Product>
					</Info>
					<Summary>
						<SummaryTitle>Order Summary</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$186.00</SummaryItemPrice>
						</SummaryItem>						
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$15.00</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>-$10.00</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$191.00</SummaryItemPrice>
						</SummaryItem>
						<Button color={Colors.darkGreen} margin="auto">Checkout Now</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer/>
		</Container>
	)
};

export default Cart;