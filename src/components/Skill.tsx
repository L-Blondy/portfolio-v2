import Image from 'next/image'
import { forwardRef } from 'react'


interface SkillProps {
	icon: string
	title: string
	content: string
	className: string
}

export const Skill = forwardRef<HTMLDivElement, SkillProps>(({
	icon,
	title,
	content,
	className
}, ref) => {

	return (
		<div ref={ref} className={`flex justify-center ${className}`}>
			<div className='inline-flex flex-col text-center w-52'>
				<Image src={icon} height={48} width={48} loading='eager' alt={title} />
				<h2 className='text-xl mt-3.5 mb-1.5 text-gray-700'>{title}</h2>
				<p className='opacity-90'>{content}</p>
			</div>
		</div>
	)
})