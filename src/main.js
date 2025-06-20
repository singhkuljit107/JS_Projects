const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const view = document.querySelector("#view");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //Show the results
    results.innerHTML = `<span> ${bmi}</span>`;

    if (bmi < 18.6) {
      view.innerHTML = "You are Under weight";
    } else if (bmi > 18.6 && bmi < 24.9) {
      view.innerHTML = "You are in Normal weight";
    } else {
      view.innerHTML = "You are Over weight";
    }
  }
});
