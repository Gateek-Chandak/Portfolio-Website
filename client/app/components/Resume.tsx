const ResumeSection = () => {
    return ( 
        <div className="h-screen w-full flex justify-center items-center pt-14 snap-center scroll-container" id="resume">
            <iframe
                src="/Gateek_Chandak_Resume_External.pdf"
                className=""
                style={{ border: 'none', width: '60%', height: "650px" }}
            />
        </div>
     );
}
 
export default ResumeSection;