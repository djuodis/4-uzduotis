const spalvos = ["red", "green", "blue", "yellow"]

function keistiSpalva() {
    const mygtukas = document.getElementById('spalvosKeitimas')

    const atsitiktineSpalva = spalvos[Math.floor(Math.random() * spalvos.length)]

    mygtukas.style.backgroundColor = atsitiktineSpalva
}

const spalvosMasyvas = []

function pridetiSpalvas() {
    const boxesContainer = document.querySelector('.boxes')
    boxesContainer.innerHTML = '' 

    
    for (let i = 0; i < 5; i++) {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const atsitiktineSpalva = `rgb(${r}, ${g}, ${b})`
        spalvosMasyvas.push(atsitiktineSpalva)
    }


        spalvosMasyvas.forEach(spalva => {
        const newSquare = document.createElement('div')
        newSquare.classList.add('square')
        newSquare.style.backgroundColor = spalva
        newSquare.textContent = spalva

        boxesContainer.appendChild(newSquare)
    });
}

