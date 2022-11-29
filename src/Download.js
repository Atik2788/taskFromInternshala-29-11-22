import React, { useState } from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FaDownload } from 'react-icons/fa';
import Data from '../src/data.json';




const Download = ({ roofElementId, downloadFileName, data }) => {




    const downloadFileDocument = () => {
        const input = document.getElementById(roofElementId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "pt", "a2")
            pdf.addImage(imgData, "JPEG", 0, 0)
            pdf.save(`${downloadFileName}`)
        })
    }

    return (
        <div>
            <button className='whiteColor text-xl font-bold' onClick={downloadFileDocument}>Download asset</button>
        </div>
    );
};

export default Download;