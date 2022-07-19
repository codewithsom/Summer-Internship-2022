import { FC } from "react"
import '../styles/Title.style.css'

const Title: FC = (): JSX.Element => {
	return(
		<>
			<div className="titleContainer">
				<div className="mainTitle">
					Git Activity Status
				</div>
				<div className="subTitle">
					Let's have a look 😀
				</div>
			</div>
		</>
	)
}

export default Title