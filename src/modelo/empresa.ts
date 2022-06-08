import Cliente from "./cliente"
import Produto from "./produto"
import Servico from "./servico"

export default class Empresa{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(){
        this.clientes = []
        this.produtos = []
        this.servicos = []
    }
    public get getClientes(){
        return this.clientes
    }
    public get getProdutos(){
        return this.produtos
    }
    public get getServicos(){
        return this.servicos
    }
    public removerClientes(index: number){
        this.clientes.splice(index,1)
    }

    public editarClientes(index: number, cliente:Cliente){
        this.clientes[index] = cliente
    }
    public removerProdutos(index: number){
        this.produtos.splice(index,1)
    }

    public editarProdutos(index: number, produto:Produto){
        this.produtos[index] = produto
    }
    public removerServicos(index: number){
        this.servicos.splice(index,1)
    }

    public editarServicos(index: number, servico:Servico){
        this.servicos[index] = servico
    }
    public adicionarProdutoAoCliente(indexCliente: number, indexProduto: number){
        this.clientes[indexCliente].adicionaProdutos(this.produtos[indexProduto])
    }
    public adicionarServicoAoCliente(indexCliente: number, indexServico: number){
        this.clientes[indexCliente].adicionaServicos(this.servicos[indexServico])
    }
}