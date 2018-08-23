function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget(){
 return document.querySelector('#nested').querySelector('.target')
}

function increaseRankBy(n) {
let things = document.getElementById('app').querySelectorAll('ul.ranked-list li ')
  for (let i=0; i < things.length; i++) {
    things[i].innerHTML = parseInt(things[i].innerHTML) + n.tostring()
  } 
}

function deepestChild() {
 return document.querySelector('#grand-node').querySelector('div').querySelector('div').querySelector('div').querySelector('div')
}