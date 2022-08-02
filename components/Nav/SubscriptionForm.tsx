const SubscriptionForm: React.FC<{
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	checkForm: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	formOpen: boolean;
	formRef: React.MutableRefObject<HTMLFormElement>;
	inputRef: React.MutableRefObject<HTMLInputElement>;
	buttonRef: React.MutableRefObject<HTMLButtonElement>;
	submittedText: string;
}> = ({
	handleSubmit,
	checkForm,
	formOpen,
	formRef,
	inputRef,
	buttonRef,
	submittedText,
}) => {
	return (
		<div className="mr-28 mt-4 flex flex-grow flex-col justify-start lg:mt-0">
			<form
				ref={formRef}
				className="mx-auto h-full w-full sm:ml-0 sm:mr-0 lg:w-64"
				onSubmit={(e) => handleSubmit(e)}
			>
				<input type="hidden" name="u" value="15" />
				<input type="hidden" name="f" value="15" />
				<input type="hidden" name="s" />
				<input type="hidden" name="c" value="0" />
				<input type="hidden" name="m" value="0" />
				<input type="hidden" name="act" value="sub" />
				<input type="hidden" name="v" value="2" />
				<div
					className={`overflow-hidden rounded-lg ${
						formOpen
							? "mb-2 h-auto max-h-[50px] opacity-100 [transition:all_0.4s_ease,opacity_0.4s_ease_0.15s]"
							: "max-h-0 opacity-0 [transition:all_0.4s_ease,opacity_0.4s_ease]"
					}`}
				>
					<input
						type="email"
						name="email"
						autoCapitalize="off"
						autoComplete="off"
						autoCorrect="off"
						className="mx-auto min-h-[50px] w-full max-w-xs rounded-lg border-0 px-4 py-2.5 text-sm text-black"
						ref={inputRef}
						placeholder="Email"
						required
					/>
				</div>
				<button
					onClick={(e) => checkForm(e)}
					ref={buttonRef}
					type="submit"
					className="mx-auto mb-8 flex h-10 w-full max-w-xs items-center justify-center rounded-lg border border-portfolio-lightgreen bg-portfolio-midgreen text-sm font-medium text-portfolio-lightgreen transition-colors duration-300 hover:bg-portfolio-lightgreen hover:text-black lg:mt-0 lg:mb-0"
				>
					{submittedText}
				</button>
			</form>
		</div>
	);
};

export default SubscriptionForm;
