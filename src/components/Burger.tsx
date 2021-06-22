import css from './Burger.module.css'
import { cn } from 'utils/cn'

interface Props {
	className?: string
	onClick: () => void
	isOpen: boolean
}

export const Burger: React.FC<Props> = ({
	children,
	className = '',
	onClick,
	isOpen,
}) => {

	return (
		<>
			<div id='burger' className={className}>
				<button onClick={onClick} className={`${css.burger} ${isOpen ? css.open : css.close}`}>
					<div className={`${css.wrapper} ${isOpen ? css.open : css.close}`}>
						<div className={`${css.l1} ${isOpen ? css.open : css.close}`}></div>
						<div className={`${css.l2} ${isOpen ? css.open : css.close}`}></div>
						<div className={`${css.l3} ${isOpen ? css.open : css.close}`}></div>
					</div>
				</button>
			</div>

			<div
				onClick={onClick}
				className={cn`
					md:hidden
					${isOpen ? 'flex animate-fadein-xfast' : 'hidden'}
					fixed
					inset-0
					flex-col
					justify-center
					gap-y-2
					pb-14
					sm:pb-24
					text-center
					text-2xl
					tracking-wider
				`}>
				{children}
			</div>
		</>
	)
}