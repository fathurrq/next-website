"use client"

export default function  WhatDefineUsSection() {

    const defineUs = [
        {
            id: 1,
            title: "Integrity",
            description: "Upholding transparency and ethics in every action.",
        },
        {
            id: 2,
            title: "Innovation",
            description: "Driving new solutions for maritime excellence.",
        },
        {
            id: 3,
            title: "Collaboration",
            description: "Strong teamwork across all levels.",
        },
        {
            id: 4,
            title: "Sustainability",
            description: "Commitment to long-term impact in the industry.",
        },
        
    ]

    return (
    <div
      id="what-define-us"
      className="font-montserrat relative w-full h-auto overflow-hidden p-[6rem] bg-white"
    >
        <div className="container mx-auto w-full h-auto flex justify-around items-center gap-12 text-slate-800">
            <div className="flex-1/2 h-auto bg-[#F15A25] rounded-md p-8 flex flex-col">
                <h3 className="text-white font-medium text-[3.2vw]">Working at <span>BKI</span> has given me opportunities to grow while contributing to national maritime progress.</h3>
            </div>
            <div className="flex-1/2 h-full flex flex-col gap-4">
                <h3 className="text-5xl font-bold">What Defines Us</h3>

                <div className="h-full flex flex-col justify-evenly gap-4">
                    {defineUs.map((item) => (
                        <div className="flex gap-4 items-stretch" key={item.id}>
                            <span className="text-5xl font-bold text-slate-400">{item.id}</span>
                            <div className="text-slate-800">
                                <span className=" text-3xl font-bold">{item.title}</span>
                                <p className="text-2xl">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}