import { InView } from 'react-intersection-observer'
import { cn } from 'utils/cn'


export const Divider = () => {

	return (
		<InView>
			{({ ref, inView }) => (
				<div
					ref={ref}
					className={cn`
						divider
						mt-10
						md:mt-14
						lg:mt-18
						transform 
						transition-transform 
						duration-1000 
						ease-out
						${inView ? 'scale-x-100' : 'scale-x-0'}
					`}
				/>
			)}
		</InView>
	)
}