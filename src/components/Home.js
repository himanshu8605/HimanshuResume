import React, { useState } from "react";
import { Container, Row,Col} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import pdf from "../assets/HimanshuResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";




import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




function Home() {

    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  

  return (
    <Container fluid className="resume-section">
  
      <Container>
      <Row >
    
      <Document 
      file={pdf}
      options={{ workerSrc: "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document> 
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
       
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;