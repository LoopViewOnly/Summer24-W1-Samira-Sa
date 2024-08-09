const fake = document.getElementById("Fake");
const real = document.getElementById("Real");
const streak_element = document.getElementById("streak");

let streak = 0;

function game() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  const fake_link = "https://thispersondoesnotexist.com/";
  const real_link = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
  const random_number = Math.floor(Math.random() * 10);
  if (random_number <= 5) {
    real.src = real_link;
    real.onclick = real_alert;
    fake.src = fake_link;
    fake.onclick = fake_alert;
  } else {
    real.src = fake_link;
    real.onclick = fake_alert;
    fake.src = real_link;
    fake.onclick = real_alert;
  }
}

function real_alert() {
  alert("correct!");
  streak++;
  streak_element.innerText = "your streak is: " + streak;
  game();
}

function fake_alert() {
  alert("incorrect!");
  streak = 0;
  game();
}
game();