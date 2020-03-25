# Rocketseat OmniStack 11

https://rocketseat.com.br/week/aulas/11.0


## <a name="indice">Índice</a>

1. [23/03 - Conhecendo a OmniStack](#parte1)     
2. [24/03 - Criando a base da aplicação](#parte2)     
3. [25/03- Construindo a interface web](#parte3)     
4. [26/03 - Desenvolvendo o app mobile](#parte4)     
5. [27/03 - Funcionalidades avançadas](#parte5)     
---


## <a name="parte1">1 - 23/03 - Conhecendo a OmniStack</a>

- Link da Aula: https://youtu.be/Hfe28D4cFQA

- Apresentar a Aplicação:

![Apresentar a Aplicação 1](imgs/1-1-apresentacao.jpg)

![Apresentar a Aplicação 2](imgs/1-2-apresentacao.jpg)

![Apresentar a Aplicação 3](imgs/1-3-apresentacao.jpg)

![Apresentar a Aplicação 4](imgs/1-4-apresentacao.jpg)


- Configurar ambiente de desenvolvimento
  - Node & NPM
    - https://nodejs.org/
    - https://www.npmjs.com/
  - Visual Studio Code
- Entender sobre o Back-end & Front-End

![Back-end](imgs/1-5-backend.jpg)

- Criar projeto com Node.js
```
npm init -y

npm install express

node index.js
```

```js
const express = require('express');

const app = express();

app.get('/', (request, response)=> {
    //response.send("Olá Mundo!!");
    response.json({
        evento: "OmniStak 11",
        aluno: "José Malcher Jr."
    })
});

app.listen(3333);

```

- Entender sobre REACT & SPA

![Entendendo REACT e SPA](imgs/1-6-entendendo-react.jpg)

![Entendendo REACT e SPA](imgs/1-7-entendendo-react.jpg)

- Criar projeto com ReactJS

```
npx create-react-app frontend

npm start
```

- Entender Sobre React Native & EXPO

![Entendendo React Native e Expo](imgs/1-8-entendendo-react-native-expo.jpg)

![Entendendo React Native e Expo](imgs/1-9-entendendo-react-native-expo.jpg)

![Entendendo React Native e Expo](imgs/1-10-entendendo-react-native-expo.jpg)

![Entendendo React Native e Expo](imgs/1-11-entendendo-react-native-expo.jpg)



[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - 24/03 - Criando a base da aplicação</a>



[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - 25/03- Construindo a interface web</a>



[Voltar ao Índice](#indice)

---


## <a name="parte4">4 - 26/03 - Desenvolvendo o app mobile</a>



[Voltar ao Índice](#indice)

---


## <a name="parte5">5 - 27/03 - Funcionalidades avançadas</a>



[Voltar ao Índice](#indice)

---

