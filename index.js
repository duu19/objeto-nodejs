const usuario = '{"nome": "Eduardo Henrique","email": "duardohenriqe19@gmail.com","estado":"SP","genero": "masculino","idade": 19,"plano": "básico","animalFavorito": "gorila","emprego": true,"CPF": "524511330-11","CEP": "123.321-12", "telefone": "(14)9999-999"}';


const obj = JSON.parse(usuario);
console.log(obj);

// consultar apenas uma informação específica do objeto
//console.log(obj.email);

// converter o objeto em uma string JSON
const usuarioString = JSON.stringify(usuario);
//console.log(usuarioString);