const sections = [].slice.call(document.getElementsByClassName("section"))
let blocker = false

function shiftSection(section, n) {
  let shift = n * 83
  section.style.translate = -shift + "dvw 0"
  const items = [].slice.call(section.getElementsByClassName("section-item"))

  items.forEach((item, i) => {
    let img = item.children[1]
    let imgShift = shift - 83 * i
    img.style.translate = imgShift + "dvw 0"

    if (imgShift === 0) {
      item.classList.add("active-item")
      const video = item.querySelector("video")
      if (video) video.play()
      // item.querySelector("video").play()
    } else {
      item.classList.remove("active-item")
      const video = item.querySelector("video")
      if (video) video.pause()
      // item.querySelector("video").pause()
    }
  })
}

sections.forEach(section => {
  const items = [].slice.call(section.getElementsByClassName("section-item"))

  items.forEach((item, i) => {
    if (i === 0) {
      item.classList.add("active-item")
      const video = item.querySelector("video")
      if (video) video.setAttribute("autoplay", true)

      // item.querySelector("video").setAttribute("autoplay", true)
    }
    let shift = i * 83
    let img = item.children[1]
    item.style.translate = shift + "dvw 0"
    img.style.translate = -shift + "dvw 0"

    item.addEventListener("click", () => {
      shiftSection(section, i)
    })

    // item.addEventListener("wheel", e => {
    //   if (e.deltaX === 0) return
    //   if (!blocker) {
    //     blocker = true
    //     if (e.deltaX > 0) shiftSection(section, i + 1)
    //     if (e.deltaX < 0) shiftSection(section, i - 1)

    //     setTimeout(() => {
    //       blocker = false
    //     }, "2000")
    //   }
    // })
  })

  // console.log(items)
})
// console.log(sections)
