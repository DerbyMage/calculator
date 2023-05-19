const calculator = function() {
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    numArray.forEach(num => {
       const newDiv =  document.createElement('div')
       const text = document.createTextNode(num)
       newDiv.setAttribute('class', 'digit')
       newDiv.appendChild(text)
       document.querySelector('.calculator').appendChild(newDiv)
    })
}

calculator()