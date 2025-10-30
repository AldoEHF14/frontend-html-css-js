const hourEL = document.getElementById("hour");
const minuteEL = document.getElementById("minute");
const secondEL = document.getElementById("second");

function updaHands(now) {
  const ms = now.getMilliseconds();
  const second = now.getSeconds() + ms / 1000;
  const minute = now.getMinutes() + second / 60;
  const hour = (now.getHours() % 12) + minute / 60;
  const hourAngle = hour * 30;
  const minuteAngle = minute * 6;
  const secondAngle = second * 6;
  hourEL.style.transform = `translate(-50%,-100%) rotate(${hourAngle}deg)`;
  minuteEL.style.transform = `translate(-50%,-100%) rotate(${minuteAngle}deg)`;
  secondEL.style.transform = `translate(-50%,-100%) rotate(${secondAngle}deg)`;
}

function loop() {
  const now = new Date();
  updaHands(now);
  requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

window.addEventListener("load", () => updaHands(new Date()));
window.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") updaHands(new Date());
});

/*Code of FAQ Accordion*/

const questions = document.querySelectorAll(".faq-question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});