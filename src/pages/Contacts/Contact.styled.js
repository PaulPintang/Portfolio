import styled from "styled-components";

export const Section = styled.section`
	margin-bottom: 65px;
	img {
		position: absolute;
		width: 34px;
		top: -24px;
		left: -10px;
		z-index: -1;
	}
	h1 {
		font-size: 2.2em;
	}
	h3 {
		font-size: 1.17em;
		font-weight: bold;
	}
	a {
		color: white;
		&:hover {
			transition: color 0.12s ease-in;
			color: #fd0037;
		}
	}
	@media (max-width: 768px) {
		h1 {
			max-width: 180px;
			margin: auto;
			font-size: 1.8rem;
		}
	}
`;

export const Wrapper = styled.div`
	padding: 12px;
	background-color: #202a3c;
	max-width: 850px;
	width: 100%;
	margin: 30px auto;
	position: relative;
`;
export const Msg = styled.div`
	padding: 10px 0 30px 0;
	text-align: left;
	small {
		font-size: 13px;
	}
`;
export const ContactDetails = styled.div`
	opacity: 2;
	width: 300px;
	background-color: #081327;
	text-align: left;
	border-radius: 4px;
	height: 100%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	h3 {
		font-size: 13px;
		text-transform: uppercase;
		padding: 0;
	}
	p {
		opacity: 1;
		letter-spacing: 0.5px;
		font-size: 13px;
	}
	@media (max-width: 768px) {
		width: 100%;
	}
`;
