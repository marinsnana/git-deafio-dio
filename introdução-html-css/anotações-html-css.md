# Introdução a HTML5 E CSS3



### HTML

• Elemento: É a base do HTML. Tag de abertura, qual tipo de elemento, atributo (pode mudar a funcionalidade, aparência et), conteúdo do elemento e tag de fechamento.

• Estrutura básica de um HTML

!DOCTYPE html (não é elemento html, apenas informa ao navegador o que você está escrevendo)
html (é o elemento, tudo o que diz respeito ao documento vai estar dentro desse elemento)
head
meta
title /title (é onde fica o titulo)
/head
body (é onde fica o conteúdo da página)
/body
/html



### Semântica

• **Section**: representa uma sessão genérica de conteúdo como lista de artigos
• **Header** pode ser o cabeçalho da sua pagina
• **Article** representa um conteúdo relevante dentro da sua pagina
• **Aside** representa um conteúdo relacionado ao conteúdo principal da pagina
• **Footer** pode ser rodapé da pagina ou de outra parte
• **h1-h6** servem pra trazer semântica, representam a importância de ter um titulo



### Textos e links

**• Tags para textos**

> h1 titulo da pagina /h1 
> h2 título da seção /h2
> h3 título do artigo /h3 
> p conteúdo do artigo /p

*p - representa paragrafo, mas podemos adicionar fotos, videos e varios tipos de conteudo*



• **Tags para links**

a link /a

a href="linkedin.com/in/vilaboim"> Linkedin </a>
a href="mailto:lucas@vilaboim.com"> Email </a> 

a target="_blank"> Link </a>  *(diz pra abrir o link numa nova aba)*



### Imagens

<img>

<img src!img/avatar.jpg">  (source guarda o caminho da imagem dentro do site ou outro lugar)
<img alt="foto de lucas vilaboim"> (pra acessibilidade, leitores de tela usam essa descrição pra mostrar o que significa)



### Listas

• ul (a ordem dos itens não é importante)
item 1
item 2



• ol (a ordem dos itens é importante mas eles são representados por letras numeros ou algarismos romanos)
1. item 1
2. item 2



<li> (é o item da lista)



# CSS3



• Em 1993 foi criado o CSS3
• Uma regra CSS é formada por um seletor, um grupo de seletores (são elementos HTML), então dentro de um par de chaves temos as declarações (é formada por uma propriedade e um valor) 

a, p, h1, h3 { (seletores)
   color: blue;
   font-size: 14px; (declarações)
} 



### ID X CLASSE



header id="header" class="header"></header>

header class="header"> </header>

• **ID x Classe** pode representar qualquer tipo de elemento. classe é precedido por um ponto e um ID é precedido por uma hashtag. 
• **ID** só pode ser usado uma vez na pagina. 

• Layout de um site representa cada elemento HTML com uma caixa retangular chamada **box model**, com CSS podemos alterar a aparência dessa caixa, tendo 4 áreas:
> • **Margin** - passamentos entre elementos
> • **Border** - circundam o padding e o conteúdo, podemos alterar aparência delas, como largura e cor
> • **Padding** - espaçamento entre a borda e o conteudo
> • **Content** - é o que o seu bloco representa, um texto, uma imagem ou video



### Estilizando elementos



• **padding**

.post {
  padding-top: 15px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 0;
}

• **background**

.post {
  background-color: green;
  background-image: url("bg.png");
  background-position: top;
}

• **border** (pode ter largura, cor e estilo)

largura: pixels, centímetros, milímetros
cor: blue, #0000ff...
estilo: solid, dotted, dashed...

.post {
  border: 3px solid blue;
  border-top: 2px dotted green;
  border-right: 4px dashed pink;
}


• **border radius**

border-radius: 10px;
border-radius: 50%;
border-radius: 10% 20%;
border-radius: 10% 20% 15% 22%;

*OBS.: se você quiser tranformar um quadrado num circulo, só colocar o border radius no 50%.*



### Estilizando textos



• **font family** altera a fonte do nosso texto, podemos usar direto da web ou instalada na nossa maquina. **Web safe fonts** são fontes que são encontradas na maioria dos dispositivos. Adicionamos duas fontes pois caso a primeira não funcione, a segunda pode ser um backup.

> • **font-size** altera o tamanho do texto
>
> • **font-style** altera a aparência do texto
>
> • **font-weight** altera o peso do texto (bold, etc.)
>
> • **text-transform** altera o texto entre maiusculas e minusculas 
>      • **uppercase** - coloca todo valor em caixa alta
>      • **lowercase** - coloca todo valor em caixa baixa
>      • **captalize** - coloca toda palavra com a primeira letra maiúscula)
>
> • **text-decoration** coloca destaque na palavra com linhas: 
>      • **underline** - coloca linha abaixo da palavra 
>      • **overline** - coloca uma linha acima, 
>      • **line-through** - coloca uma linha cortando a palavra



### Estilizando listas



• list-style-type

**Ex:**

ul {
  list-style-type: square;         
}

>*lista não ordenada alterando o simbolo para um quadrado*



ol {
  list-style-type: upper-roman;
}


> *lista ordenada pra um algarismo romano maiusculo*



ul {
  list-style-type> "\1f44d";
}

> *lista não ordenada com simbolo, no caso do ex, um emoji*




• list-style-image

ul {
  list-style-image: url("rocket.png");
} 



### Dimensão e alinhamento

- **width**: ajusta largura
- **height**: ajusta altura

- **max-width/max-height**: é a altura/largura máxima que o elemento pode ter
- **margin**: margem, para colocar espaçamento entre elementos
- **tex-align**: alinhar textos