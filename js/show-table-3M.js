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
  table.style.maxHeight = '283px'
  block5.style.maxHeight = '350px'
  blocklist.style.maxHeight = '350px'
}
