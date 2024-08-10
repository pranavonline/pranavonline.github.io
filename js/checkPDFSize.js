function checkPDFSize(pdfUrl) {
      fetch(pdfUrl)
        .then(response => response.blob())
        .then(blob => {
          const fileSize = blob.size;
          const previewContainer = document.getElementById('pdf-preview');
          const fileName = pdfUrl.split('/').pop(); // Extract file name
		  const linkElement = document.getElementById('pdf-link');
		  linkElement.textContent = fileName;


          if (fileSize < 500 * 1024) { // 500KB in bytes
            const iframe = document.createElement('iframe');
            iframe.src = pdfUrl;
            iframe.width = "100%"; // Adjust width as needed
            //iframe.height = "200"; // Adjust height as needed
            previewContainer.appendChild(iframe);
          } else {
            linkElement.style.display = 'block';
          }
        })
        .catch(error => {
          console.error('Error checking PDF size:', error);
          linkElement.style.display = 'block';
        });
    }

    checkPDFSize('Article_892024.pdf');