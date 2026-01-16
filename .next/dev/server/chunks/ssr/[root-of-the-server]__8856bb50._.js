module.exports = [
"[project]/Desktop/portfolioV2/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/portfolioV2/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/portfolioV2/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/portfolioV2/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Desktop/portfolioV2/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/portfolioV2/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/portfolioV2/src/data/portfolio.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "portfolioData",
    ()=>portfolioData
]);
const portfolioData = {
    // =================================================================================
    // 1. Personal Details
    // =================================================================================
    about: {
        firstName: "Edwin",
        lastName: "Kim",
        title: "Computer Science Student @ UC Berkeley",
        // This is the text that appears in the "About Me" card
        description: "I'm a freshly graduated student at **UC Berkeley** for Computer Science. I specialize in AI and have a passion for building tools that solve complex real-world problems at scale.",
        // Contact Information (Displayed in the code block)
        contact: {
            email: "edwinkim0509@berkeley.edu",
            phone: "(310) 617 6693",
            linkedin: "linkedin.com/in/kedwin",
            location: "Berkeley, CA",
            education: "UC Berkeley, CS (2025)"
        },
        // Bullet points for "Current Focus"
        currentFocus: [
            "Creating projects that I would use in my personal life.",
            "Contributing to real-time open source projects.",
            "Taking care of my kitten."
        ]
    },
    // =================================================================================
    // 2. Skills (Contribution Graph)
    // =================================================================================
    // Levels: 1 (Light Green) to 4 (Darkest Green)
    skills: [
        {
            category: "ML / AI",
            items: [
                {
                    name: "Python",
                    level: 4
                },
                {
                    name: "TensorFlow",
                    level: 3
                },
                {
                    name: "PyTorch",
                    level: 3
                },
                {
                    name: "BiLSTM",
                    level: 4
                },
                {
                    name: "Random Forest",
                    level: 3
                },
                {
                    name: "Signal Processing",
                    level: 4
                },
                {
                    name: "Time Series",
                    level: 4
                }
            ]
        },
        {
            category: "Backend",
            items: [
                {
                    name: "API Design",
                    level: 3
                },
                {
                    name: "Database Opt",
                    level: 3
                },
                {
                    name: "Dist. Systems",
                    level: 2
                },
                {
                    name: "Caching",
                    level: 2
                },
                {
                    name: "FastAPI",
                    level: 4
                },
                {
                    name: "Django",
                    level: 3
                }
            ]
        },
        {
            category: "Frontend",
            items: [
                {
                    name: "React",
                    level: 3
                },
                {
                    name: "Next.js",
                    level: 3
                },
                {
                    name: "Tailwind CSS",
                    level: 3
                },
                {
                    name: "Data Viz",
                    level: 4
                },
                {
                    name: "Real-time UI",
                    level: 3
                }
            ]
        },
        {
            category: "Data Eng",
            items: [
                {
                    name: "ETL Pipelines",
                    level: 3
                },
                {
                    name: "Data Fusion",
                    level: 4
                },
                {
                    name: "Geospatial",
                    level: 3
                },
                {
                    name: "Pandas/Numpy",
                    level: 4
                }
            ]
        },
        {
            category: "Infrastructure",
            items: [
                {
                    name: "Git",
                    level: 4
                },
                {
                    name: "Docker",
                    level: 3
                },
                {
                    name: "AWS",
                    level: 2
                },
                {
                    name: "Linux",
                    level: 3
                },
                {
                    name: "CI/CD",
                    level: 2
                }
            ]
        }
    ],
    // =================================================================================
    // 3. Projects (Pinned Repositories)
    // =================================================================================
    projects: [
        {
            name: "Hermes",
            description: `Grid Outage Prediction & Restoration Time Estimator.
94% precision in forecasting grid failures 48 hours in advance.
Real-time geospatial dashboard processing 10M+ daily data points.`,
            language: "Python",
            languageColor: "#2b7489",
            stars: 0,
            forks: 0,
            tags: [
                "Random Forest",
                "Geospatial",
                "Python"
            ],
            githubUrl: "https://github.com/ekimcodes/Hermes"
        },
        {
            name: "Athena",
            description: `AI-powered Utility Vegetation Management platform.
Visualizes 1,000+ utility assets in real-time.
84% mIoU in detecting vegetation encroachment on power lines`,
            language: "Python",
            languageColor: "#2b7489",
            stars: 0,
            forks: 0,
            tags: [
                "BiLSTM",
                "Signal Processing",
                "Real-time"
            ],
            githubUrl: "https://github.com/ekimcodes/Athena"
        },
        {
            name: "The Cat Knows",
            description: "A minimalist browser game where your mouse cursor becomes the prey. You play as a small mouse, pursued by an AI Cat that evolves its strategy the longer you survive.",
            language: "Javascript",
            languageColor: "#f1e05a",
            stars: 0,
            forks: 0,
            tags: [
                "React",
                "Tailwind",
                "Vite"
            ],
            githubUrl: "https://github.com/ekimcodes/The-Cat-Knows"
        },
        {
            name: "N/A",
            description: "",
            language: "",
            languageColor: "#f1e05a",
            stars: 0,
            forks: 0,
            tags: [
                ""
            ],
            githubUrl: ""
        }
    ],
    // =================================================================================
    // 4. Experience (Timeline)
    // =================================================================================
    education: [],
    experience: [
        {
            year: "2025",
            role: "ML Engineer",
            company: "CALI",
            type: "Full-time",
            description: [
                "Architected real-time stress-tracking platform using custom BiLSTM networks.",
                "Fused 5 heterogeneous time-series streams with <10ms tolerance.",
                "Generated 100,000+ synthetic data points for model training.",
                "Achieved 40% improvement in model convergence speed."
            ]
        },
        {
            year: "2024",
            role: "SWE Intern",
            company: "MyFitnessPal",
            type: "Intern",
            description: [
                "Refactored core food-log query engine serving 50M+ DAU.",
                "Reduced request latency by 25% and API payload size by 40%.",
                "Optimized queries for millions of concurrent sessions."
            ]
        },
        {
            year: "2023",
            role: "Computational Researcher",
            company: "UC Berkeley",
            type: "Research",
            description: [
                "Designed scalable materials informatics pipeline for 1,000+ samples.",
                "Automated extraction of 50+ high-dimensional features.",
                "Created dataset of 50,000+ data points, improving accuracy by 23%."
            ]
        }
    ]
};
}),
"[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutReadme",
    ()=>AboutReadme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/src/data/portfolio.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-rsc] (ecmascript) <export default as ArrowDown>");
;
;
;
function AboutReadme() {
    const { about } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["portfolioData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "container flex min-h-[90vh] flex-col justify-center py-24 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex max-w-4xl flex-col gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium uppercase tracking-widest text-muted-foreground",
                                children: "Spring / Summer 2025"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                                lineNumber: 11,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-4 text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.9]",
                                children: [
                                    about.firstName,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                                        lineNumber: 15,
                                        columnNumber: 43
                                    }, this),
                                    " ",
                                    about.lastName
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl space-y-8 animate-fade-in-up-delay-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl leading-relaxed text-muted-foreground",
                                children: about.description.replace(/\*\*/g, '')
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                                lineNumber: 20,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#projects",
                                        className: "inline-flex h-12 items-center justify-center bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                                        children: "View Collection"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                                        lineNumber: 25,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#about",
                                        className: "inline-flex h-12 items-center justify-center border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                                        children: "Read Story"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                                        lineNumber: 28,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-12 left-0 right-0 flex justify-center animate-bounce animate-fade-in-up-delay-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                    className: "text-muted-foreground h-6 w-6"
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SkillsGrid",
    ()=>SkillsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/src/data/portfolio.ts [app-rsc] (ecmascript)");
;
;
function SkillsGrid() {
    const { skills } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["portfolioData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        className: "container py-24 border-t",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold tracking-tight uppercase",
                        children: "Collections"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                        lineNumber: 9,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Curated technical stack and materials."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                lineNumber: 8,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
                children: skills.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold uppercase tracking-wider text-sm",
                                children: category.category
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                                lineNumber: 16,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2",
                                children: category.items.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: skill.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                                                lineNumber: 20,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-30",
                                                children: [
                                                    "0",
                                                    skill.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                                                lineNumber: 21,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, skill.name, true, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                                        lineNumber: 19,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                                lineNumber: 17,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                        lineNumber: 15,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceTimeline",
    ()=>ExperienceTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/src/data/portfolio.ts [app-rsc] (ecmascript)");
;
;
function ExperienceTimeline() {
    const { experience } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["portfolioData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "container py-24 border-t",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-[1fr_2fr] gap-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold tracking-tight uppercase",
                            children: "Brand History"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                            lineNumber: 10,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground max-w-sm",
                            children: "Establishing a legacy of high-performance engineering globally since 2023."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                            lineNumber: 11,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                    lineNumber: 9,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: experience.map((job, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative border-l pl-8 pb-8 last:pb-0 hover:border-primary transition-colors border-muted",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-background border border-muted-foreground group-hover:border-primary group-hover:bg-primary transition-colors"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                                    lineNumber: 19,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold text-lg",
                                            children: [
                                                job.role,
                                                " @ ",
                                                job.company
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                                            lineNumber: 22,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-mono text-muted-foreground",
                                            children: job.year
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                                            lineNumber: 23,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                                    lineNumber: 21,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1",
                                    children: job.description.map((desc, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-sm text-muted-foreground",
                                            children: desc
                                        }, i, false, {
                                            fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                                            lineNumber: 28,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                            lineNumber: 18,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
            lineNumber: 8,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectShowcase",
    ()=>ProjectShowcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/src/data/portfolio.ts [app-rsc] (ecmascript)");
;
;
function ProjectShowcase() {
    const { projects } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["portfolioData"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "container py-24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold tracking-tight uppercase",
                        children: "New Arrivals"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Latest work and experiments from the lab."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3",
                children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: project.githubUrl,
                        target: "_blank",
                        className: "group block cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-[4/5] w-full overflow-hidden bg-secondary mb-4 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-secondary to-muted flex items-center justify-center p-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground/30 font-bold text-4xl uppercase tracking-widest text-center break-words w-full",
                                            children: project.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                            lineNumber: 21,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                        lineNumber: 20,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                        lineNumber: 27,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-zinc-950 border border-input text-center py-3 text-sm font-medium uppercase tracking-widest shadow-lg transition-transform hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-black",
                                            children: "View Project"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                            lineNumber: 31,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                        lineNumber: 30,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                lineNumber: 19,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-medium text-lg uppercase tracking-tight",
                                                children: project.name
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                                lineNumber: 39,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    "$ ",
                                                    project.language
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                                lineNumber: 40,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                        lineNumber: 38,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground line-clamp-1",
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                        lineNumber: 42,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-2 flex flex-wrap gap-2",
                                        children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] uppercase tracking-wider text-muted-foreground/60",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                                lineNumber: 46,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                        lineNumber: 44,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                                lineNumber: 37,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/portfolioV2/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$components$2f$sections$2f$AboutReadme$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/src/components/sections/AboutReadme.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$components$2f$sections$2f$SkillsGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/src/components/sections/SkillsGrid.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$components$2f$sections$2f$ExperienceTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/src/components/sections/ExperienceTimeline.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$components$2f$sections$2f$ProjectShowcase$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/portfolioV2/src/components/sections/ProjectShowcase.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "flex min-h-screen flex-col items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$components$2f$sections$2f$AboutReadme$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AboutReadme"], {}, void 0, false, {
                fileName: "[project]/Desktop/portfolioV2/src/app/page.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$components$2f$sections$2f$ProjectShowcase$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectShowcase"], {}, void 0, false, {
                fileName: "[project]/Desktop/portfolioV2/src/app/page.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$components$2f$sections$2f$SkillsGrid$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SkillsGrid"], {}, void 0, false, {
                fileName: "[project]/Desktop/portfolioV2/src/app/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$portfolioV2$2f$src$2f$components$2f$sections$2f$ExperienceTimeline$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExperienceTimeline"], {}, void 0, false, {
                fileName: "[project]/Desktop/portfolioV2/src/app/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/portfolioV2/src/app/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/portfolioV2/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/portfolioV2/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8856bb50._.js.map