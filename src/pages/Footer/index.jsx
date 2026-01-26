import { Container, Center } from "../styles/Reusable.styled";
import { FooterDiv } from "./Footer.styled";
const Footer = () => {
	return (
		<FooterDiv>
			<hr></hr>
			<Container>
				<Center>
					<div>
						<small>Designed by Paul Pintang &copy; 2026</small>
					</div>
					<small>Built with React.Js</small>
				</Center>
			</Container>
		</FooterDiv>
	);
};

export default Footer;
