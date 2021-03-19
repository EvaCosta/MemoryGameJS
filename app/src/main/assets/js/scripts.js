var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000;
var cron;

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos
        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}
window.onload=start;

//Gera um número aleatório
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var sequencia = gerarSequencia();
console.log(sequencia)

//Gera a sequencia com 6 numeros não repetidos.
function gerarSequencia(){
    let array = [];
    let indice = 0;
    let arrayAux = -1;
    while(indice != 6){
        arrayAux = getRandom(1,6);

            while(array.indexOf(arrayAux) >= 0){
                arrayAux = getRandom(1,6);
            }

            array.push(arrayAux);
            indice++;
      }
      return array;
}

let contErrors = 0;
let posicao = 0;
function acaoBotao(respostaBotao){
    if(respostaBotao == sequencia[posicao]){
        //console.log("res" + respostaBotao)
        isVisivel("#button"+respostaBotao, 0);

        alterarCorBackground("#button"+respostaBotao);

        //progressBar.setProgress(posicao);
        posicao++;
        //console.log("porc" + calcularPorcentagem(posicao));
        barraProgresso(calcularPorcentagem(posicao));
        //console.log("pos" + posicao)
    }else{
        contErrors++;
        //console.log("err" + contErrors)
        resetarJogo();
    }

    if(posicao == 6){
        pause();

        //bterNomeJogador();

        contErrors = 0;
        //console.log("err" + contErrors)
    }
}

function isVisivel(id, auxiliar){
   if(auxiliar == 0)
        $(id).css("visibility", "hidden");
    else if(auxiliar == 1)
        $(id).css("visibility", "visible");
}

function alterarCorBackground(id){
    (id == 0) ? $("body").css("background-color", "white") : $("body").css("background-color", $(id).css('background-color'));
}

function mostrarBotoes(){
    for (i = 1; i <= 6; i++){
        isVisivel("#button" +i, 1);
    }
}

function resetarJogo(){
    barraProgresso(1);
    posicao=0;
    mostrarBotoes();
    alterarCorBackground(0);
}

function reiniciar(){
    sequencia = gerarSequencia();
    console.log("sequencia" + sequencia)
    contErrors=0;
    stop();
    start();
    resetarJogo();
}

function barraProgresso(progresso){
    $("#progress-bar").css("width", progresso);
    $("#progress-bar").html(progresso/4 + "%")
}

function calcularPorcentagem(posicao){
    return (posicao == 6) ? 400 : (102/6*posicao*4);
}

/*public void obterNomeJogador(){
    Intent intent = new Intent(this, SalvarDadosActivity.class);

    intent.putExtra("Duração", chronometer.getText());
    intent.putExtra("Erros", String.format("%s",contErrors));

    startActivity(intent);
}*/