function move_flashlight(x, y) {
  let flashlight = document.querySelector("#flashlight")
  let top = parseInt(getComputedStyle(flashlight).top)
  let left = parseInt(getComputedStyle(flashlight).left)



flashlight.style.transform = `translate(${x - 50 - left}px,${y - 50 - top}px)`
}

document.body.addEventListener("mousemove", function (e) {
  move_flashlight(e.clientX, e.clientY)
})

document.body.addEventListener("click", function (e) {
  window.location.href = "inicio.html"
})

