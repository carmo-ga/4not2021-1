// Criando um objeto cujo valor das propriedades vem de variáveis

let usuario = "João"
let senha = 'Senha123'
let name = "João das Couves"
let lastLogin = '2021-02-08 22:49:28'

let userInfo = {
    login: usuario,
    password: senha,
    name,   // Propriedade abreviada (name: name)
    lastLogin   // (lastLogin: lastLogin)
}

console.log(userInfo)

let info = 'Isso é um teste'
console.log(info)
console.log({info})