// app.js

// Example function to convert Gregorian date to Javanese date
function convertToJavaneseDate(gregorianDate) {
  // Placeholder logic (replace with actual conversion algorithm)
  const javaneseYear = gregorianDate.getFullYear() + 512; // Approximation
  const months = ["Sura", "Sapar", "Mulud", "Bakda Mulud", "Jumadil Awal", "Jumadil Akhir", "Rejeb", "Ruwah", "Pasa", "Sawal", "Sela", "Besar"];
  const javaneseMonth = months[gregorianDate.getMonth()];
  const javaneseDay = gregorianDate.getDate();
  
  // Pancawara and Saptawara cycles
  const pancawara = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
  const saptawara = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const pancawaraDay = pancawara[gregorianDate.getDate() % 5];
  const saptawaraDay = saptawara[gregorianDate.getDay()];

  return {
    year: javaneseYear,
    month: javaneseMonth,
    day: javaneseDay,
    pancawara: pancawaraDay,
    saptawara: saptawaraDay,
  };
}

document.getElementById("convert-btn").addEventListener("click", () => {
  const gregorianDateInput = document.getElementById("gregorian-date").value;
  const gregorianDate = new Date(gregorianDateInput);

  if (!gregorianDateInput) {
    alert("Please enter a valid date.");
    return;
  }

  const javaneseDate = convertToJavaneseDate(gregorianDate);

  document.getElementById("javanese-year").textContent = javaneseDate.year;
  document.getElementById("javanese-month").textContent = javaneseDate.month;
  document.getElementById("javanese-day").textContent = javaneseDate.day;
  document.getElementById("pancawara").textContent = javaneseDate.pancawara;
  document.getElementById("saptawara").textContent = javaneseDate.saptawara;

  // Example cultural note
  document.getElementById("cultural-notes").textContent = `This day is considered auspicious for planting crops in Javanese culture.`;
});
