import { CSSProperties } from 'react'


interface Props extends React.ComponentProps<'button'> {
	className?: string
	outlined?: boolean
	style?: CSSProperties
}

export const Button = ({
	className = '',
	outlined,
	style = {},
	...props
}: Props) => {
	const shared = 'border-2 border-primary inline-flex items-center justify-center gap-1.5 pt-2 pb-1.75 px-3.5 max-w-2xs rounded hover:filter hover:brightness-110 transition-all duration-100'

	const specific = outlined
		? 'bg-transparent text-primary '
		: 'bg-primary text-white'

	style = {
		fontSize: '15px',
		fontFamily: 'Roboto',
		fontWeight: 500,
		...style
	}

	return (
		<button
			className={`${shared} ${specific} ${className}`}
			style={style}
			{...props}
		/>
	)
}