import css from './Contact.module.css'


export const Contact = () => {

	function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
		const elements = e.currentTarget.elements
		console.log(elements)
	}

	return (
		<div className='container text-white flex flex-col gap-7'>
			<div className='flex flex-col gap-2 opacity-90'>
				<h1>Contact me</h1>
				<p className='opacity-70 text-lg'>Feel free to reach out.<br /> I'd love to hear from you!</p>
			</div>

			<form className='flex flex-col gap-5' style={{ fontSize: '17px' }} onSubmit={handleSubmit}>
				<label className={css.label}>
					Email
					<input
						className={css.field}
						type='email'
						name='email'
						placeholder='Enter your email'
					/>
				</label>
				<label className={css.label}>
					Name
					<input
						className={css.field}
						type='fullname'
						name='fullname'
						placeholder='Enter your name'
					/>
				</label>
				<label className={css.label}>
					Message
					<textarea
						className={css.field}
						name='message'
						rows={10}
						placeholder='Your message here'
					/>
				</label>
			</form>
		</div>
	)
}