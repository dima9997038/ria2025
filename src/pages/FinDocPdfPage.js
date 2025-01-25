import React from 'react';
import { useState } from "react";
import {Document,Page,pdfjs} from "react-pdf";
import {Button} from "react-bootstrap";
import NavBarComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";

function FinDocPdfPage(props) {
pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function handleNext() {
        if(pageNumber<numPages){
            setPageNumber(pageNumber+1)
        }
    }

    function handlePrew() {
        if(pageNumber>1){
            setPageNumber(pageNumber-1)
        }

    }

    function handleFirstPage() {
        setPageNumber(1)
    }

    return (
        <>
            <NavBarComponent/>
            <div className="pdf-div">
                <p>
                    <h2> Страница {pageNumber} из {numPages}</h2>
                </p>
                <Button onClick={handleNext} className="me-3">Следующая</Button>
                <Button onClick={handlePrew} className="me-3">Предыдущая</Button>
                <Button onClick={handleFirstPage} className="me-3" variant={"success"}>На первую страницу</Button>

                <Document file={props.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    {/*{Array.apply(null, Array(numPages))*/}
                    {/*    .map((x, i) => i + 1)*/}
                    {/*    .map((page) => {*/}
                    {/*        return (*/}
                    <Page
                        // pageNumber={page}
                        pageNumber={pageNumber}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                    {/*);*/}
                    {/*})}*/}
                </Document>
            </div>
            <FooterComponent/>
        </>

    );
}

export default FinDocPdfPage;