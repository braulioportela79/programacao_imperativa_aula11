/*
1. Começamos a partir de nossa variedade de filmes, que tínhamos o seguinte:
*/

let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

/*	
e nos pediram para passar todos os elementos para letras maiúsculas, o que na época tínhamos feito de forma "manual". Vamos movê-lo para uma maneira mais automática usando loops.
*/

function converterMaiusculas(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    };
    return array;
};

console.log(converterMaiusculas(filmes));

/*
2. Agora precisamos modificar afunçãode passagemde elemento() que nos permite adicionar o conteúdo de nossa matriz de filme animado à matriz de filme original.
*/

let filmesSeries = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];
let filmesAnimacao = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

function juntarFilmes(array1, array2) {
    for (let i = 0; i < array2.length; i = i + i) {
        array1.push(array2.pop())
    };
    return converterMaiusculas(array1);
};

/*
3. Para este ponto se você decidiu trabalhar em um arquivo diferente em lugar para modificar o anterior, lembre-se que tivemos um infiltrado dentro de nossos filmes de animação que tivemos que tirar e salvar em outra variável antes de fazer a passagem de elementos de um array para outro! 
*/

let ultimoFilmeAnimacao = filmesAnimacao.pop();

console.log(juntarFilmes(filmesSeries, filmesAnimacao));

/*
4. Finalmente, devemos modificar nossa função comparadora para os filmes como temos feito até agora.
*/

function comparaClassificacao() {

    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
    const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
    let totalAsia = 0;
    let totalEuro = 0;

    for (let i = 0; i < asiaScores.length; totalAsia = totalAsia + asiaScores[i++]);
    for (let i = 0; i < euroScores.length; totalEuro += euroScores[i++]);

    if (totalAsia == totalEuro) {
        return console.log('Classificações iguais!');
    } else {
        return console.log('Classificações diferentes!');
    };
};

comparaClassificacao();


/*
1. Determine qual seria a maneira ideal de representar cada participante com suas pontuações.
*/

let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

/*
2. Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.
*/

function pontuacaoMedia(participante) {
    let mediaParticipante = 0;
    for (let i = 0; i < participante.length; mediaParticipante = mediaParticipante + participante[i++]);
    return mediaParticipante / participante.length;
};

console.log(pontuacaoMedia(participanteA));

/*
3. Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.
*/

function pontuacaoMaior(participante) {
    return Math.max(...participante);
};

console.log(pontuacaoMaior(participanteA));

/*
4. Logo nosso líder tecnológico nos pede para criar essas duas funções geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, e executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma, e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.
*/

function competicao(participanteA, participanteB, participanteC) {
    if (pontuacaoMedia(participanteA) > pontuacaoMedia(participanteB) && pontuacaoMedia(participanteA) > pontuacaoMedia(participanteC)) {
        `${console.log(`Participante A vencedor com a maior média! ${pontuacaoMedia(participanteA)}`)}`;
    } else if (pontuacaoMedia(participanteB) > pontuacaoMedia(participanteA) && pontuacaoMedia(participanteB) > pontuacaoMedia(participanteC)) {
        `${console.log(`Participante B vencedor com a maior média! ${pontuacaoMedia(participanteB)}`)}`;
    } else {
        `${console.log(`Participante C vencedor com a maior média! ${pontuacaoMedia(participanteC)}`)}`;
    };

    if (pontuacaoMaior(participanteA) > pontuacaoMaior(participanteB) && pontuacaoMaior(participanteA) > pontuacaoMaior(participanteC)) {
        `${console.log(`Participante A vencedor com a maior pontuação! ${pontuacaoMaior(participanteA)}`)}`;
    } else if (pontuacaoMaior(participanteB) > pontuacaoMaior(participanteA) && pontuacaoMaior(participanteB) > pontuacaoMaior(participanteC)) {
        `${console.log(`Participante B vencedor com a maior pontuação! ${pontuacaoMaior(participanteB)}`)}`;
    } else {
        `${console.log(`Participante C vencedor com a maior pontuação! ${pontuacaoMaior(participanteC)}`)}`;
    };
};

competicao(participanteA, participanteB, participanteC);

