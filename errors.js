document.addEventListener("DOMContentLoaded", function() {
    var errorsContainer = document.getElementById("errors-list");

    // Получаем ошибки из localStorage
    var errors = JSON.parse(localStorage.getItem("errors") || "[]");

    if (errors.length === 0) {
        errorsContainer.innerHTML = "<p>Ошибок нет. Отличная работа!</p>";
        return;
    }

    // Создаем блок для каждой ошибки
    for (var i = 0; i < errors.length; i++) {
        var err = errors[i];

        var errorDiv = document.createElement("div");
        errorDiv.className = "error-item";

        var questionEl = document.createElement("h3");
        questionEl.textContent = (i+1) + ". " + err.question;
        errorDiv.appendChild(questionEl);

        var userAnswer = document.createElement("p");
        userAnswer.innerHTML = "<strong>Ваш ответ:</strong> " + err.user;
        errorDiv.appendChild(userAnswer);

        var correctAnswer = document.createElement("p");
        correctAnswer.innerHTML = "<strong>Правильный ответ:</strong> " + err.right;
        errorDiv.appendChild(correctAnswer);

        errorsContainer.appendChild(errorDiv);
    }
});