function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget(){
 return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
let things = document.getElementById('app').querySelectorAll('ul.ranked-list li ')
  for (let i=0; i < things.length; i++) {
    parseInt(things[i].innerHtml) + n
  }
  return things
} 

function deepestChild() {
 return document.querySelector('#grand-node').querySelector('div').querySelector('div').querySelector('div').querySelector('div')
}