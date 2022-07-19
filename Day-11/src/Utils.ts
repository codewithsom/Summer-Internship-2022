import { Event, separateEvent } from "./types"



export const separateEventProps = (myEvent: Event[]): separateEvent[] => {
	const sepEvent: separateEvent[] = []
	
	myEvent.forEach(item => {
		const obj: separateEvent = {
			"type": item.type,
			"name": item.repo.name,
			"date": item.created_at
		}
		sepEvent.push(obj)
	})
	
	return sepEvent
}