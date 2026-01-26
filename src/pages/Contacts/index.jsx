import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import Cookies from "js-cookie";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { MdLocalPhone } from "react-icons/md";
import { RiMessengerFill } from "react-icons/ri";
import { Container, Span, Center, Flex } from "../styles/Reusable.styled";
import { Section, Wrapper, ContactDetails, Msg } from "./Contact.styled";
import {
	FormContainer,
	Input,
	SendBtn,
	TextArea,
	Info,
	Note,
	Popover,
	ArrowUp,
} from "./Form.styled";
import qoute from "../../assets/svg/left-qoute.svg";
import { reveal } from "../../utils/animation";

const Contacts = () => {
	const form = useRef();
	const sectionRef = useRef(null);

	const [loaderMsg, setLoaderMsg] = useState(null);
	const [isSubmit, setIsSubmit] = useState(null);
	const [isShown, setIsShown] = useState(false);

	useEffect(() => {
		setIsSubmit(Cookies.get("Submitted"));
	}, [isSubmit]);

	useLayoutEffect(() => {
		if (sectionRef.current) reveal(sectionRef.current);
	}, []);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoaderMsg(true);
		emailjs
			.sendForm(
				`${import.meta.env.VITE_SERVICE_ID}`,
				`${import.meta.env.VITE_TEMPLATE_ID}`,
				form.current,
				`${import.meta.env.VITE_PUBLIC_KEY}`,
			)
			.then(
				() => {
					setTimeout(() => {
						Cookies.set("Submitted", true, { expires: 1, path: "" });
						setIsSubmit(Cookies.get("Submitted"));
						e.target.reset();
						setLoaderMsg(false);
					}, 3000);
				},
				() => {
					setTimeout(() => {
						e.target.reset();
						setLoaderMsg(false);
					}, 3000);
				},
			);
	};

	return (
		<Section id="contacts" ref={sectionRef} className="reveal">
			<Container>
				<Center>
					<h1>
						Need a web <Span>developer ?</Span>{" "}
					</h1>
					<h3>
						Let's <Span>work</Span> together !!
					</h3>
				</Center>
				<Wrapper>
					<img src={qoute} alt="" />
					<Flex>
						<ContactDetails>
							<div>
								<h3>
									<Span>Contact</Span> Information
								</h3>
								<Msg>
									<small>
										If you have an opportunity that matches my skills, feel free
										to reach out. Let’s connect.
									</small>
								</Msg>
							</div>
							<Flex left>
								<FaLinkedin />
								<a
									href="https://www.linkedin.com/in/paulpintangdev/"
									target="_blank"
									rel="noreferrer"
								>
									<p>LinkedIn</p>
								</a>
							</Flex>
							<Flex left>
								<GrMail />
								<a
									href="mailto:paulpintang.dev@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									<p>paulpintang.dev@gmail.com</p>
								</a>
							</Flex>

							<Flex left>
								<MdLocalPhone />
								<a href="tel:09496531569" target="_blank" rel="noreferrer">
									<p>+63 949 653 1569</p>
								</a>
							</Flex>

							<Flex left>
								<RiMessengerFill />
								<a
									href="https://m.me/paulpintang.dev"
									target="_blank"
									rel="noreferrer"
								>
									<p>Messenger</p>
								</a>
							</Flex>
						</ContactDetails>
						<FormContainer>
							<form ref={form} onSubmit={sendEmail} autoComplete="off">
								<Flex column def>
									<Flex justify>
										<Input
											type="text"
											placeholder="Your name"
											name="user_name"
											required
										/>
										<Input
											type="email"
											placeholder="Your email"
											name="user_email"
											required
										/>
									</Flex>
									<TextArea
										name="message"
										placeholder="Your message"
										required
									/>
									{isSubmit ? (
										<Info onMouseLeave={() => setIsShown(false)}>
											<Flex def justify containmobile>
												<Flex def left>
													<BsCheck2Circle size={17} />
													<span>Your message has been sent!</span>
												</Flex>
												<Note>
													<HiInformationCircle
														size={15}
														onMouseEnter={() => setIsShown(true)}
														onClick={() => setIsShown(true)}
													/>
												</Note>
												{isShown && (
													<>
														<ArrowUp></ArrowUp>
														<Popover onClick={() => setIsShown(false)}>
															<span>
																<b>Thanks for reaching out!</b> <br /> I will
																reply to you as soon as possible. Cheers! <br />{" "}
																~ Paul
															</span>
														</Popover>
													</>
												)}
											</Flex>
										</Info>
									) : (
										<SendBtn
											red
											type="submit"
											disabled={loaderMsg ? true : false}
										>
											{loaderMsg ? "Sending..." : "Send"}
										</SendBtn>
									)}
								</Flex>
							</form>
						</FormContainer>
					</Flex>
				</Wrapper>
			</Container>
		</Section>
	);
};

export default Contacts;
