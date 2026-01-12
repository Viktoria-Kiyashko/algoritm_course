// ===== ВОПРОСЫ =====
var questions = [
  {
    text: "Что такое алгоритм?",
    answers: [
      "Любая последовательность действий",
      "Точное предписание исполнителю выполнить последовательность действий для достижения результата",
      "Набор случайных команд"
    ],
    correct: 1
  },
  {
    text: "Какими основными свойствами должен обладать алгоритм?",
    answers: [
      "Дискретность, массовость, результативность, понятность, определенность",
      "Логичность, универсальность, скорость",
      "Точность, универсальность, простота"
    ],
    correct: 0
  },
  {
    text: "Какой тип алгоритма выполняется последовательно, шаг за шагом, без условий и повторений?",
    answers: ["Линейный", "Циклический", "Разветвленный"],
    correct: 0
  },
  {
    text: "Как называется алгоритм, в котором выполняется выбор действий в зависимости от условия?",
    answers: ["Линейный", "Разветвленный", "Циклический"],
    correct: 1
  },
  {
    text: "Какое утверждение верно для циклического алгоритма?",
    answers: [
      "В нем нет условий",
      "Он содержит повторяющиеся действия",
      "Он выполняется только один раз"
    ],
    correct: 1
  },
  {
    text: "Кто или что может быть исполнителем алгоритма?",
    answers: [
      "Только компьютер",
      "Человек, компьютер, робот и другие системы, способные выполнять команды",
      "Только робот"
    ],
    correct: 1
  },
  {
    text: "Что представляет собой система команд исполнителя?",
    answers: [
      "Любой набор действий, которые человек может придумать",
      "Ограниченный набор команд, которые исполнитель может понимать и выполнять",
      "Команды, которые можно выполнять в любом порядке"
    ],
    correct: 1
  },
  {
    text: "Какой графический способ представления алгоритма использует блоки с определенными обозначениями?",
    answers: ["Таблица", "Граф", "Блок-схема"],
    correct: 2
  },
  {
    text: "Какой блок в блок-схеме обозначает начало и конец алгоритма?",
    answers: ["Прямоугольник", "Овал", "Ромб"],
    correct: 1
  },
  {
    text: "Какой блок в блок-схеме обозначает действие (оператор)?",
    answers: ["Овал", "Ромб", "Прямоугольник"],
    correct: 2
  },
  {
    text: "Какой из следующих примеров является циклическим алгоритмом?",
    answers: [
      "Расчет площади треугольника",
      "Вывод всех четных чисел от 1 до 100",
      "Проверка, является ли число четным"
    ],
    correct: 1
  },
  {
    text: "Какой алгоритм является разветвленным?",
    answers: [
      "Вычисление корня числа",
      "Определение, является ли число положительным или отрицательным",
      "Нахождение суммы двух чисел"
    ],
    correct: 1
  },
  {
    text: "Какой из алгоритмов является линейным?",
    answers: [
      "Проверка, является ли число простым",
      "Решение квадратного уравнения",
      "Вычисление средней скорости движения"
    ],
    correct: 2
  },
  {
    text: "Какой из следующих примеров можно назвать алгоритмом?",
    answers: [
      "Рецепт приготовления пирога",
      "Произвольный набор слов",
      "Список покупок"
    ],
    correct: 0
  },
  {
    text: "Какое из следующих утверждений неверно?",
    answers: [
      "Алгоритм должен быть понятен исполнителю",
      "Любой алгоритм может быть представлен блок-схемой",
      "Алгоритм должен приводить к результату за конечное число шагов"
    ],
    correct: 1
  }
];

// ===== ОЖИДАНИЕ DOM =====
document.addEventListener("DOMContentLoaded", function () {

  var quiz = document.getElementById("quiz");

  // ----- вывод вопросов -----
  for (var i = 0; i < questions.length; i++) {
    var qDiv = document.createElement("div");
    qDiv.className = "question";

    var title = document.createElement("h3");
    title.textContent = (i + 1) + ". " + questions[i].text;
    qDiv.appendChild(title);

    for (var j = 0; j < questions[i].answers.length; j++) {
      var label = document.createElement("label");

      var input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + i;
      input.value = j;

      label.appendChild(input);
      label.appendChild(
        document.createTextNode(" " + questions[i].answers[j])
      );

      qDiv.appendChild(label);
    }

    quiz.appendChild(qDiv);
  }

});

// ===== ПРОВЕРКА ТЕСТА =====
function finishTest() {
  var correctCount = 0;
  var errors = [];

  for (var i = 0; i < questions.length; i++) {
    var selected = document.querySelector(
      'input[name="q' + i + '"]:checked'
    );

    if (selected && Number(selected.value) === questions[i].correct) {
      correctCount++;
    } else {
      errors.push({
        question: questions[i].text,
        right: questions[i].answers[questions[i].correct],
        user: selected ? questions[i].answers[selected.value] : "Нет ответа"
      });
    }
  }

  var grade;
  if (correctCount >= 4) grade = 5;
  else if (correctCount >= 3) grade = 4;
  else if (correctCount >= 2) grade = 3;
  else grade = 2;

  localStorage.setItem("errors", JSON.stringify(errors));

  var result = document.getElementById("result");
  result.innerHTML =
    "Правильных ответов: " + correctCount + " из " + questions.length +
    "<br>Оценка: <b>" + grade + "</b><br>" +
    '<a href="errors.html">Посмотреть ошибки</a>';
}
document.addEventListener("DOMContentLoaded", function() {
    var headers = document.querySelectorAll(".accordion-header");

    headers.forEach(function(header) {
        header.addEventListener("click", function() {
            var item = header.parentElement;
            item.classList.toggle("active");
        });
    });
});