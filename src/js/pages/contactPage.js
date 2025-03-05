const form = document.querySelector(".form");
const commentInput = document.querySelector(".comment");
const commentError = document.getElementById("comment-error-message");
const counter = document.getElementById("character-count");

// DB
import app from "../../js/database/firebaseConfig";
import { addDoc, collection, getFirestore } from "firebase/firestore";
const firestore = getFirestore(app);
const feedbackCollection = collection(firestore, "feedback");

// Event listener
window.addEventListener("DOMContentLoaded", () => {
  // FORM VALIDATION FOR DOG SIGN UP FORM
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // INPUT IMPORTS
    const name = document.getElementById("name").value.trim();
    const phoneNumber = document.getElementById("phone-number").value.trim();
    const email = document.getElementById("email").value.trim();

    // ERROR MESSAGES IMPORTS
    const phoneNumberErrorElement = document.getElementById("phone-error-message");

    let hasErrors = false;

    if (!name) {
      document.getElementById("name-error-message").style.visibility = "visible";
      hasErrors = true;
    } else {
      document.getElementById("name-error-message").style.visibility = "hidden";
    }

    if (!phoneNumber) {
      phoneNumberErrorElement.textContent = "Vennligst fyll inn telefonnummeret ditt";
      phoneNumberErrorElement.style.visibility = "visible";
      hasErrors = true;
    } else if (!/^\d+$/.test(phoneNumber)) {
      phoneNumberErrorElement.textContent = "Telefonnummeret må bare inneholde tall";
      phoneNumberErrorElement.style.visibility = "visible";
      hasErrors = true;
    } else if (phoneNumber.length !== 8) {
      phoneNumberErrorElement.textContent = "Telefonnummeret må være 8 sifre langt";
      phoneNumberErrorElement.style.visibility = "visible";
      hasErrors = true;
    } else {
      phoneNumberErrorElement.style.visibility = "hidden";
    }

    if (!email) {
      document.getElementById("email-error-message").style.visibility = "visible";
      hasErrors = true;
    } else {
      document.getElementById("email-error-message").style.visibility = "hidden";
    }
  });

  // DB broken
  // // INPUT IMPORTS
  // const name = document.getElementById("name").value.trim();
  // const phoneNumber = document.getElementById("phone-number").value.trim();
  // const email = document.getElementById("email").value.trim();

  // const feedback = {
  //   name,
  //   phoneNumber,
  //   email,
  //   message: document.querySelector(".comment-input").value,
  // };

  // addDoc(feedbackCollection, feedback);

  const validateCommentInput = () => {
    commentInput.addEventListener("input", () => {
      const characterCount = commentInput.value.length;
      counter.textContent = `Antall tegn: ${characterCount}`;
      if (characterCount > 500) {
        counter.style.color = "red";
        commentError.style.visibility = "visible";
        commentError.textContent = "For mange tegn";
      } else {
        counter.style.color = "";
        commentError.style.visibility = "hidden";
        commentError.textContent = "";
      }
    });
  };
  validateCommentInput();
});
