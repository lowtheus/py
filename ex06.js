//ex4
//fazr levantamento de dados

//8 usuarios
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
//for
//while
const nomes = ['Rebecca','Claire','Jill','Leon','Chris','Ada','Mia','Ethan'];
const sobrenome = ['Chambers','Redfield','Valentine','Kennedy','Redfield','Wong','Winters','Winters'];
const cidade = ['Blumenau','Joinville','Gaspar','Indaial','Lages','Itapema','Navegantes','Timbó'];
const idade = [19, 23, 29, 25, 32, 27, 33, 35];
const cpf = [12349440684, 48719735492 , 24568429705 , 15765849201, 17816514520, 15639815623, 15426879215, 15436847602];
const s = [];
let nconta = 0;


continuar = true
while (continuar){
    nconta++;
    let snovo = parseInt(prompt(`digite o saldo da ${nconta}° conta bancaria`));
    s.push(snovo);
    continuar = s.length <= 7;

}


var total = s[0] + s[1] + s[2] + s[3] + s[4] + s[5] + s[6] + s[7];
var media = total / 8


for (let i = 0; i <= 7; i++){
    
    document.write(`O cliente ${nomes[0]} ${sobrenome[0]}, natural de ${cidade[0]}, com ${idade[0]} anos de idade, cadastrado pelo cpf  ${cpf[0]}, com saldo de R$${s[0]} em nosso banco.`);
    document.write('<br></br>');
    nomes.shift();
sobrenome.shift();
cidade.shift();
idade.shift();
cpf.shift();
s.shift();
}

document.write(`O saldo total das contas em nosso banco é de R$${total}`);
document.write('<br></br>');
document.write(`A média do saldo das contas em nosso cando é de R$${media}`);



