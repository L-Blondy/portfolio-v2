

interface Props extends React.ComponentProps<'button'> {
	className?: string
	outlined?: boolean
}

export const Button = ({
	className = '',
	outlined,
	...props
}: Props) => {
	const shared = 'border-2 border-primary font-semibold inline-flex items-center justify-center gap-1.5 pt-2 pb-1 px-3 max-w-2xs rounded'

	const specific = outlined
		? 'bg-transparent text-primary  '
		: 'bg-primary text-white'

	return (
		<button
			className={`${shared} ${specific} ${className}`}
			{...props}
		/>
	)
}