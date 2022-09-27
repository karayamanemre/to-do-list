import dotsIcon from '../icons/dots.png';

const icon3 = new Image();
icon3.src = dotsIcon;
let toDos = [];

export default class ToDo {
  constructor(todo) {
    this.description = todo;
    this.index = toDos.length + 1;
    this.id = Date.now().toString();
    this.completed = false;
  }

  static add() {
    const alert = document.querySelector('.alert');
    const addIcon = document.getElementById('add-icon');
    const doInput = document.getElementById('do-input');
    alert.style.display = 'none';
    addIcon.addEventListener('click', () => {
      let toDos = [];
      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
      if (doInput.value !== '') {
        const newTask = new ToDo(doInput.value);
        toDos.push(newTask);
        toDos.forEach((obj, i) => {
          obj.index = i + 1;
        });
        localStorage.setItem('toDos', JSON.stringify(toDos));
        doInput.value = '';
        window.location.reload();
      } else {
        alert.innerText = 'You have to do something!';
        alert.style.display = 'flex';
      }
    });
  }

  static show() {
    const todoList = document.getElementById('do-list');
    const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
    if (toDos.length > 0) {
      toDos.forEach((task) => {
        todoList.innerHTML += `
        <li>
          <div class="item-info">
            <input type="checkbox">
            <input id="${task.index}" class="task-item" value="${task.description}">
          </div>
          <span id="item-icon">
            <img src="${icon3.src}" class="remove" id="${task.id}">
          </span>
        </li>
        `;
      });
    }
  }

  static remove() {
    const removeIcon = document.querySelectorAll('.remove');
    removeIcon.forEach((icon) => {
      icon.addEventListener('click', (e) => {
        let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
        toDos = toDos.filter((task) => task.id !== e.target.id);
        toDos.forEach((obj, i) => {
          obj.index = i + 1;
        });
        localStorage.setItem('toDos', JSON.stringify(toDos));
        window.location.reload();
      });
    });
  }

  static edit() {
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach((item) => {
      item.addEventListener('click', () => {
      item.setAttribute('contenteditable', 'true');
      });
      item.addEventListener('focusout', () => {
        const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');
        toDos.forEach((obj) => {
          if (obj.index.toString() === item.id) {
            obj.description = item.value;
            localStorage.setItem('toDos', JSON.stringify(toDos));
          }
        });
      });
    });
  }
}

      