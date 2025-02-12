document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("phishingForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", async function (event) {
        event.preventDefault();
        
        const userInput = document.getElementById("userInput").value;

        const response = await fetch("http://127.0.0.1:5000/detect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: userInput }),
        });

        const data = await response.json();
        
        if (data.threat_detected) {
            resultDiv.innerHTML = `<p style="color: red;">⚠️ Phishing threat detected!</p>`;
        } else {
            resultDiv.innerHTML = `<p style="color: green;">✅ No phishing detected.</p>`;
        }
    });
});
