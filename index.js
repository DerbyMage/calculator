const inputer = document.createElement('div')

const calculator = function() {
    const container = document.createElement('div')
    container.setAttribute('class', 'container')

    inputer.setAttribute('class', 'inputer')
    document.querySelector('.calculator').appendChild(inputer)
    const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const buttons = ['+', '-', '*', '/', '=']

    numArray.forEach(num => {
       const newDiv =  document.createElement('div')
       const text = document.createTextNode(num)
       newDiv.setAttribute('class', 'digit')
       newDiv.appendChild(text)
       container.appendChild(newDiv)
       document.querySelector('.calculator').appendChild(container)
    })
const operContainer = document.createElement('div')
    buttons.forEach(btn => {
        const newDiv = document.createElement('div')
        const text= document.createTextNode(btn)
        newDiv.setAttribute('class', 'operator')
        newDiv.appendChild(text)
        operContainer.appendChild(newDiv)
    })
    document.querySelector('.calculator').appendChild(operContainer)

}


calculator()



document.querySelectorAll('.digit').forEach(node => node.addEventListener('click', function(e) {
    inputer.innerText += e.target.innerText
    console.log(e)
}))
