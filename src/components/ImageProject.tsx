import { BaseProjectProps, ProjectConfig } from 'types'
import Link from 'next/link'
import { Button } from 'components/Button'
import { Slider } from 'components/Slider'
import { GithubIcon } from 'components/icons/GithubIcon'
import { InView } from 'react-intersection-observer'
import { cn } from 'utils/cn'
import { getObserverRootElement } from 'utils/getObserverRootElement'


export interface Props extends BaseProjectProps {
	images: ProjectConfig[ 'IMAGES' ]
}

export const ImageProject = ({
	title,
	description,
	githubUrl,
	projectUrl,
	images,
}: Props) => {



	return (
		<InView threshold={1} rootMargin='-30px 100px' root={getObserverRootElement()}>
			{({ inView: inView1, ref: ref1 }) => (
				<article id={title} >
					<InView rootMargin='99999px 0px 0px 0px' root={getObserverRootElement()}>
						{({ inView: inView2, ref: ref2 }) => (<>
							<div ref={ref2}>
								<Slider
									ref={ref1}
									images={images}
									width={600}
									height={300}
									canPlay={inView1}
									className={cn`opacity-0 ${inView2 && 'animate-from-right-sm'} speed-700`}
								/>
							</div>

							<div className='flex flex-col gap-4 mt-4'>
								<h2 className={cn`text-3xl opacity-0 ${inView2 && 'animate-from-right-sm'} await-200 speed-500`}>
									{title}
								</h2>

								<div className={cn`opacity-0 ${inView2 && 'animate-from-right-sm'} await-300 speed-500`}>
									<p className='opacity-85'>{description}</p>
								</div>

								<div className={cn`flex gap-3 py-1.5 opacity-0 ${inView2 && 'animate-from-right-sm'} await-400 speed-500`}>
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
						</>)}
					</InView>


				</article>
			)}
		</InView>
	)
}
