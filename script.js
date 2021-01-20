        /**Função quando clicar em contar */
function contar () {
        /**Pegando os elementos id e adicionando em variáveis */
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

        /**Tratamento de Erros */
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '<strong><h2>Impossivel Contar</h2></strong> \u{1F635}'
        window.alert('[ERRO] faltam dados!')
    }else {
        res.innerHTML = '<strong>Contando</strong>: '
        
        /**convertendo os valores para números */
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }        
        if (i < f){
             /**contador vai começar no inicio e em quando o contador for menor ou igual ao fim,
         *  o contador vai recebe ele mesmo mais o passo */
            //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }   
                   
        }else {
            //CONTAGEM DECRESCENTE
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
             
        }
            res.innerHTML += `\u{1F3C1}`
        
    }
    
}
