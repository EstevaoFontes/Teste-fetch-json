const url = 'https://app.olimpiadas.app/teste';

fetch(url)
    .then(resposta => resposta.json())
    .then(data => {
        var dados = data;

        var criar_lista = document.createElement("ul");
        document.body.appendChild(criar_lista);

        for (item of dados.data) {

            var cria_video = document.createElement("iframe");
            var cria_imagem = document.createElement("img");
            var itens_lista = document.createElement("li");

            const visual = [item.img]



            var texto = document.createTextNode(`ID:${item.id} -- Nome:${item.name}`)
            criar_lista.appendChild(itens_lista);
            itens_lista.appendChild(texto)

            for (i of visual) {
                if (i.includes("jpg") || i.includes("jpeg")) {
                    cria_imagem.src = i;
                    cria_imagem.style.width = '100px';
                    cria_imagem.style.height = '100px';
                    itens_lista.appendChild(cria_imagem);
                    console.log(cria_imagem)

                } else {
                    cria_video.src = i;
                    cria_video.style.width = '100px';
                    cria_video.style.height = '100px';
                    itens_lista.appendChild(cria_video)
                }
            }
        }

    })

























