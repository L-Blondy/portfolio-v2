import Link from 'next/link'
import { ProjectConfig, SkillConfig } from 'types'

export const SLIDER_INTERVAL = 5000

export const VIDEO_PLAYBACK_RATE = 1

export const FOOTER_BACKGROUND_COLOR = '#333f42'

export const HEADER = {
	TITLE: 'Building Solid<br /> Data Driven<br /> Web Applications',
	DESCRIPTION: 'Taking clean, reusable and<br /> maintainable code as a requirement.<br /> Making user experience a priority.',
}

export const PROFILE = {
	TITLE: 'Hi, I’m Laurent.',
	PARAGRAPHS: [
		'I am a front-end software developer currently working at Cenozai where I build web applications for data visualization and processing.',
		'Well organized person, problem solver, independent employee and strong team player, I love working on ambitious projects with positive people.',
		'I strive for clean, reusable and maintainable code. A healthy code base is key to making great products!'
	],
	CONTACT_TEXT: 'Let’s have a chat.',
}

export const PROJECTS: ProjectConfig[] = [
	{
		TITLE: 'H2O.ai',
		DESCRIPTION: `
			Website built over a 2 weeks Web Dev Challenge.
			The requirements: build a fully functional website using no UI library.
		`,
		TECHNOLOGIES: `
			Designed with Figma, built with React, I used the formspree API to handle the form submissions.
		`,
		URL: {
			PROJECT: 'https://l-blondy.github.io/H2O/',
			GITHUB: 'https://github.com/L-Blondy/H2O',
		},
		VIDEO: {
			PHONE: '/videos/H2O-phone.mp4',
			TABLET: '/videos/H2O-tablet.mp4',
		},
		IMAGES: [ '/images/H2O_1.jpg', '/images/H2O_2.jpg', '/images/H2O_3.jpg' ]
	}, {
		TITLE: 'Tina Ponticelli',
		DESCRIPTION: `
			A website featuring the works of Tina Ponticelli, an Italian visual artist.
		`,
		TECHNOLOGIES: <>
			The site was built with JQuery, SASS.
			I built custom npm packages to handle image lazy loading and animations.
			Feel free to check them out
			<Link href='https://preview.npmjs.com/~l-blondy?tab=packages'>
				<a className='text-primary font-semibold pl-1.5 hover:underline' hrefLang='en' aria-label='Laurent Blondy npm profile' target='_blank' rel='noopener noreferrer'>
					here
				</a>
			</Link>.
		</>,
		URL: {
			PROJECT: 'https://l-blondy.github.io/Tina-Ponticelli/',
			GITHUB: 'https://github.com/L-Blondy/Tina-Ponticelli',
		},
		VIDEO: {
			PHONE: '/videos/tina-phone.mp4',
			TABLET: '/videos/tina-tablet.mp4',
		},
		IMAGES: [ '/images/tina_1.jpg', '/images/tina_2.jpg', '/images/tina_3.jpg' ]
	}, {
		TITLE: 'ClearWeather',
		DESCRIPTION: `
			A simple Web app to quickly check the weather worldwide with a 16 days forecast. 
		`,
		// DESCRIPTION: `
		// 	A simple Web app built with React.js and Algolia search to quickly check the weather worldwide. 
		// 	Users type the search term and are offered a 16 days detailed weather forecast for the chosen location.
		// `,
		TECHNOLOGIES: `
			ClearWeather is built with React.js and Algolia Places to provide places autocompletion.
			The data is fetched from the WeatherBit and 7Timer APIs, standardised client side and passed to Recharts to display the graphs.
		`,
		// The Slack bot interacts with a Node.js app living on Heroku, which requests information from a free domain-checking api, 
		// parses the response, and delivers a colour-coded response back to the client.
		URL: {
			PROJECT: 'https://l-blondy.github.io/weather/',
			GITHUB: 'https://github.com/L-Blondy/weather',
		},
		VIDEO: {
			PHONE: '/videos/weather-phone.mp4',
			TABLET: '/videos/weather-tablet.mp4',
		},
		IMAGES: [ '/images/weather_1.jpg', '/images/weather_2.jpg', '/images/weather_3.jpg' ]
	},
]

export const SKILLS: SkillConfig[] = [
	{
		ICON: '/icons/typescript.min.svg',
		TITLE: 'Languages',
		CONTENT: 'Typescript, Javascript ES5+, HTML, CSS',
	}, {
		ICON: '/icons/react.min.svg',
		TITLE: 'Frameworks',
		CONTENT: 'React.js, Next.js',
	}, {
		ICON: '/icons/webpack.min.svg',
		TITLE: 'Tooling',
		CONTENT: 'Webpack, Babel, Git, NPM, Yarn',
	}, {
		ICON: '/icons/jest.min.svg',
		TITLE: 'Testing',
		CONTENT: 'Jest, Testing library',
	}, {
		ICON: '/icons/redux.min.svg',
		TITLE: 'State management',
		CONTENT: 'Redux, Zustand',
	}, {
		ICON: '/icons/axios.min.svg',
		TITLE: 'Async',
		CONTENT: 'Axios, Swr, Websockets',
	}, {
		ICON: '/icons/sass.min.svg',
		TITLE: 'Styling',
		CONTENT: 'SASS, Tailwind, Bootstrap, Styled Components',
	}, {
		ICON: '/icons/figma.min.svg',
		TITLE: 'Design',
		CONTENT: 'Figma',
	}
]


export const META = {
	URL: 'https://blondy.dev/',
	TITLE: 'Laurent Blondy | Frontend Software Developer',
	DESCRIPTION: `${HEADER.TITLE.split('<br />').join('')}.\n${HEADER.DESCRIPTION.split('<br />').join('')}`,
	LANGUAGE: 'en',
	ICON: {
		rel: 'icon',
		href: `/favicon.ico`,
		sizes: "32x32",
	},
	APPLE_TOUCH_IMAGE: {
		rel: 'apple-touch-icon',
		href: `/apple-touch-icon.png`,
		sizes: '64x64'
	},
	OG: {
		LOCALE: 'en_US',
		IMAGE: {
			url: '/open-graph-image.jpg',
			width: 981,
			height: 665,
			alt: 'Laurent Blondy | Frontend Software Developer',
		},
		TAGS: [
			'Laurent Blondy',
			'Laurent',
			'Blondy',
			'Web dev',
			'Frontend web dev',
			'Frontend web dev portfolio',
			'Web dev protfolio',
			'Frontend developer',
			'portfolio',
			'Frontend developer portfolio'
		]
	}
}
