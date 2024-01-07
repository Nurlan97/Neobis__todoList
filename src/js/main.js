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
  const taskItem = taskList.querySelector('li')

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

    // taskItem (li) structure
    taskItem.innerHTML = `
          <div class="taskName-container">
            <div class="category">
                      <div сlass="inner-border">
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
  

    const category = taskItem.querySelector('.category'); // получаем category из li

    const innerBorder = category.querySelector('div') // Получаем inner-border из category

    // const innerBorder = category.querySelector('.inner-border') // Получаем inner-border из category

    const taskName = taskNameContainer.querySelector('span'); // Получаем название задачи

    // taskName styles
    taskName.style.fontSize = "20px";

    const actionBtns = taskItem.querySelector('.action-btns')

    const editBtn = actionBtns.querySelector('.editBtn');

    const deleteBtn = actionBtns.querySelector('.deleteBtn');

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
    const taskItem = event.target.closest('li'); // Находим li

    // Delete
    if (event.target.className === 'deleteBtn') { // Если то, куда нажимает пользователь кнопка delete
      
      taskList.removeChild(taskItem); // из ul удаляем определенную li
      
    }


    // Edit
    if (event.target.className === 'editBtn') { // Если то, куда нажимает пользователь кнопка edit
      
      const span = taskItem.querySelector('span'); // Создаем и находим span который содержит то, что ввел пользователь
   
    

      if (span) { // проверяем есть ли span в taskItem (li)
        const taskNameContainer = taskItem.querySelector('.taskName-container');
        const input = document.createElement('input'); // Создаем input 
        input.type = 'text'; // Добавляем тип в input 
        input.value = span.textContent; // input берет значение span - то, что ввел пользователь ранее

        taskNameContainer.replaceChild(input, span) // Заменяем span на input в li

        input.addEventListener('blur', () => { // При потере фокуса, вызываем функцию
          // span.textContent = input.value  // Возвращаем span вместо input
          const task = document.createElement('span')
          task.textContent = input.value
          

          taskItem.innerHTML = `
          <div class="taskName-container">
            <div class="category">
                      <div сlass="inner-border">
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

          const category = taskItem.querySelector('.category'); // получаем category из li

          const innerBorder = category.querySelector('div') // Получаем inner-border из category

          const taskName = taskNameContainer.querySelector('span'); // Получаем название задачи

          // taskName styles
          taskName.style.fontSize = "20px";

          const actionBtns = taskItem.querySelector('.action-btns')

          const editBtn = actionBtns.querySelector('.editBtn');

          const deleteBtn = actionBtns.querySelector('.deleteBtn');

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

    // crossOut
    // if(event.target.className === 'inner-border'){
    //   // const taskItem = taskList.querySelector('li')
    //   // const  innerBorder = taskItem.querySelector('.inner-border');
    //   // console.log(innerBorder)
    //   // console.log(taskItem)
    //   const taskNameContainer = taskItem.querySelector('.taskName-container')
    //   const taskName = taskNameContainer.querySelector('span')
    //   taskName.style.textDecoration = 'line-through';
    // }
    
    if(event.target.tagName === 'DIV'){
      // const taskItem = taskList.querySelector('li')
      // const  innerBorder = taskItem.querySelector('.inner-border');
      // console.log(innerBorder)
      // console.log(taskItem)
      const taskNameContainer = taskItem.querySelector('.taskName-container')
      const taskName = taskNameContainer.querySelector('span')
      taskName.style.textDecoration = 'line-through';
    }
    
  })

});


