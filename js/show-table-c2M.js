let btn = document.getElementById('but')
let btnrev = document.getElementById('butrev')
let table = document.getElementById('tab')
let btn2 = document.getElementById('but2')
let table2 = document.getElementById('tab2')
let btn3 = document.getElementById('but3')
let table3 = document.getElementById('tab3')
let block5 = document.getElementById('block5')
let block6 = document.getElementById('block6')
let block7 = document.getElementById('block7')
let btn4 = document.getElementById('but4')
let table4 = document.getElementById('tab4')
let block8 = document.getElementById('block8')
let blocklist = document.getElementById('block-list')
let btnrev2 = document.getElementById('butrev2')
let btnrev3 = document.getElementById('butrev3')
let btnrev4 = document.getElementById('butrev4')
let btn5 = document.getElementById('but5')
let block9 = document.getElementById('block9')
let btnrev5 = document.getElementById('butrev5')
let table5 = document.getElementById('tab5')

btn.onclick = function() {
  btn.style.display = 'none'
  btnrev.style.display = ''
  table.style.maxHeight = '999px'
  block5.style.maxHeight = '999px'
  blocklist.style.maxHeight = '999px'
}

btnrev.onclick = function() {
  btn.style.display = ''
  btnrev.style.display = 'none'
  table.style.maxHeight = '191px'
  block5.style.maxHeight = '241px'
  blocklist.style.maxHeight = '241px'
}

btn2.onclick = function() {
  btn2.style.display = 'none'
  table2.style.maxHeight = '999px'
  block6.style.maxHeight = '999px'
}

btnrev2.onclick = function() {
  btn2.style.display = ''
  btnrev2.style.display = 'none'
  table2.style.maxHeight = '191px'
  block6.style.maxHeight = '241px'
  blocklist.style.maxHeight = '241px'
}

btn3.onclick = function() {
  btn3.style.display = 'none'
  table3.style.maxHeight = '999px'
  block7.style.maxHeight = '999px'
}

btnrev3.onclick = function() {
  btn3.style.display = ''
  btnrev3.style.display = 'none'
  table3.style.maxHeight = '191px'
  block7.style.maxHeight = '241px'
  blocklist.style.maxHeight = '241px'
}

btn4.onclick = function() {
  btn4.style.display = 'none'
  table4.style.maxHeight = '999px'
  block8.style.maxHeight = '999px'
}

btnrev4.onclick = function() {
  btn4.style.display = ''
  btnrev4.style.display = 'none'
  table4.style.maxHeight = '191px'
  block8.style.maxHeight = '241px'
  blocklist.style.maxHeight = '241px'
}

btnrev5.onclick = function() {
  btn5.style.display = ''
  btnrev5.style.display = 'none'
  table5.style.maxHeight = '191px'
  block9.style.maxHeight = '241px'
  blocklist.style.maxHeight = '241px'
}

btn5.onclick = function() {
  btn5.style.display = 'none'
  btnrev5.style.display = ''
  table5.style.maxHeight = '999px'
  block9.style.maxHeight = '999px'
  blocklist.style.maxHeight = '999px'
}
