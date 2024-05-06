//ex4
//fazr levantamento de dados

//5 usuarios
//nome
//sobrenome
//cidade
//idade
//cpf
//saldo conta

//mensagem p cada usuario

//fazer soma de todas contas bancarias e dividir por 4

//precisa ter
//lista
//if / else

//milionario
//rico
//bem de vida
//pobre
//invalida

const nome = [ 'Ashley','Claire','Leon','Ethan','Helena' ];
const sobrenome =  [' Graham',' Redfield',' Kennedy',' Winters',' Harper'];
const cidade = ['Blumenau','Joinville','Gaspar','Itajaí','Pomerode'];
const idade = [19,22,24,26,24];
const cpf = ['123.586.468-49','485.179.167-18','198.187.845-49','198.844.984-84','498.984.298-20'];
const saldo = [100000 , 8500 , 43000 , 6000 , 10 ];

//const usuario1 = [console.log(nome[0]), console.log(sobrenome[0]),console.log(cidade[0]),console.log(idade[0]),console.log(cpf[0]), console.log(saldo[0])];
//console.log(usuario1);

var mens1 = `A cliente ${nome[0]}${sobrenome[0]}, moradora de ${cidade[0]}, que tem ${idade[0]} anos de idade, está cadastrada em nosso banco pelo cpf ${cpf[0]}, e tem R$${saldo[0]} em sua conta.`;
const mens2 = `A cliente ${nome[1]}${sobrenome[1]}, moradora de ${cidade[1]}, que tem ${idade[1]} anos de idade, está cadastrada em nosso banco pelo cpf ${cpf[1]}, e tem R$${saldo[1]} em sua conta.`;
const mens3 = `O cliente ${nome[2]}${sobrenome[2]}, morador de ${cidade[2]}, que tem ${idade[2]} anos de idade, está cadastrado em nosso banco pelo cpf ${cpf[2]}, e tem R$${saldo[2]} em sua conta.`;
const mens4 = `O cliente ${nome[3]}${sobrenome[3]}, morador de ${cidade[3]}, que tem ${idade[3]} anos de idade, está cadastrado em nosso banco pelo cpf ${cpf[3]}, e tem R$${saldo[3]} em sua conta.`;
const mens5 = `A cliente ${nome[4]}${sobrenome[4]}, moradora de ${cidade[4]}, que tem ${idade[4]} anos de idade, está cadastrada em nosso banco pelo cpf ${cpf[4]}, e tem R$${saldo[4]} em sua conta.`;

const saldos = (saldo[1]) + (saldo[0]) + (saldo[2]) + (saldo[3]) + (saldo[4]) ;
const media = saldos / 5;

document.write(mens1);
document.write('<br><br>');

document.write(mens2);
document.write('<br><br>');

document.write(mens3);
document.write('<br><br>');

document.write(mens4);
document.write('<br><br>');

document.write(mens5);
document.write('<br><br>');


//document.write(mens1<br>mens2<br>mens3<br>mens4<br>mens5);

console.log(mens1);
console.log(mens2);
console.log(mens3);
console.log(mens4);
console.log(mens5);





if (media > 1000000){document.write('A média do saldo bancário dos seus cleinte cadastrados é milionária.')
} else if (media >= 80000){document.write('A média do saldo bancário dos seus clientes cadastrados é rica.')
} else if (media >= 7000){document.write('A média do saldo bancário dos seus clientes cadastrados é bem de vida')
} else if (media >= 0 ){document.write('A média do saldo bancário dos seus clientes cadastrados é pobre.')
} else {document.write('Média inválida')
}