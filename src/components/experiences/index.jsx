import React, {useEffect, useState} from "react";

const Experiences = () => {
    const data = [
        {
            company: "Tech Semester",
            role: "Full Stack Engineer",
            duration:"Jul 2023 - Present",
            highlights: ["highlights", "highlights", "highlights",],
        },
        {
            company: "Tech Semester2",
            role: "Full Stack Engineer",
            duration:"Jul 2023 - Present",
            highlights: ["highlights", "highlights", "highlights",],
        },
    ]
    const [active, setActive] = useState(data[0].company);

    const activeCompany = data.find((item) => item.company === active);

    return(
        <div id="code" className="min-h-screen flex flex-col justify-center gap-8">
            <h1 className="text-hero-h1">experiences.</h1>
            <div className="flex justify-center gap-20">
                <div className="flex flex-col">
                    {data.map((item, index) => (
                        <div key={index} className={`text-hero-tagline max-w-fit border-l-2 px-4 py-2.5 ${active === item.company? "bg-primary bg-opacity-10 text-primary border-primary": "border-opacity-75 opacity-75"}`} onClick={()=> setActive(item.company)}>{item.company}</div>
                    ))}
                </div>
                <div className="flex flex-col gap-2.5 flex-grow">
                    <h1 className="text-hero-tagline">{activeCompany?.role} <span className="text-primary underline">@{activeCompany?.company}</span></h1>
                    <p className="font-light">{activeCompany?.duration}</p>
                    <ul className="list-disc list-inside">
                        {activeCompany?.highlights.map((item, index) => (
                            <li key={index} className="font-light mb-2.5 relative">
                                <span className="block absolute left-0 top-1/2 transform -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white border-2 border-primary"></span>
                                {item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experiences;
