document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("#temperature-data tbody tr");

    if (rows.length === 0) {
        document.getElementById("result").textContent = "Дані про температуру не знайдено.";
        return;
    }

    let hottestDay = null;
    let maxTemperature = -Infinity;

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        const date = cells[0].textContent.trim();
        const temp = parseFloat(cells[1].textContent.trim());

        if (!isNaN(temp) && temp > maxTemperature) {
            maxTemperature = temp;
            hottestDay = date;
        }
    });

    const resultElement = document.getElementById("result");
    if (hottestDay !== null) {
        resultElement.textContent = `Найспекотніший день: ${hottestDay}, температура: ${maxTemperature}°C`;
    } else {
        resultElement.textContent = "Не вдалося визначити найспекотніший день.";
    }
});