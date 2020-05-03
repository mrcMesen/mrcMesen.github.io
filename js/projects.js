function showProject(project) {
  let wrapper = '';

  switch (project) {
    case 'SIGE':
      wrapper = document.getElementById("wrapperSIGE");
      break;
  }
  
  if (wrapper.classList.contains("hide")) {
    wrapper.classList.replace("hide", 'show');
  } else {
    wrapper.classList.replace("show", 'hide');
  }

}