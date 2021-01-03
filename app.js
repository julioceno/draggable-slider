let slider = document.querySelector('.slider')
let innerSlider = document.querySelector('.slider-inner')

let pressed = false
let startx;
let x;

slider.addEventListener('mousedown', (e) => { // Quando o usuário clica nos elementos
    pressed = true
    startx = e.offsetX - innerSlider.offsetLeft 
    slider.style.cursor = 'grabbing' // Vai da um "agarrando" para o cursor
})

slider.addEventListener('mouseenter', () => { // Quando o mouse entrar no slider vai aparecer uma mãozinha
    slider.style.cursor = 'grab'
})

slider.addEventListener('mouseup', () => { // Quando você soltar o cursor, ou seja, quando o click for efetuado ele chamará essa função 
    slider.style.cursor = 'grab' // Deixará o cursor com um "agarrando"  
})

window.addEventListener('mouseup', () => { // Quando o click for efetuado em qualquer lugar da janela isso será executado
    pressed = false // Pressionado falso, ou seja o slide não está pressionado
})

slider.addEventListener('mousemove', e => { // Quando o mouse for movido esse evento será disparado
    if (!pressed) return // Se não estiver pressionando o slide quando o mouse for movido nada será feito
  
    e.preventDefault() // Se o slide estiver pressionado o evento de mover o mouse será desabilitado (Testar sem isso)

    x = e.offsetX // Aqui será armazenado as cordenadas iniciais do eixo x de quando o mouse foi movido mas, só se o let pressed for true
                  // E só será armazenado as cordenadas iniciais do eixo x pois eu dou um preventDefault no evento

    innerSlider.style.left = `${x - startx}px `
    checkboundary()
})

function checkboundary() {
    // O getBoundingClientRect retorna o tamanho de um elemento e sua posição relativa ao viewport
    let outer = slider.getBoundingClientRect()
    let inner = innerSlider.getBoundingClientRect()

    if (parseInt(innerSlider.style.left) > 0) { // Se a rolagem da esquerda estiver acima de 0 eu por padrão vou setar 0 
        innerSlider.style.left = '0px' 

    } else if (inner.right < outer.right) { // Se o ponto interno direto for menor que o ponto externo direto
        innerSlider.style.left = `-${inner.width - outer.width}px` // Pegue a largura do ponto interior e subtraia pelo ponto exterior
    }
}

