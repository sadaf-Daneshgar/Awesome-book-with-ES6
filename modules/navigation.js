export const toggleElement = (target) => {
  const allSiblingElems = document.querySelectorAll('.row');
  allSiblingElems.forEach((elem) => {
    if (elem.className.split(' ')[1] === target) {
      elem.classList.remove('content-inactive');
      elem.classList.add('content-active');
    } else {
      elem.classList.remove('content-active');
      elem.classList.add('content-inactive');
    }
  });
};

export const toggleNav = (targetNav) => {
  const elemUl = document.querySelector('.nav-list');
  const allUl = elemUl.querySelectorAll('a');
  allUl.forEach((elem) => {
    if (elem === targetNav) {
      elem.classList.add('nav-active');
    } else {
      elem.classList.remove('nav-active');
    }
  });
};

export const attachEventListeners = () => {
  const triggerElems = document.querySelectorAll('.nav-item');
  triggerElems.forEach((singleElem) => {
    singleElem.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSectionClass = singleElem.getAttribute('data-target');
      toggleElement(targetSectionClass);
      toggleNav(singleElem);
    });
  });
};
