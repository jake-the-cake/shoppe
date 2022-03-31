import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5 ), rgba(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/210243/pexels-photo-210243.jpeg") center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 40%;
	max-width: 420px;
	min-width: 300px;
	padding: 20px;
	background-color: white;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin-top: 10px;
	padding: 10px;
`;

const Button = styled.button`
	border-radius: 10px;
	text-transform: uppercase;
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 2px;
	border: none;
	padding: 15px 20px;
	margin: 10px auto;
	background-color: #23a456;
	color: white;
	cursor: pointer;
	border: 2px solid white;
  transition: all 0.5s ease;

  &:hover{
    background-color: #76c567;
		border: 2px solid #23a456;
		color: #23a456;
  }
`;

const LinkContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

const Link = styled.a`
	padding-top: 2px;
	color: #23a456;
	cursor: pointer;


	&:hover{
		color: #76e567;
		text-decoration: none;
	}
`;

const Divider = styled.h2`
	margin: 0px;
	padding: 0px;
	color: black;
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Sign In</Title>
				<Form>
					<Input placeholder="username" />
					<Input placeholder="password" />
					<Button>Login</Button>
					<LinkContainer>
						<Link href="#">Forgot Password?</Link>
						<Divider>|</Divider>
						<Link href="#">Create New Account</Link>
					</LinkContainer>
				</Form>
			</Wrapper>
		</Container>
	)
};

export default Login;