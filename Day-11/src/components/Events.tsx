import { FC } from "react"
import { Event } from "../types"
import "../styles/Events.style.css"
import cls from "classnames"

interface EventsProps {
	arr: Event[]
}

const Events: FC<EventsProps> = ({arr}): JSX.Element => {

	return(
		<>
			{
				arr.map(item => {
					return (
						<div className={cls("outerBox", `${item.type}`)}>
							<div className="type">
								{ item.type }
							</div>
							<div className="name">
								{
									<a href={ `https://www.github.com/${ item.repo.name }` } >
										{item.repo.name}
									</a>
									
								}
							
							</div>
							<div className="date">
								{
									new Date(item.created_at).toDateString()
								}
							</div>
						</div>
					)
				})
			}
		</>
		
	)
	
	
}

export default Events