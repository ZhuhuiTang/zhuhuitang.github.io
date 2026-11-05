export interface PublicationDetails {
  year?: number
  authorRole?: string
  type?: string
  language?: string
  paper?: {
    href: string
    label: string
  }
  authors: string
  journal: string
  citation: string
  summary: string
  tags: string[]
  researchSummary?: string[]
  relatedProject?: {
    title: string
    href: string
  }
}

export interface Publication {
  title: string
  image: string
  alt: string
  width: number
  height: number
  firstAuthor: boolean
  language?: string
  details?: PublicationDetails
}

export const publications: Publication[] = [
  {
    title:
      "Methodological Considerations for Tacit Knowledge Discovery from TCM Clinical Case Records",
    image: "/assets/publication-tacit-knowledge.png",
    alt: "Framework connecting traditional theoretical knowledge with modern clinical case data to discover and validate clinical knowledge",
    width: 1774,
    height: 887,
    firstAuthor: true,
    language: "In Chinese",
    details: {
      year: 2024,
      authorRole: "First Author",
      type: "Methodological Perspective",
      language: "In Chinese",
      paper: {
        href: "https://link.cnki.net/doi/10.19945/j.cnki.issn.1006-3250.2024.11.016",
        label: "View on CNKI",
      },
      authors:
        "Zhuhui Tang, Xu Tong, Yafei Jia, Shiyue Deng, Gaoshuang Fu, Qiong Wu, Yupeng Zhang",
      journal: "Journal of Basic Chinese Medicine",
      citation: "30(11), 1856–1860",
      summary:
        "By distinguishing recorded symptoms and prescriptions from clinician-interpreted syndromes and pathogenesis, this paper examines how the nature of clinical information and the research question should guide case classification, computational methods, and knowledge interpretation.",
      tags: [
        "Clinical Knowledge Discovery",
        "Research Methodology",
        "Clinical Informatics",
      ],
      researchSummary: [
        "Clinical case records contain different kinds of knowledge, and treating them as interchangeable can obscure how clinical decisions are documented. This paper examines three interconnected types of information—symptoms, syndromes and pathogenesis, and prescriptions—and distinguishes their roles. Symptom descriptions and recorded prescriptions provide relatively direct documentation of clinical encounters and treatments, while syndrome and pathogenesis statements more explicitly reflect clinicians’ interpretation and reasoning.",
        "This distinction matters for knowledge discovery: information that can be defined or standardized is not necessarily handled in the same way as context-dependent clinical judgments. Rather than selecting a computational technique first, the paper argues for defining the research question and choosing an appropriate way to organize cases—by disease, prescription, medicinal substance, syndrome, practitioner, or historical and regional context.",
        "It also emphasizes credible case selection, fidelity to original records, and methods suited to the material, with domain experts guiding interpretation. Comparing practice-derived patterns with established theory can then help examine their consistency, differences, and potential contributions to medical knowledge.",
      ],
    } satisfies PublicationDetails,
  },
  {
    title:
      "Research progress on knowledge discovery in traditional Chinese medicine medical records based on artificial intelligence",
    image: "/assets/publication-ai-tcm-review.png",
    alt: "Review framework linking TCM medical record resources, clinical mining targets, AI research methods, and knowledge discovery",
    width: 1600,
    height: 900,
    firstAuthor: true,
    details: {
      year: 2024,
      authorRole: "Co-First Author",
      type: "Review",
      paper: {
        href: "/papers/research-progress-tcm-records-ai-zhuhui-tang.pdf",
        label: "Paper",
      },
      authors:
        "Zhuhui Tang, Qiong Wu, Yafei Jia, Shiyue Deng, Gaoshuang Fu, Jiatian Yu, Xu Tong, Yupeng Zhang",
      journal: "Guidelines and Standards of Chinese Medicine",
      citation: "2(4), 174–181 · 2024",
      summary:
        "This review maps AI-based knowledge discovery from TCM clinical records across three dimensions—record sources, knowledge mining targets, and computational approaches—and examines how their selection shapes the questions, findings, and limitations of existing research.",
      tags: ["Clinical Knowledge Discovery", "AI Methods", "Literature Review"],
      researchSummary: [
        "This review examines research on artificial intelligence (AI) for knowledge discovery from traditional Chinese medicine (TCM) clinical case records. Rather than focusing on a single algorithm, it organizes existing studies around three connected dimensions: the sources of case records, the knowledge being mined, and the computational methods used.",
        "It surveys records associated with renowned physicians, particular diseases, prescriptions and herbs, and different historical or regional contexts. It also distinguishes mining targets such as diseases, symptoms, syndromes and pathomechanisms, prescriptions, and medicinal substances. The methods discussed include data mining and machine learning, knowledge graphs, and emerging large language models, with attention to how different approaches uncover patterns or structure relationships.",
        "The review identifies several gaps: an emphasis on physician-specific or disease-based studies, limited work examining established theoretical knowledge against case-derived findings, and challenges in data preprocessing and interpretation. It argues that selecting suitable records and methods, while incorporating clinical expertise, remains essential for meaningful knowledge discovery.",
      ],
    } satisfies PublicationDetails,
  },
  {
    title:
      "Knowledge Graph Completion Technology and Its Application in Mining Traditional Chinese Medicine Classics",
    image: "/assets/publication-tcm-kgc.png",
    alt: "Workflow from classical TCM text resources through an initial knowledge graph and knowledge graph completion to an enriched TCM knowledge graph",
    width: 1774,
    height: 887,
    firstAuthor: false,
    language: "In Chinese",
    details: {
      paper: {
        href: "https://link.cnki.net/doi/10.19945/j.cnki.issn.1006-3250.20250410.001",
        label: "View on CNKI",
      },
      authors:
        "Jiatian Yu, Xu Tong, Lin Tong, Zhuhui Tang, Yupeng Zhang, Huamin Zhang",
      journal: "Journal of Basic Chinese Medicine",
      citation: "31(8), 1339–1346 · In Chinese",
      summary:
        "This review surveys major knowledge graph completion approaches and their strengths and limitations, then explores how they could connect fragmented knowledge in classical Chinese medical texts, support knowledge interpretation, and incorporate multimodal information.",
      tags: [
        "Knowledge Graph Completion",
        "Knowledge Representation",
        "Medical Text Mining",
      ],
      researchSummary: [
        "Knowledge graphs can organize complex medical knowledge, but missing entities and relationships limit their completeness and usefulness. This review examines knowledge graph completion (KGC) approaches, ranging from embedding-based models and tensor factorization to deep learning, graph neural networks, reinforcement learning, and meta-learning, highlighting their different strengths and limitations.",
        "The paper then considers potential applications to traditional Chinese medicine (TCM) classics, where knowledge is distributed across historical texts and commentaries. It discusses three directions: integrating fragmented classical knowledge, exploring relationships between traditional concepts and modern biomedical information, and enriching knowledge representations through multimodal data.",
        "Finally, the review identifies practical challenges, including incomplete digitization, variation in historical terminology, difficulties in entity alignment, and the complexity of integrating knowledge from different domains. It outlines opportunities for applying KGC to specialized medical knowledge, rather than reporting a newly implemented or experimentally validated completion system.",
      ],
    } satisfies PublicationDetails,
  },
]
