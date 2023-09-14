const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const inputs = document.querySelectorAll("input[type='text']");

let currentActive = 1;

next.addEventListener('click', () => {
  if (!isInputEmpty(inputs[currentActive - 1])) {
    currentActive++;
    if (currentActive > circles.length) {
      currentActive = circles.length;
    }
    update();
    focusNextInput();
  }
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  resetInputs(currentActive);
  update();
  focusNextInput();
});

function isInputEmpty(input) {
  return input.value.trim() === '';
}

function resetInputs(step) {
    inputs.forEach((input, index) => {
      if (index >= step - 1) { // Change here, reset from the step index - 1 (to reset the previous step)
        input.value = '';
      }
    });
  }

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  if (currentActive === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = isInputEmpty(inputs[currentActive - 1]);
  }
}

function focusNextInput() {
  const nextInput = inputs[currentActive - 1];
  if (nextInput) {
    nextInput.focus();
  }
}

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    next.disabled = isInputEmpty(inputs[currentActive - 1]);
  });
});

// Initial call to update the buttons and progress
update();