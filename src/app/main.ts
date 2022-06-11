import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - CRUD cliente`);
    console.log(`2 - CRUD produto`);
    console.log(`3 - CRUD servico`);
    console.log(`4 - Listagens`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    let operacaoSecundaria;

    switch (opcao) {
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        case 1:
            console.log(`Que tipo de operação você deseja fazer:`);
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Deletar cliente`);
            console.log(`3 - Listar cliente`);
            console.log(`4 - Editar cliente`);
            console.log(`5 - Adicionar produto a um cliente`);
            console.log(`6 - Adicionar servico a um cliente`);

            operacaoSecundaria = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (operacaoSecundaria) {
                case 1:
                    let cadastro = new CadastroCliente(empresa.getClientes)
                    cadastro.cadastrar()
                    break;
                case 2:
                    let listagem2 = new ListagemClientes(empresa.getClientes)
                    listagem2.listar()
                    let opcaoDeletar = entrada.receberNumero(`Por favor, escolha um id: `)
                    empresa.removerClientes(opcaoDeletar) 
                    break;
                case 3:
                    let listagem = new ListagemClientes(empresa.getClientes)
                    listagem.listar()
                    break;
                case 4:
                    let listagem3 = new ListagemClientes(empresa.getClientes)
                    listagem3.listar()
                    let opcaoEditar = entrada.receberNumero(`Por favor, escolha um id: `)
                    let cadastro2 = new CadastroCliente(empresa.getClientes)
                    cadastro2.editar(opcaoEditar)
                    break;
                case 5:
                    let listagemCliente = new ListagemClientes(empresa.getClientes)
                    listagemCliente.listar()
                    let indexCliente = entrada.receberNumero(`Por favor, escolha o id do cliente: `)
                    let listagemProduto4 = new ListagemProdutos(empresa.getProdutos)
                    listagemProduto4.listar()
                    let indexProduto = entrada.receberNumero(`Por favor, escolha o id do produto: `)
                    empresa.adicionarProdutoAoCliente(indexCliente,indexProduto) 
                    console.log(`Produto adicionado com sucesso`);
                    break;
                case 6:
                    let listagemCliente2 = new ListagemClientes(empresa.getClientes)
                    listagemCliente2.listar()
                    let indexCliente2 = entrada.receberNumero(`Por favor, escolha o id do cliente: `)
                    let listagemServico4 = new ListagemServicos(empresa.getServicos)
                    listagemServico4.listar()
                    let indexServico = entrada.receberNumero(`Por favor, escolha o id do serviço: `)
                    empresa.adicionarServicoAoCliente(indexCliente2, indexServico) 
                    console.log(`Serviço adicionado com sucesso`);
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
        case 2:
            console.log(`Que tipo de operação você deseja fazer:`);
            console.log(`1 - Cadastrar produto`);
            console.log(`2 - Deletar produto`);
            console.log(`3 - Listar produto`);
            console.log(`4 - Editar produto`);

            operacaoSecundaria = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (operacaoSecundaria) {
                case 1:
                    let cadastroProduto = new CadastroProduto(empresa.getProdutos)
                    cadastroProduto.cadastrar()
                    break;
                case 2:
                    let listagemProduto3 = new ListagemProdutos(empresa.getProdutos)
                    listagemProduto3.listar()
                    let opcaoDeletarProduto = entrada.receberNumero(`Por favor, escolha um id: `)
                    empresa.removerProdutos(opcaoDeletarProduto) 
                    break;
                case 3:
                    let listagemProduto = new ListagemProdutos(empresa.getProdutos)
                    listagemProduto.listar()
                    break;
                case 4:
                    let listagemProduto2 = new ListagemProdutos(empresa.getProdutos)
                    listagemProduto2.listar()
                    let opcaoEditarProduto = entrada.receberNumero(`Por favor, escolha um id: `)
                    let produto2 = new CadastroProduto(empresa.getProdutos)
                    produto2.editar(opcaoEditarProduto)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
        case 3:
            console.log(`Que tipo de operação você deseja fazer:`);
            console.log(`1 - Cadastrar servico`);
            console.log(`2 - Deletar servico`);
            console.log(`3 - Listar servico`);
            console.log(`4 - Editar servico`);

            operacaoSecundaria = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (operacaoSecundaria) {
                case 1:
                    let cadastroServico = new CadastroServico(empresa.getServicos)
                    cadastroServico.cadastrar()
                    break;
                case 2:
                    let listagemServico3 = new ListagemServicos(empresa.getServicos)
                    listagemServico3.listar()
                    let opcaoDeletarSevico = entrada.receberNumero(`Por favor, escolha um id: `)
                    empresa.removerServicos(opcaoDeletarSevico) 
                    break;
                case 3:
                    let listagemServico = new ListagemServicos(empresa.getServicos)
                    listagemServico.listar()
                    break;
                case 4:
                    let listagemServico2 = new ListagemServicos(empresa.getServicos)
                    listagemServico2.listar()
                    let opcaoEditarServico = entrada.receberNumero(`Por favor, escolha um id: `)
                    let servico2 = new CadastroServico(empresa.getServicos)
                    servico2.editar(opcaoEditarServico)
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
        case 4:
            console.log(`Que tipo de operação você deseja fazer:`);
            console.log(`1 - Listar 10 clientes que mais consumiram serviço em quantidade`);
            console.log(`2 - Listar 10 clientes que mais consumiram produtos em quantidade`);
            console.log(`3 - Listagem geral dos serviços mais consumidos`);
            console.log(`4 - Listagem geral dos produtos mais consumidos`);
            console.log(`5 - Listagem dos serviços ou produtos mais consumidos por gênero.`);
            console.log(`6 - Listagem dos 10 clientes que menos consumiram produtos`);
            console.log(`7 - Listagem dos 10 clientes que menos consumiram servicos`);
            console.log(`8 - Listagem dos 5 clientes que mais consumiram em valor,produtos`);
            console.log(`9 - Listagem dos 5 clientes que mais consumiram em valor,servicos`);
            console.log(`10 - Listagem de todos os clientes por gênero`);

            operacaoSecundaria = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch (operacaoSecundaria) {
                case 1:
                    let listagemCliente3 = new ListagemClientes(empresa.getClientes)
                    listagemCliente3.listarMaisConsumoServico()
                    break;
                case 2:
                    let listagemCliente4 = new ListagemClientes(empresa.getClientes)
                    listagemCliente4.listarMaisConsumoProduto()
                    break;
                case 3:
                    let listagemCliente5 = new ListagemClientes(empresa.getClientes)
                    listagemCliente5.listarGeralMaisConsumoServico(empresa.getServicos)
                    break;
                case 4:
                    let listagemCliente6 = new ListagemClientes(empresa.getClientes)
                    listagemCliente6.listarGeralMaisConsumoProduto(empresa.getProdutos)
                    break;
                case 5:
                    let listagemCliente7 = new ListagemClientes(empresa.getClientes)
                    let indexServico2 = entrada.receberNumero(`Por favor, digite 1 para Masculino, 2 para Feminino ou 3 para Não informado: `)
                    if(indexServico2 == 1)
                        listagemCliente7.listarGeralMaisConsumoProdutoGenero(empresa.getProdutos,'Masculino')
                    if(indexServico2 == 2)
                        listagemCliente7.listarGeralMaisConsumoProdutoGenero(empresa.getProdutos,'Feminino')
                    if(indexServico2 == 1)
                        listagemCliente7.listarGeralMaisConsumoProdutoGenero(empresa.getProdutos,'Não informado')
                    break;
                case 6:
                    let listagemCliente8 = new ListagemClientes(empresa.getClientes)
                    listagemCliente8.listarenosConsumoProduto()
                    break;
                case 7:
                    let listagemCliente9 = new ListagemClientes(empresa.getClientes)
                    listagemCliente9.listarMenosConsumoServico()
                    break;
                case 8:
                    let listagemCliente10 = new ListagemClientes(empresa.getClientes)
                    listagemCliente10.listarMaisConsumoProdutoValor()
                    break;
                case 9:
                    let listagemCliente11 = new ListagemClientes(empresa.getClientes)
                    listagemCliente11.listarMaisConsumoServicoValor()
                    break;
                case 10:
                    let listagemCliente12 = new ListagemClientes(empresa.getClientes)
                    let indexServico3 = entrada.receberNumero(`Por favor, digite 1 para Masculino, 2 para Feminino ou 3 para Não informado: `)
                    if(indexServico3 == 1)
                        listagemCliente12.listarPorGengero('Masculino')
                    if(indexServico3 == 2)
                        listagemCliente12.listarPorGengero('Feminino')
                    if(indexServico3 == 1)
                        listagemCliente12.listarPorGengero('Não informado')
                    break;
                default:
                    console.log(`Operação não entendida :(`)
            }
            break;
    }  
}
