'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";

const Resume = () => {
    return (
        <div className="resume-container w-full h-screen flex flex-col justify-center items-center bg-black text-green-500">
            {/* Header for the Resume */}
            <h1 className="text-4xl font-bold mb-8">Resume</h1>
            
            {/* PDF Embed Section */}
            <div className="pdf-wrapper w-full h-[80vh] max-w-4xl">
                <iframe
                    src="/assets/resume.pdf"  // Make sure the path to the PDF is correct
                    width="100%"
                    height="100%"
                    title="Archi Mehta Resume"
                    className="pdf-iframe"
                />
            </div>
        </div>
    );
}

export default Resume;
