import { ProjectConfig } from 'types'

export const SLIDER_INTERVAL = 5000

export const VIDEO_PLAYBACK_RATE = 1

export const FOOTER_BACKGROUND_COLOR = '#333f42'

export const PROJECTS: ProjectConfig[] = [
	{
		TITLE: 'H2O.ai',
		DESCRIPTION: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		URL: {
			PROJECT: 'https://l-blondy.github.io/H2O/',
			GITHUB: 'https://github.com/L-Blondy/H2O',
		},
		VIDEO: {
			PHONE: '/videos/H2O-phone.mp4',
			TABLET: '/videos/H2O-tablet.mp4',
		},
		IMAGES: [ '/images/H2O_1.jpg', '/images/H2O_2.jpg', '/images/H2O_3.jpg' ]
	},
	{
		TITLE: 'Tina Ponticelli',
		DESCRIPTION: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		URL: {
			PROJECT: 'https://l-blondy.github.io/Tina-Ponticelli/',
			GITHUB: 'https://github.com/L-Blondy/Tina-Ponticelli',
		},
		VIDEO: {
			PHONE: '/videos/tina-phone.mp4',
			TABLET: '/videos/tina-tablet.mp4',
		},
		IMAGES: [ '/images/tina_1.jpg', '/images/tina_2.jpg', '/images/tina_3.jpg' ]
	},
	{
		TITLE: 'AccuWeather',
		DESCRIPTION: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
