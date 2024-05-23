

// Générer le QR Code
var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "https://chat.whatsapp.com/Ljz0MFF9Jpi8L1wl8pXF6h",
    width: 350,
    height: 350,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
});

// Créer un bouton de téléchargement pour le QR Code
var downloadButton = document.createElement("button");
downloadButton.innerText = "Télécharger le QR Code";
document.getElementById("qrcode").appendChild(downloadButton);

// Créer un lien de téléchargement pour le QR Code
var downloadLink = document.createElement("a");
downloadLink.setAttribute("download", "qrcode.png");
downloadButton.appendChild(downloadLink);
tempLink.click();

// Obtenir l'élément canvas du QR Code
var canvas = document.querySelector("#qrcode canvas");

// Convertir le canvas en image PNG et définir l'URL de l'image comme href du lien de téléchargement
canvas.toBlob(function(blob) {
    var url = URL.createObjectURL(blob);
    downloadLink.setAttribute("C:/Users/DELL/Downloads", url);
});
