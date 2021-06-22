import css from './Contact.module.css'
import { Button } from 'components/Button'


export const Contact = () => {

	function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
		const elements = e.currentTarget.elements
		console.log(elements)
	}

	return (
		<div className='container flex flex-col gap-7 mt-20'>
			<div className='flex flex-col gap-5 text-center mb-4'>
				<h1 className='text-primary-xdark'>Contact me</h1>
				<p className='opacity-80 text-lg'>Feel free to reach out.<br /> I'd love to hear from you!</p>
			</div>

			<form className='flex flex-col gap-6 md:grid md:grid-cols-2 lg:mt-1 self-center w-full max-w-lg' style={{ fontSize: '17px' }} onSubmit={handleSubmit}>
				<div className={css.container}>
					<label className={css.label} htmlFor='email' />

					<input
						className={css.field}
						type='email'
						name='email'
						id='email'
						placeholder='Enter your email'
					/>
				</div>

				<div className={css.container}>
					<label className={css.label} htmlFor='fullname' />
					<input
						className={css.field}
						type='text'
						name='fullname'
						id='fullname'
						placeholder='Enter your name'
					/>
				</div>

				<div className={`md:col-span-2 ${css.container}`}>
					<label className={css.label} htmlFor='message' />

					<textarea
						className={css.field}
						name='message'
						id='message'
						rows={10}
						placeholder='Your message here'
					/>
				</div>
				<div className='flex items-center justify-center md:col-span-2'>
					<Button className='w-44 mt-2'>SEND MESSAGE</Button>
				</div>
			</form>
		</div>
	)
}