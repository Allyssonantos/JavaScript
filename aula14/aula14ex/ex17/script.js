function tabuada() {
    let num = document.getElementById('txtn')
    let tap = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tap.appendChild(item)
            c++
        }
    }
}