function calculator() {
    const calc = document.querySelector('.calculator')
    const input = document.createElement('div')
    const buttons = document.createElement('div')
    buttons.setAttribute('class', 'numbers')
    input.setAttribute('class', 'input')
    calc.appendChild(input)
    calc.appendChild(buttons)

    const numbers = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', '.', 0, '=', '/']
    numbers.forEach(num => {
       const divver = document.createElement('div')
       divver.appendChild(document.createTextNode(num))
        buttons.appendChild(divver)
        if(num !== '=')
        divver.addEventListener('click', function() {
            input.textContent += divver.textContent
        })

        if(num === '=') {
            divver.addEventListener('click', function() { input.textContent = eval(input.textContent)

            })
        }


    })

}

calculator()