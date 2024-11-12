// index.js
import "./styles.css";
import { ProjectManager } from "./projects";
import { projectDOM } from "./projectsDOM";

projectDOM();// Se llama a la función que contiene el código que queremos exponer de projectDOM;

const Manager = new ProjectManager();

Manager.addProject("Compras", "Lista");
Manager.addProject("Ejercicio", "Pain = Gain");

const project = Manager.getProject(1);

project.editProject("description", "Light weight")

console.log(project);

project.addTask("Ir al gym", "Morelos GYM", "Diario 8am", "Urgente");
project.addTask("Correr con Pobi", "En el parque", "Cada dos días", "Opcional");

const task1 = project.getTask(0);

task1.title = "GYM";
task1.editTask("description", "Crossfit")

console.log(task1);
console.log(project.getTask(0))
