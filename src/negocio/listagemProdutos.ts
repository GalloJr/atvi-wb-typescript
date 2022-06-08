import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        let id = 0 
        this.produtos.forEach(produto => {
            console.log(`Id: ` +id);
            console.log(`Nome: ` + produto.nome);
            console.log(`Valor:R$ ` + produto.valor);
            console.log(`--------------------------------------`);
            id++
        });
        console.log(`\n`);
    }
}