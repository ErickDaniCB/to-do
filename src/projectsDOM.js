import { ProjectManager } from "./projects";

export function projectDOM (){ //Hacemos esto para exponer a nuestro entry-point
  const dialog = document.getElementById("dialog-project");
  const buttonDialog = document.getElementById("button-dialog");
  
  const titleInput = document.querySelector("#project-title");
  const descriptionInput = document.querySelector("#project-description");
  
  buttonDialog.addEventListener("click", (e) => {
    dialog.toggleAttribute("open");
  });
}

