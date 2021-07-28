import { CSSProperties } from 'react'
import { cn } from 'utils/cn'


interface Props extends React.ComponentProps<'button'> {
	className?: string
	outlined?: boolean
	style?: CSSProperties
}

const sharedClassNames = cn`
	border-2
	border-primary
	inline-flex
	items-center
	justify-center
	gap-1.5
	pt-2
	pb-1.75
	px-4
	max-w-2xs
	rounded
	hover:filter
	hover:brightness-110
	transition-all
	duration-100
`

export const Button = ({
	className = '',
	outlined,
	style = {},
	...props
}: Props) => {

	const specific = outlined
		? 'bg-transparent text-primary '
		: 'bg-primary text-white'

	style = {
		fontSize: '18px',
		// fontFamily: 'Roboto',
		fontWeight: 600,
		...style
	}

	return (
		<button
			className={`${sharedClassNames} ${specific} ${className}`}
			style={style}
			{...props}
		/>
	)
}