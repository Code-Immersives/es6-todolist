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
    document.getElementById(divID).innerHTML = ToDoForm.renderForm()
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
                     <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
                  </div>
                </div>
              </form>
            </div>`
  }
}
ToDoForm.appendToDiv('form-container')
// let myform = ToDoForm.constructor()
// let myForm = new ToDoForm()
// myForm.appendToDiv() -> moved to constructor
