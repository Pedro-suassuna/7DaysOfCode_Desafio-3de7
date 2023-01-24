<h1 align="center">  Desafio "7 Days Of Code" de: Rafaella Ballerini<br>Day: 03/07</h1>

<h2 align="left"> O DESAFIO:</h2>

<p align = "justify">

Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

Hoje você vai desenvolver um exemplo assim com Javascript!

Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.

Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.

O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.

Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

        1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

        2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

        3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

        4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: "Tem mais alguma tecnologia que você gostaria de aprender?", continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado. 

</p></br>



<h2 align="left"> EXPLICAÇÃO EXTRA:</h2>
<p align="justify"> 

Você já viu estruturas condicionais em Javascript anteriormente, mas vou recapitular. O if é usado para verificar se uma determinada condição é verdadeira.

Exemplo:

        if (cidade === "Roma"){
            // mostre a foto do "Coliseu"
        }
Além disso, ele também pode ser usado com um ou vários else if, que irá saber que a condição anterior era falsa e vai verificar se a atual é verdadeira.

Por fim, existe o else sozinho, sem nenhuma condição, e o código dentro dele será executado sempre que todas as condições encadeadas anteriormente forem falsas.

        if (cidade === "Roma"){
            // mostre a foto do "Coliseu"
        }
        else if (cidade === "Paris"){
            // mostre a foto do "Torre Eiffel"
        }
        else {
            // dê a resposta "Você não digitou nenhuma cidade válida"
        }

Além disso, para a parte 4, você precisará de uma estrutura de repetição (loop) como o while. Para usá-lo, é bem fácil:

        let idade = 0;

        while (idade < 8) {
            // algum comando para imprimir a idade
            idade = idade + 1;
        }

Esse código começará com a idade em zero e, ao entrar no while, esse valor será impresso e, logo depois, incrementado em 1.

Ou seja, depois da primeira vez que ele passar, o valor da idade será igual a 1, que é menor que 8, e por isso, a condição do while terá um resultado verdadeiro e ele continuará a ser executado.

Ele só vai parar quando o valor da variável idade chegar a 8, que não é menor que 8, e por isso a condição do while terá um resultado falso.
</p></br>



<h2 hidden align="left"> MATERIAL DE APOIO:</h2>
<a hidden align="justify" src="https://www.alura.com.br/artigos/operadores-matematicos-em-javascript?gclid=Cj0KCQiA_8OPBhDtARIsAKQu0gYUqZqgonpXyEP1_hpUl58wYAk_P3Ze4VWrxo9ftkFW9CLYOMyjO1caAlrzEALw_wcB&utm_source=ActiveCampaign&utm_medium=email&utm_content=%237DaysOfCode+-+Lógica+JS+1%2F7%3A+Operações+Booleanas&utm_campaign=%5BALURA+%237days+Of+Code%5D+%28Lógica+de+Programação+-+JavaScript%29+Dia+1%3A+Comparando+Valores&vgo_ee=vX9IUN6aWT4akmpPLF7TdHQUJJSi4P3dB7BE1Xn5C7M%3D" target="blank">Como utilizar operadores de comparação em Javascript - Rafaella Ballerini</a>