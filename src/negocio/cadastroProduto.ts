import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import Produto from "../modelo/produto";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de Produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto : `)
        let produto = new Produto();
        produto.nome = nome 
        produto.valor = valor 
        this.produtos.push(produto)
        console.log(`\nCadastro concluído :)\n`);
    }


    public editar(index: number): void {
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do produto : `)
        let produto = new Produto();
        produto.nome = nome 
        produto.valor = valor 
        this.produtos[index] = produto
    }
}