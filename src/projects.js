import { Task } from "./tasks";

export class Project {
  static idCounter = 0;
  constructor(title, description) {
    this.id = Project.idCounter++;
    this.title = title;
    this.description = description;
    this.tasks = [];
  }

  getTask(taskId) {
    return this.tasks.find((tasks) => tasks.id === taskId);
  }

  addTask(title, description, due, prio) {
    const thisTask = new Task(title, description, due, prio);
    // Los argumentos de la call pueden referenciar a los argumentos de la función madre, pero no
    // tienen porqué ser todos, puedes tomar los argumentos de algún otro lugar, como en el caso
    // de this.idCounter++.
    this.tasks.push(thisTask);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter((tasks) => tasks.id !== taskId);
  }

  editProject(prop, edit){
    if (prop in this) {
      this[prop] = edit;
    }
  }
}

class ProjectManager { //Una clase no necesariamente debe ser algo que se vaya a repetir, puede
  // usarse para denominar una única instancia que se encargue de contener/modificar a otra(s).
  constructor() {
    this.projects = [];
  }

  getProject(projectId) {
    return this.projects.find((proj) => proj.id === projectId);
  }

  addProject(title, description) {
    const project = new Project(title, description); 
    this.projects.push(project); 
  }

  removeProject(projectId) {
    this.projects = this.projects.filter((proj) => proj.id !== projectId);
  }
}

export const projectManager = new ProjectManager;