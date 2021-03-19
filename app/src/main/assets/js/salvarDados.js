let tempo  = localStorage.getItem("time");
let erros = localStorage.getItem("erros");
let cor = localStorage.getItem("color");
var info;
function exibeInformacoes() {
    console.log("tempo" + tempo);
    console.log("erros" + erros);
    console.log("cor" + cor);

    document.getElementById('tempo').innerText = "Tempo: " + tempo + "s";
    document.getElementById('erros').innerText = "Nº de erros: " + erros;
    $("body").css("background-color", cor);

}
window.onload=exibeInformacoes;

function salvarDadosJogador() {
    info = new Array()

    nome = $("#nome").val()
    if(nome != ''){
        $("#save").html("Salvo!");
        $("#save").css("background-color", "black");
        $("#save").prop("disabled", "true")


        if (localStorage.hasOwnProperty("info")) {
             info = JSON.parse(localStorage.getItem("info"))
        }

       info.push({"nome": nome, "time": tempo, "erros": erros})

       localStorage.setItem("info", JSON.stringify(info))
    }

}

function jogar(){
    setTimeout(function() {
        window.open("index.html")
    }, 500);
}

function telaRanking(id){
    if (localStorage.hasOwnProperty("info")) {
         info = JSON.parse(localStorage.getItem("info"))
    }

    if(id == 1){
        info.sort(function(a,b){
               if(parseInt(a.time) > parseInt(b.time)){
                   return 1
               }
               else if(parseInt(a.time) < parseInt(b.time)){
                   return -1
               }
               return 0
       })

    }else if(id == 2){
        info.sort(function(a,b){
           if(parseInt(a.erros) > parseInt(b.erros)){
               return 1
           }
           else if(parseInt(a.erros) < parseInt(b.erros)){
               return -1
           }
           return 0
        })
    }

   localStorage.setItem("info", JSON.stringify(info))
   localStorage.setItem("id", id)
   setTimeout(function() {
       window.open("ranking.html")
   }, 500);
}
