const summary = document.getElementById("summary");
const data = JSON.parse(localStorage.getItem("donationData"));

if (data) {
  summary.innerHTML = `
    <p><strong>Kleiderart:</strong> ${data.clothing}</p>
    <p><strong>Krisengebiet:</strong> ${data.crisis}</p>
    <p><strong>Ort:</strong> ${data.location}</p>
    <p><strong>Datum:</strong> ${data.date}</p>
    <p><strong>Uhrzeit:</strong> ${data.time}</p>
  `;
}
