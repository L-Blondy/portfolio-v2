import 'react-typist/dist/Typist.css';
import Typist, { TypistProps } from 'react-typist';
import { ReactChild, ReactChildren } from 'react';
import { cn } from 'utils/cn';

const defaultCursorSettings = { hideWhenDone: true, hideWhenDoneDelay: 3500 }

interface Props extends TypistProps {
	disabled?: boolean
	children?: ReactChild | ReactChildren | JSX.Element | JSX.Element[] | string | null
}

export const TypeWriter = ({
	disabled = false,
	children = null,
	cursor = {},
	className = '',
	...props
}: Props) => {

	className = cn`${disabled && 'invisible'} ${className}`
	cursor = { ...defaultCursorSettings, ...cursor }

	if (disabled)
		return (
			<div className={className}>
				{children}
			</div>
		)

	return (
		<Typist cursor={cursor} className={className} {...props}>
			{children}
		</Typist>
	)
}