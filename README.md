<!DOCTYPE html>
<html lang="pt-br">
    <head>
		<meta charset="iso-western">
		<title>Apresentaзгo</title>
		<link rel="icon" href="img/icon.png" type="image/x-icon">
		<link rel="stylesheet" type="text/css" href="css/reset.css">
		<link rel="stylesheet" type="text/css" href="css/index.css">
		<link rel="stylesheet" type="text/css" href="css/preIndex.css">
	</head>

    <body>
        <header>
            <div class="container">
                <h1>Portal nutriзгo</h1>
            </div>
        </header>

        <main>
            <div class="content">
                <h1>Sobre o "Portal nutriзгo"</h1>
                <h2>O que й</h2>
                <p>O "Portal nutriзгo" й um projeto para apresentar meus conhecimentos em HTML, CSS e JavaScript</p>
                <h2>O que faz</h2>
                <p>Sua funcionalidade й mostrar, adicionar e, caso preciso, remover os dados dos pacientes de um nutricionista</p>
                    <h3>Mostrar</h3>
                    <p>Os pacientes sгo mostrados numa tabela com: nome, altura, peso, porcentagem de gordura e imc</p>
                    <h3>Adicionar</h3>
                    <p>O portal adiciona pacientesdas seguintes formas: 
                        <ul>
                            <li>
                                <h4>1. Banco de dados externo</h4>
                                <p>Usando o objeto requisitor "XMLHttpRequest", eu faзo a requisiзгo dos dados de pacientes ficticios localizados num json</p>
                            </li>
                            <li>
                                <h4>2. Adiзгo manual</h4>
                                <p>Usando "querySelector" e metodos de manipulaзгo HTML, eu recebo os dados do formulбrio e faзo o tratamento deles para que, caso vбlidos, sejam adicionados na tabela</p>
                            </li>
                        </ul>
                    </p>
                <h1>Tutorial</h1>
                <ul>
                    <li>
                        <h2>Adiзгo</h2>
                        <ul>
                            <li><h3>Banco de daos</h3></li>
                            <p>A solicitaзгo й feita ao pressionar o botгo imediatamente a baixo da tabela</p>
                            <li><h3>Manualmente</h3></li>
                            <p>Basta preencher o formulбrio, a validaзгo dos dados serб feita via JavaScript, entгo, caso a entrada nгo seja vбlida o programa nгo permitirб a adiзгo do paciente</p>
                        </ul>
                        <h2>Remoзгo</h2>
                        <p>Para efetuar a remoзгo, й preciso que vocк dк um duplo cique na linha que deseja remover</p>
                    </li>
                </ul>
            </div>
        </main>
    </body>
</html>
