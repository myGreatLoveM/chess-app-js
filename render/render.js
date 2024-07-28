import * as pieces from "../data/pieces.js"


function pieceRender(boardData) {
    boardData.forEach((rowWiseBoardData) => {
      rowWiseBoardData.forEach((squareData) => {
        if (squareData.pieceData) {
          const square = document.getElementById(
            squareData.pieceData.currentPosition
          )
          const pieceImg = document.createElement('img')
          pieceImg.src = squareData.pieceData.imgPath
          pieceImg.classList.add('piece')
          square.appendChild(pieceImg)
        }
      })
    })
}


function initGameRender(boardData, ROOT) {
    boardData.forEach(rowData => {
        const row = document.createElement('div')
        row.classList.add('row')
        rowData.forEach(squareData => {
            const square = document.createElement('div')
            square.id = squareData.id
            square.classList.add('square', squareData.color)

            const squareId = document.createElement('div')
            squareId.textContent = squareData.id
            squareId.classList.add('squareId')
            if (squareData.color === "black") {
                squareId.style.color = "white"
            }

            pieceInitialPostion(squareData)

            square.appendChild(squareId)
            row.appendChild(square)
        })
        ROOT.appendChild(row)
    })
    console.log(boardData)
    pieceRender(boardData)
}

function pieceInitialPostion(squareData) {
    const rows = ["1", "2", "7", "8"]

    if (rows.includes(squareData.id[1])) {
        if (squareData.id[1] === "7") {
          squareData.pieceData = pieces.blackPawn(squareData.id)
        }
        else if (squareData.id[1] === "2") {
          squareData.pieceData = pieces.whitePawn(squareData.id)
        }
        else if (squareData.id === "h8" || squareData.id === "a8") {
            squareData.pieceData = pieces.blackRook(squareData.id)
        }
        else if (squareData.id == "b8" || squareData.id == "g8") {
          squareData.pieceData = pieces.blackKnight(squareData.id)
        }
        else if (squareData.id == "c8" || squareData.id == "f8") {
          squareData.pieceData = pieces.blackBishop(squareData.id)
        }
        else if (squareData.id == "d8") {
          squareData.pieceData = pieces.blackQueen(squareData.id)
        }
        else if (squareData.id == "e8") {
          squareData.pieceData = pieces.blackKing(squareData.id)
        }
        else if (squareData.id == "a1" || squareData.id == "h1") {
          squareData.pieceData = pieces.whiteRook(squareData.id)
        }
        else if (squareData.id == "b1" || squareData.id == "g1") {
          squareData.pieceData = pieces.whiteKnight(squareData.id)
        }
        else if (squareData.id == "c1" || squareData.id == "f1") {
          squareData.pieceData = pieces.whiteBishop(squareData.id)
        }
        else if (squareData.id == "d1") {
          squareData.pieceData = pieces.whiteQueen(squareData.id)
        }
        else if (squareData.id == "e1") {
          squareData.pieceData = pieces.whiteKing(squareData.id)
        }
    }
}



export {
    initGameRender,
    pieceRender
}