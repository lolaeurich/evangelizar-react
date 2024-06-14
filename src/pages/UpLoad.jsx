import React, { useState } from 'react';


function PDFUploader() {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPdfFile(file);
  };

  const handleUpload = async () => {
    if (pdfFile) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const pdfData = new Uint8Array(event.target.result);
        const loadingTask = pdfjs.getDocument({ data: pdfData });
        const pdf = await loadingTask.promise;
        console.log('PDF loaded:', pdf);
        // Faça o que for necessário com o PDF carregado aqui
      };
      reader.readAsArrayBuffer(pdfFile);
    }
  };

  return (
    <div>
      <h2>Upload de PDF</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Carregar PDF</button>
    </div>
  );
}

export default PDFUploader;
