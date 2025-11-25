fetch("http://localhost:8080/api/v1/rag/query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: userInput })
})

document.getElementById("uploadBtn").addEventListener("click", async () => {
    const file = document.getElementById("pdfInput").files[0];
    if (!file) return alert("PDF를 선택하세요!");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("http://localhost:8080/api/rag/upload", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        document.getElementById("uploadResult").innerText =
            `문서 업로드 성공! 문서 ID: ${result.data.documentId}`;
    } else {
        document.getElementById("uploadResult").innerText =
            "업로드 실패: " + result.error;
    }
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         