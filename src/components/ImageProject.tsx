import { BaseProjectProps, ProjectConfig } from 'types'
import Link from 'next/link'
import { Button } from 'components/Button'
import { Slider } from 'components/Slider'
import { GithubIcon } from 'components/icons/GithubIcon'
import { InView } from 'react-intersection-observer'


export interface Props extends BaseProjectProps {
	images: ProjectConfig[ 'IMAGES' ]
}

export const ImageProject = ({
	title,
	description,
	technologies,
	githubUrl,
	projectUrl,
	images,
}: Props) => {



	return (
		<InView threshold={1} rootMargin='-30px 0px' root={document.querySelector('#__next .app-scrollbars > div')}>
			{({ inView, ref }) => (console.log(inView, title),
				<article id={title} >
					<Slider
						ref={ref}
						images={images}
						width={600}
						height={300}
						canPlay={inView}
					/>

					<div className='flex flex-col gap-4 mt-4'>
						<h2 className='text-3xl'>{title}</h2>
						<p>{description}</p>
						<div className='flex gap-3 py-1'>
							<Link href={projectUrl}>
								<a target='_blank' rel='noopener noreferrer'>
									<Button>
										VISIT WEBSITE
									</Button>
								</a>
							</Link>
							<Link href={githubUrl}>
								<a target='_blank' rel='noopener noreferrer'>
									<Button className='w-32' outlined>
										GITHUB
										<GithubIcon className='pb-px' />
									</Button>
								</a>
							</Link>
						</div>
					</div>
				</article>
			)}
		</InView>
	)
}
