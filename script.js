
const blockListItems = document.querySelectorAll("#blockList li");
const blocks = document.querySelectorAll(".course_block");

blockListItems.forEach(item => {
    item.addEventListener("click", () => {
        
        blockListItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const targetId = item.getAttribute("data-block");

      
        blocks.forEach(block => block.style.display = "none");

        
        document.getElementById(targetId).style.display = "block";
    });
});

// Кнопки "Перейти к практике"
const practiceButtons = document.querySelectorAll(".to_practice");
practiceButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");

       
        blockListItems.forEach(i => i.classList.remove("active"));
        document.querySelector(`#blockList li[data-block='${targetId}']`).classList.add("active");

        
        blocks.forEach(block => block.style.display = "none");

     
        document.getElementById(targetId).style.display = "block";
    });

    const stepList = document.getElementById("stepList");
let draggedItem = null;

// Начало перетаскивания
stepList.addEventListener("dragstart", (e) => {
    draggedItem = e.target;
    e.dataTransfer.effectAllowed = "move";
});

// Перетаскивание над элементом
stepList.addEventListener("dragover", (e) => {
    e.preventDefault();
    const target = e.target.closest("li");
    if (!target || target === draggedItem) return;

    const rect = target.getBoundingClientRect();
    const next = (e.clientY - rect.top) / rect.height > 0.5;
    stepList.insertBefore(draggedItem, next ? target.nextSibling : target);
});

// Отпускание элемента
stepList.addEventListener("drop", (e) => {
    e.preventDefault();
    draggedItem = null;
});

// Проверка правильного порядка
document.getElementById("checkOrder").addEventListener("click", () => {
    const steps = Array.from(stepList.children).map(li => li.textContent.trim());
    const correctOrder = ["Включить тостер","Положить хлеб","Подождать 2 минуты","Достать тост"];
    const result = document.getElementById("practiceResult");

    if(JSON.stringify(steps) === JSON.stringify(correctOrder)){
        result.textContent = "Правильно! Алгоритм выполнен верно.";
        result.style.color = "green";
    } else {
        result.textContent = "Неправильно. Попробуйте ещё раз.";
        result.style.color = "red";
    }
});
// Drag & Drop команд
const robotCommands = document.querySelectorAll("#robotCommandList li");
let draggedCmd = null;

robotCommands.forEach(cmd => {
    cmd.addEventListener("dragstart", (e) => draggedCmd = cmd);
    cmd.addEventListener("dragover", (e) => e.preventDefault());
    cmd.addEventListener("drop", (e) => {
        e.preventDefault();
        const list = cmd.parentNode;
        list.insertBefore(draggedCmd, cmd.nextSibling);
        draggedCmd = null;
    });
});

// Проверка выполнения
document.getElementById("runRobot").addEventListener("click", () => {
    const steps = Array.from(document.querySelectorAll("#robotCommandList li")).map(li => li.textContent.trim());
    const correctOrder = ["Вперёд","Вперёд","Налево","Направо"]; 
    const result = document.getElementById("robotResult");

    if(JSON.stringify(steps) === JSON.stringify(correctOrder)){
        result.textContent = "Робот успешно достиг цели!";
        result.style.color = "green";
    } else {
        result.textContent = "Робот не достиг цели. Попробуйте другой порядок команд.";
        result.style.color = "red";
    }
});
document.getElementById("runCondition").addEventListener("click", () => {
    const num = parseFloat(document.getElementById("inputNumber").value);
    const result = document.getElementById("branchResult");

    if (isNaN(num)) {
        result.textContent = "Введите корректное число!";
        result.style.color = "red";
        return;
    }

    if (num > 5) {
        result.textContent = "Число больше 5 → Выполняем действие A ✅";
        result.style.color = "green";
    } else {
        result.textContent = "Число меньше или равно 5 → Выполняем действие B ✅";
        result.style.color = "orange";
    }
});

});
