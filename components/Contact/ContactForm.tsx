import Button from "../General/SendButton";

export default function ContactForm() {
	return (
		<section className="min-h-[calc(100vh-160px)] ">
			<div
				id="contact"
				className="container mx-auto w-full px-5 pt-20 md:pl-5 md:pr-6 md:pt-40 xl:pl-12 xl:pr-11"
			>
				<div className="mr-20 w-full text-[16px] text-white xl:max-w-[800px]">
					<div className="block justify-between xl:flex">
						{/* Social Links */}
						<span className="mb-8 block text-center text-2xl text-portfolio-midgreen">
							If you want to get in touch please fill out the form below!
						</span>
						<form action="https://formspree.io/f/xvoypbgw" method="POST">
							<div className="mb-5 grid-cols-2 gap-5 sm:grid">
								<div className="mb-5 sm:mb-0">
									<label className="mb-2.5 block" htmlFor="First name">
										First name
									</label>
									<input
										className="h-12 w-full rounded-xl border border-portfolio-midgreen bg-transparent px-5 text-white transition-colors duration-300 hover:border-white"
										placeholder="First name"
										name="First name"
										type="text"
										required
									/>
								</div>
								<div>
									<label className="mb-2.5 block" htmlFor="Last name">
										Last name
									</label>
									<input
										className="h-12 w-full rounded-xl border border-portfolio-midgreen bg-transparent px-5 text-white transition-colors duration-300 hover:border-white"
										placeholder="Last name"
										name="Last name"
										type="text"
										required
									/>
								</div>
							</div>
							<div className="mb-5 w-full">
								<label className="mb-2.5 block" htmlFor="Email address">
									Email address
								</label>
								<input
									className="h-12 w-full rounded-xl border border-portfolio-midgreen bg-transparent px-5 text-white transition-colors duration-300 hover:border-white"
									placeholder="Email address"
									name="Email address"
									type="email"
									required
								/>
							</div>
							<div className="mb-5 w-full">
								<label className="mb-2.5 block" htmlFor="Subject">
									Subject
								</label>
								<input
									className="h-12 w-full rounded-xl border border-portfolio-midgreen bg-transparent px-5 text-white transition-colors duration-300 hover:border-white"
									placeholder="Subject line"
									name="subject"
									type="text"
									required
								/>
							</div>
							<div className="mb-5 w-full">
								<label className="mb-2.5 block" htmlFor="Message">
									Message
								</label>
								<textarea
									className="h-20 w-full rounded-xl border border-portfolio-midgreen bg-transparent px-5 py-4 text-white transition-colors duration-300 hover:border-white"
									placeholder="Write your message here"
									name="Message"
									required
									defaultValue={""}
								/>
							</div>
							<Button type="submit">Send</Button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
