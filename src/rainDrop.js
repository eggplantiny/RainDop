export class RainDrop {
    constructor (charactor, column, fontSize) {
        this.charactor = charactor
        this.row = 0
        this.r = 0
        this.g = 0
        this.b = 0
        this.fontSize = fontSize
        this.column = column
    }

    animate (ctx) {
        const { fontSize, charactor, row, column } = this
        
        ctx.beginPath()
        ctx.font = `${fontSize}px Georgia;`
        ctx.fillStyle = "red"
        ctx.fillText(charactor, column * fontSize, row * fontSize)

        this.row += 1
    }
}