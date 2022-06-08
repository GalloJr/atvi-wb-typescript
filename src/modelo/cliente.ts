import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string,genero: string, cpf: CPF, telefones : Array<Telefone>, rgs: Array<RG>) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.genero = genero
        this.dataCadastro = new Date()
        this.telefones = telefones
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public adicionaServicos(servico: Servico) {
        this.servicosConsumidos.push(servico)
    }

    public adicionaProdutos(produto: Produto) {
        this.produtosConsumidos.push(produto)
    }
    
}