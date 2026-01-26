import styled from "styled-components";
import { Center } from "../styles/Reusable.styled";

export const Section = styled.section`
	@media (max-width: 768px) {
		height: 100%;
	}
`;

export const OfferCards = styled.div`
	img {
		width: 280px;
		height: 280px;
		@media (max-width: 768px) {
			height: 100%;
			/* width: 100%; */
			padding-bottom: 25px;
		}
	}

	@media (max-width: 768px) {
		padding-bottom: 30px;
	}
`;
