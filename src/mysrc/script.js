
function openImgOverlay()
{
    imageOverlay.style.display = 'block';
}
function closeImgOverlay()
{
    imageOverlay.style.display = 'none';
}
function downloadQrImg()
{
    window.alert("Test : Img is downloading");
}
function copyShortenLink() {
    var copyText = document.querySelector(".generatedLink").innerText;
    navigator.clipboard.writeText(copyText)
    window.alert("Copied sucessful!");
}