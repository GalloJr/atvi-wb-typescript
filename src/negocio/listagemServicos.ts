import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServicos extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os Servicos:`);
        let id = 0 
        this.servicos.forEach(servico => {
            console.log(`Id: ` +id);
            console.log(`Nome: ` + servico.nome);
            console.log(`Valor:R$ ` + servico.valor);
            console.log(`--------------------------------------`);
            id++
        });
        console.log(`\n`);
    }
}