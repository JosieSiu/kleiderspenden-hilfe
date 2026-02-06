const method = document.getElementById("method");
const addressFields = document.getElementById("addressFields");
const form = document.getElementById("donationForm");

const OFFICE_ZIP_PREFIX = "12"; // PLZ der Geschäftsstelle (z.B. 12xxx)

method.addEventListener("change", () => {
  addressFields.classList.toggle("hidden", method.value !== "pickup");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const clothing = document.getElementById("clothing").value;
  const crisis = document.getElementById("crisis").value;

  let location = "Geschäftsstelle";

  if (method.value === "pickup") {
    const street = document.getElementById("street").value;
    const zip = document.getElementById("zip").value;
    const city = document.getElementById("city").value;

    if (!zip.startsWith(OFFICE_ZIP_PREFIX)) {
      alert("Die Abholadresse liegt nicht im Einzugsgebiet der Geschäftsstelle.");
      return;
    }

    location = `${street}, ${zip} ${city}`;
  }

  const data = {
    clothing,
    crisis,
    location,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };

  localStorage.setItem("donationData", JSON.stringify(data));
  window.location.href = "confirm.html";
});
