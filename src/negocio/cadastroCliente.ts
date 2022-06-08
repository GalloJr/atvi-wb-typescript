import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";
import Telefone from "../modelo/telefone";
import Rg from "../modelo/rg";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe o genero, M para masculino, F para feminino e N para não informado `);
        if(genero.toUpperCase()== 'M'){
            genero = 'Masculino'
        }
        if(genero.toUpperCase()== 'F'){
            genero = 'Feminino'
        }else
        {
            genero = 'Não informado'
        }
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let execucao = true
        let telefones = Array<Telefone>()
        while (execucao){
            let ddd = this.entrada.receberTexto(`Cadastro de telefone digite o ddd : `)
            let numero = this.entrada.receberTexto(`Digite o número do telefone : `)
            let telefone  = new Telefone(ddd, numero)
            telefones.push(telefone)
            let continueT = this.entrada.receberNumero(`Digite 1 para cadastrar outro telefone ou 2 para finalizar : `)
            if(continueT == 2){
                execucao = false
            }
            
        }
        execucao = true
        let rgs = Array<Rg>()
        while (execucao){
            let valor = this.entrada.receberTexto(`Cadastro de Rg digite o numero: `)
            let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
            let partesDataRg = dataRg.split('/')
            let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
            let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
            let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
            let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
            let rg = new Rg(valor, dataEmissaoRg);
            rgs.push(rg)
            let continueT = this.entrada.receberNumero(`Digite 1 para cadastrar outro rg ou 2 para finalizar : `)
            if(continueT == 2){
                execucao = false
            }
            
        }
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, genero, cpf, telefones, rgs);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }


    public editar(index: number): void {
        console.log(`\nInício da edição do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe o genero, M para masculino, F para feminino e N para não informado `);
        if(genero.toUpperCase()== 'M'){
            genero = 'Masculino'
        }
        if(genero.toUpperCase()== 'F'){
            genero = 'Feminino'
        }else
        {
            genero = 'Não informado'
        }
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let execucao = true
        let telefones = Array<Telefone>()
        while (execucao){
            let ddd = this.entrada.receberTexto(`Cadastro de telefone digite o ddd : `)
            let numero = this.entrada.receberTexto(`Digite o número do telefone : `)
            let telefone  = new Telefone(ddd, numero)
            telefones.push(telefone)
            let continueT = this.entrada.receberNumero(`Digite 1 para cadastrar outro telefone ou 2 para finalizar : `)
            if(continueT == 2){
                execucao = false
            }
            
        }
        execucao = true
        let rgs = Array<Rg>()
        while (execucao){
            let valor = this.entrada.receberTexto(`Cadastro de Rg digite o numero: `)
            let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
            let partesDataRg = dataRg.split('/')
            let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
            let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
            let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
            let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
            let rg = new Rg(valor, dataEmissaoRg);
            rgs.push(rg)
            let continueT = this.entrada.receberNumero(`Digite 1 para cadastrar outro rg ou 2 para finalizar : `)
            if(continueT == 2){
                execucao = false
            }
            
        }
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial,genero, cpf, telefones, rgs);
        this.clientes[index] = cliente
    }
}