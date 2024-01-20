# Baixando a imagem do node
FROM node:latest

# Configurando a pasta raiz
WORKDIR /user/app

# Copiando o `pacakge.json` para a pasta raiz
COPY package.json ./

# Rodando o comando `npm install`
RUN npm install

# Copia tudo para a pasta raiz
COPY . . 

# Expondo a porda 3333
EXPOSE 3333

# rodado a applicação
CMD ["npm", "run", "dev"]

# Comando para ciar a imagem
# `docker build -t node-cars-rent-app .`

# Vendo os containers que estao rodando
# `docker ps`

# Para ver TODOS os containers existentes na maquina (mesmo os que nao estao rodando)
# `docker ps -a`

# Para rodar o container
# `docker run -p 3333:3333 node-cars-rent-app

# Para acessar o container e ver oque acontece nele
# - para descobrir o nome do container ({{node_do_container}}) é nescesario rodar o comando
#   `docker ps` e olhar a coluna NAMES
# docker exec -it {{node_do_container}} /bin/bash
# ex. `docker exec -it hardcore_burnell /bin/bash`

# Para PARAR o container use o comando
# para pegar o ID do container pode rodar o `docker ps`
# docker stop {{id_do_container}}

# Para REMOVER o container use o comando
# para pegar o ID do container pode rodar o `docker ps`
# docker rm {{id_do_container}}
