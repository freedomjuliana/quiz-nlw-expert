const perguntas = [
  {
    pergunta: "Qual tag HTML é usada para criar um link?",
    respostas: ["Resposta A: <a>", "Resposta B: <link>", "Resposta C: <href>"],
    correta: 0,
  },
  {
    pergunta: "O que CSS significa?",
    respostas: [
      "Resposta A: Counter Style Sheet",
      "Resposta B: Computer Style Sheet",
      "Resposta C: Cascading Style Sheet",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função principal do JavaScript?",
    respostas: [
      "Resposta A: Estilizar páginas web",
      "Resposta B: Criar páginas web",
      "Resposta C: Adicionar interatividade a páginas web",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual propriedade CSS é usada para alterar a cor do texto?",
    respostas: [
      "Resposta A: color",
      "Resposta B: background-color",
      "Resposta C: text-color",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual é a versão mais recente do HTML?",
    respostas: [
      "Resposta A: HTML5",
      "Resposta B: HTMLX",
      "Resposta C: HTML2022",
    ],
    correta: 0,
  },
  {
    pergunta: "O que significa a sigla DOM em JavaScript?",
    respostas: [
      "Resposta A: Document Object Model",
      "Resposta B: Data Object Model",
      "Resposta C: Design Object Model",
    ],
    correta: 0,
  },
  {
    pergunta: "Qual destes não é um tipo de dado em JavaScript?",
    respostas: [
      "Resposta A: Number",
      "Resposta B: Boolean",
      "Resposta C: Float",
    ],
    correta: 2,
  },
  {
    pergunta: "Qual é a função do seletor CSS '#minhaDiv'?",
    respostas: [
      "Resposta A: Selecionar todas as divs",
      "Resposta B: Selecionar divs com a classe 'minhaDiv'",
      "Resposta C: Selecionar uma div com o id 'minhaDiv'",
    ],
    correta: 2,
  },
  {
    pergunta: "O que é responsivo em design web?",
    respostas: [
      "Resposta A: Um design que responde a cliques do usuário",
      "Resposta B: Um design que se ajusta a diferentes tamanhos de tela",
      "Resposta C: Um design que responde a mudanças na cor do plano de fundo",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas: [
      "Resposta A: Comparação estrita (valor e tipo)",
      "Resposta B: Atribuição",
      "Resposta C: Comparação solta (apenas valor)",
    ],
    correta: 0,
  },
];

const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");

const corretas = new Set();
const totalDePerguntas = perguntas.length;
const mostrarTotal = document.querySelector("#acertos span");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  quiz.appendChild(quizItem);
}
