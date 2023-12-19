function closeMenu() {
  openMenuCheckbox.checked = false
}

// dynamic hover line width in menu list items
const listItems = [].slice.call(document.getElementsByClassName("menu-item"))
listItems.forEach(item => {
  const a = [].slice.call(item.getElementsByTagName("a"))[0]
  const hr = [].slice.call(item.getElementsByTagName("hr"))[0]
  item.addEventListener("mouseover", e => {
    hr.style.width = a.offsetLeft + "px"
  })
  item.addEventListener("mouseout", e => {
    hr.style.width = 0
  })
  a.addEventListener("click", closeMenu)
})

const previewImages = [].slice.call(document.getElementsByClassName("img-gif"))
previewImages.forEach(img => {
  img.addEventListener("mouseover", e => {
    e.target.src = e.target.src.replace(".webp", ".gif")
  })
  img.addEventListener("mouseout", e => {
    e.target.src = e.target.src.replace(".gif", ".webp")
  })
})
