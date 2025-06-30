document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const emailInput = document.querySelector('input[type="email"]');
  const messageInput = document.getElementById("message");
  const submitButton = document.getElementById("submit");


  if (submitButton) {
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();
      submitForm();
    });
  }


  document.addEventListener("keydown", function (e) {
    const isInput = e.target.tagName === "INPUT";
    if (e.key === "Enter" && isInput) {
      e.preventDefault();
      submitForm();
    }
  });

  function submitForm() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      showPopup("Please fill in all the fields.");
      return;
    }

    showPopup("Thank you for contacting us!");


  }
});
