document.addEventListener('DOMContentLoaded', function () {

  // Radio Buttons clickable

  const radioContainers = document.querySelectorAll('.toDoList__category-item-container');

  const clicked = (container) => {
    const radioBtn = container.querySelector('.toDoList__category-item')
    const radioBtnBusiness = container.querySelector('.toDoList__category-item-business')
    const radioBtnPersonal = container.querySelector('.toDoList__category-item-personal')

    radioContainers.forEach(container => {
      container.querySelector('.toDoList__category-item').classList.remove('active')
    });

    radioBtn.classList.add('active');
  }

  radioContainers.forEach(container => {
    container.addEventListener('click', () => clicked(container))
  })

  ///////////////////////////////////////////////

  const form = document.querySelector('form'); // Получаем form
  const newTaskInput = document.querySelector('.toDoList__create-task-input'); // Получаем input 
  const taskList = document.querySelector('.toDoList__tasks-list'); // Получаем ul

  form.addEventListener('submit', (event) => { // Добавляем слушатель события для form чтобы далее добавить задачу в список задач
    event.preventDefault();  // Не обновляет страницу
    const task = newTaskInput.value; // Получаем значение нашего input, где пользователь пишет то, что хочет добавить в список задач.

    if (newTaskInput.value !== "") {
      addTask(task)

    } else {
      alert('Опаньки! Задача не может быть пустой. Попробуйте еще раз!😇')

    }
    newTaskInput.value = ''; // Чистим input
  })

  const addTask = (task) => {
    const taskItem = document.createElement('li'); // создаем li 

    //  ПРОВЕРЯЕМ где есть класс active
    const active = document.querySelector('.active');

    // taskItem (li) styles

    taskItem.style.background = "#ffffff";
    taskItem.style.width = "100%";
    taskItem.style.padding = "20px";
    taskItem.style.display = "flex";
    taskItem.style.justifyContent = "space-between";
    taskItem.style.borderRadius = "28px";
    taskItem.style.margin = "20px 0 ";

    // taskItem (li) structure

    taskItem.innerHTML = `
          <div class="taskName-container">
            <div class="category">
                      <div сlassName='inner-border'>
                        </div>
            </div>
            <span class="taskName">${task}</span> 
          </div>
          <div class="action-btns">
            <button class='editBtn'>Edit</button> 
            <button class='deleteBtn'>Delete </button>
          </div>
          `;

    const taskNameContainer = taskItem.querySelector('.taskName-container');
    taskNameContainer.style.display = 'flex';
    taskNameContainer.style.alignItems = 'center';
    taskNameContainer.style.gap = '20px';
    taskNameContainer.style.width = '46%';

    const category = taskItem.querySelector('.category'); // получаем category из li

    // category styles
    category.style.width = "32px";
    category.style.height = "32px";
    category.style.borderRadius = "50%";
    category.style.cursor = "pointer";
    category.style.position = "relative";


    const innerBorder = category.querySelector('div') // Получаем inner-border из category

    // inner-border styles
    innerBorder.style.width = '22px';
    innerBorder.style.height = '22px';
    innerBorder.style.borderRadius = '50%';
    innerBorder.style.cursor = 'pointer';
    innerBorder.style.position = 'absolute';
    innerBorder.style.top = '2px';
    innerBorder.style.left = '2px';


    const taskName = taskNameContainer.querySelector('span'); // Получаем название задачи

    // taskName styles
    taskName.style.fontSize = "20px";



    const actionBtns = taskItem.querySelector('.action-btns')

    // actionBtns styles

    actionBtns.style.display = 'flex';
    actionBtns.style.alignItems = 'center';
    actionBtns.style.gap = '20px';

    const editBtn = actionBtns.querySelector('.editBtn');

    // editBtn styles
    editBtn.style.padding = "10px";
    editBtn.style.fontSize = "15px";
    editBtn.style.borderRadius = "5px";
    editBtn.style.background = "rgba(216,48,146,255)";
    editBtn.style.color = "#ffffff";
    editBtn.style.border = "none";

    const deleteBtn = actionBtns.querySelector('.deleteBtn');

    // delete styles
    deleteBtn.style.padding = "10px";
    deleteBtn.style.fontSize = "15px";
    deleteBtn.style.borderRadius = "5px";
    deleteBtn.style.background = "rgba(229,72,68,255)";
    deleteBtn.style.color = "#ffffff";
    deleteBtn.style.border = "none";



    // Добавляем категорию для задачи в списке задач
    if (active.parentElement.querySelector('p').textContent === 'Business') {

      // Определенные стили для категории Business 
      category.style.border = "3px solid rgba(50,118,235,255)";
      category.style.boxShadow = "0px 0px 10px 0px rgba(50,118,235,255)";
      innerBorder.style.border = '2px solid rgba(50,118,235,255)';

    } else {

      // Определенные стили для категории Personal
      category.style.border = "3px solid rgba(233,76,160,255)";
      category.style.boxShadow = "0px 0px 10px 0px rgba(233,76,160,255)";
      innerBorder.style.border = '2px solid rgba(233,76,160,255)';

    }

    taskList.appendChild(taskItem); // Добавляем taskItem (li) в taskList (ul)




  }


  // Добавляем функции Delete и Edit

  taskList.addEventListener('click', (event) => { // Добавляем слушатель события click к taskList
    event.preventDefault(); // Избегаем обновления страницы

    // const taskItem = event.target.parentElement.parentElement; // Находим li

    console.log(event.target)
    // Delete
    if (event.target.className === 'deleteBtn') { // Если то, куда нажимает пользователь кнопка delete
      // const taskItem = event.target.parentElement.parentElement; // Находим li
      const taskItem = event.target.parentElement.parentElement; // Находим li
      // taskList.removeChild(taskItem); // из ul удаляем определенную li
      taskList.removeChild(taskItem); // из ul удаляем определенную li
      // taskList.remove();
    }


    // Edit
    if (event.target.className === 'editBtn') { // Если то, куда нажимает пользователь кнопка edit
      // const taskItem = event.target.parentElement.parentElement; // Находим li
      // const taskItem = taskList.querySelector("li"); // Находим li
      const taskItem = event.target.parentElement.parentElement; // Находим li
      const span = taskItem.querySelector('span'); // Создаем и находим span который содержит то, что ввел пользователь
      console.log(span)
      // console.log(event.target.parentElement.parentElement)

      if (span) { // проверяем есть ли span в taskItem (li)
        const taskNameContainer = taskItem.querySelector('.taskName-container');
        console.log(taskNameContainer)
        const input = document.createElement('input'); // Создаем input 
        input.type = 'text'; // Добавляем тип в input 
        input.value = span.textContent; // input берет значение span - то, что ввел пользователь ранее

        taskNameContainer.replaceChild(input, span) // Заменяем span на input в li

        input.addEventListener('blur', () => { // При потере фокуса, вызываем функцию
          // span.textContent = input.value  // Возвращаем span вместо input
          const task = document.createElement('span')
          task.textContent = input.value
          console.log(task.textContent)

          taskItem.innerHTML = `
          <div class="taskName-container">
            <div class="category">
                      <div сlassName='inner-border'>
                        </div>
            </div>
            <span class="taskName">${task.textContent}</span> 
          </div>
          <div class="action-btns">
            <button class='editBtn'>Edit</button> 
            <button class='deleteBtn'>Delete </button>
          </div>
          `;

          const taskNameContainer = taskItem.querySelector('.taskName-container');
          taskNameContainer.style.display = 'flex';
          taskNameContainer.style.alignItems = 'center';
          taskNameContainer.style.gap = '20px';
          taskNameContainer.style.width = '46%';


          const category = taskItem.querySelector('.category'); // получаем category из li

          // category styles
          category.style.width = "32px";
          category.style.height = "32px";
          category.style.borderRadius = "50%";
          category.style.cursor = "pointer";
          category.style.position = "relative";


          const innerBorder = category.querySelector('div') // Получаем inner-border из category

          // inner-border styles
          innerBorder.style.width = '22px';
          innerBorder.style.height = '22px';
          innerBorder.style.borderRadius = '50%';
          innerBorder.style.cursor = 'pointer';
          innerBorder.style.position = 'absolute';
          innerBorder.style.top = '2px';
          innerBorder.style.left = '2px';


          const taskName = taskNameContainer.querySelector('span'); // Получаем название задачи

          // taskName styles
          taskName.style.fontSize = "20px";

          const actionBtns = taskItem.querySelector('.action-btns')

          // actionBtns styles

          actionBtns.style.display = 'flex';
          actionBtns.style.alignItems = 'center';
          actionBtns.style.gap = '20px';

          const editBtn = actionBtns.querySelector('.editBtn');

          // editBtn styles
          editBtn.style.padding = "10px";
          editBtn.style.fontSize = "15px";
          editBtn.style.borderRadius = "5px";
          editBtn.style.background = "rgba(216,48,146,255)";
          editBtn.style.color = "#ffffff";
          editBtn.style.border = "none";

          const deleteBtn = actionBtns.querySelector('.deleteBtn');

          // delete styles
          deleteBtn.style.padding = "10px";
          deleteBtn.style.fontSize = "15px";
          deleteBtn.style.borderRadius = "5px";
          deleteBtn.style.background = "rgba(229,72,68,255)";
          deleteBtn.style.color = "#ffffff";
          deleteBtn.style.border = "none";


          const active = document.querySelector('.active');

          // Добавляем категорию для задачи в списке задач
          if (active.parentElement.querySelector('p').textContent === 'Business') {

            // Определенные стили для категории Business 
            category.style.border = "3px solid rgba(50,118,235,255)";
            category.style.boxShadow = "0px 0px 10px 0px rgba(50,118,235,255)";
            innerBorder.style.border = '2px solid rgba(50,118,235,255)';

          } else {

            // Определенные стили для категории Personal
            category.style.border = "3px solid rgba(233,76,160,255)";
            category.style.boxShadow = "0px 0px 10px 0px rgba(233,76,160,255)";
            innerBorder.style.border = '2px solid rgba(233,76,160,255)';

          }

          // taskList.appendChild(taskItem); // Добавляем taskItem (li) в taskList (ul)

        })

        input.focus();
      }
    }



  })

  

});


