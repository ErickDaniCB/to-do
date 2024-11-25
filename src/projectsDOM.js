import { projectManager } from "./projects";

function getSideBarDOM() {
  return {
    dialog: document.getElementById("project-dialog"),
    dialogButton: document.getElementById("button-dialog"),
    //Modal-form
    projectForm: document.querySelector("#project-form"),
    projectTitleInput: document.querySelector("#project-title"),
    projectDescriptionInput: document.querySelector("#project-description"),
    projectAddButton: document.querySelector("#project-add"),
  };
}
const sideDOM = getSideBarDOM();

function dialogFormValidation(title, description){
  let valid = true;
  if(title === '' || description === ''){
    alert("Please, add a project title and description");
    valid = false;
  }
  return valid;
}

export function projectDOM() {
  //Hacemos export para exponer a nuestro entry-point. Sin esto no podríamos ver el document ni sus métodos.
  sideDOM.dialogButton.addEventListener("click", () => {
    sideDOM.dialog.toggleAttribute("open");
  });

  sideDOM.projectAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    const title = sideDOM.projectTitleInput.value.trim();
    const description = sideDOM.projectDescriptionInput.value.trim();
    if(dialogFormValidation(title, description)){
      sideDOM.dialog.toggleAttribute("open");
      projectManager.addProject(title, description);
      sideDOM.projectForm.reset();
      console.log(projectManager.projects);
    }
  })
}
