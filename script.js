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

  function showPopup(message) {
    let popup = document.createElement("div");
    popup.className = "custom-popup";
    popup.innerHTML = `
      <div class="popup-box">
        <p>${message}</p>
        <button id="closePopup">OK</button>
      </div>
    `;
    document.body.appendChild(popup);

    document.getElementById("closePopup").addEventListener("click", () => {
      popup.remove();
    });

    setTimeout(() => popup.remove(), 4000);
  }
});
