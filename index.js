let ticTacToe = () => {
	let o = ["O", "O", "O", "O", "O"]
	let x = ["X", "X", "X", "X", "X"]

	let result = []
	for (let i = 0; i < 3; i++) {
		let row = []
		for (let j = 0; j < 3; j++) {
			let random = Math.floor(Math.random() * 2)
			if (random && o.length > 0) {
				row.push(o.pop())
			} else {
				row.push(x.pop())
			}
		}
		result.push(row)
	}

	return result
}

console.log(ticTacToe())