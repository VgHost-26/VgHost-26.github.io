const textes = [].slice.call(document.getElementsByClassName("abberation"))
textes.forEach(item => {
  let text = item.innerHTML
  let regex = /<.*?>/g;
  text = text.replace(regex, "")
  item.style.setProperty("--content", "'" + text + "'")
})

