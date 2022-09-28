import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `

//---------------------------------reset

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

//--------------Estilos Globais

.screen-container{
	background-color: #FB6B6B;
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0px;
	padding: 0px;
	padding-bottom: 200px;
  }
  
  .logo-container {
	display: flex;
	align-items: center;
	margin: 40px 0 20px 0;
   
  }
  
  .logo-container img {
	width: 52px;
  }
  
  .logo-container h1 {
	font-family: 'Righteous';
	font-style: normal;
	font-weight: 400;
	font-size: 36px;
	line-height: 45px;
	color: #FFFFFF;
	margin-left: 20px;
  }
  
  .footer-concluidos {
	width: 100%;
	min-height: 50px;
	background-color: #FFFFFF;
	position: fixed;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-family: 'Recursive';
	font-weight: 400;
	font-size: 18px;
	color: #333333;
	padding: 10px;
  }
  
  .footer-concluidos > .container-botoes {
	display: flex;
	width: 80%;
	justify-content: space-between;
	margin: 20px;
  }
  
  /* Você vai precisar trocar a cor dos botões e alguns textos!
	VERDE = "#2FBE34"
	AMARELO = "#FF922E"
	VERMELHO = "#FF3030"
	CINZA = "#333333" 
  */
  
  .container-botoes > button {
	width: 90px;
	font-family: 'Recursive';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: #FFFFFF;
	background: blue;
	border-radius: 5px;
	border: 1px solid blue;
	padding:5px;
  }
  
  .pergunta-fechada {
	width: 300px;
	height: 35px;
	background-color: #FFFFFF;
	margin: 12px;
	padding: 15px;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
  }
  
  .pergunta-fechada > p {
	font-family: 'Recursive';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #333333;
  }
  
  .pergunta-aberta {
	width: 300px;
	margin: 12px;
	padding: 15px;
	min-height: 100px;
	background: #FFFFD5;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
	border-radius: 5px;
	font-family: 'Recursive';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 22px;
	color: #333333;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  }
  
  .pergunta-aberta > img{
	position: absolute;
	bottom: 10px;
	right: 10px;
  }


`



// *{
// 	box-sizing: border-box;
//   --cor-fundo: #FB6B6B;
//   --cor-fundo-card: #FFFFD4;
//   --cor-nao-lembrei: #FF3030;
//   --cor-quase-nao-lembrei: #FF922E;
//   --cor-zap: #2FBE34;
//   --preto: #333333;
// }

// body {
// 	width: 100vw;
// 	height: 100vh;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	color: var(--preto);
// 	font-family: 'Recursive', sans-serif;
// 	/* font-family: 'Righteous', cursive; */
//   }
  
//   .flashcard {
// 	width: 300px;
// 	height: 50px;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	background-color: white;
// 	color: black;
// 	border-radius: 5px;
// 	margin: 10px 0px;
// 	padding: 10px 10px;
// 	cursor: pointer;
// 	font-family: 'Recursive', cursive;
//   }
  
//   .flashcard.acerto {
// 	color: var(--cor-zap);
// 	text-decoration: line-through;
//   }
  
//   .flashcard.help {
// 	color: var(--cor-quase-nao-lembrei);
// 	text-decoration: line-through;
//   }
  
//   .flashcard.erro {
// 	color: var(--cor-nao-lembrei);
// 	text-decoration: line-through;
//   }
  
  
//   .flashcard.aberto {
// 	min-height: 130px;
// 	display: flex;
// 	flex-direction: column;
// 	background-color: var(--cor-fundo-card);
// 	cursor: default;
// 	padding: 20px 10px;
//   }
  
//   .aberto div {
// 	width: 100%;
// 	display: flex;
// 	justify-content: flex-end;
//   }
  
  
  
//   .aberto.resposta div {
// 	width: 100%;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
//   }
  
//   .aberto img {
// 	cursor: pointer;
//   }
  
//   .action {
// 	display: flex;
// 	width: 100%;
// 	justify-content: space-around;
// 	align-items: center;
// 	gap: 10px;
//   }
  
//   .button {
// 	width: 100%;
// 	height: 40px;
// 	background-color: green;
// 	color: white;
// 	font-size: 12px;
// 	font-weight: 700;
// 	border-radius: 4px;
// 	cursor: pointer;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
//   }
  
//   .button:hover {
// 	filter: brightness(0.7)
//   }
//   .button.error {
// 	background-color: var(--cor-nao-lembrei);
//   }
  
//   .button.almost {
// 	background-color: var(--cor-quase-nao-lembrei);
//   }
  
//   .button.zap {
// 	background-color: var(--cor-zap);
//   }
  
  
//   .icone,
//   img.icone {
// 	color: var(--preto);
// 	width: 23px;
// 	height: 23px;
//   }
  
//   .icone svg {
// 	width: 23px;
// 	height: 23px;
//   }
  
  
//   .icone .erro {
// 	color: var(--nao-lembrei);
//   }
  
//   .icone .duvida {
// 	color: var(--cor-quase-nao-lembrei);
//   }
  
//   .icone .acerto {
// 	color: var(--cor-zap);
//   }
  
  
//   .deck {
// 	display: flex;
// 	flex-direction: column;
//   }
  
//   .deck .header {
// 	position: fixed;
// 	height: 80px;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	padding: 10px 0;
// 	font-size: 36px;
// 	color: white;
// 	font-family: "Righteous";
// 	z-index: 1;
// 	background-color: var(--cor-fundo);
//   }
  
//   .deck .main {
// 	max-height: 400px;
// 	overflow-y: auto;
//   }
  
//   .deck .main::-webkit-scrollbar {
// 	display: none;
//   }
  
  
//   .footer {
// 	position: fixed;
// 	bottom: 0;
// 	left: 0;
// 	right: 0;
// 	background-color: white;
// 	z-index: 1;
// 	width: 100%;
// 	min-height: 70px;
// 	padding: 14px 10px;
// 	font-size: 18px;
// 	color: black;
// 	position: fixed;
// 	text-align: center;
// 	display: flex;
// 	flex-direction: column;
// 	gap: 20px;
//   }
  
  
  
//   .deck .header img {
// 	width: 52px;
// 	height: 60px;
//   }
  
//   .home {
// 	width: 100%;
// 	height: 100%;
// 	top: 0;
// 	left: 0;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	flex-direction: column;
// 	z-index: 1;
// 	position: absolute;
// 	background-color: var(--cor-fundo);
//   }
  
  
  
//   .home h1 {
// 	font-family: "Righteous", cursive;
// 	font-size: 36px;
// 	color: white;
//   }
  
  
//   .home button {
// 	width: 246px;
// 	height: 54px;
// 	padding: 16px 22px;
// 	border-radius: 5px;
// 	color: #D70900;
// 	border: 1px;
// 	font-size: 18px;
// 	cursor: pointer;
//   }
  
//   .home button:hover {
// 	background-color: #cea2a0
//   }