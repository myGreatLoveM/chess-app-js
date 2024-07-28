import { ROOT } from "./helper/constants.js"
import { initGameData } from "./data/data.js"
import { initGameRender } from "./render/render.js"

const boardData = initGameData()

initGameRender(boardData, ROOT)

