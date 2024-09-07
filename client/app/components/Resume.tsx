const ResumeSection = () => {
    return ( 
        <div className="h-screen relative w-9/12 m-auto snap-start scroll-container" id="resume">
            <iframe
                src='/Gateek_Chandak_Resume_External.pdf'
                title="PDF Viewer"
                className="absolute top-24 left-0 w-full h-5/6 border-none"
            ></iframe>
        </div>
     );
}
 
export default ResumeSection;