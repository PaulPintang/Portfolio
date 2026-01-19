import styled from "styled-components";
import { Button, Flex } from "../styles/Reusable.styled";

export const Section = styled.section`
	margin-top: 120px;
	text-align: center;
`;

export const Column = styled(Flex)`
	height: calc(100vh - 120px);
	gap: 0;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	h1 {
		font-size: 4.2rem;
		font-variant: small-caps;
		font-weight: 200;
		letter-spacing: 4px;
	}
	@media (max-width: 768px) {
		h1 {
			font-size: 3.5rem;
			line-height: 1.1;
		}
	}
`;

export const TextAnimated = styled.p`
	font-size: 1.5rem;
	text-transform: uppercase;
	letter-spacing: 2.5px;
	opacity: 1;
	font-weight: 500;

	background: 50% 100% / 50% 50% no-repeat
		radial-gradient(ellipse at bottom, #fff, transparent, transparent);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	animation:
		reveal 1800ms ease-in-out forwards 260ms,
		glow 2600ms linear infinite 2100ms;

	/* Animations */
	@keyframes reveal {
		80% {
			letter-spacing: 8px;
		}
		100% {
			background-size: 300% 300%;
		}
	}
	@keyframes glow {
		40% {
			text-shadow: 0 0 8px #fff;
		}
	}

	@media (max-width: 768px) {
		font-size: 1.2rem;
	}
`;

export const BtnControl = styled.div`
	padding: 10px;
	.check-btn {
		background: transparent;
		color: white;
		border: 1px solid #ffffff;
		a:hover {
			color: black;
		}
	}
`;

export const StyledButton = styled(Button)`
	font-family: "Poppins", sans-serif;
	padding: 8px 18px;
	margin: 8px;
	background-color: ${({ red }) => (red ? "#f3f3f3" : "transparent")};
	color: ${({ red }) => (red ? "gray" : "white")};
	font-size: 10px;
	width: 151px;
	&:hover {
		background-color: ${({ red }) => (red ? "#fd0037" : "white")};
		color: ${({ red }) => (red ? "white" : "gray")};
		border: ${({ red }) => (red ? "1px solid #fd0037" : "")};
		/* transition */
		-webkit-transition: all 200ms linear;
		-ms-transition: all 200ms linear;
		transition: all 200ms linear;
	}
`;
