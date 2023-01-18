const btnDolar = document.getElementById('btnDolar')            
btnDolar.addEventListener('click', mostrarDolar =>{
    const url = "https://economia.awesomeapi.com.br/last/";
    const coins = 'USD-BRL,EUR-BRL,BTC-BRL'

        fetch(url + coins)
        .then( response => response.json())
        .then( data => 
            preencherCampo(data))

})  
        // FUNÇÃO DE PEGAR OS DADOS DA API
function preencherCampo(data) { 
    const dolarReal = data.USDBRL
    const tipoDaMoeda = document.getElementById('typeMoeda');
    const maxvalue = document.getElementById('maxvalue')
    const minvalue = document.getElementById('minvalue')

    tipoDaMoeda.innerHTML = dolarReal.name
    maxvalue.innerHTML = ` R$ ${dolarReal.high}`
    minvalue.innerHTML = ` R$ ${dolarReal.low}`



}
                // FUNÇÃO DE ASSIM QUE CLICAR MOSTRAR A API DO DOLAR



const btnEuro = document.getElementById('btnEuro')
btnEuro.addEventListener('click',mostrarEuro => { 
    const url = "https://economia.awesomeapi.com.br/last/"
    const coins = 'USD-BRL,EUR-BRL,BTC-BRL'
 
        fetch(url + coins)
            .then( resposta => resposta.json())
            .then(date => 
                    prencherInf(date))
})
        // FUNÇÃO DE PEGAR OS DADOS DA API

function prencherInf(date) {
    const Euro = date.EURBRL
    const tipoDaMoeda = document.getElementById('typeMoeda');
    const maxvalue = document.getElementById('maxvalue')
    const minvalue = document.getElementById('minvalue')

    tipoDaMoeda.innerHTML = Euro.name;
    maxvalue.innerHTML = ` R$ ${Euro.high}`
    minvalue.innerHTML = ` R$ ${Euro.low}`

}

                // FUNÇÃO DE ASSIM QUE CLICAR MOSTRAR A API DO DOLAR

