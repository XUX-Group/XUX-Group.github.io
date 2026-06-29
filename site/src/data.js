export const profileLinks = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=dYIdNgIAAAAJ&hl=en" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-2009-0483" },
  { label: "CCE", href: "https://www.cce.tsinghua.edu.cn/info/1005/2121.htm" },
  { label: "DEPE", href: "https://www.te.tsinghua.edu.cn/info/1325/1791.htm" },
];

export const researchAreas = [
  {
    title: "Chemical Reaction Dynamics",
    description:
      "Kinetics of radical reactions important for combustion, atmospheric chemistry, and interstellar chemistry, with emphasis on anharmonic effects, pressure dependence, and quantum effects at low temperature.",
    image: "/assets/research/hpl-lpl.png",
    caption: "Pressure-dependent kinetics and energy-transfer models.",
  },
  {
    title: "Computational Methods and Software",
    description:
      "Master-equation solvers and multistructural torsional anharmonicity methods for rate calculations and thermochemistry.",
    image: "/assets/research/tumme-workflow.png",
    caption: "Workflow of TUMME.",
  },
  {
    title: "Surface and Interface Catalysis",
    description:
      "Mechanisms and catalyst design for heterogeneous and interfacial reactions, including electrocatalytic nitrogen reduction and lithium-sulfur battery chemistry.",
    image: "/assets/research/nrr-mechanisms.png",
    caption: "Reaction mechanisms on two-dimensional catalysts.",
  },
  {
    title: "Molecular Simulation at Aqueous Interfaces",
    description:
      "Machine-learned molecular dynamics and enhanced sampling for ions, nanobubbles, solvation, and reaction mechanisms at complex interfaces.",
    image: "/assets/research/li-s.png",
    caption: "Interfacial reaction pathways in energy-related systems.",
  },
];

export const members = {
  pi: [
    {
      name: "Xuefei Xu",
      role: "Principal Investigator",
      image: "/assets/members/xuefei-xu.jpg",
      lines: [
        "Associate Professor, Center for Combustion Energy and Department of Energy and Power Engineering, Tsinghua University",
        "Research interests: excited states, photochemistry, nonadiabatic dynamics, chemical reaction kinetics, transition metals, and catalytic reactions.",
      ],
      email: "xuxuefei@tsinghua.edu.cn",
    },
  ],
  postdocs: [
    {
      name: "Changsheng Chen",
      role: "Postdoctoral Researcher (2024)",
      image: "/assets/members/changsheng-chen.png",
      lines: ["Research interest: molecular dynamics."],
      email: "chenchangsheng@tsinghua.edu.cn",
    },
  ],
  graduate: [
    { name: "Pengchao Zhang", role: "PhD Student (2020)", href: "https://zhang-pchao.github.io/", image: "/assets/members/pengchao-zhang.jpg", lines: ["Research interests: water, deep-learning molecular dynamics, quantum effects."], email: "zpc20@mails.tsinghua.edu.cn" },
    { name: "Ruiqing Lei", role: "PhD Student (2021)", image: "/assets/members/ruiqing-lei.jpg", lines: ["Research interest: photochemistry."], email: "leirq21@mails.tsinghua.edu.cn" },
    { name: "Bowen Zhang", role: "PhD Student (2022)", image: "/assets/members/bowen-zhang.jpg", lines: ["Research interest: catalytic reactions."], email: "zhang-bw22@mails.tsinghua.edu.cn" },
    { name: "Peng Guo", role: "PhD Student (2023)", image: "/assets/members/peng-guo.jpg", lines: ["Research interest: kinetics."], email: "gp23@mails.tsinghua.edu.cn" },
    { name: "Xiangdang Guo", role: "PhD Student (2024)", image: "/assets/members/xiangdang-guo.jpg", lines: ["Research interest: theoretical and computational chemistry."], email: "" },
  ],
  undergraduate: [],
  alumni: [
    { name: "Hui Zhang", role: "Visiting Student", image: "/assets/members/girl.png", lines: ["Before 2020.", "Entering a company to start work."] },
    { name: "Xuan Guo", role: "Visiting Student", image: "/assets/members/girl.png", lines: ["Before 2020.", "Former visiting student."] },
    { name: "Bo Hu", role: "Visiting Student", image: "/assets/members/girl.png", lines: ["Before 2020.", "Entering a company to start work."] },
    { name: "Muye Feng", role: "Post-doc", image: "/assets/members/boy.png", lines: ["Postdoctoral work completed in 2020-2022.", "Research interest: molecular simulation."] },
    { name: "Zhang Zeyun", role: "PhD, graduated 2022", image: "/assets/members/zhang-zeyun.png", lines: ["Enrolled in 2017.", "PhD thesis title: Design and Mechanism of Catalysts for Electrochemical Ammonia Synthesis Based on Two-dimensional Materials.", "Entering a career unit to start work."] },
    { name: "Zhang Ruiming", role: "PhD, graduated 2022", image: "/assets/members/zhang-ruiming.png", lines: ["Enrolled in 2017.", "PhD thesis title: Development and Application of the Gas-phase Energy Master Equation Method.", "Entering a private company to start research work."] },
    { name: "Lu Gao", role: "PhD, graduated 2021", image: "/assets/members/lu-gao.jpg", lines: ["Thesis: Theoretical Study on the Quantum Effect for the Low-Temperature Dynamics."] },
    { name: "Xu Han", role: "PhD, graduated 2023", image: "/assets/members/xu-han.jpg", lines: ["Thesis: sulfur-conversion reactions in lithium-sulfur batteries."] },
    { name: "Yan Li", role: "PhD, graduated 2023", image: "/assets/members/yan-li.png", lines: ["Thesis: rate coefficients of radical hydrogen abstraction and hydrogen-shift reactions."] },
    { name: "Wenqi Chen", role: "PhD, graduated 2024", image: "/assets/members/wenqi-chen.jpg", lines: ["Thesis: large-amplitude anharmonic vibration effects in gas-reaction kinetics."] },
    { name: "Wendi Dong", role: "Visiting Student", image: "/assets/members/boy.png", lines: ["Before 2022.", "Entering Stanford University for research."] },
  ],
};

export const gallery = [
  { src: "/assets/gallery/group-2024.png", alt: "XUX group photo" },
  { src: "/assets/gallery/group-2021-a.jpg", alt: "XUX group activity" },
  { src: "/assets/gallery/group-2021-b.jpg", alt: "XUX group activity" },
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
  { title: "Physical Chemistry in Energy Utilization", detail: "Undergraduate course, 30140473, Spring semester. Teachers: Xuefei Xu, Remy Mevel." },
  { title: "Fundamentals and Applications of Quantum Chemistry", detail: "Graduate course, 80140402, Autumn semester. Teacher: Xuefei Xu." },
];

export const tutorials = [
  { title: "Tutorials", description: "Group tutorials and computational chemistry notes will be collected here." },
];

export const linkGroups = [
  { title: "Support", links: [{ label: "Tsinghua University", href: "https://www.tsinghua.edu.cn/en/" }, { label: "Center for Combustion Energy", href: "https://www.cce.tsinghua.edu.cn/" }] },
  { title: "Journals", links: [{ label: "JACS", href: "https://pubs.acs.org/journal/jacsat" }, { label: "JCTC", href: "https://pubs.acs.org/journal/jctcce" }] },
  { title: "Databases", links: [{ label: "NIST Chemistry WebBook", href: "https://webbook.nist.gov/chemistry/" }, { label: "Google Scholar", href: "https://scholar.google.com/citations?user=dYIdNgIAAAAJ&hl=en" }] },
  { title: "Internal", links: [{ label: "GitHub Organization", href: "https://github.com/XUX-Group" }] },
];
