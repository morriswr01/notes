import { useEffect } from "react"
import abcjs from "abcjs"

import "./App.css"

function App() {
	const noteClickListener = (abcelem) => {
		// console.log("mouseEvent :", mouseEvent)
		// console.log("drag :", drag)
		// console.log("analysis :", analysis)
		// console.log("classes :", classes)
		// console.log("tuneNumber :", tuneNumber)
		console.log("abcelem :", abcelem)
	}

	useEffect(() => {
		abcjs.renderAbc("App", "X:1\nK:D\nD_D A^A|B2B2A2||\n", { clickListener: noteClickListener })
	}, [])

	return <div className="App" id="App"></div>
}

export default App

/* Things I know about abcjs:
- Can select a note and work out its string position in the abc string notation which will allow me to modify that node
- Can't select non note notation like key sig, bar lines and clef so these will need to be statically set using something like dropdowns at the top
- If you don't specify a number after the note then it defaults to crotchets 
- Can get the value of the note back, I.E 0.25 = crotchet 0.125 = quaver
*/

// https://www.biteyourownelbow.com/abcnotation.htm
// https://intmus.github.io/abc-tutorial.html
