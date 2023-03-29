# StockSimulator

Um simulador de compra e venda de ações baseado na bolsa de NY

## [Veja esse projeto](https://famous-tapioca-e544c4.netlify.app)


## Features

### - Lista de ações da NYSE Com valores atualizados a cada consulta

Convenientemente existe um arquivo JSON uma lista de ações da bolsa de Nova York, porém essa solução não é exatamente a mais resistente ao tempo, por isso está sujeita a alterações futuras


### - Gerador de gráfico vela usando HTML canva e javascript

Provavelmente a feature mais interessante desse projeto. um gerador de gráfico vela feito com HTMLcanva, JS e um pouco de matemática código disponível [nesse link](https://github.com/B3ella/StockSimulator/blob/main/visual/displayGraph.js).

Desde já pesso perdão pela confusão nesse arquivo em específico, a quantidade de linhas e retangulos sendo traçadas pode se tornar essa função bem confusa bem rápido, 
num mundo ideal cada tipo de presença no gráfico teria sua própria função, mas eu não entendia tanto sobre código limpo na época


### - Carteira com saldo e lista de ações compradas salvos em localStorage

A versão atual desse projeto mantém o escopo bem fechado para funcionar apenas com Front-end, por isso, todos os dados que a aplicação mantém 
(saldo da carteira, lista de ações compradas) são salvas em localStorage, no futuro gostaria de alterar isso. Diferenciar quanto do saldo de uma 
carteira é lucro e quanto foi adicionado arbitráriamente e comparar os resultados de usuários diferentes é uma possíbilidade interessante para o futuro desse projeto
