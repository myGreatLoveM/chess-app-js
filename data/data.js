function squareData(id, color, pieceData) {
    return { id, color, pieceData }
}

function rawSquareData(rawId) {
    const rawData = []
    const cols = ["a", "b", "c", "d", "e", "f", "g", "h"]

    cols.forEach((colId, colIdx)  => {
        if (rawId % 2 === 0) {
          if (colIdx % 2 === 0) {
            rawData.push(squareData(colId + rawId, 'white', null))
          } else {
            rawData.push(squareData(colId + rawId, 'black', null))
          }
        } else {
          if (colIdx % 2 === 0) {
            rawData.push(squareData(colId + rawId, 'black', null))
          } else {
            rawData.push(squareData(colId + rawId, 'white', null))
          }
        }
    })
    return rawData
}


function initGameData() {
    const boardData = []
    for (let i = 8; i >= 1; i--) {
        boardData.push(rawSquareData(i))
    }
    return boardData
}


export { initGameData }