document.addEventListener("DOMContentLoaded", function () {
  const nextBtns = document.querySelectorAll(".next-btn");
  const prevBtns = document.querySelectorAll(".prev-btn");
  const formSteps = document.querySelectorAll(".form-step");
  const stepIndicators = document.querySelectorAll(".step");
  const radioButtons = document.querySelectorAll('input[name="updates"]');
  const yearsAttendingGroup = document.getElementById("years-attending-group");
  const finishBtn = document.querySelector('.next-btn[data-target="step-3"]');

  // This ensures only the first step is visible when the page loads
  formSteps.forEach((step) => {
    step.classList.add("hidden");
  });
  document.getElementById("step-1").classList.remove("hidden");

  nextBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const currentStep = button.closest(".form-step");
      const targetStepId = button.dataset.target;
      const targetStep = document.getElementById(targetStepId);

      currentStep.classList.add("hidden");
      targetStep.classList.remove("hidden");

      // Update step indicators
      const currentStepNumber = parseInt(currentStep.id.split("-")[1]);
      const targetStepNumber = parseInt(targetStepId.split("-")[1]);
      stepIndicators[currentStepNumber - 1].classList.remove("active-step");
      stepIndicators[targetStepNumber - 1].classList.add("active-step");
    });
  });

  prevBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const currentStep = button.closest(".form-step");
      const targetStepId = button.dataset.target;
      const targetStep = document.getElementById(targetStepId);

      currentStep.classList.add("hidden");
      targetStep.classList.remove("hidden");

      // Update step indicators
      const currentStepNumber = parseInt(currentStep.id.split("-")[1]);
      const targetStepNumber = parseInt(targetStepId.split("-")[1]);
      stepIndicators[currentStepNumber - 1].classList.remove("active-step");
      stepIndicators[targetStepNumber - 1].classList.add("active-step");
    });
  });

  // Add event listener to the radio buttons to show/hide the years-attending field
  radioButtons.forEach((radio) => {
    radio.addEventListener("change", (event) => {
      if (event.target.id === "no") {
        yearsAttendingGroup.classList.remove("hidden");
      } else {
        yearsAttendingGroup.classList.add("hidden");
      }
    });
  });

  // Confetti animation function
  function createConfetti() {
    const confettiContainer = document.querySelector(".confetti-container");
    if (!confettiContainer) return;
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.animationDelay = `${Math.random() * 0.5}s`;
      confetti.style.width = `${Math.random() * 10 + 5}px`;
      confetti.style.height = `${Math.random() * 20 + 10}px`;
      confettiContainer.appendChild(confetti);
    }
  }

  // Handle the final step (congratulations page)
  if (finishBtn) {
    finishBtn.addEventListener("click", () => {
      // Wait for a moment before starting confetti to show the congratulations message
      setTimeout(createConfetti, 500);
    });
  }
});
