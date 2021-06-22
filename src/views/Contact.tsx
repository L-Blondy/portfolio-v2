import css from './Contact.module.css'
import { Button } from 'components/Button'
import { postContactForm } from 'async/postContactForm'
import { useEffect, useRef, useState } from 'react'
import { LoadingIcon } from 'components/icons/LoadingIcon'
import { SuccessIcon } from 'components/icons/SuccessIcon'
import { notify } from 'utils/notify'
import { SECTION_ID } from 'types'


enum CONTACT_FORM_FIELD {
	EMAIL = 'email',
	FULLNAME = 'fullname',
	MESSAGE = 'message',
}

export const Contact = () => {

	const formRef = useRef<HTMLFormElement | null>(null)
	const [ isSubmitting, setIsSubmitting ] = useState(false)
	const [ sentWithSuccess, setSentWithSuccess ] = useState(false)
	const [ messageCount, setMessageCount ] = useState(0)

	useEffect(() => {
		messageCount && formRef.current?.reset()
	}, [ messageCount ])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
		e.preventDefault()
		const elements: (HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement)[] = [].slice.call(e.currentTarget.elements) as any

		const values = elements.reduce((values, el) => {
			const fieldName = el.name as CONTACT_FORM_FIELD | undefined
			const fieldValue = el.value
			if (!fieldName || !fieldValue) return values
			return { ...values, [ fieldName ]: fieldValue }
		}, {} as Record<CONTACT_FORM_FIELD, string>)
		setIsSubmitting(true)

		postContactForm(values)
			.then(() => {
				setSentWithSuccess(true)
				notify('success')('Your message was sent with success!')
			})
			.catch(() => {
				setSentWithSuccess(false)
				notify('danger')('An unknown error has occured. Please try again later.')
			})
			.finally(() => {
				setIsSubmitting(false)
				setMessageCount(c => c + 1)
			})
	}

	return (
		<div id={SECTION_ID.CONTACT} className='container flex flex-col gap-7 pt-8 mt-12'>
			<div className='flex flex-col gap-5 text-center mb-4'>
				<h1 className='text-primary-xdark'>Contact me</h1>
				<p className='opacity-80 text-lg'>Feel free to reach out.<br /> I'd love to hear from you!</p>
			</div>

			<form ref={formRef} className='flex flex-col gap-6 md:grid md:grid-cols-2 lg:mt-1 self-center w-full max-w-lg' style={{ fontSize: '17px' }} onSubmit={handleSubmit}>
				<div className={css.container}>
					<label className={css.label} htmlFor={CONTACT_FORM_FIELD.EMAIL} />

					<input
						className={css.field}
						type='email'
						name={CONTACT_FORM_FIELD.EMAIL}
						id={CONTACT_FORM_FIELD.EMAIL}
						placeholder='Enter your email'
						maxLength={100}
						required
					/>
				</div>

				<div className={css.container}>
					<label className={css.label} htmlFor={CONTACT_FORM_FIELD.FULLNAME} />
					<input
						className={css.field}
						type='text'
						name={CONTACT_FORM_FIELD.FULLNAME}
						id={CONTACT_FORM_FIELD.FULLNAME}
						placeholder='Enter your name'
						minLength={3}
						maxLength={60}
						required
					/>
				</div>

				<div className={`md:col-span-2 ${css.container}`}>
					<label className={css.label} htmlFor={CONTACT_FORM_FIELD.MESSAGE} />

					<textarea
						className={css.field}
						name={CONTACT_FORM_FIELD.MESSAGE}
						id={CONTACT_FORM_FIELD.MESSAGE}
						rows={10}
						placeholder='Your message here'
						minLength={20}
						maxLength={1000}
						required
					/>
				</div>
				<div className='flex items-center justify-center md:col-span-2'>
					<Button className='w-40 mt-2' disabled={isSubmitting}>
						SEND MESSAGE {isSubmitting ? <LoadingIcon className='ml-0.5' width={18} strokeWidth={6} /> : sentWithSuccess ? <SuccessIcon className='mx-0.5' /> : ''}
					</Button>
				</div>
			</form>
		</div>
	)
}