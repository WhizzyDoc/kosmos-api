var html = document.querySelector('#html')
var css = document.querySelector('#css')
var js = document.querySelector('#js')
var high = document.querySelector('#highlighting')
const lineNumbers = document.querySelector('.line-numbers')
const lineNumbers1 = document.querySelector('.line-numbers1')
const lineNumbers2 = document.querySelector('.line-numbers2')

html.addEventListener('keyup', event => {
  const numberOfLines = event.target.value.split('\n').length

  lineNumbers.innerHTML = Array(numberOfLines)
    .fill('<span></span>')
    .join('')
});

js.addEventListener('keyup', event => {
  const numberOfLines2 = event.target.value.split('\n').length

  lineNumbers2.innerHTML = Array(numberOfLines2)
    .fill('<span></span>')
    .join('')
});

css.addEventListener('keyup', event => {
  const numberOfLines1 = event.target.value.split('\n').length

  lineNumbers1.innerHTML = Array(numberOfLines1)
    .fill('<span></span>')
    .join('')
});

textarea.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    event.preventDefault();
    let start = textarea.selectionStart;
    let start1 = high.selectionStart;
    console.log(start);
    console.log(start1);
    //let end = textarea.selectionEnd;
    //let end2 = high.selectionEnd;

    textarea.value = textarea.value.slice(0, start) + "  " + textarea.value.slice(start);
    high.innerHTML = high.innerHTML.slice(0, start1) + "  " + high.innerHTML.slice(start1);
    //start = start + 1;
   // start1 = start1 + 1;
  }
})
