<main>
            <div class="content">
                <h1>Sobre o "Portal nutrição"</h1>
                <h2>O que é</h2>
                <p>O "Portal nutrição" é um projeto para apresentar meus conhecimentos em HTML, CSS e JavaScript</p>
                <h2>O que faz</h2>
                <p>Sua funcionalidade é mostrar, adicionar e, caso preciso, remover os dados dos pacientes de um nutricionista</p>
                    <h3>Mostrar</h3>
                    <p>Os pacientes são mostrados numa tabela com: nome, altura, peso, porcentagem de gordura e imc</p>
                    <h3>Adicionar</h3>
                    <p>O portal adiciona pacientesdas seguintes formas: 
                        <ul>
                            <li>
                                <h4>1. Banco de dados externo</h4>
                                <p>Usando o objeto requisitor "XMLHttpRequest", eu faço a requisição dos dados de pacientes ficticios localizados num json</p>
                            </li>
                            <li>
                                <h4>2. Adição manual</h4>
                                <p>Usando "querySelector" e metodos de manipulação HTML, eu recebo os dados do formulбrio e faço o tratamento deles para que, caso vбlidos, sejam adicionados na tabela</p>
                            </li>
                        </ul>
                    </p>
                <h1>Tutorial</h1>
                <ul>
                    <li>
                        <h2>Adição</h2>
                        <ul>
                            <li><h3>Banco de daos</h3></li>
                            <p>A solicitação é feita ao pressionar o botão imediatamente a baixo da tabela</p>
                            <li><h3>Manualmente</h3></li>
                            <p>Basta preencher o formulбrio, a validação dos dados serб feita via JavaScript, então, caso a entrada não seja vбlida o programa não permitirб a adição do paciente</p>
                        </ul>
                        <h2>Remoção</h2>
                        <p>Para efetuar a remoção, é preciso que vocк dк um duplo cique na linha que deseja remover</p>
                    </li>
                </ul>
            </div>
        </main>
