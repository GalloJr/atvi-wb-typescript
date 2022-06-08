import Cliente from "../modelo/cliente";
import Auxiliar from "../modelo/auxiliar";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        let id = 0 
        this.clientes.forEach(cliente => {
            console.log(`Id: ` +id);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Genero: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg =>{
                console.log(`Rg: ` + rg.getValor);
            })
            cliente.getTelefones.forEach(telefone =>{
                console.log(`Telefone: (` + telefone.getDdd +') ' + telefone.getNumero);
            })
            cliente.getProdutosConsumidos.forEach(produto =>{
                console.log('Produto consumido:'+ produto.nome+ 'Valor:R$'+produto.valor);
            })
            cliente.getServicosConsumidos.forEach(servico =>{
                console.log('Serviço consumido:'+ servico.nome+ 'Valor:R$'+servico.valor);
            })
            console.log(`--------------------------------------`);
            id++
        });
        console.log(`\n`);
    }

    public listarPorGengero(genero: string): void {
        console.log(`\nLista de todos os clientes:`);
        let id = 0 
        this.clientes.forEach(cliente => {
                if(genero == cliente.genero){
                console.log(`Id: ` +id);
                console.log(`Nome: ` + cliente.nome);
                console.log(`Nome social: ` + cliente.nomeSocial);
                console.log(`Genero: ` + cliente.genero);
                console.log(`CPF: ` + cliente.getCpf.getValor);
                cliente.getRgs.forEach(rg =>{
                    console.log(`Rg: ` + rg.getValor);
                })
                cliente.getTelefones.forEach(telefone =>{
                    console.log(`Telefone: (` + telefone.getDdd +') ' + telefone.getNumero);
                })
                cliente.getProdutosConsumidos.forEach(produto =>{
                    console.log('Produto consumido:'+ produto.nome+ 'Valor:R$'+produto.valor);
                })
                cliente.getServicosConsumidos.forEach(servico =>{
                    console.log('Serviço consumido:'+ servico.nome+ 'Valor:R$'+servico.valor);
                })
                console.log(`--------------------------------------`);
            }   
            id++
        });
        console.log(`\n`);
    }
    public listarMaisConsumoServico(): void {
        console.log(`\nLista de serviços mais consumidos em quantidade:`);
        let listaAuxiliar = this.clientes
        listaAuxiliar.sort(function(a, b){
            if (a.getServicosConsumidos.length < b.getServicosConsumidos.length) {
                return 1;
              }
            if (a.getServicosConsumidos.length > b.getServicosConsumidos.length) {
                return -1;
              }
              // a must be equal to b
            return 0; 
        })
        let id = 0 
        for(let  aux of listaAuxiliar)
        {
            console.log(`Nome: ` + aux.nome);
            console.log(`Quantidade de serviços consumidos: ` + aux.getServicosConsumidos.length);
            console.log(`--------------------------------------`);
            id++
            if(id >9)
            {
                break
            }
        }
        console.log(`\n`);
    }

    public listarMaisConsumoProduto(): void {
        console.log(`\nLista de produtos mais consumidos em quantidade:`);
        let listaAuxiliar = this.clientes
        listaAuxiliar.sort(function(a, b){
            if (a.getProdutosConsumidos.length < b.getProdutosConsumidos.length) {
                return 1;
              }
            if (a.getProdutosConsumidos.length > b.getProdutosConsumidos.length) {
                return -1;
              }
              // a must be equal to b
            return 0; 
        })
        let id = 0 
        for(let  aux of listaAuxiliar)
        {
            console.log(`Nome: ` + aux.nome);
            console.log(`Quantidade de produtos consumidos: ` + aux.getProdutosConsumidos.length);
            console.log(`--------------------------------------`);
            id++
            if(id >9)
            {
                break
            }
        }
        console.log(`\n`);
    }

    public listarGeralMaisConsumoProduto(produtos : Array<Produto>): void {
        console.log(`\nLista geral de produtos mais consumidos em quantidade:`);
        let listaAuxiliar = new Array<Auxiliar>()
        produtos.forEach(element => {
            let auxiliar = new Auxiliar()
            auxiliar.nome = element.nome
            auxiliar.valor = 0
            listaAuxiliar.push(auxiliar)
        });
        this.clientes.forEach(cliente =>{
            let produtoss = cliente.getProdutosConsumidos
            produtoss.forEach(produto => {
                listaAuxiliar.forEach(auxiliar => {
                    if(auxiliar.nome == produto.nome)
                    {
                        auxiliar.valor = auxiliar.valor+1
                    }
                })
            })
        })

        listaAuxiliar.sort(function(a, b){
            if (a.valor< b.valor) {
                return 1;
              }
            if (a.valor > b.valor) {
                return -1;
              }
              // a must be equal to b
            return 0; 
        })
        let id = 0 
        listaAuxiliar.forEach(aux => 
        {
            console.log(`Nome: ` + aux.nome);
            console.log(`Quantidade de produtos consumidos: ` + aux.valor);
            console.log(`--------------------------------------`);
        })
        console.log(`\n`);
    }

    public listarGeralMaisConsumoServico(servicos : Array<Servico>): void {
        console.log(`\nLista geral de serviços mais consumidos em quantidade:`);
        let listaAuxiliar = new Array<Auxiliar>()
        servicos.forEach(element => {
            let auxiliar = new Auxiliar()
            auxiliar.nome = element.nome
            auxiliar.valor = 0
            listaAuxiliar.push(auxiliar)
        });
        this.clientes.forEach(cliente =>{
            let servicoss = cliente.getServicosConsumidos
            servicoss.forEach(servico => {
                listaAuxiliar.forEach(auxiliar => {
                    if(auxiliar.nome == servico.nome)
                    {
                        auxiliar.valor = auxiliar.valor+1
                    }
                })
            })
        })

        listaAuxiliar.sort(function(a, b){
            if (a.valor< b.valor) {
                return 1;
              }
            if (a.valor > b.valor) {
                return -1;
              }
              // a must be equal to b
            return 0; 
        })
        let id = 0 
        listaAuxiliar.forEach(aux => 
        {
            console.log(`Nome: ` + aux.nome);
            console.log(`Quantidade de servios consumidos: ` + aux.valor);
            console.log(`--------------------------------------`);
        })
        console.log(`\n`);
    }

    public listarGeralMaisConsumoProdutoGenero(produtos : Array<Produto>, genero: string): void {
        console.log(`\nLista geral de produtos mais consumidos em quantidade por genero:`);
        let listaAuxiliar = new Array<Auxiliar>()
        produtos.forEach(element => {
            let auxiliar = new Auxiliar()
            auxiliar.nome = element.nome
            auxiliar.valor = 0
            listaAuxiliar.push(auxiliar)
        });
        this.clientes.forEach(cliente =>{
            if(cliente.genero == genero)
            {
                let produtoss = cliente.getProdutosConsumidos
                produtoss.forEach(produto => {
                    listaAuxiliar.forEach(auxiliar => {
                        if(auxiliar.nome == produto.nome )
                        {
                            auxiliar.valor = auxiliar.valor+1
                        }
                    })
                })
            }
        })

        listaAuxiliar.sort(function(a, b){
            if (a.valor< b.valor) {
                return 1;
              }
            if (a.valor > b.valor) {
                return -1;
              }
              // a must be equal to b
            return 0; 
        })
        let id = 0 
        listaAuxiliar.forEach(aux => 
        {
            console.log(`Nome: ` + aux.nome);
            console.log(`Quantidade de produtos consumidos: ` + aux.valor);
            console.log(`--------------------------------------`);
        })
        console.log(`\n`);
    }


    public listarMenosConsumoServico(): void {
        console.log(`\nLista de serviços menos consumidos em quantidade:`);
        let listaAuxiliar = this.clientes
        listaAuxiliar.sort(function(a, b){
            if (a.getServicosConsumidos.length > b.getServicosConsumidos.length) {
                return 1;
              }
            if (a.getServicosConsumidos.length < b.getServicosConsumidos.length) {
                return -1;
              }
              // a must be equal to b
            return 0; 
        })
        let id = 0 
        for(let  aux of listaAuxiliar)
        {
            console.log(`Nome: ` + aux.nome);
            console.log(`Quantidade de serviços consumidos: ` + aux.getServicosConsumidos.length);
            console.log(`--------------------------------------`);
            id++
            if(id >9)
            {
                break
            }
        }
        console.log(`\n`);
    }

    public listarenosConsumoProduto(): void {
        console.log(`\nLista de produtos menos consumidos em quantidade:`);
        let listaAuxiliar = this.clientes
        listaAuxiliar.sort(function(a, b){
            if (a.getProdutosConsumidos.length > b.getProdutosConsumidos.length) {
                return 1;
              }
            if (a.getProdutosConsumidos.length < b.getProdutosConsumidos.length) {
                return -1;
              }
              // a must be equal to b
            return 0; 
        })
        let id = 0 
        for(let  aux of listaAuxiliar)
        {
            console.log(`Nome: ` + aux.nome);
            console.log(`Quantidade de produtos consumidos: ` + aux.getProdutosConsumidos.length);
            console.log(`--------------------------------------`);
            id++
            if(id >9)
            {
                break
            }
        }
        console.log(`\n`);
    }

   

    public listarMaisConsumoProdutoValor(): void {
        console.log(`\nLista de produtos mais consumidos em valor:`);
        let listaAuxiliar = this.clientes
        listaAuxiliar.sort(function(a, b){
            let aProdutosConsumidos = a.getProdutosConsumidos
            let aValor = 0 
            aProdutosConsumidos.forEach(element => {
                aValor = aValor + element.valor
            });

            let bProdutosConsumidos = b.getProdutosConsumidos
            let bValor = 0 
            bProdutosConsumidos.forEach(element => {
                bValor = bValor + element.valor
            });
            if (aValor < bValor) {
                return 1;
              }
            if (aValor > bValor) {
                return -1;
              }
              // a must be equal to b
            return 0; 
        })
        let id = 0 
        for(let  aux of listaAuxiliar)
        {
            console.log(`Nome: ` + aux.nome);
            let valor = 0
            aux.getProdutosConsumidos.forEach(prod => {
                valor = valor +prod.valor
            })
            console.log(`Valor: ` + valor);
            console.log(`--------------------------------------`);
            id++
            if(id >5)
            {
                break
            }
        }
        console.log(`\n`);
    }

    public listarMaisConsumoServicoValor(): void {
        console.log(`\nLista de serviços mais consumidos em valor:`);
        let listaAuxiliar = this.clientes
        listaAuxiliar.sort(function(a, b){
            let aServicosConsumidos = a.getServicosConsumidos
            let aValor = 0 
            aServicosConsumidos.forEach(element => {
                aValor = aValor + element.valor
            });

            let bServicosConsumidos = b.getServicosConsumidos
            let bValor = 0 
            bServicosConsumidos.forEach(element => {
                bValor = bValor + element.valor
            });
            if (aValor < bValor) {
                return 1;
              }
            if (aValor > bValor) {
                return -1;
              }
              // a must be equal to b
            return 0; 
        })
        let id = 0 
        for(let  aux of listaAuxiliar)
        {
            console.log(`Nome: ` + aux.nome);
            let valor = 0
            aux.getServicosConsumidos.forEach(serv => {
                valor = valor +serv.valor
            })
            console.log(`Valor: ` + valor);
            console.log(`--------------------------------------`);
            id++
            if(id >5)
            {
                break
            }
        }
        console.log(`\n`);
    }
}