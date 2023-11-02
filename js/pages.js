let size = 2;
let visibleElementFrom = 0
let arr;
let pageNum = 1;
let pageElement;
let articleElement;
function init() {
    arr = document.getElementsByClassName("card")
    pageElement = document.getElementById("pagesMob")
    articleElement = document.getElementById("articlesMob")

    let w = document.documentElement.clientWidth
    if (w>700){
        size = 6
        pageElement = document.getElementById("pages")
        articleElement = document.getElementById("articles")
    }
    // arr.forEach((element) => console.log(element));
    for (let i = size; i < arr.length; i++) {
        arr[i].style.display = "none"
    }
    articleElement.innerText = arr.length
}

function swapRight() {
    if (visibleElementFrom<arr.length-size){
        visibleElementFrom+=size;
        pageNum++
    }
    else{
        pageNum = Math.round(arr.length/size)
        visibleElementFrom = arr.length-size;
        if (pageNum==0)
            pageNum = 1
    }
    swap()
}

function swapLeft() {
    if (visibleElementFrom>=size){
        visibleElementFrom-=size;
        pageNum--
    }
    else{
        visibleElementFrom = 0;
        pageNum = 1
    }

    swap()
}

function swap() {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = "none"
        if (i>=visibleElementFrom && i<visibleElementFrom+size)
            arr[i].style.display = "block"
    }
    pageElement.innerText = pageNum
}
function filter(txt) {
    arr = document.getElementsByClassName("card")
    newArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = "none"
        if (arr[i].lastElementChild.firstElementChild.lastElementChild.innerText==txt){
            newArr.push(arr[i])
            arr[i].style.display = "block"
        }
    }
    arr = newArr
    pageNum = 1
    visibleElementFrom = 0
    swap()
}