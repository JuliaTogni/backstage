# Configuração e Implantação do Backstage com Docker

Esse resumo fornece um passo a passo sobre como configurar e implantar o Backstage em um ambiente Docker.
Para a resolução da atividade, me baseei no seguinte link: **_https://github.com/guymenahem/how-to-devops-tools/tree/main/backstage_**

## Pré-requisitos

Antes de começar, certifique-se de que os seguintes softwares estão instalados em seu sistema:

- [Yarn](https://yarnpkg.com/getting-started/install)
- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)

## Configuração do Repositório

### 1. Fork do Repositório

Primeiro, faça um fork do [repositório oficial do Backstage](https://github.com/backstage/backstage) para a sua conta no GitHub. Isso permitirá que você tenha uma cópia pessoal do código para trabalhar.

### 2. Clone o Repositório

Clone o repositório forkado para sua máquina local usando o seguinte comando:

```bash
git clone git clone git@github.com:backstage/backstage.git
cd <nome do projeto>
```

Nesse caso:

```bash
cd backstage-ponderada
```

### 3. Instalação das Dependências

Dentro do diretório do projeto, execute o seguinte comando para instalar todas as dependências necessárias:

```bash
yarn install --frozen-lockfile
```

Evidência dos passos a cima: 
![Texto alternativo](https://github.com/JuliaTogni/backstage/blob/master/Captura%20de%20tela%202024-04-29%20094052.png)

### 4. Execução Backstage

Para iniciar o Backstage em modo de desenvolvimento, utilize o comando:

```bash
yarn dev
```

Evidência do passo a cima: 
![Texto alternativo](https://github.com/JuliaTogni/backstage/blob/master/Captura%20de%20tela%202024-04-29%20095106.png)
![Texto alternativo](https://github.com/JuliaTogni/backstage/blob/master/Captura%20de%20tela%202024-04-29%20100448.png)

## Construção da Imagem Docker

### 1. Compilação do Backstage

Antes de construir a imagem Docker, compile os pacotes necessários e construa a aplicação backend:

```bash
yarn tsc
yarn build:backend
```

Evidência dos passos a cima: 
![Texto alternativo](https://github.com/JuliaTogni/backstage/blob/master/Captura%20de%20tela%202024-04-29%20101116.png)

### 2. Construção da Imagem

Utilize o seguinte comando para construir a imagem Docker do Backstage, especificando a tag desejada:

```bash
docker image build . -f packages/backend/Dockerfile --tag backstage:latest
```

Evidência do passo a cima: 
![Texto alternativo](https://github.com/JuliaTogni/backstage/blob/master/Captura%20de%20tela%202024-04-29%20101308.png)
