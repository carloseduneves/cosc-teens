

function liçoes(){
    let voltar = document.getElementById('controls')
    let lesson = document.getElementById('liçoes')
    let bloco = document.getElementById('bloco')
    let quizes = document.getElementById('quizes')
    let exercicio = document.getElementById('exer')
    lesson.style.display = 'none'
    quizes.style.display = 'none'
    bloco.style.display = 'block'
    voltar.style.display = 'block'

}
function quizes(){
    let voltar = document.getElementById('controls')
    let lesson = document.getElementById('liçoes')
    let bloco = document.getElementById('bloco')
    let quizes = document.getElementById('quizes')
    let exercicio = document.getElementById('exer')
    lesson.style.display = 'none'
    quizes.style.display = 'none'
    exercicio.style.display = 'block'
    voltar.style.display = 'block'
}
function volta(){
    window.location.reload()
}
function alerta(){
    window.alert('Somente faça o exercício se tiver terminado lição correspondente!')
}


