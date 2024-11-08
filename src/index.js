// index.js
import "./styles.css";
import { Project, ProjectManager } from "./projects";

const Manager = new ProjectManager();

Manager.addProject("Compras", "Lista");
Manager.addProject("Ejercicio", "Pain = Gain");

const project = Manager.getProject(1);

console.log(project);

project.addTask("Ir al gym", "Morelos GYM", "Diario 8am", "Urgente");
project.addTask("Correr con Pobi", "En el parque", "Cada dos días", "Opcional");

console.log(project.getTask(0));

project.removeTask(0);

console.log(project.getTask(0));

Manager.removeProject(0);

console.log(Manager.getProject(0))
console.log(Manager.getProject(1))