import { ALIGN, SECTION_ID } from 'types'

type VoidFunction = () => void

export const scrollsToSection = (sectionId: SECTION_ID, align: ALIGN = ALIGN.TOP): VoidFunction => {

	return () => {
		const section = document.getElementById(sectionId)
		section?.scrollIntoView({ block: align })
	}
}