// form class for the todo list
class ToDoForm {
  // constructor () {
  //   this.formDiv = document.getElementById('form-container')
  //   this.appendToDiv()
  // }
  static appendToDiv (divID) {
    // this.formDiv.innerHTML = this.renderForm()

    // let myDiv = document.createElement('div')
    // myDiv.className = 'form-container'
    // document.body.append(myDiv)
    // myDiv.innerHTML = ToDoForm.renderForm()
    document.getElementById(divID).innerHTML = this.renderForm()
    document.querySelector('form').addEventListener('submit', ToDoForm.onSubmit)
  }
  static onSubmit () {
    event.preventDefault()
    let formText = event.target[0].value
    event.target[0].value = ''
    let newTodoItem = new TodoItem(formText)
    newTodoItem.appendToList()
  }
  static renderForm () {
    return `<div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s6">
                    <i class="material-icons prefix">border_color</i>
                    <input id="icon_prefix" type="text" class="validate">
                    <label for="icon_prefix">Todo Item</label>
                  </div>
                  <div class="input-field col s6">
                     <button type="submit" class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></button>
                  </div>
                </div>
              </form>
            </div>`
  }
}
ToDoForm.appendToDiv('form-container') // the form becomes reality
// let myform = ToDoForm.constructor()
// let myForm = new ToDoForm()
// myForm.appendToDiv() -> moved to constructor

class TodoItem {
  constructor (textInput) {
    this.itemDiv = document.getElementById('item-container')
    this.text = textInput
    this.done = false
    this.itemDiv.addEventListener('click', this.complete)
  }
  complete () {
    // console.log('todoItem-clicked = ', event.target.id)
    let clickedEl = event.target.id
    switch (clickedEl) {
      case 'done':
        event.target.parentElement.parentElement.className = 'done'
        break
      default:

    }
  }
  renderItem () {
    return `<li id="${this.text}" class="collection-item">
                <div>${this.text}
                  <a href="#!" class="secondary-content">
                    <i id="done" class="material-icons">check</i>
                  </a>
                </div>
            </li>`
  }
  appendToList () {
    this.itemDiv.innerHTML += this.renderItem()
  }
}

// let color = 'white'
// switch (name) {
//   case 'purple':
//       console.log('tony')
//     break;
//   case 'pink':
//       console.log('waldo')
//     break;
//   default:
//
// }
