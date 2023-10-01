//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')
//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let x = 1
let y = 2
console.log(x+y)

//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let number = 12
console.log(typeof(number) == 'number' ? 'É um número' : 'Nâo é  um número')

//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let string = 'Animal'
console.log(typeof(string) == 'string' ? 'É uma string' : 'Nâo é uma string')

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let bool = false
console.log(typeof(bool) == 'boolean' ? 'É um bool' : 'Nâo é um bool')

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const sub = (valor1, valor2) => valor1 - valor2
console.log(sub(10, 8))

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const multi = (valor1, valor2) => valor1*valor2
console.log(multi(10, 8))

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const divi = (valor1, valor2) => valor1/valor2
console.log(divi(10, 8))

//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par"
const isPar = (valor) => {
    if(valor % 2 == 0) {
        return 'É um número par'
    } else {
        return 'Não é um número par'
    }
} 
console.log(isPar(3))

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isImpar = (valor) => {
    if(valor % 2 !== 0) {
        return 'É um número impar'
    } else {
        return 'Não é um número impar'
    }
} 
console.log(isImpar(2))
