// ============================================================
// 📝 EDIT THIS FILE to personalize your academic portfolio.
// All content is centralized here for easy replacement.
// ============================================================

export const personalInfo = {
  fullName: "Rahat Shahrior",
  title: "Biomedical Engineering Graduate | AI Researcher | Computational Scientist",
  affiliation: "Department of Computer Science, University of Cambridge",
  headshot: "/placeholder.svg", // Replace with your photo path
  researchSummary:
    "Hello! I am Rahat, a Biomedical Engineering graduate from Khulna University of Engineering & Technology (KUET), specializing in machine learning, computational biology, and intelligent healthcare systems using natural language processing. Over the past 6 years, I have gained both technical foundation and hands-on training in AI-driven Biomedical research, demonstrated in my contributions to ten peer-reviewed publications, including Computer Methods and Programs in Biomedicine, Scientific Reports, IEEE Access, and Bioengineering. My prior research included advanced deep learning architectures, including CNNs and transformer-based models, computer vision, and computer-aided drug discovery techniques to address complex challenges in cancer therapeutics development, medical imaging, and clinical decision support.\n\nCurrently, I am serving as the Jr. Research Associate at Institution of Research, Innovation, Incubation & Commercialization (IRIIC), United International University (UIU), working to develop an advanced NLP pipeline for an AI-powered medical scribing system for streamlined clinical documentation and digital health applications for prescription counseling.",
  cvUrl: "/Academic_CV_Rahat_Shahrior.pdf",
  email: "rahat.shahrior05@gmail.com",
  officeAddress: "AIMS Lab, IRIIC, United International University, Dhaka.",
  socialLinks: {
    googleScholar: "https://scholar.google.com/citations?user=CaOCa9sAAAAJ&hl=en",
    researchGate: "https://www.researchgate.net/profile/Rahat-Shahrior",
    linkedIn: "https://linkedin.com",
    github: "https://github.com/RSOmi05",
    orcid: "https://orcid.org/0000-0002-9173-3386",
    email: "mailto:rahat.shahrior05@gmail.com",
  },
};

export const aboutData = {
  biography: `Dr. Jane A. Smith is an Assistant Professor in the Department of Computer Science at the University of Cambridge. She received her PhD in Machine Learning from MIT in 2020, where her thesis on "Probabilistic Methods for Scientific Discovery" received the Outstanding Dissertation Award. Her work has been published in leading venues including NeurIPS, ICML, Nature Methods, and Science. She has received funding from the NSF, NIH, and the Royal Society, and was named a Rising Star in EECS in 2022.`,
  researchInterests: [
    "Advanced Deep Learning Architectures",
    "AI in Drug Discovery",
    "Computer Vision",
    "Biomedical Image Processing",
    "Structural Bioinformatics",
    "Natural Language Processing",
  ],
  education: [
    { degree: "BSc. in Biomedical Engineering", institution: "Massachusetts Institute of Technology", year: "2016–2020" },
    { degree: "Higher Secondary Certificate (HSC)", institution: "Stanford University", year: "2014–2016" },
    { degree: "BSc in Mathematics", institution: "University of Oxford", year: "2010–2014" },
  ],
  skills: {
    technical: ["Python", "PyTorch", "TensorFlow", "R", "Julia", "C++", "CUDA", "Docker", "AWS"],
    research: ["Bayesian Inference", "Deep Learning", "Statistical Modeling", "Experimental Design", "Bioinformatics", "Scientific Writing"],
  },
};

export const researchData = [
  {
    title: "AI-Driven Drug Discovery",
    description: "Developing deep generative models for molecular design and optimization, enabling rapid identification of promising drug candidates.",
    contributions: ["Novel graph neural network architecture", "State-of-the-art on MoleculeNet benchmarks", "Partnership with Pfizer"],
    link: "#",
  },
  {
    title: "Probabilistic Climate Modeling",
    description: "Building uncertainty-aware climate models that provide reliable predictions with calibrated confidence intervals.",
    contributions: ["Scalable Gaussian process methods", "Published in Nature Climate Change", "Open-source software toolkit"],
    link: "#",
  },
  {
    title: "Causal Inference in Genomics",
    description: "Applying causal reasoning to understand gene regulatory networks and identify therapeutic targets for complex diseases.",
    contributions: ["New causal discovery algorithm", "Application to single-cell RNA-seq", "NIH R01 funded project"],
    link: "#",
  },
  {
    title: "Automated Scientific Experimentation",
    description: "Designing Bayesian optimization frameworks for autonomous laboratories that can plan and execute experiments with minimal human intervention.",
    contributions: ["Multi-objective optimization framework", "Deployed in 3 partner labs", "Best Paper at ICML Workshop"],
    link: "#",
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi: string;
  pdfUrl: string;
  bibtex: string;
  abstract: string;
  category: "journal" | "conference" | "book" | "working";
};

export const publicationsData: Publication[] = [
  {
    title: "In-silico investigation integrated with machine learning to identify potential inhibitors targeting AKT2: Key driver of cancer cell progression and metastasis",
    authors: "Rahat Shahrior, Salwa Tamkin, Mohammad Badhruddouza Khan, Ahmed Jebail Meraj, Hanif Bhuiyan",
    venue: "Computer Methods and Programs in Biomedicine, Elsevier",
    year: 2025,
    doi: "https://doi.org/10.1038/s41570-024-00001",
    pdfUrl: "#",
    bibtex: `@article{shahrior2025insilico,\n  title={In-silico investigation integrated with machine learning to identify potential inhibitors targeting AKT2},\n  author={Shahrior, Rahat and Tamkin, Salwa and Khan, Mohammad Badhruddouza and Meraj, Ahmed Jebail and Bhuiyan, Hanif},\n  journal={Computer Methods and Programs in Biomedicine},\n  year={2025}\n}`,
    abstract: "This survey provides a comprehensive overview of deep generative models applied to molecular design, covering variational autoencoders, generative adversarial networks, normalizing flows, and diffusion models.",
    category: "journal",
  },
  {
    title: "Automated Diagnosis of Diabetic Retinopathy Using Deep Learning: On the Search of Segmented Retinal Blood Vessel Images for Better Performance",
    authors: "**Smith, J.A.** & Chen, M.",
    venue: "Nature Climate Change",
    year: 2023,
    doi: "https://doi.org/10.1038/s41558-023-00002",
    pdfUrl: "#",
    bibtex: `@article{smith2023scalable,\n  title={Scalable Gaussian Processes for Climate Prediction},\n  author={Smith, Jane A and Chen, Ming},\n  journal={Nature Climate Change},\n  year={2023}\n}`,
    abstract: "We present a scalable Gaussian process framework for climate prediction that provides well-calibrated uncertainty estimates.",
    category: "journal",
  },
  {
    title: "Automated Diagnosis of Diabetic Retinopathy Using Deep Learning: On the Search of Segmented Retinal Blood Vessel Images for Better Performance",
    authors: "Lee, S., **Smith, J.A.**, & Park, H.",
    venue: "International Conference on Machine Learning (ICML)",
    year: 2023,
    doi: "https://doi.org/10.1234/icml2023",
    pdfUrl: "#",
    bibtex: `@inproceedings{lee2023causal,\n  title={Causal Discovery in Single-Cell Transcriptomics},\n  author={Lee, Soo and Smith, Jane A and Park, Hye},\n  booktitle={ICML},\n  year={2023}\n}`,
    abstract: "We propose a differentiable approach to learning directed acyclic graphs from single-cell RNA sequencing data.",
    category: "conference",
  },
  {
    title: "Bayesian Optimization for Autonomous Scientific Laboratories",
    authors: "**Smith, J.A.**, Kumar, A., & Brown, D.",
    venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    year: 2022,
    doi: "https://doi.org/10.1234/neurips2022",
    pdfUrl: "#",
    bibtex: `@inproceedings{smith2022bayesian,\n  title={Bayesian Optimization for Autonomous Labs},\n  author={Smith, Jane A and Kumar, Ankit and Brown, David},\n  booktitle={NeurIPS},\n  year={2022}\n}`,
    abstract: "We present a multi-objective Bayesian optimization framework designed for autonomous scientific experimentation.",
    category: "conference",
  },
  {
    title: "Machine Learning in the Physical Sciences",
    authors: "**Smith, J.A.** & Williams, T.L.",
    venue: "Cambridge University Press",
    year: 2023,
    doi: "#",
    pdfUrl: "#",
    bibtex: `@book{smith2023ml,\n  title={Machine Learning in the Physical Sciences},\n  author={Smith, Jane A and Williams, Thomas L},\n  publisher={Cambridge University Press},\n  year={2023}\n}`,
    abstract: "A comprehensive textbook covering the application of modern machine learning techniques to problems in physics, chemistry, and materials science.",
    category: "book",
  },
  {
    title: "Automatic detection, classification, and segmentation of sagittal MR images for diagnosing prolapsed lumbar intervertebral disc",
    authors: "Md. Abu Sayed, G. M. Mahmudur Rahman, Md. Sherajul Islam, Md. Alimul Islam, Jeongwon Park, Hasan Ahmed, Akram Hossain, & Rahat Shahrior",
    venue: "Scientific Reports, Nature",
    year: 2025,
    doi: "#",
    pdfUrl: "#",
    bibtex: `@article{sayed2025automatic,\n  title={Automatic detection, classification, and segmentation of sagittal MR images},\n  author={Sayed, Md. Abu and Rahman, G. M. Mahmudur and others},\n  journal={Scientific Reports},\n  year={2025}\n}`,
    abstract: "This paper presents automatic detection, classification, and segmentation of sagittal MR images for diagnosing prolapsed lumbar intervertebral disc.",
    category: "journal",
  },
];

export const projectsData = [
  {
    title: "AI4Science: Machine Learning for Molecular Simulation",
    role: "Principal Investigator",
    duration: "2023 – Present",
    fundingAgency: "National Science Foundation (NSF)",
    description: "Developing neural network potentials for accurate and efficient molecular dynamics simulations of complex materials systems.",
    outcomes: ["2 journal publications", "Open-source software package", "3 PhD students supervised"],
    link: "#",
  },
  {
    title: "Precision Medicine through Causal AI",
    role: "Co-Principal Investigator",
    duration: "2022 – 2025",
    fundingAgency: "National Institutes of Health (NIH)",
    description: "Applying causal inference methods to large-scale electronic health records to identify personalized treatment strategies.",
    outcomes: ["Clinical trial partnership", "1 patent filed", "Featured in Nature Medicine News"],
    link: "#",
  },
  {
    title: "Autonomous Chemistry Lab",
    role: "Co-Investigator",
    duration: "2021 – 2024",
    fundingAgency: "Royal Society",
    description: "Building a closed-loop robotic chemistry laboratory guided by Bayesian optimization for automated reaction discovery.",
    outcomes: ["Lab deployed at Cambridge", "3 conference papers", "Industry collaboration with BASF"],
    link: "#",
  },
];

export const teachingData = {
  courses: [
    {
      title: "CS 4780: Machine Learning for Science",
      institution: "University of Cambridge",
      semester: "Michaelmas 2024",
      description: "Graduate-level course covering probabilistic modeling, deep learning, and their applications to scientific problems.",
    },
    {
      title: "CS 2100: Introduction to Artificial Intelligence",
      institution: "University of Cambridge",
      semester: "Lent 2024",
      description: "Undergraduate introductory course covering search, logic, probability, and machine learning fundamentals.",
    },
    {
      title: "CS 5990: Advanced Topics in Generative Models",
      institution: "University of Cambridge",
      semester: "Easter 2023",
      description: "Seminar course on cutting-edge generative models including diffusion models, flow matching, and autoregressive transformers.",
    },
  ],
  supervision: [
    { name: "Alice Chen", level: "PhD", topic: "Neural Network Potentials for Materials Discovery", year: "2022–Present" },
    { name: "Bob Kumar", level: "PhD", topic: "Causal Inference in Genomics", year: "2023–Present" },
    { name: "Carol Davis", level: "MSc", topic: "Bayesian Optimization for Drug Design", year: "2024" },
    { name: "David Lee", level: "Undergraduate", topic: "Graph Neural Networks for Molecular Property Prediction", year: "2024" },
  ],
};

export const cvHighlights = {
  education: [
    "PhD Machine Learning, MIT (2020)",
    "MSc Computer Science, Stanford (2016)",
    "BSc Mathematics, Oxford (2014)",
  ],
  experience: [
    "Assistant Professor, Cambridge (2021–Present)",
    "Postdoctoral Researcher, Google DeepMind (2020–2021)",
    "Research Intern, Microsoft Research (Summer 2019)",
  ],
  awards: [
    "Rising Star in EECS (2022)",
    "Outstanding Dissertation Award, MIT (2020)",
    "Best Paper Award, ICML Workshop (2022)",
    "NSF CAREER Award (2023)",
  ],
  grants: [
    "NSF CAREER: AI4Science ($500K, 2023–2028)",
    "NIH R01: Precision Medicine ($1.2M, 2022–2025)",
    "Royal Society: Autonomous Chemistry ($300K, 2021–2024)",
  ],
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Dr. Jane A. Smith. All rights reserved.`,
  lastUpdated: "March 2026",
};
