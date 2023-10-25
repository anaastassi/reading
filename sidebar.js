function changeActive(elem){
    for (const child of elem.parentNode.children) {
        child.className = child.className.replace(" active","")
      }
    elem.className += ' active'
}