import { RainDrop } from './rainDrop.js'

class App {
    constructor () {
        this.canvas = document.createElement('canvas')
        document.body.appendChild(this.canvas)

        this.ctx = this.canvas.getContext('2d')
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        this.fontSize = 10

        this.rainDropList = []
        this.rainDropList.push(new RainDrop('0', 10, this.fontSize))

        window.addEventListener('resize', this.resize.bind(this), false)
        window.requestAnimationFrame(this.animate.bind(this))
        this.resize()
    }

    resize () {
        this.stageWidth = document.body.clientWidth
        this.stageHeight = document.body.clientHeight

        this.canvas.width = this.stageWidth * this.pixelRatio
        this.canvas.height = this.stageHeight * this.pixelRatio
        this.ctx.scale(this.pixelRatio, this.pixelRatio)
    }

    animate () {
        const { ctx, fontSize } = this
        window.requestAnimationFrame(this.animate.bind(this))
        this.rainDropList.forEach(rainDrop => rainDrop.animate(ctx))
    }
}

window.onload = () => new App()
