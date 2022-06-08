import Entrada from "../io/entrada";
import Cadastro from "./cadastro";
import Servico from "../modelo/servico";

export default class cadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro de Servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Servico: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do Servico : `)
        let servico = new Servico();
        servico.nome = nome 
        servico.valor = valor 
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }


    public editar(index: number): void {
        let nome = this.entrada.receberTexto(`Por favor informe o nome do Servico: `)
        let valor = this.entrada.receberNumero(`Por favor informe o valor do Servico : `)
        let servico = new Servico();
        servico.nome = nome 
        servico.valor = valor 
        this.servicos[index] = servico
    }
}