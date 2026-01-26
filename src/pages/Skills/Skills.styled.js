import styled from "styled-components";
import { Flex } from "../styles/Reusable.styled";

export const Section = styled.section`
	padding: 70px 0;
`;

export const FlexContainer = styled(Flex)`
	max-width: 800px;
	margin: auto;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 0 16px;
	gap: 35px;

	@media (max-width: 768px) {
		justify-content: center;
		flex-direction: unset;
		width: 100%;
		padding: 0;
		gap: 0;
		row-gap: 5px;
	}
`;

export const ImgContainer = styled.div`
	transition: transform 0.2s ease-in;
	margin-bottom: 12px;
	&:hover {
		transform: translateY(-11px);
		cursor: pointer;
	}
	img {
		width: 40px;
		height: 40px;
		&:hover {
			cursor: pointer;
		}
	}
	@media (max-width: 768px) {
		width: 110px;
	}
`;
