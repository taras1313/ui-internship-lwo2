/* global document */
const formValidator = (() => {
  const subscribeFrom = document.querySelector('form');
  const formSubmit = subscribeFrom.querySelector('button');
  const inputValidClass = 'border-success';
  const inputInvalidClass = 'border-error';
  const toolTipClass = 'show-tooltip';
  const buttonDisableClass = 'disabled';
  const markAsValid = (valueToCheck) => {
    valueToCheck.classList.add(inputValidClass);
    valueToCheck.classList.remove(inputInvalidClass, toolTipClass);
    valueToCheck.parentNode.classList.remove(toolTipClass);
  };

  const markAsInvalid = (valueToCheck) => {
    valueToCheck.classList.remove(inputValidClass);
    valueToCheck.classList.add(inputInvalidClass, toolTipClass);
    valueToCheck.parentNode.classList.add(toolTipClass);
  };

  const formHandler = (e) => {
    const clickedInput = e.target;
    const currentElPattern = new RegExp(clickedInput.getAttribute('pattern'));
    const inputs = [...subscribeFrom.querySelectorAll('input')];
    /* eslint-disable-next-line */
    const allInputsValid = inputs.every((el) => el.classList.contains(inputValidClass));

    if (currentElPattern.test(clickedInput.value)) {
      markAsValid(clickedInput);
    } else {
      if (e.key !== 'Tab' && clickedInput.value.length >= 4) {
        markAsInvalid(clickedInput);
      }
    }

    if (allInputsValid) {
      formSubmit.disabled = false;
      formSubmit.classList.remove(buttonDisableClass);
    } else {
      formSubmit.disabled = true;
      formSubmit.classList.add(buttonDisableClass);
    }
  };

  return {
    init: () => {
      subscribeFrom.addEventListener('keyup', formHandler);
    },
  };
})();

formValidator.init();

