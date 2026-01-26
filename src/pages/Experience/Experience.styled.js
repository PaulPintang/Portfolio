import styled from "styled-components";
import { Flex, Container } from "../styles/Reusable.styled";

export const WorkContainer = styled(Container)`
	padding-bottom: 110px;
	h2 {
		padding-bottom: 40px;
	}
	@media (max-width: 768px) {
		h2 {
			padding-bottom: 20px;
		}
	}
`;

export const WorkContent = styled.div`
	max-width: 600px;
	margin: auto;

	&:not(:last-child) {
		padding-bottom: 15px;
	}

	@media (max-width: 768px) {
		&:not(:last-child) {
			padding-bottom: 35px;
		}
	}
`;

export const FlexContent = styled(Flex)`
	flex-wrap: nowrap;
	padding: 13px;
	padding-left: ${({ contain }) => (contain ? 5 : 0)};
	gap: 10;
	align-items: center;
	section {
		border-left: 2px solid red;
		padding-left: 15px;
		p {
			font-size: 14px;
			padding: 5px 0;
		}
	}
	@media (max-width: 768px) {
		padding: 8px;
		align-items: flex-start;
		gap: ${({ nogap }) => (nogap ? 0 : 10)};
	}
`;

export const Tools = styled.div`
	display: flex;
	gap: 10px;
	padding-top: 5px;
	width: 100%;
	flex-wrap: wrap;
`;

export const Badge = styled.span`
	background-color: indigo;
	padding: 4px 15px;
	border-radius: 30px;
	font-size: 13px;
	width: auto;
`;
