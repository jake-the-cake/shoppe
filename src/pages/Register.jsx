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
	padding: 20px;
	background-color: white;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
`;

const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin=top: 20px;
	padding: 10px;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

const Button = styled.button`
	text-transform: uppercase;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
  transition: all 0.5s ease;

  &:hover{
    background-color: #c9d585;
  }
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Create An Account</Title>
				<Form>
					<Input placeholder="firstname" />
					<Input placeholder="lastname"/>
					<Input placeholder="username"/>
					<Input placeholder="email" />
					<Input placeholder="password" />
					<Input placeholder="confirm" />
					<Agreement>
						You allow me to sell your information to countless people willing to pay the highest prices, You also cannot delete this account and will get spammed until the end of time. If you'd likem you can read the PRIVACY POLICY.
					</Agreement>
					<Button>Create Account</Button>
				</Form>
			</Wrapper>
		</Container>
	)
}

export default Register