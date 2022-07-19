import React, { useEffect } from 'react'
import Title from "./components/Title"
import Content from "./components/Content"

function App() {
    useEffect((): void => {
        document.title = "Git Activity Status"
    }, [])
	
	
	return (
		<>
			<Title />
			<Content />
		</>
	)
}

export default App
