 // Função principal para pesquisar e exibir informações sobre Pokémon
function pesquisar() {
    // Dados dos Pokémon disponíveis para pesquisa
    const Kratos = {
        nome: "Kratos",
        descricao: "O Fantasma de Esparta, um guerreiro espartano atormentado pelo passado de ter assassinado sua família e os deuses do Olimpo. Em busca de redenção, Kratos embarca em uma jornada através dos reinos nórdicos.",
        link: "https://godofwar.fandom.com/pt-br/wiki/Kratos",
        image: "/img/kratos.jpg",
        btnFechar: "Fechar" // Adicionando a propriedade 'btnFechar' 
    };
    const Atreus = {
        nome: "Atreus",
        descricao: "Filho de Kratos e um deus, Atreus é um jovem em busca de sua identidade. Curioso e inteligente, possui habilidades com arco e flecha e um profundo conhecimento sobre as runas nórdicas.",
        link: "https://godofwar.fandom.com/pt-br/wiki/Atreus",
        image: "/img/atreus.jpg",
        btnFechar: "Fechar"
    };

    const Mimir = {
        nome: "Mimir",
        descricao: "A cabeça falante de um antigo rei nórdico, possuidor de grande sabedoria e conhecimento enciclopédico sobre a mitologia nórdica. Antes de ter sua cabeça cortada por Odin, Mimir era guardião da fonte de Mimir.",
        link: "https://godofwar.fandom.com/pt-br/wiki/Mímir",
        image: "/img/mimir.jpg",
        btnFechar: "Fechar"
    };

    const Freya = {
        nome: "Freya",
        descricao: "Deusa nórdica da guerra, do amor, da beleza e da fertilidade. É uma poderosa guerreira e feiticeira, conhecida por seus gatos que puxam sua carruagem. Coleta metade dos mortos em batalha para seu salão, Sessrumnir.",
        link: "https://godofwar.fandom.com/pt-br/wiki/Freya",
        image: "/img/freya.jpg",
        btnFechar: "Fechar"
    };

    const Thor = {
        nome: "Thor",
        descricao: "O deus nórdico do trovão, da tempestade e da força. Um dos Aesir mais poderosos, empunha o martelo Mjölnir. Protetor de Asgard e associado à fertilidade da terra.",
        link: "https://godofwar.fandom.com/pt-br/wiki/Thor",
        image: "/img/thor.jpg",
        btnFechar: "Fechar"
    };

    const Tyr = {
        nome:"Týr",
        descricao:"O deus nórdico da guerra, da justiça e dos contratos. É conhecido por ter sacrificado uma mão para amarrar o lobo Fenrir. Um dos Aesir mais antigos e respeitados.",
        link:"https://godofwar.fandom.com/pt-br/wiki/Týr",
        image:"/img/tyr.jpg",
        btnFechar: "Fechar"
    };

    // Armazena todos os Pokémon em um array
    const dados = [Kratos, Atreus, Mimir, Freya, Thor, Tyr];

    // Obtém o valor do input de pesquisa, remove espaços extras e converte para minúsculas
    const inputNome = document.getElementById("god-name").value.trim().toLowerCase();

    // Encontra o Pokémon que corresponde ao nome fornecido
    const resultado = dados.find(dado => dado.nome.toLowerCase() === inputNome);

    // Obtém a seção onde o resultado será exibido
    let section = document.getElementById("item-resultado");

    // Verifica se um resultado foi encontrado
    if (resultado) {
        // Se encontrado, atualiza o conteúdo HTML da seção com as informações do Pokémon
        section.innerHTML = `
        <div class="item-resultado">
          <div class="info-result">
            <h2>${resultado.nome}</h2>
            <p class="title-img">${resultado.descricao}</p>
            <a class="btn-info" href="${resultado.link}" target="_blank">Mais informações</a>
             <a href="#" class="btn-info" onclick="fechar(); return false;">Fechar</a>
          </div>
          <img src="${resultado.image}" alt="${resultado.nome}" class="img-result">
        </div>
      `;
        // Exibe a seção
        section.style.display = "block";
    } else {
        // Se não encontrado, limpa o conteúdo da seção e oculta
        section.innerHTML = "";
        section.style.display = "none";
    }
}

// Função para fechar a exibição do resultado
function fechar() {
    // Oculta a seção de resultado
    document.getElementById("item-resultado").style.display = "none";
    // Recarrega a página
    location.reload();
}
