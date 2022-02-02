function contar() {
    let ini = document.getElementById('txti')
    let fin = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')


    if (ini.valule.length == 0 || fin.valule.length == 0 || passo.valule.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'contando: '
        let i = Number(ini.valule)
        let f = Number(fim.valule)
        let p = Number(passo.valule)

        for(let c = i; c <= f; c + p) {

        }
    }
}