import { ProjectConfig, SkillConfig } from 'types'

export const SLIDER_INTERVAL = 5000

export const VIDEO_PLAYBACK_RATE = 1

export const FOOTER_BACKGROUND_COLOR = '#333f42'

export const HEADER = {
	TITLE: 'Building Solid<br /> Data Driven<br /> Web Applications',
	DESCRIPTION: 'Taking clean, reusable and<br /> maintainable code as a requirement.<br /> Making user experience a priority.',
}

export const PROJECTS: ProjectConfig[] = [
	{
		TITLE: 'H2O.ai',
		DESCRIPTION: `
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		`,
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
			A simple serverless web app built with React.js and Algolia search to quickly check the weather worldwide. 
			Users type the search term and are offered a 16 days detailed weather forecast for the chosen location.
		`,
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
		ICON: '/icons/typescript.svg',
		TITLE: 'Languages',
		CONTENT: 'Typescript, Javascript ES5+, HTML, CSS',
	}, {
		ICON: '/icons/react.svg',
		TITLE: 'Frameworks',
		CONTENT: 'React.js, Next.js',
	}, {
		ICON: '/icons/webpack.svg',
		TITLE: 'Tooling',
		CONTENT: 'Webpack, Babel, Git, NPM, Yarn',
	}, {
		ICON: '/icons/jest.svg',
		TITLE: 'Testing',
		CONTENT: 'Jest, Testing library',
	}, {
		ICON: '/icons/redux.svg',
		TITLE: 'State management',
		CONTENT: 'Redux, Zustand',
	}, {
		ICON: '/icons/axios.svg',
		TITLE: 'Async',
		CONTENT: 'Axios, Swr, Websockets',
	}, {
		ICON: '/icons/sass.svg',
		TITLE: 'Styling',
		CONTENT: 'SASS, Tailwind, Bootstrap, Styled Components',
	}, {
		ICON: '/icons/figma.svg',
		TITLE: 'Design',
		CONTENT: 'Figma',
	}
]


export const META = {
	URL: 'https://portfolio-v2-eosin.vercel.app/',
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
			'Laurent',
			'Blondy',
			'Laurent Blondy',
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
