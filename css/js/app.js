// PLZ der Geschäftsstelle (fest hinterlegt)
const officePLZ = "39"; // erste zwei Ziffern

const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
const addressField = document.getElementById("addressField");

deliveryOptions.forEach(option => {
  option.addEventListener("change", () => {
    if (option.value === "pickup" && option.checked) {
      addressField.style.display = "block";
    } else {
      addressField.style.display = "none";
    }
  });
});
document.getElementById("donationForm").addEventListener("submit", function (e) {

  const pickupSelected = document.querySelector('input[name="delivery"]:checked').value === "pickup";

  if (pickupSelected) {
    const plzInput = document.getElementById("plz").value;

    if (plzInput.length < 2) {
      alert("Bitte eine gültige Postleitzahl eingeben.");
      e.preventDefault();
      return;
    }

    const pickupPLZPrefix = plzInput.substring(0, 2);

    if (pickupPLZPrefix !== officePLZ) {
      alert("Die Abholadresse liegt nicht im Einzugsgebiet der Geschäftsstelle.");
      e.preventDefault();
    }
  }
});
