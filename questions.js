const questions = [
  "Що мені взяти з собою на ковзанку?",
  "Що мені покласти в холодильник?",
  "Що мені взяти із собою до школи?",
  "Що мені взяти із собою в басейн?",
];
const answers = ["ковзани", "яблука", "підручники", "рушник"];

function randomArrayValue() {
  return questions[Math.floor(Math.random() * questions.length)];
}

const question = randomArrayValue();
alert(question);

const answer = randomArrayValue();
alert(answer);
