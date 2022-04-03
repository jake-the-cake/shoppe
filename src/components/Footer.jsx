import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    ${mobile({ paddingBottom:"0px" })};
`;

const Logo = styled.h1`
    font-size: 40px;
    ${mobile({ display:"none" })};
`;

const Desc = styled.p`
    margin: 20px 0px;
    ${mobile({ display:"none" })};
`;

const SocialContainer = styled.div`
    display: flex;
    ${mobile({ justifyContent: "center" })};
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
`;

const Center = styled.div`
    flex: 1;
    ${mobile({ textAlign: "center", margin: "20px 10px 0px", paddingTop: "20px", borderTop: "1px solid gray" })};
`;

const Title = styled.h3`
    margin-bottom: 30px;
    ${mobile({marginBottom:"15px",fontWeight:"900",fontStyle:"italic"})};
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    ${mobile({ textAlign: "center", margin: "20px 10px 0px", paddingTop: "20px", borderTop: "1px solid gray" })};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    ${mobile({justifyContent:"center"})};
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Jelly Shoppe</Logo>
            <Desc>This is a website that I am building as a training exercise in order to build skills, and impress my bosses.</Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="8a3ab9">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <YouTube/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mens</ListItem>
                <ListItem>Womens</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacts</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> 1784 Route 9 - Toms River, NJ 08755</ContactItem>
              <ContactItem><Phone style={{ marginRight: "10px" }}/> (732)341-2128 ext. 1</ContactItem>
              <ContactItem><MailOutline style={{ marginRight: "10px" }}/> jake.thompson@hoovertruckcenters.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
};

export default Footer;