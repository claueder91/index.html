# index.html
<!DOCTYPE html>
<html>
  <head>
    <title>Blog do Claueder Barros</title>
    <link rel="stylesheet" href="estilo.css">
    <script src="contador.js"></script>

  </head>
  <body>
    <header>
      <h1>Blog do Claueder Barros</h1>
      <nav>
        <ul>
          <li><a href="#">Início</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <article>
        <header>
          <h2>Título do Post</h2>
          <p class="post-meta">Por Claueder Barros | 17 de fevereiro de 2023</p>
        </header>
        <img src="https://i.pinimg.com/564x/cf/1b/b2/cf1bb2ee726df360349b3f1533310427.jpg" alt="Imagem do Post">
        <p>Fiz essa pagína, que é o inicio de um projeto que eu tenho pensado muito em fazer, acho que muitos sabem que eu sou adepto das criptomoedas, e de todo ecossistema da internet, então decidi criar um site descentralizado com da realidade, todo projeto que eu criar vai estar na rede de testes, as criptomoedas a principio dentro do site não vão ter valor algum, apenas para testar as tecnologias de blockchain que é onde estão as criptomoedas, na verdade é usar a criptografia e muitos recursos que tornam a interação na internet mais perto da realidade, todo projeto que eu criar vai estar na rede de testes, as criptomoedas a principio dentro do site não vão ter valor algum, apenas para testar o que eu for criando, se ficar bom, e eu conseguir com todos os desafios desenvolver o projeto que tenho em mente eu colocarei na rede principal de alguma blockchain que eu ainda não escolhi, ou usar várias, se você não está entendendo, eu irei explicar melhor em outros posts, mas quer dizer que o site não vai ser meu, e sim de uma comunidade que se juntar aqui, e a sua influencia dentro do site vai ser a quantidade de criptomoedas que você obtiver, são como pedaços do site que você vai ter, como ações, eu logo abaixo vou explicar o meu projeto, mais é algo que é um desafio muito grande para mim, mas vai ser divertido fazer isso. abaixo segue um pouco das ideias do projeto.</p>


<p>Olá pessoal! Eu quero falar sobre um site que estou pensando em criar. É um site sobre esquizofrenia e sentimentos, onde as pessoas podem compartilhar suas experiências e se conectar com outras pessoas que têm vivências semelhantes.
O site é descentralizado, o que significa que ele não é controlado por uma única empresa ou organização. Ele é executado em uma rede de computadores chamada blockchain, que é mantida por várias pessoas em todo o mundo.
A blockchain usa criptomoedas, que são moedas digitais, para incentivar as pessoas a contribuir para a plataforma. Cada pessoa que contribui com conteúdo valioso, como posts, fotos ou textos, é recompensada com uma criptomoeda chamada "token". Os tokens são como pontos que as pessoas podem usar para votar em posts que gostam e para ganhar dinheiro.
Agora, deixe-me explicar o que é NFT. NFT significa "Non-Fungible Token", que é um tipo especial de token criptográfico. Enquanto a maioria das criptomoedas são fungíveis, o que significa que uma unidade é igual a qualquer outra unidade, os NFTs são únicos e têm valores distintos.
No nosso site, as pessoas podem comprar e vender textos, posts e fotos como NFTs. Isso significa que esses itens são únicos e possuem valor por si só, e podem ser vendidos e comprados como objetos colecionáveis.
Então, quando alguém compra um NFT, essa pessoa possui a propriedade do item em questão e pode fazer o que quiser com ele. E se alguém quiser comprar esse NFT mais tarde, eles terão que pagar o valor que o proprietário atual está pedindo.
</p>
      </article>
    </main>
    <footer>
      <br>
      <br>
    <div>
          Você é o visitante número: <span id="contador"></span>
   </div>
      <p>© 2023 Blog do Claueder Barros. Todos os direitos reservados.</p>
    </footer>
    
    <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBlJ59cN_UgmluN8Q38f2A8_FqdRVmTvNk",
    authDomain: "site-claueder-barros.firebaseapp.com",
    projectId: "site-claueder-barros",
    storageBucket: "site-claueder-barros.appspot.com",
    messagingSenderId: "541974575679",
    appId: "1:541974575679:web:91169f6a737f1c733b168a",
    measurementId: "G-3EWSKJR5PN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
  </body>
</html>

