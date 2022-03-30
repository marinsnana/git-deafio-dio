# Introdução ao GIT e GitHub

• **CLI** - Command line interface;
• **GUI** - Grafic user interface;

• **Comandos windows CMD**
> cd: change directory, navega pra um lugar especifico
> dir: traz a lista de diretórios na pasta que estamos situados
> mkdir: make directory, cria pastas
> del / rmdir: remover diretório
> cls: limpa a tela



### Tópicos fundamentais para entender o funcionamento do GIT



**• SHA1**

> a sigla SHA significa Secure Hash Algorithm (algoritmo de hash seguro), é um conjunto de funções hash criptográficas projetadas pela NSA (agência de segurança nacional dos EUA). é uma algoritmo de incriptação. 
> a encriptação gera um conjunto de characteres identificador de 40 digitos.
> é uma forma curta de representar um arquivo.

• **Objetos internos do GIT**
> **BLOBS**
> contém metadados do git (SHA1)

> **TREES**
> armazenam os blobs, o SHA1 e o nome do arquivo

> **COMMITS**
> é o objeto que junta tudo, aponta para uma arvore, aponta para um parente, aponta para um autor e uma mensagem



• **Chave SSH** é uma forma de estabelecer uma conexão segura e incriptada com o servidor do GitHub. 

### Comandos básicos do GIT


- git init 
- git add
- git commit
- git add * 
- git commit -m "msg"
- git push origin master
- git pull 
- git status



• **Tracked**

> * **Unmodified**: arquivos que ainda não foram modificados
> * **Modified**: arquivos que eram "unmodified" e sofreram alterações
> * **Staged**: arquivos que estão se preparando para fazer parte de algum agrupamento. depois de pronto, ele volta para a fase unmodified de novo. 



• **Untracked** são arquivos que o GIT ainda não tem ciência da existência deles.



**Lembrando a ordem**: git status / git add * / git commit -m "comentário" / git push origin main



### Resolvendo conflitos no GitHub

**Conflito de merge**: quando o GitHub tenta juntar as alterações que foram feitas na mesma linha, ele não vai inserir nada, ele deixa que você abra e manualmente resolva o conflito. você explica a versão correta e ela vai pro GitHub. 