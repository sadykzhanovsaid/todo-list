export function getTextWidth(text, font = " 600 32px Montserrat") {
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"))
    const context = canvas.getContext("2d")
    context.font = font

    const metrics = context.measureText(text)
    return Math.ceil(metrics.width)
}