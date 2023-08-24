
/*
.then((transformar) => {
    transformar.json().then((titulo) => {
        titulo.title.map((value)=>{
            document.getElementById("nomeProduto").textContent = `${value.title}`;
            
            const selectCor = document.getElementById("cor"); 

            selectCor.innerHTML += 
            `
                <option>${JSON.stringify(values)}</option>
            `
        })
    })
})
*/

let nomeProduto = document.getElementById("nomeProduto");
let valorProduto = document.getElementById("valor");
let corProduto = document.getElementById("cor");

const url = "https://app.landingpage.com.br/Ajax/buscarDetalhesProdutoNuvemshop/LPL2gc/180064575";

async function enviarPost() {
    try {
        const resposta = await fetch(url);
        const data = await resposta.json();

        const titulo = data.title;
        const precos = data.variants[0].price;
        const cores = data.values[1];

        nomeProduto.innerText = titulo;
        valorProduto.innerText = precos;

        corProduto.innerHTML = cores.map(color => `<option>${color}</option>`).join("");
    } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
    }
}

enviarPost();
