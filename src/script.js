const shortenBtn = document.querySelector(".shorten-btn");
const urlInput = document.querySelector(".url-input");

const modal = document.getElementById("shorten-modal");
const resultUrlInput = document.getElementById("result-url");
const closeBtn = document.querySelector(".close-btn");

let qrCode = null;

function generateSlug() {
  return Math.random().toString(36).substring(2, 7);
}

shortenBtn.addEventListener("click", async () => {
  const longUrl = urlInput.value.trim();

  const shortUrl = generateSlug();

  try {
    const response = await fetch("http://localhost:9000/api/urls", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longUrl, shortUrl }),
    });

    if (response.ok) {
      resultUrlInput.value = `http://localhost:9000/${shortUrl}`;

      if (!qrCode) {
        qrCode = new QRCode(document.getElementById("qrcode"), {
          text: resultUrlInput.value,
          width: 128,
          height: 128,
        });
      } else {
        qrCode.clear();
        qrCode.makeCode(resultUrlInput.value);
      }

      modal.classList.add("show");
      urlInput.value = "";
      alert("Shortened successfully!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Cannot connect to Server!");
  }
});

closeBtn.onclick = () => {
  modal.classList.remove("show");
};
