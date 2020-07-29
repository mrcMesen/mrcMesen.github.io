function showProject(project) {
  let wrapper = '';

  switch (project) {
    case 'SIGE':
      wrapper = document.getElementById('wrapperSIGE');
      break;
    case 'QR':
      wrapper = document.getElementById('wrapperQR');
      break;
  }

  if (wrapper.classList.contains('hide')) {
    wrapper.classList.replace('hide', 'show');
  } else {
    wrapper.classList.replace('show', 'hide');
  }
}
