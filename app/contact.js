const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
  question.addEventListener("click", function () {
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const arrow = question.querySelector(".faq-arrow");

    if (faqItem.classList.contains("active")) {
      faqItem.classList.remove("active");

      answer.style.maxHeight = null;

      answer.style.paddingTop = "0";
      answer.style.paddingBottom = "0";

      arrow.style.transform = "rotate(0deg)";
    } else {
      faqItem.classList.add("active");

      answer.style.maxHeight = answer.scrollHeight + "px";

      answer.style.paddingTop = "0";
      answer.style.paddingBottom = "16px";

      arrow.style.transform = "rotate(180deg)";
    }
  });
});
