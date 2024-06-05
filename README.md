# RamenGo - Teste Red Ventures

Aplicação de pedido de refeições RamenGO.

## Como iniciar este projeto

### Docker

<details>
  <summary>Passo a Passo - Inicialização da aplicação com Docker</summary>
  <ul>
    <li>Clone o repositório na sua máquina.</li>
    <li>Na pasta <strong>api</strong> e na pasta <strong>app</strong> renomeie o arquivo <code>.env.example</code>, apagando a extensão <code>.example</code>.</li>
    <li>Caso não tenha, instale o Docker de acordo com seu sistema operacional <a href='https://docs.docker.com/engine/install/ubuntu/' target='_blank'>clicando aqui</a> e seguindo os passos.</li>
    <li>Depois instale o Docker Compose <a href='https://docs.docker.com/engine/install/ubuntu/' target='_blank'>clicando aqui</a> e seguindo os passos.</li>
    <li>Na pasta <code>api</code>, renomeie o arquivo <code>.env.example</code>, apagando a extensão <code>.example</code>.</li>
    <li>Em seguida, na pasta raíz do projeto, rode o comando <code>docker compose up --build -d</code>. Este comando iniciará o Docker Compose e fará o build das etapas necessárias para que a aplicação rode localmente.</li>
    <li>Depois, vá ao navegagor e entre na rota <code>localhost</code> para acessar a aplicação.</li>
  </ul>
</details>

### Etapas da inicialização local sem o Docker

### Backend

Antes de iniciar, certifique-se de ter instalado o Docker e ter seguido todos os passos anteriores e deixar a aplicação rodando, porque o banco está persistindo nele.

<details>
  <summary>Passo a Passo - Iniciando da api</summary>
  <ul>
    <li>Na pasta <strong>api</strong>, rode o comando <code>npm install</code> para instalar as dependências.</li>
    <li>Caso ainda não tenha feito, renomeie o arquivo <code>.env.example</code>, apagando a extensão <code>.example</code>.</li>
    <li>Depois, na linha de comando, digite o comando <code>npm run dev</code> para iniciar em ambiente de desenvolvimento a aplicação na rota <code>localhost:8080</code>.</li>
    <li>Por fim, para testar a API faça uma requisição do tipo <strong>GET</strong> para a rota <code>http://localhost:8080/api/broths</code>. Mais detalhes sobre rotas de testes serão abordados na documentação (veja o tópico "Documentação").</li>
  </ul>
</details>

### Frontend

<details>
  <summary>Passo a Passo - Executar o frontend</summary>
  <ul>
    <li>Na pasta <strong>app</strong>, rode o comando <code>python3 -m http.server 80</code> para rodar a aplicação.</li>
    <li>Depois, no navegador, veja a aplicação em execução na rota <code>localhost</code>.</li>
  </ul>
</details>

## Documentação

Após iniciar a aplicação entre na rota ```localhost:8080/documentation``` para encontrar a documentação das rotas da API.

## Tecnologias utilizadas

- [x] Typescript 
- [x] Javascript 
- [x] Node.js 
- [x] Express 
- [x] Docker 
- [x] Git 

## Desenvolvimento

<table>
  <tr>
    <td style='border=1px solid #ddd; align="center'>
      <a href="https://github.com/wesleysantossts">
        <img src="https://avatars.githubusercontent.com/u/56703526?v=4" width="100px" alt="Wesley Santos"/>
        <br/>
        <sub>Wesley Santos</sub>
      </a>
    </td>
  </tr>
</table>
