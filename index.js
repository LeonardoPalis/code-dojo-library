// Funcao Livros
// Gerenciadora de todos os livros da biblioteca
// Inicializada com um array vazio e disponibiliza
// funções de adição e listagem de livros
function Livros() {
    const livros = [];
    
    function addLivro(livro) {
        if (livro.podeSerAdicionado()) {
            livros.push(livro);  
        }
    }
    
    function listarLivros() {
        if (livros.length === 0) {
            console.log('vazio.')
            return;
        }
        livros.forEach(livro => console.log(livro));
        console.groupEnd();
    }
    
    function buscarLivroPeloNome(nomeLivro) {
        const currentLivro = livros.find(livro => livro.nome === nomeLivro);
        // currentLivr= undefined ou 
        if (currentLivro) {
            console.log("Livro encontrado!");
        }
    }
    
    return {
        livros,
        addLivro,
        listarLivros,
        buscarLivroPeloNome
    }
}

// Entidade Livro
// Recebe propriedades de um Livro e os retorna
// Só pode ser adicionado se: está disponivel e o estado do livro é novo 
function Livro({nome, estado, disponivel}) {
    
    function podeSerAdicionado() {
        return estado === 'novo' && disponivel;
    }
    
    return {
        nome,
        estado,
        disponivel,
        podeSerAdicionado
    }
}

const livro1 = Livro({
    nome: "Javascript Básico",
    estado: "novo",
    disponivel: true,
});

const novosLivros = Livros();

novosLivros.addLivro(livro1);
// livros = [...]
//prompt 
const nomeDoLivro = window.prompt("Digite o nome do livro: ");
novosLivros.buscarLivroPeloNome(nomeDoLivro);

novosLivros.listarLivros();
