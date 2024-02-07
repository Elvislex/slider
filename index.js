/*
let output

output = document.all
output = document.head.children
output = document.documentElement
output = document.body.children


output = document.getElementById('filter')

output = document.querySelectorAll('.item')

output = document.querySelector('.title')
//output.innerHTML = '<h1>Hello</h1>'
//output.style.color = 'red'
//output.style.backgroundColor = 'black'

output = document.querySelector('ul')

output = document.querySelectorAll('p')
//output[1].style.color = 'red'


output = document.querySelectorAll('.item')

output.forEach((item, index) => {

  if (index === 1) {
    // item.remove()
  }
  //item.style.color = 'red'
})

output = document.getElementsByClassName('item')
output = Array.from(output)
output.forEach((item) => {
  //console.log(item)
})


const createListItem = (item) => {
  const li = document.createElement('div')

  li.className = 'item'

  li.innerHTML = `${item}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-trash3-fill svg"
      viewBox="0 0 16 16"
    >
      <path
        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
      />
    </svg>`

  document.querySelector('.items').appendChild(li)

}

createListItem('Yam')
const createListItem2 = (item) => {
  const item2 = document.createElement('li')
  item2.className = 'item'
  const text = document.createTextNode(item)

  const button = document.createElement('button')
  button.className = 'btn1'


  // button.appendChild(svg)
  item2.appendChild(text)
  item2.appendChild(button)

  document.querySelector('ul').appendChild(item2)


  console.log(item2)
}

createListItem2('oil')


const item1 = document.querySelector('#filter')
const text = document.createElement('h5')
text.textContent = 'peas'

item1.insertAdjacentElement("afterend", text)


console.log(item1)


const li = document.querySelector('.item')
li.insertAdjacentText('afterend', 'okay')
//insertAdjacentElement




//insert After....a custom function
function insertafter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling)
  console.log(thirdItem)
}



const x = document.createElement('li')
x.textContent = 'insert after'
x.className = 'item'
const thirdItem = document.querySelector('li:nth-child(3)')

insertafter(x, thirdItem)




function replaceFirstItem() {
  const li = document.querySelector('li:nth-child(5)')

  const newItem = document.createElement('li')
  newItem.textContent = 'Soup'

  const button = document.createElement('button')

  const svg = document.querySelector('svg:nth-child(3)')

  button.className = 'btn1'
  newItem.className = 'item'

  newItem.appendChild(button)


  li.replaceWith(newItem)

  console.log(button)
}


const a = () => {
  const s = document.querySelectorAll('li')


  s.forEach((x, index) => {

    if (index === 3) {
      x.innerHTML = 'lol'
    } else {
      x.outerHTML = '<li>okay</li>'

    }
  })

  console.log('b')
}
a()
replaceFirstItem()


const replaceChildd = () => {
  const shoppingList = document.querySelector('.title')
  const h1 = document.querySelector('.title h1')

  const newElement = document.createElement('h3')
  newElement.textContent = 'everyday supermarket'

  shoppingList.replaceChild(newElement, h1)
}

replaceChildd()

output = document
console.log(output)


///removing dom elements

const removeItem = () => {
  const item = document.querySelector('.btn2')
  item.remove()
}

removeItem()


function removeSecChild() {
  const ul = document.querySelector('ul:nth-child(2)')


  console.log(ul)
}


removeSecChild()

//const clearBtn = document.querySelector('.btn2')

/*
clearBtn.onclick = function () {
  alert('clear items')
}


const onclick = () => {
  alert('hello')
}

//clearBtn.addEventListener('click', onclick)


//setTimeout(() => clearBtn.click(), 4000)
//setTimeout(() => clearBtn.removeEventListener('click', onclick), 5000)

const removeAll = () => {
  const itemList = document.querySelector('ul')
  const items = itemList.querySelectorAll('li')

  //while (itemList.firstChild) {
  //itemList.firstChild.remove()
  //}

  //items.forEach((item) => item.remove())
  //itemList.innerHTML = ''
}

clearBtn.addEventListener('click', removeAll)

///////////////////////////////////////////////

const logo = document.querySelector('img')
const addItem = document.querySelector('.btn')

//const onClick = () => console.log('okay')
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'pink') {
    document.body.style.backgroundColor = 'pink'
    document.body.style.color = 'white'
  } else {
    document.body.style.backgroundColor = ' aliceblue'
    document.body.style.color = 'black'

  }
}

const onRightClick = () => {
  const h1 = document.querySelector('h1')
  const filter = document.querySelector('#filter')

  h1.style.color = 'brown'
  filter.style.color = 'brown'
}

const mouseDown = () => console.log(`let's go`)
const mouseUp = () => console.log(`mouse up event`)
const mouseWheel = () => console.log(`mouse wheel event`)
const mouseOver = () => console.log(`mouse over event`)
const mouseOut = () => console.log(`mouse out event`)
const dragStart = () => console.log(`drag start event`)
const drag = () => console.log(`drag event`)
const dragEnd = () => console.log(`drag end event`)









//mouse event listeners

//logo.addEventListener('click', onClick)
//addItem.addEventListener('dblclick', onDoubleClick)
//addItem.addEventListener('contextmenu', onRightClick)
//addItem.addEventListener('mousedown', mouseDown)
//addItem.addEventListener('mouseup', mouseUp)
//logo.addEventListener('wheel', mouseWheel)
//logo.addEventListener('mouseover', mouseOver)
//logo.addEventListener('mouseout', mouseOut)
//logo.addEventListener('dragstart', dragStart)
//logo.addEventListener('drag', drag)
//logo.addEventListener('dragend', dragEnd)

// keyboard event listeners
const itemInput = document.querySelector('input')

//event objects

const Onclick = (e) => {
  //console.log(e.target)
  e.target.style.backgroundColor = 'green'
  //console.log(e.currentTarget)
  //console.log(e.type)
  //console.log(e.timeStamp)
  //console.log(e.clientX)
  //console.log(e.clientY)
  //console.log(e.offsetY)
  //console.log(e.offsetX)
  //console.log(e.pageY)
  //console.log(e.pageX)
  //console.log(e.screenX)
  //console.log(e.screenY)
}
const h1 = document.querySelector('h1')
const onDrag = (e) => {
  const h1 = document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`
}

const onKeyPress = (e) => console.log('key press')
const onKeyUp = (e) => console.log('key up')
const onKeyDown = (e) => {
  //console.log('key down')
  //h1.textContent = e.key

  //if (e.key === 'Enter') {
  //alert('you pressed enter')
  //}

  //h1.textContent = e.code
  //h1.textContent = e.keyCode

  if (e.repeat) {
    console.log(`you are holding down ${e.key}`)
  }
}



//document.querySelector('a').addEventListener('click', (e) => e.preventDefault())

logo.addEventListener('click', Onclick)
logo.addEventListener('drag', onDrag)
//itemInput.addEventListener('keypress', onKeyPress)
//itemInput.addEventListener('keyup', onKeyUp)
//itemInput.addEventListener('keydown', onKeyDown)




//document.body.addEventListener('click', (e) => {
//console.log(e.target)
//console.log(e.currentTarget)
//}
//)
*/

//const inputItem = document.querySelector('#enteritem');
//const priorityInput = document.querySelector('#Priority-input');
//const checkBox = document.querySelector('.check');
//const title = document.querySelector('h1 ');

/*
const keyDown = (e) => {
  //console.log(e.target.value)
  //console.log(e.target.checked);
};

const onFocus = () => {
  inputItem.style.outlineStyle = 'solid';
  inputItem.style.outlineColor = 'green';
  inputItem.style.outlineWidth = '2px';
};

const check = (e) => {
  console.log(e.target.checked);
  //title.textContent = e.target.checked ? 'Checked' : 'Not checked';
};

const onBlur = () => {
  inputItem.style.outlineStyle = 'none';
};


//inputItem.addEventListener('keydown', keyDown)
/*
inputItem.addEventListener('blur', onBlur);
inputItem.addEventListener('focus', onFocus);
priorityInput.addEventListener('change', keyDown);
checkBox.addEventListener('input', check);


const form = document.querySelector('#input-form');
/*
const onSubmit = (e) => {
  e.preventDefault();

  const item = document.querySelector('#enteritem').value;
  const Priority = document.querySelector('#Priority-input').value;

  if (item === '' || Priority === '0') {
    alert('please fill in all options');
  }


  console.log(item, Priority);
};

form.addEventListener('submit', onSubmit);
*/


// event bubbling

/*
const plusBtn = document.querySelector('.btn');
const div = document.querySelector('form div:nth-child(3)');
const forms = document.querySelector('form');
const body = document.querySelector('body');

console.log(div);
console.log(body);

plusBtn.addEventListener('click', (e) => {
  alert('button was clciked'),
    e.stopPropagation();
});
div.addEventListener('click', () => alert('div was clicked'));
form.addEventListener('click', () => alert('form was clicked'));
body.addEventListener('click', () => alert('body was clicked'));


//event delegation and multiple elements

//const ul = document.querySelector('ul');
//const listItems = document.querySelectorAll('li');

//listItems.forEach((items) =>
//items.addEventListener('click', (e) => e.target.remove()));

//ul.addEventListener('click', (e) => console.log(e.target));



const itemForm = document.querySelector('#input-form');
const itemInput = document.querySelector('#enteritem');
const itemList = document.querySelector('ul');

//Event Listeners

const addItem = (e) => {
  e.preventDefault();
  if (itemInput.value === '') {
    alert('Please add an item');
    return;
  }
  //console.log(itemInput.value);

  const li = document.createElement('li');
  li.className = 'item';
  li.appendChild(document.createTextNode(itemInput.value));

  const button = createButton('btn1');
  li.appendChild(button);

  itemList.appendChild(li);
};

const createButton = (classes) => {
  const button = document.createElement('button');
  button.className = classes;
  const svg = createSvg('http://www.w3.org/2000/svg');
  button.appendChild(svg);
  return button;

};

const createSvg = (classes) => {
  const svg = document.createElement('svg');
  svg.className = classes;
  return svg;
};
itemForm.addEventListener('submit', addItem);
*/

const form = document.querySelector('#input-form');
const enterItem = document.querySelector('.item-input');
const listItem = document.querySelector('ul');
const clearBtn = document.querySelector('.clearbtn');
const deleteBtn = document.querySelector('.btn1');

console.log(deleteBtn);

const onSubmit = (e) => {
  e.preventDefault();

  if (enterItem.value === '') {
    alert('Please add an item');
  }


  const li = document.createElement('li');
  li.textContent = enterItem.value;

  listItem.appendChild(li);

  const btn = document.createElement('button');
  btn.className = 'btn1';
  li.appendChild(btn);

  const icon = document.createElement('i');
  icon.className = 'bi bi-trash3-fill i';
  li.appendChild(icon);

  enterItem.value = '';
};

const onFocus = () => {
  enterItem.style.outline = 'solid';
  enterItem.style.outlineColor = 'green';
  enterItem.style.outlineWidth = '2px';
};

const onBlur = () => {
  enterItem.style.outline = 'none';
};

const clearAll = () => {
  listItem.remove();
};

const del = () => {
  console.log('okay');
};

//deleteBtn.addEventListener('click', del);
form.addEventListener('submit', onSubmit);
clearBtn.addEventListener('click', clearAll);
enterItem.addEventListener('focus', onFocus);
enterItem.addEventListener('blur', onBlur);
