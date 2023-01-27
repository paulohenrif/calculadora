function somar() {
    var c = document.querySelector('input#txtn')
    var res = document.querySelector('div#res')
    var v = Number(txtn.value) + Number(txtn1.value) 
    res.innerHTML = `O resultado dos seus cálculos são: <strong>${v}</strong>`
}
function multiplicar() {
    var c = document.querySelector('input#txtn')
    var res = document.querySelector('div#res')
    var v = Number(txtn.value) * Number(txtn1.value) 
    res.innerHTML = `O resultado dos seus cálculos são: <strong>${v}</strong>`
}
function dividir() {
    var c = document.querySelector('input#txtn')
    var res = document.querySelector('div#res')
    var v = Number(txtn.value) / Number(txtn1.value) 
    res.innerHTML = `O resultado dos seus cálculos são: <strong>${v}</strong>`
}
function subtrair() {
    var c = document.querySelector('input#txtn')
    var res = document.querySelector('div#res')
    var v = Number(txtn.value) - Number(txtn1.value) 
    res.innerHTML = `O resultado dos seus cálculos são: <strong>${v}</strong>`
}