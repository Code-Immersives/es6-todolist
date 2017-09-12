// two classes
class ToDoForm {
  constructor () {
    this.formDiv = document.getElementById('form-container')
  }
  renderForm () {
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
  appendToDiv () {
    this.formDiv.innerHTML = this.renderForm()
  }
}
