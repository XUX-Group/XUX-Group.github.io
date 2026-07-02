export const profileLinks = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=dYIdNgIAAAAJ&hl=en" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-2009-0483" },
  { label: "GitHub", href: "https://github.com/XUX-Group" },
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
      image: "/assets/members/xuefei-xu.jpg",
      lines: [
        "Associate Professor, Center for Combustion Energy and Department of Energy and Power Engineering, Tsinghua University",
        "Research fields: theoretical and computational chemistry, chemical reaction dynamics theory, interfaces, and clean energy.",
        "Research interests: excited states, photochemistry, nonadiabatic dynamics, chemical reaction kinetics, transition metals, and catalytic reactions.",
      ],
      email: "xuxuefei@tsinghua.edu.cn",
      detail: {
        phone: "010-62796755",
        emails: ["xuxuefei@tsinghua.edu.cn", "xuxuefei@gmail.com"],
        address: "Room B551, Lee Shau Kee Technology Building, Tsinghua University, Beijing 100084, China",
        research:
          "Theoretical and computational studies of excited states, photochemistry, nonadiabatic excited-state dynamics, chemical reaction dynamics, transition metals, and catalytic reactions. Current directions include high-accuracy theoretical calculations for key gas-phase reaction dynamics in combustion, atmospheric, and interstellar chemistry; catalyst design and mechanism studies; AI-enabled surface and interface physical chemistry; and reaction dynamics under extreme conditions with method development.",
        education: [
          "Ph.D. in Chemistry, Xiamen University, 09/2001-06/2006",
          "B.S. in Chemistry, Xiamen University, 09/1997-07/2001",
        ],
        appointments: [
          "Associate Professor, Center for Combustion Energy and Department of Energy and Power Engineering, Tsinghua University, 07/2015-present",
          "Research Associate, Department of Chemistry, University of Minnesota, 07/2013-05/2015",
          "Postdoctoral Researcher, Department of Chemistry, University of Minnesota, 07/2010-06/2013",
          "Postdoctoral Researcher, Hebrew University of Jerusalem, 05/2008-05/2010",
          "Research Assistant, Hong Kong Baptist University, 02/2008-05/2008",
          "Lecturer, Department of Chemistry, Xiamen University, 07/2006-04/2008",
          "Research Assistant, City University of Hong Kong, 09/2004-02/2005",
        ],
      },
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
    { name: "Zouwei Hu", role: "PhD Student (2025)", image: "/assets/members/boy.png", lines: ["Research interest: theoretical and computational chemistry."], email: "" },
    { name: "Chang Qi", role: "PhD Student (2026)", image: "/assets/members/boy.png", lines: ["Research interest: theoretical and computational chemistry."], email: "" },
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
      { name: "Xu Han", role: "PhD, graduated 2024", image: "/assets/members/xu-han.jpg", lines: ["Enrolled in 2018.", "PhD thesis title: Theoretical study on the mechanism and catalysts of sulfur-conversion reactions in lithium-sulfur batteries.", "Entering a private company to start research work."] },
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
  { year: "2026", title: "Nanobubble Nucleation and Dissolution Near the Anatase (101)-Water Interface", citation: "Zhang, P.; Gao, Y.; Chen, C.; Guo, X.; Sun, C.*; Xu, X.* J. Am. Chem. Soc. 2026.", doi: "https://doi.org/10.1021/jacs.6c05480", featured: true },
  { year: "2026", title: "Solvent Effect on the Electrocatalytic Nitrogen Reduction Reaction: A Deep Potential Molecular Dynamics Simulation with Enhanced Sampling for the Case of the Ruthenium Single Atom Catalyst", citation: "Zhang, B.; Zhang, P.; Xu, X.* J. Mater. Chem. A 2026.", doi: "https://doi.org/10.1039/D5TA09029F", featured: true },
  { year: "2025", title: "Modulation of Electric Field and Interface on Competitive Reaction Mechanisms", citation: "Zhang, P.; Xu, X.* J. Chem. Theory Comput. 2025, 21, 6584-6593.", doi: "https://doi.org/10.1021/acs.jctc.5c00705", featured: true },
  { year: "2025", title: "Propensity of Water Self-Ions at Air(Oil)-Water Interfaces Revealed by Deep Potential Molecular Dynamics with Enhanced Sampling", citation: "Zhang, P.; Xu, X.* Langmuir 2025, 41, 3675-3683.", doi: "https://doi.org/10.1021/acs.langmuir.4c05004", featured: true },
  { year: "2024", title: "Hydroxide and Hydronium Ions Modulate the Dynamic Evolution of Nitrogen Nanobubbles in Water", citation: "Zhang, P.; Chen, C.; Feng, M.; Sun, C.*; Xu, X.* J. Am. Chem. Soc. 2024.", doi: "https://doi.org/10.1021/jacs.4c06641" },
  { year: "2024", title: "Double-Layer Distribution of Hydronium and Hydroxide Ions in the Air-Water Interface", citation: "Zhang, P.; Feng, M.; Xu, X.* ACS Phys. Chem Au 2024.", doi: "https://doi.org/10.1021/acsphyschemau.3c00076" },
  { year: "2024", title: "Intramolecular and Water Mediated Tautomerism of Solvated Glycine", citation: "Zhang, P.; Gardini, A. T.; Xu, X.*; Parrinello, M.* J. Chem. Inf. Model. 2024, 64, 3599-3604.", doi: "https://doi.org/10.1021/acs.jcim.4c00273" },
  { year: "2024", title: "Polyrate 2023: A Computer Program for the Calculation of Chemical Reaction Rates for Polyatomics", citation: "Meana-Paneda, R.; Zheng, J.; Bao, J. L. et al. Comput. Phys. Commun. 2024, 294, 108933.", doi: "https://doi.org/10.1016/j.cpc.2023.108933" },
  { year: "2024", title: "A Kinetic Model of Diffusional Phase Transformations in Ternary Line Compounds and Determination of Diffusion Coefficients: Application to the Nb-Mo-Si System", citation: "Huang, Y.; Fu, T.*; Xu, X.; Wang, N. Acta Mater. 2024, 266, 119655.", doi: "https://doi.org/10.1016/j.actamat.2024.119655" },
  { year: "2024", title: "Spectroscopy of Triatomic Molecules", citation: "Chen, W.; Trabelsi, T.; Xu, X.; Francisco, J. S.* Mol. Phys. 2024, 122, e2292166.", doi: "https://doi.org/10.1080/00268976.2023.2292166" },
  { year: "2023", title: "Mechanistic Insights into Electrocatalytic Nitrogen Reduction Reaction on the Pd-W Heteronuclear Diatom Supported on C2N Monolayer", citation: "Zhang, Z.; Xu, X.* Energy Environ. Mater. 2023, 6, e12348.", doi: "https://doi.org/10.1002/eem2.12348" },
  { year: "2023", title: "Mechanistic Insights into Trisulfur Radical Generation in Lithium-Sulfur Batteries", citation: "Han, X.; Xu, X.* J. Mater. Chem. A 2023, 11, 18922-18932.", doi: "https://doi.org/10.1039/D3TA03366J" },
  { year: "2023", title: "On the Role of Surface Charge and Surface Tension Tuned by Surfactant in Stabilizing Bulk Nanobubbles", citation: "Ma, X.; Li, M.*; Xu, X.; Sun, C. Appl. Surf. Sci. 2023, 608, 155232.", doi: "https://doi.org/10.1016/j.apsusc.2022.155232" },
  { year: "2023", title: "Fragmentation Modeling of Gas-Phase Ionic Liquid Clusters in High-Voltage Electric Field", citation: "Su, L.; Zhuo, J.; Liu, H.; Yao, Z.; Xu, X.; Li, S.* Fuel 2023, 335, 126919.", doi: "https://doi.org/10.1016/j.fuel.2022.126919" },
  { year: "2023", title: "Direct Nonadiabatic Dynamics of Ammonia with Curvature-Driven Coherent Switching with Decay of Mixing and with Fewest Switches with Time Uncertainty", citation: "Zhao, X.; Shu, Y.; Zhang, L.*; Xu, X.*; Truhlar, D. G.* J. Chem. Theory Comput. 2023, 19, 1672-1685.", doi: "https://doi.org/10.1021/acs.jctc.2c01260" },
  { year: "2023", title: "MSTor 2023: A New Version of the Computer Code for Multistructural Torsional Anharmonicity", citation: "Chen, W.; Zheng, J.*; Bao, J. L.; Truhlar, D. G.*; Xu, X.* Comput. Phys. Commun. 2023, 288, 108740.", doi: "https://doi.org/10.1016/j.cpc.2023.108740" },
  { year: "2023", title: "Comprehensive Theoretical Study on Four Typical Intramolecular Hydrogen Shift Reactions of Peroxy Radicals", citation: "Li, Y.; Wang, Y.; Zhang, R. M.; He, X.*; Xu, X.* J. Chem. Theory Comput. 2023, 19, 3284-3302.", doi: "https://doi.org/10.1021/acs.jctc.3c00033" },
  { year: "2023", title: "Indirect Modulation of Cu Atoms Supported on Black Phosphorus for Fast Kinetic Li-S Batteries: A Theoretical Study", citation: "Han, X.; Xu, X.* ACS Mater. Lett. 2023, 5, 2114-2120.", doi: "https://doi.org/10.1021/acsmaterialslett.3c00457" },
  { year: "2023", title: "Nonadiabatic Coupling in Trajectory Surface Hopping: Accurate Time Derivative Couplings by the Curvature-Driven Approximation", citation: "Zhao, X.; Merritt, I. C. D.; Lei, R.; Shu, Y.; Jacquemin, D.; Zhang, L.*; Xu, X.*; Vacher, M.*; Truhlar, D. G.* J. Chem. Theory Comput. 2023, 19, 6577-6588.", doi: "https://doi.org/10.1021/acs.jctc.3c00813" },
  { year: "2023", title: "TUMME 2023: Tsinghua University Minnesota Master Equation Program", citation: "Zhang, R.; Xu, X.*; Truhlar, D. G.* Comput. Phys. Commun. 2023, 293, 108894.", doi: "https://doi.org/10.1016/j.cpc.2023.108894" },
  { year: "2022", title: "Identification of Torsional Modes in Complex Molecules Using Redundant Internal Coordinates", citation: "Chen, W.; Zhang, P.; Truhlar, D. G.; Zheng, J.*; Xu, X.* J. Chem. Theory Comput. 2022, 18, 7671-7682.", doi: "https://doi.org/10.1021/acs.jctc.2c00952" },
  { year: "2022", title: "Coupling Effects of Ionic Surfactants and Electrolytes on the Stability of Bulk Nanobubbles", citation: "Ma, X.; Li, M.*; Xu, X.; Sun, C. Nanomaterials 2022, 12, 3450.", doi: "https://doi.org/10.3390/nano12193450" },
  { year: "2022", title: "Mechanistic Study on Enhanced Electrocatalytic Nitrogen Reduction Reaction by Mo Single Clusters Supported on MoS2", citation: "Zhang, Z.; Xu, X.* ACS Appl. Mater. Interfaces 2022, 14, 28900-28910.", doi: "https://doi.org/10.1021/acsami.2c05649" },
  { year: "2022", title: "Observing Intramolecular Vibrational Energy Redistribution via the Short-Time Fourier Transform", citation: "Zhang, R. M.; Xu, X.*; Truhlar, D. G.* J. Phys. Chem. A 2022.", doi: "https://doi.org/10.1021/acs.jpca.1c09905" },
  { year: "2022", title: "How Sodium Chloride Extends Lifetime of Bulk Nanobubbles in Water", citation: "Feng, M.; Ma, X.; Zhang, Z.; Luo, K. H.; Sun, C.*; Xu, X.* Soft Matter 2022, 18, 2968-2978.", doi: "https://doi.org/10.1039/D2SM00181K" },
  { year: "2022", title: "g-C3N4-Supported Metal-Pair Catalysts toward Efficient Electrocatalytic Nitrogen Reduction: A Computational Evaluation", citation: "Zhang, Z.; Xu, X.* Adv. Theory Simul. 2022.", doi: "https://doi.org/10.1002/adts.202100579" },
  { year: "2022", title: "Master Equation Study of Hydrogen Abstraction from HCHO by OH via a Chemically Activated Intermediate", citation: "Zhang, R. M.; Chen, W.; Truhlar, D. G.*; Xu, X.* Faraday Discuss. 2022.", doi: "https://doi.org/10.1039/D2FD00024E" },
  { year: "2022", title: "Pressure-Dependent Kinetics of o-Xylene Reaction with OH Radical", citation: "Li, Y.; Guo, X.; Zhang, R. M.; Zhang, H.; Zhang, X.*; Xu, X.* Phys. Chem. Chem. Phys. 2022, 24, 8672-8682.", doi: "https://doi.org/10.1039/D2CP00396A" },
  { year: "2022", title: "TUMME: Tsinghua University Minnesota Master Equation Program", citation: "Zhang, R. M.; Xu, X.*; Truhlar, D. G.* Comput. Phys. Commun. 2022, 270, 108140.", doi: "https://doi.org/10.1016/j.cpc.2021.108140" },
  { year: "2021", title: "Self-Diffusion Mechanisms Based Defect Complexes in MoSi2", citation: "Huang, Y.; Fu, T.*; Xu, X.; Wang, N. J. Phys. Condens. Matter 2021, 33, 465402.", doi: "https://doi.org/10.1088/1361-648X/ac1ec7" },
  { year: "2021", title: "Energy Dependence of Ensemble-Averaged Energy Transfer Moments and Its Effect on Competing Decomposition Reactions", citation: "Zhang, R. M.; Xu, X.*; Truhlar, D. G.* J. Phys. Chem. A 2021, 125, 6303-6313.", doi: "https://doi.org/10.1021/acs.jpca.1c03845" },
  { year: "2021", title: "Large Anharmonic Effects on Tunneling and Kinetics: Reaction of Propane with Muonium", citation: "Gao, L. G.; Fleming, D. G.; Truhlar, D. G.; Xu, X.* J. Phys. Chem. Lett. 2021, 4154-4159.", doi: "https://doi.org/10.1021/acs.jpclett.1c01229" },
  { year: "2021", title: "A Kinetics Study on Hydrogen Abstraction Reactions of Cyclopentane by Hydrogen, Methyl, and Ethyl Radicals", citation: "Chen, W.; Guo, X.; Chen, L.; Zhang, R.; Li, Y.; Feng, H.; Xu, X.; Zhang, X.* Phys. Chem. Chem. Phys. 2021, 23, 7333-7342.", doi: "https://doi.org/10.1039/D1CP00386K" },
  { year: "2021", title: "Single Atom Catalysts Supported on N-Doped Graphene toward Fast Kinetics in Li-S Batteries: A Theoretical Study", citation: "Han, X.; Zhang, Z.; Xu, X.* J. Mater. Chem. A 2021, 9, 12225-12235.", doi: "https://doi.org/10.1039/D1TA01948A" },
  { year: "2021", title: "A Chemically Consistent Rate Constant for the Reaction of Nitrogen Dioxide with the Oxygen Atom", citation: "Yan, L.; Javoy, S.; Mevel, R.*; Xu, X.* Phys. Chem. Chem. Phys. 2021, 23, 585-596.", doi: "https://doi.org/10.1039/d0cp05131d" },
  { year: "2020", title: "Efficient Heteronuclear Diatom Electrocatalyst for Nitrogen Reduction Reaction: Pd-Nb Diatom Supported on Black Phosphorus", citation: "Zhang, Z.; Xu, X.* ACS Appl. Mater. Interfaces 2020, 12, 56987-56994.", doi: "https://doi.org/10.1021/acsami.0c16362" },
  { year: "2020", title: "Predicting Bond Dissociation Energies and Bond Lengths of Coordinatively Unsaturated Vanadium-Ligand Bonds", citation: "Bao, J. L.*; Welch, B. K.; Ulusoy, I. S.; Zhang, X.; Xu, X.; Wilson, A. K.*; Truhlar, D. G.* J. Phys. Chem. A 2020, 124, 9757-9770.", doi: "https://doi.org/10.1021/acs.jpca.0c06519" },
  { year: "2020", title: "Low-Pressure Limit of Competitive Unimolecular Reactions", citation: "Zhang, R. M.; Xu, X.*; Truhlar, D. G.* J. Am. Chem. Soc. 2020, 142, 16064-16071.", doi: "https://doi.org/10.1021/jacs.0c07692" },
  { year: "2020", title: "Water Catalysis of the Reaction of Methanol with OH Radical in the Atmosphere Is Negligible", citation: "Wu, J.; Gao, L. G.; Varga, Z.; Xu, X.*; Ren, W.*; Truhlar, D. G.* Angew. Chem. Int. Ed. 2020, 59, 10826-10830.", doi: "https://doi.org/10.1002/ange.202001065" },
  { year: "2019", title: "Understanding the Separation Mechanism of C2H6/C2H4 on Zeolitic Imidazolate Framework ZIF-7 by Periodic DFT Investigations", citation: "Zhang, Z.; Yang, K. R.; Xu, X.* J. Phys. Chem. C 2019, 124, 256-266.", doi: "https://doi.org/10.1021/acs.jpcc.9b04872" },
  { year: "2019", title: "Quantum Effects on H2 Diffusion in Zeolite RHO: Inverse Kinetic Isotope Effect for Sieving", citation: "Gao, L. G.; Zhang, R. M.; Xu, X.*; Truhlar, D. G.* J. Am. Chem. Soc. 2019, 141, 13635-13642.", doi: "https://doi.org/10.1021/jacs.9b06506" },
  { year: "2019", title: "Kinetics of the Toluene Reaction with OH Radical", citation: "Zhang, R. M.; Truhlar, D. G.; Xu, X.* Research 2019, 2019, 5373785.", doi: "https://doi.org/10.34133/2019/5373785" },
  { year: "2019", title: "Computational Kinetics of the Hydrogen Abstraction Reactions of n-Propanol and iso-Propanol by OH Radical", citation: "Guo, X.; Zhang, R. M.; Gao, L. G.; Zhang, X.*; Xu, X.* Phys. Chem. Chem. Phys. 2019, 21, 24458-24468.", doi: "https://doi.org/10.1039/C9CP04809J" },
  { year: "2019", title: "Accurate Entropy Calculation for Large Flexible Hydrocarbons Using a Multi-Structural 2-Dimensional Torsion Method", citation: "Wu, J.; Ning, H.; Xu, X.; Ren, W.* Phys. Chem. Chem. Phys. 2019, 21, 10003-10010.", doi: "https://doi.org/10.1039/C9CP00191C" },
  { year: "2018", title: "Kinetics of the Methanol Reaction with OH at Interstellar, Atmospheric, and Combustion Temperatures", citation: "Gao, L. G.; Zheng, J.; Fernandez-Ramos, A.; Truhlar, D. G.*; Xu, X.* J. Am. Chem. Soc. 2018, 140, 2906-2918.", doi: "https://doi.org/10.1021/jacs.7b12773" },
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
