let info = JSON.parse(localStorage.getItem("info"))
let id = localStorage.getItem("id");

function listaRanking(){
    if(id == 1){
        time.innerHTML += `<th class="text-center">Nome</th>
                           <th class="text-center">Tempo</th>`
         info.forEach(info => {
                  time.innerHTML +=
                      `<tr>
                          <td>${info.nome}</td>
                          <td>${info.time}s</td>
                      </tr>`;
               })
         localStorage.setItem("id", 2)
         ranking.innerHTML = `<button id="ranking" type="submit" class="btn btn-success" onclick="window.open('ranking.html')">Ranking Erros</button>`
    }else if(id == 2){
     time.innerHTML += `<th class="text-center">Nome</th>
                               <th class="text-center">Qtde. Erros</th>`
     info.forEach(info => {
        time.innerHTML +=
            `<tr>
                <td>${info.nome}</td>
                <td>${info.erros}</td>
            </tr>`;
        })

     localStorage.setItem("id", 1)
     ranking.innerHTML = `<button id="ranking" type="submit" class="btn btn-success" onclick="window.open('ranking.html')">Ranking Time</button>`
    }
}
window.onload=listaRanking();

function limpar(){

    if(!confirm("Deseja realmente excluir os dados?"))
       return;

    localStorage.clear();

    setTimeout(function() {
        window.open("ranking.html")
    }, 200);
}

