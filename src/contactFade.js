const contactTitle = document.getElementById("contact")
const social = [].slice.call(document.getElementsByClassName("social"))[0]
const contactList = [].slice.call(social.getElementsByTagName("a"))

let running = false
let stillOn = false

function changeSign(name) {
  if (!running) {
    running = true
    name = name.toUpperCase()
    name += "."
    if (contactTitle.innerHTML != name) {
      let reducedSize = 0
      if (name.length > 8) {
        reducedSize = (name.length - 8) * 2
      }
      let time = 100
      let animatedName = ""
      let i = 0
      const letters = name.split("")

      let interval = setInterval(() => {
        time = Math.random() * 500 + 100
        animatedName += letters[i]
        contactTitle.innerHTML = animatedName
        contactTitle.style.fontSize = 34 - reducedSize + "dvw"
        i++

        if (i >= name.length) {
          clearInterval(interval)
          running = false
        }
      }, time)
    }
  }

  // contactTitle.innerHTML = name;
}

contactList.forEach(el => {
  let wait
  el.addEventListener("mouseover", () => {
    wait = setTimeout(() => changeSign(el.name), 250)
  })
  el.addEventListener("mouseout", () => clearTimeout(wait))
})
