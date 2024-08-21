const ResumeSection = () => {
    return ( 
        <div className="h-screen w-full flex justify-center items-center pt-16 snap-center scroll-container" id="resume">
            <iframe
                src="/Gateek_Chandak_Resume.pdf"
                className=""
                style={{ border: 'none', width: '60%', height: "700px" }}
            />
        </div>
     );
}
 
export default ResumeSection;