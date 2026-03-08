"use client";

import { CheckCircle } from "lucide-react";

const hsePoints = [
    {
        title: "Executive Summary",
        content: "Birla Infra Projects (BIP) delivers robust, high-quality Mechanical, Electrical, and Plumbing (MEP) infrastructure designed for lasting performance. Operating with a client-first mindset, our integrated approach ensures that every project—from foundational commercial utility setups to complex industrial plant deployments—is executed with an unwavering commitment to engineering quality, occupational safety, and long-term efficiency."
    },
    {
        title: "Health, Safety, and Environment (HSE) Standard",
        content: "A Zero Harm culture is the cornerstone of our operations. We implement rigorous safety protocols to protect personnel, assets, and the environment during all phases of utility and infrastructure development.",
        bullets: [
            "Code-Compliant Fire Safety: Adherence to NBC and IS 15105 standards.",
            "Site-Specific Risk Mitigation through pre-mobilization hazard assessments.",
            "Mandatory safety inductions, PPE compliance, and safe work procedures.",
            "Near-miss reporting and root-cause analysis for continuous improvement.",
        ]
    },
    {
        title: "Engineering & Design Work Procedures",
        content: "Precision planning using BIM and Revit for clash-free utility layouts and validated system performance."
    },
    {
        title: "Site Execution & Project Management",
        content: "Phased execution, transparent commercial engagement, and stringent vendor compliance."
    },
    {
        title: "Client Support & Continuous Improvement",
        content: "Dedicated lifecycle support ensuring safe, efficient, and high-performance MEP systems."
    }
];

export default function HseStandard() {
    return (
        <section id="hse-standard" className="py-12 md:py-24 bg-muted/40">
            <div className="container max-w-5xl px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
                            Our Commitment
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            HSE & Work Procedure Standard
                        </h2>
                        <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Our comprehensive standard for Health, Safety, Environment, and MEP work procedures ensures excellence and reliability in every project.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    {hsePoints.map((point, index) => (
                        <div key={index}>
                            <h3 className="text-2xl font-semibold mb-3">{`${index + 1}. ${point.title}`}</h3>
                            <div className="pl-4 border-l-4 border-accent space-y-4">
                                <p className="text-muted-foreground">{point.content}</p>
                                {point.bullets && (
                                    <ul className="space-y-3 pt-2">
                                        {point.bullets.map((bullet, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                                                <span className="text-muted-foreground">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
