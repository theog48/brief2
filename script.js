document.getElementById("downloadCV").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "assets/CV_2023-04-22_Théo_GRASSET.pdf";
    link.download = "CV_2023-04-22_Théo_GRASSET.pdf";
    link.click();
});
