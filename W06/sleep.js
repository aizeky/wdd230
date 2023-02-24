const inputs = Array.from(document.getElementsByTagName("input"));
const actualHours = Array.from(document.getElementsByClassName("hours"));
const result = document.getElementById("result");

const clearBtns = function(box) {
  Array.from(
    document.getElementById(box).getElementsByTagName("input")
  ).forEach(input => (input.style.backgroundColor = "#fff"));
};
const handleInput = function(e) {
  result.className = "animated zoomOutDown";

  clearBtns(e.target.parentElement.id);
  switch (e.target.parentElement.id) {
    case "ideal":
      document.getElementById("ideal-hours").textContent = e.target.value;
      document.getElementById("ideal-hours-week").textContent =
        e.target.value * 7;

      e.target.style.backgroundColor = "yellow";
      break;
    case "sunday":
      document.getElementById("sunday-hours").textContent = e.target.value;
      e.target.style.backgroundColor = "yellow";

      break;
    case "monday":
      document.getElementById("monday-hours").textContent = e.target.value;
      e.target.style.backgroundColor = "yellow";

      break;
    case "tuesday":
      document.getElementById("tuesday-hours").textContent = e.target.value;
      e.target.style.backgroundColor = "yellow";

      break;
    case "wednesday":
      document.getElementById("wednesday-hours").textContent = e.target.value;
      e.target.style.backgroundColor = "yellow";

      break;
    case "thursday":
      document.getElementById("thursday-hours").textContent = e.target.value;
      e.target.style.backgroundColor = "yellow";

      break;
    case "friday":
      document.getElementById("friday-hours").textContent = e.target.value;
      e.target.style.backgroundColor = "yellow";

      break;
    case "saturday":
      document.getElementById("saturday-hours").textContent = e.target.value;
      e.target.style.backgroundColor = "yellow";
      break;
    case "calculate":
      let actualSleepHours = [];
      let idealSleepHours = Number(
        document.getElementById("ideal-hours-week").textContent
      );
      actualHours.map(item => actualSleepHours.push(Number(item.textContent)));
      actualSleepHours = actualSleepHours.reduce((a, b) => a + b);
      if (actualSleepHours == idealSleepHours) {
        result.textContent = "You are getting the right amount of sleep!";
      } 
      else if (actualSleepHours > idealSleepHours) {
        result.textContent = `You are ${actualSleepHours -
          idealSleepHours} hours over your sleep goal!`;
       // result.textContent = "You achieved more sleep than the ideal amount!You are";
      } 
      else if (actualSleepHours < idealSleepHours) {
        result.textContent = `You are ${idealSleepHours -
          actualSleepHours} hours behind on your sleep goal!`;
        //result.textContent = "You should get more sleeping hours!";
      } 
      else {
        alert("ERROR. Something went wrong");
      }
      result.className = "animated zoomInUp";
  }
};
for (let item in inputs) {
  inputs[item].addEventListener("click", handleInput);
}
