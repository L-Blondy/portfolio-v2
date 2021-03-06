import { SECTION_ID } from 'types'
import { useInView } from 'react-intersection-observer'
import { cn } from 'utils/cn'

enum TAB {
	FRONTEND = 'frontend',
	BACKEND = 'backend',
}

interface Props {
	id: SECTION_ID
	title: string
	disableBE?: boolean
	className?: string
	onTabChange: (tab: TAB) => void
	tab: TAB
}

export const SectionHeaderWithTabs = ({
	id,
	title,
	disableBE = false,
	className = '',
	onTabChange,
	tab,
}: Props) => {

	const { ref, inView } = useInView({})


	return (
		<header id={id} className={className}>
			<div ref={ref} className='flex flex-col items-center'>
				<div className='opacity-90'>
					<h2 className={cn`h1 opacity-0 ${inView && 'animate-scalein'}`}>
						{title}
					</h2>
				</div>

				<div className='flex items-center mt-4'>
					<div className=''>
						<button
							onClick={() => onTabChange(TAB.FRONTEND)}
							className={cn`
							link
							px-3
							py-1
							await-300 
							opacity-0
							transition-none
							${tab === TAB.FRONTEND ? 'active font-semibold' : 'font-medium'} 
							${inView && 'animate-from-left-sm'} 
						`}>
							Frontend
						</button>
					</div>

					<div
						className={cn`
						w-px
						h-5
						bg-current
						opacity-70
						transform
						scale-0
						${inView && 'animate-scalein-full'} await-500
					`}
					/>

					<div className={disableBE ? 'opacity-60' : ''}>
						<button
							onClick={() => onTabChange(TAB.BACKEND)}
							disabled={disableBE}
							style={{ opacity: 0 }}
							className={cn`
							link
							px-3
							py-1
							await-300 
							opacity-0
							transition-none
							${tab === TAB.BACKEND ? 'active font-semibold' : 'font-medium'} 
							${inView && 'animate-from-right-sm'} 
						`}>
							Backend
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}