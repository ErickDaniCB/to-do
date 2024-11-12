export class Task {
  static idCounter = 0;
  constructor( title, description, due, prio) {
    this.id = Task.idCounter++;
    this.title = title;
    this.description = description;
    this.due = due;
    this.prio = prio;
    this.done = false; 
    // Nunca regreses nada del constructor que no sea un primario.

    // Técnicamente puedes definir métodos aquí dentro, pero eso crearía
    // una función nueva cada vez que se cree un instance de la class.
    // Por lo tanto, se declara como instance method fuera del constructor.
    // (se guarda en el prototipo de la clase).
  }

  editTask(prop, edit){
    if (prop in this) {
      this[prop] = edit;
    }
  }
}
