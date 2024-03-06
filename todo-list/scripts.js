
var tasks = [];

document.getElementById('new-task').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        var value = document.getElementById('new-task').value;
        var difficulty = document.getElementById('new-task-difficulty').value;
        if (value) {
            addTask(value, difficulty);
            document.getElementById('new-task').value = '';
        }
    }
});

function addTask(text, difficulty) {
    var task = {
        text: text,
        difficulty: getDifficultyValue(difficulty), 
    };
    tasks.push(task);

    displayTasks(tasks);
}

function displayTasks(tasks) {
    tasks.sort(function(a, b) { 
        return b.difficulty - a.difficulty;
    });

    var list = document.getElementById('task-list');
    list.innerHTML = '';

    tasks.forEach(function(task) {
        var item = document.createElement('li');
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';

        var complete = document.createElement('button');
        complete.classList.add('complete', 'heart-button');
        complete.style.border = 'none';
        complete.style.fontSize = '15px';
        complete.innerText = task.complete ? '💚' : '🤍';

        complete.addEventListener('click', function() {
            task.complete = !task.complete;
            complete.innerText = task.complete ? '💚' : '🤍';
            displayTasks(tasks);  
        });

        var taskText = document.createElement('div');
        taskText.classList.add('task-text');
        taskText.appendChild(complete);  

        var editableText = document.createElement('span');  
        editableText.contentEditable = 'true'; 
        editableText.innerText = task.text;

        editableText.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                var newText = editableText.innerText;
                var index = tasks.indexOf(task);
                if (index > -1) {
                    tasks[index].text = newText;
                }
                editableText.blur();
            }
        });

        taskText.append(editableText); 
        taskText.append(' ' + getDifficultyEmoji(task.difficulty)); 

        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.style.border = 'none';  
        remove.style.fontSize = '15px';
        remove.innerText = '✖'; 

        remove.addEventListener('click', function() {
            var index = tasks.indexOf(task);
            tasks.splice(index, 1);
            displayTasks(tasks);
        });

        item.appendChild(taskText);
        item.appendChild(remove);

        list.appendChild(item);
    });
}


function getDifficultyValue(difficulty) {
    switch (difficulty) {
        case '낮음':
            return 1;
        case '보통':
            return 2;
        case '높음':
            return 3;
        case '아주 높음':
            return 4;
        default:
            return 0;
    }
}


function getDifficultyEmoji(difficulty) {
    switch (difficulty) {
        case 1:
            return '😊';
        case 2:
            return '😐';
        case 3:
            return '😥';
        case 4:
            return '😰';
        default:
            return '';
    }
}

document.getElementById('all-tasks').addEventListener('click', function() {
    displayTasks(tasks);
});

document.getElementById('incomplete-tasks').addEventListener('click', function() {
    var incompleteTasks = tasks.filter(function(task) {
        return !task.complete;
    });
    displayTasks(incompleteTasks);
});

document.getElementById('completed-tasks').addEventListener('click', function() {
    var completedTasks = tasks.filter(function(task) {
        return task.complete;
    });
    displayTasks(completedTasks);
});