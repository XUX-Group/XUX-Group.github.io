export const profileLinks = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=dYIdNgIAAAAJ&hl=en" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-2009-0483" },
  { label: "CCE", href: "https://www.cce.tsinghua.edu.cn/info/1005/2121.htm" },
  { label: "DEPE", href: "https://www.te.tsinghua.edu.cn/info/1325/1791.htm" },
];

export const researchAreas = [
  {
    title: "High-accuracy gas-phase reaction dynamics",
    description:
      "High-accuracy theoretical kinetics for key gas-phase reactions in combustion, atmospheric chemistry, and interstellar chemistry, with emphasis on anharmonic effects, pressure dependence, and quantum effects.",
    image: "/assets/research/hpl-lpl.png",
    caption: "Pressure-dependent kinetics and energy-transfer models.",
  },
  {
    title: "Catalyst design and clean-energy mechanisms",
    description:
      "Mechanism studies and theoretical catalyst design for transition-metal chemistry, heterogeneous catalysis, and clean-energy reactions.",
    image: "/assets/research/nrr-mechanisms.png",
    caption: "Reaction mechanisms on two-dimensional catalysts.",
  },
  {
    title: "AI-enabled surface and interface physical chemistry",
    description:
      "Machine-learned molecular simulation and enhanced sampling for interfacial ions, nanobubbles, solvation, and physicochemical processes at complex interfaces.",
    image: "/assets/research/acs-phys-chem-au-2024-air-water-ions.webp",
    caption: "AI-enabled simulations of ions at air-water interfaces.",
  },
  {
    title: "Extreme-condition reaction dynamics and method development",
    description:
      "Reaction dynamics under extreme conditions and computational method development, including master-equation solvers and multistructural torsional anharmonicity tools.",
    image: "/assets/research/tumme-workflow.png",
    caption: "Workflow of TUMME and related method-development tools.",
  },
];

export const members = {
  pi: [
    {
      name: "Xuefei Xu",
      role: "Principal Investigator",
      image: "/assets/logo/xu-group-logo-crop.jpg",
      lines: [
        "Associate Professor, Center for Combustion Energy and Department of Energy and Power Engineering, Tsinghua University",
        "Research fields: theoretical and computational chemistry, chemical reaction dynamics theory, interfaces, and clean energy.",
        "Research interests: excited states, photochemistry, nonadiabatic dynamics, chemical reaction kinetics, transition metals, and catalytic reactions.",
      ],
      email: "xuxuefei@tsinghua.edu.cn",
    },
  ],
  postdocs: [
    {
      name: "Pengchao Zhang",
      role: "Postdoctoral Researcher",
      href: "https://zhang-pchao.github.io/",
      image: "/assets/members/pengchao-zhang.jpg",
      lines: ["Research interests: water, deep-learning molecular dynamics, quantum effects."],
      email: "zhangpengchao@mail.tsinghua.edu.cn",
    },
  ],
  graduate: [
    { name: "Ruiqing Lei", role: "PhD Student (2021)", image: "/assets/members/ruiqing-lei.jpg", lines: ["Research interest: photochemistry."], email: "leirq21@mails.tsinghua.edu.cn" },
    { name: "Bowen Zhang", role: "PhD Student (2022)", image: "/assets/members/bowen-zhang.jpg", lines: ["Research interest: catalytic reactions."], email: "zhang-bw22@mails.tsinghua.edu.cn" },
    { name: "Peng Guo", role: "PhD Student (2023)", image: "/assets/members/peng-guo.jpg", lines: ["Research interest: kinetics."], email: "gp23@mails.tsinghua.edu.cn" },
    { name: "Xiangdang Guo", role: "PhD Student (2024)", image: "/assets/members/xiangdang-guo.jpg", lines: ["Research interest: theoretical and computational chemistry."], email: "" },
    { name: "Chang Qi", role: "PhD Student", image: "/assets/members/boy.png", lines: ["Research interest: theoretical and computational chemistry."], email: "" },
  ],
  undergraduate: [],
  alumni: {
    postdocs: [
      { name: "Muye Feng", role: "Post-doc alumni", image: "/assets/members/boy.png", lines: ["Postdoctoral work completed in 2020-2022.", "Research interest: molecular simulation."] },
      { name: "Changsheng Chen", role: "Post-doc alumni", image: "/assets/members/changsheng-chen.png", lines: ["Postdoctoral researcher, 2024-2026.", "Research interest: molecular dynamics."] },
    ],
    phd: [
      { name: "Lu Gao", role: "PhD, graduated 2021", image: "/assets/members/lu-gao.jpg", lines: ["Enrolled in 2016.", "PhD thesis title: Theoretical Study on the Quantum Effect for the Low-Temperature Dynamics.", "Entering an aerospace unit to start research work."] },
      { name: "Zhang Zeyun", role: "PhD, graduated 2022", image: "/assets/members/zhang-zeyun.png", lines: ["Enrolled in 2017.", "PhD thesis title: Design and Mechanism of Catalysts for Electrochemical Ammonia Synthesis Based on Two-dimensional Materials.", "Entering a career unit to start work."] },
      { name: "Zhang Ruiming", role: "PhD, graduated 2022", image: "/assets/members/zhang-ruiming.png", lines: ["Enrolled in 2017.", "PhD thesis title: Development and Application of the Gas-phase Energy Master Equation Method.", "Entering a private company to start research work."] },
      { name: "Xu Han", role: "PhD, graduated 2023", image: "/assets/members/xu-han.jpg", lines: ["Enrolled in 2018.", "PhD thesis title: Theoretical study on the mechanism and catalysts of sulfur-conversion reactions in lithium-sulfur batteries.", "Entering a private company to start research work."] },
      { name: "Yan Li", role: "PhD, graduated 2023", image: "/assets/members/yan-li.png", lines: ["Enrolled in 2018.", "PhD thesis title: High-Precision Computational Study on Rate Coefficients of Radical Hydrogen Abstraction and Hydrogen-Shift Reactions.", "Entering a university to start research work."] },
      { name: "Wenqi Chen", role: "PhD, graduated 2024", image: "/assets/members/wenqi-chen.jpg", lines: ["Enrolled in 2019.", "PhD thesis title: Theoretical Study on the Effect of Large Amplitude Anharmonic Vibration on the Kinetic Calculation of Gas Reaction.", "Entering a company to start research work."] },
      { name: "Pengchao Zhang", role: "PhD, graduated 2025", href: "https://zhang-pchao.github.io/", image: "/assets/members/pengchao-zhang.jpg", lines: ["Enrolled in 2020.", "PhD thesis title: Theoretical and computational study on the distribution of self-ions at water interfaces and its effects on physicochemical processes."] },
    ],
    visiting: [
      { name: "Hui Zhang", role: "Visiting Student", image: "/assets/members/girl.png", lines: ["Before 2020.", "Entering a company to start work."] },
      { name: "Xuan Guo", role: "Visiting Student", image: "/assets/members/girl.png", lines: ["Before 2020.", "Former visiting student."] },
      { name: "Bo Hu", role: "Visiting Student", image: "/assets/members/girl.png", lines: ["Before 2020.", "Entering a company to start work."] },
      { name: "Wendi Dong", role: "Visiting Student", image: "/assets/members/boy.png", lines: ["Before 2022.", "Entering Stanford University for research."] },
    ],
  },
};

export const gallery = [
  { src: "/assets/gallery/group-2021-june.jpg", alt: "XUX group photo, 2021", caption: "2021 Group Photo" },
  { src: "/assets/gallery/group-2021-a-web.jpg", alt: "XUX group activity, 2021", caption: "2021 Group Activity I" },
  { src: "/assets/gallery/group-2021-b-web.jpg", alt: "XUX group activity, 2021", caption: "2021 Group Activity II" },
  { src: "/assets/gallery/group-2022-wechat.jpg", alt: "XUX group photo, 2022", caption: "2022 Group Photo I" },
  { src: "/assets/gallery/group-2022-1.jpg", alt: "XUX group photo, 2022", caption: "2022 Group Photo II" },
  { src: "/assets/gallery/group-2023-graduation.jpg", alt: "XUX group graduation photo, 2023", caption: "2023 Graduation Photo" },
  { src: "/assets/gallery/group-2024-graduation.jpg", alt: "XUX group graduation photo, 2024", caption: "2024 Graduation Photo I" },
  { src: "/assets/gallery/group-2024-snipaste.jpg", alt: "XUX group photo, 2024", caption: "2024 Group Photo" },
  { src: "/assets/gallery/group-2024.png", alt: "XUX group photo, 2024", caption: "2024 Graduation Photo II" },
  { src: "/assets/gallery/group-2025-graduation-1.jpg", alt: "XUX group graduation photo, 2025", caption: "2025 Graduation Photo I" },
  { src: "/assets/gallery/group-2025-graduation-2.jpg", alt: "XUX group graduation photo, 2025", caption: "2025 Graduation Photo II" },
  { src: "/assets/gallery/group-2025-sports.jpg", alt: "XUX group sports activity, 2025", caption: "2025 Group Activity" },
];

export const publications = [
  { year: "2026", title: "Nanobubble Nucleation and Dissolution Near the Anatase (101)-Water Interface", authors: "Pengchao Zhang, Yawen Gao, Changsheng Chen, Xiangdang Guo, Chao Sun*, and Xuefei Xu*", details: "J. Am. Chem. Soc. 148, 18507-18517.", doi: "https://doi.org/10.1021/jacs.6c05480", featured: true },
  { year: "2026", title: "Solvent Effect on the Electrocatalytic Nitrogen Reduction Reaction: A Deep Potential Molecular Dynamics Simulation with Enhanced Sampling for the Case of the Ruthenium Single Atom Catalyst", authors: "Bowen Zhang, Pengchao Zhang, and Xuefei Xu*", details: "J. Mater. Chem. A 14, 7109-7120.", doi: "https://doi.org/10.1039/D5TA09029F", featured: true },
  { year: "2025", title: "Modulation of Electric Field and Interface on Competitive Reaction Mechanisms", authors: "Pengchao Zhang and Xuefei Xu*", details: "J. Chem. Theory Comput. 21, 6584-6593.", doi: "https://doi.org/10.1021/acs.jctc.5c00705", featured: true },
  { year: "2025", title: "Propensity of Water Self-Ions at Air(Oil)-Water Interfaces Revealed by Deep Potential Molecular Dynamics with Enhanced Sampling", authors: "Pengchao Zhang and Xuefei Xu*", details: "Langmuir 41, 3675-3683.", doi: "https://doi.org/10.1021/acs.langmuir.4c05004" },
  { year: "2024", title: "Hydroxide and Hydronium Ions Modulate the Dynamic Evolution of Nitrogen Nanobubbles in Water", authors: "Pengchao Zhang, Changsheng Chen, Muye Feng, Chao Sun*, and Xuefei Xu*", details: "J. Am. Chem. Soc. 146, 19537-19546.", doi: "https://doi.org/10.1021/jacs.4c06641" },
  { year: "2024", title: "Intramolecular and Water Mediated Tautomerism of Solvated Glycine", authors: "Pengchao Zhang, Axel Tosello Gardini, Xuefei Xu*, and Michele Parrinello*", details: "J. Chem. Inf. Model. 64, 3599-3604.", doi: "https://doi.org/10.1021/acs.jcim.4c00273" },
  { year: "2024", title: "Polyrate 2023: A computer program for the calculation of chemical reaction rates for polyatomics", authors: "R. Meana-Paneda, J. Zheng, J. L. Bao, et al.", details: "Comput. Phys. Commun. 294, 108933.", doi: "https://doi.org/10.1016/j.cpc.2023.108933" },
  { year: "2023", title: "TUMME 2023: Tsinghua University Minnesota Master Equation program", authors: "Ruiming Zhang, Xuefei Xu*, and Donald G. Truhlar*", details: "Comput. Phys. Commun. 293, 108894.", doi: "https://doi.org/10.1016/j.cpc.2023.108894" },
];

export const software = [
  { title: "TUMME", href: "https://comp.chem.umn.edu/tumme/", description: "Tsinghua University Minnesota Master Equation program for gas-phase chemical kinetics." },
  { title: "MSTor", href: "https://comp.chem.umn.edu/mstor/", description: "Partition functions and thermodynamic functions with multistructural torsional anharmonicity." },
  { title: "Polyrate", href: "https://zenodo.org/records/8213313", description: "A program suite for polyatomic chemical reaction-rate calculations." },
];

export const courses = [
  { title: "Physical Chemistry in Energy Utilization", detail: "Undergraduate course, 30140473, Spring semester. Teacher: Xuefei Xu." },
  { title: "Fundamentals and Applications of Quantum Chemistry", detail: "Graduate course, 80140402, Autumn semester. Teacher: Xuefei Xu." },
];

export const tutorials = [
  { title: "Tutorials", description: "Group tutorials and computational chemistry notes will be collected here." },
];

export const linkGroups = [
  { title: "Support", links: [{ label: "Tsinghua University", href: "https://www.tsinghua.edu.cn/en/" }, { label: "Center for Combustion Energy", href: "https://www.cce.tsinghua.edu.cn/" }] },
  {
    title: "Journals",
    links: [
      { label: "Journal of the American Chemical Society", href: "https://pubs.acs.org/journal/jacsat" },
      { label: "Journal of Chemical Theory and Computation", href: "https://pubs.acs.org/journal/jctcce" },
      { label: "The Journal of Physical Chemistry A/B/C", href: "https://pubs.acs.org/journal/jpcafh" },
      { label: "The Journal of Physical Chemistry Letters", href: "https://pubs.acs.org/journal/jpclcd" },
      { label: "The Journal of Chemical Physics", href: "https://pubs.aip.org/aip/jcp" },
      { label: "Physical Chemistry Chemical Physics", href: "https://www.rsc.org/journals-books-databases/about-journals/pccp/" },
      { label: "Chemical Science", href: "https://www.rsc.org/journals-books-databases/about-journals/chemical-science/" },
      { label: "Faraday Discussions", href: "https://www.rsc.org/journals-books-databases/about-journals/faraday-discussions/" },
      { label: "Angewandte Chemie", href: "https://chemistry-europe.onlinelibrary.wiley.com/journal/15213773" },
      { label: "WIREs Computational Molecular Science", href: "https://wires.onlinelibrary.wiley.com/journal/17590884" },
      { label: "Theoretical Chemistry Accounts", href: "https://link.springer.com/journal/214" },
      { label: "Nature Chemistry", href: "https://www.nature.com/nchem/" },
    ],
  },
  { title: "Databases", links: [{ label: "NIST Chemistry WebBook", href: "https://webbook.nist.gov/chemistry/" }, { label: "Google Scholar", href: "https://scholar.google.com/citations?user=dYIdNgIAAAAJ&hl=en" }] },
  { title: "Internal", links: [{ label: "GitHub Organization", href: "https://github.com/XUX-Group" }] },
];
