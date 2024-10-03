import Arbitration from "@/public/icons/Arbitration.svg";
import Banking from "@/public/icons/Banking.svg";
import Commercial from "@/public/icons/Commercial.svg";
import Economic from "@/public/icons/Economic.svg";
import Family from "@/public/icons/Family.svg";
import GST from "@/public/icons/GST.svg";
import MSME from "@/public/icons/MSME.svg";
import Negotiation from "@/public/icons/Negotiation.svg";
import RERA from "@/public/icons/RERA.svg";
import Service from "@/public/icons/Service.svg";
import Tax from "@/public/icons/Tax.svg";
import Image from "next/image";

const services = [
  {
    id: "income-tax",
    title: "Income Tax",
    description:
      "Our firm specializes in comprehensive tax planning and compliance strategies tailored to meet the unique needs of our clients. We provide expert guidance on tax assessments and represent clients in appellate proceedings to ensure favorable outcomes in disputes with tax authorities. Our goal is to minimize tax liabilities while ensuring compliance with applicable laws.",
    icon: <Image src={Tax} width={50} height={50} />,
  },
  {
    id: "gst",
    title: "GST",
    description:
      "We offer holistic support in Goods and Services Tax (GST) matters, from advisory services to compliance checks. Our team assists clients in understanding the intricacies of GST regulations, ensuring timely filing of returns, and navigating the complexities of disputes. We strive to resolve GST issues efficiently, safeguarding our clients’ interests.",
    icon: <Image src={GST} width={42} height={42} />,
  },
  {
    id: "rera",
    title: "RERA",
    description:
      "Navigating the Real Estate Regulation and Development Act (RERA) can be complex. Our legal services focus on ensuring compliance with RERA requirements for developers and real estate stakeholders. We also provide representation in dispute resolution under the RERA framework, protecting the rights of buyers and developers alike.",
    icon: <Image src={RERA} width={100} height={100} />,
  },
  {
    id: "family-disputes",
    title: "Family Disputes",
    description:
      "We understand that family disputes can be emotionally challenging. Our compassionate approach ensures sensitive handling of matters such as divorce, child custody, alimony, and property settlements. We aim to provide our clients with a supportive environment while advocating for their rights and interests.",
    icon: <Image src={Family} width={47} height={47} />,
  },
  {
    id: "economic-offenses",
    title: "Economic Offenses",
    description:
      "Our firm offers robust defense strategies for clients facing allegations of economic offenses, including fraud, money laundering, and other financial crimes. With a thorough understanding of the legal framework, we aim to protect our clients' reputations and ensure fair representation throughout the legal process.",
    icon: <Image src={Economic} width={50} height={50} />,
  },
  {
    id: "banking-and-finance",
    title: "Banking and Finance",
    description:
      "We provide comprehensive legal assistance in the banking and finance sector, focusing on regulatory compliance, loan structuring, and non-performing asset (NPA) management. Our litigation services ensure that our clients are well-represented in disputes related to banking and financial matters.",
    icon: <Image src={Banking} width={55} height={55} />,
  },
  {
    id: "msme",
    title: "MSME",
    description:
      "We provide dedicated legal support to micro, small, and medium enterprises (MSMEs) in navigating compliance requirements and managing disputes. Our services empower MSMEs to thrive in the competitive landscape while ensuring adherence to legal obligations.",
    icon: <Image src={MSME} width={120} height={120} />,
  },
  {
    id: "service-matters",
    title: "Service Matters",
    description:
      "Our firm offers representation and advisory services for employment-related disputes, including issues related to contracts, terminations, and tribunal matters. We advocate for our clients' rights while ensuring compliance with labor laws and regulations.",
    icon: <Image src={Service} width={40} height={40} />,
  },
  {
    id: "general-commercial-law",
    title: "General Commercial Law",
    description:
      "Our expertise in general commercial law includes business structuring, corporate governance, and contract management. We provide advisory services for mergers and acquisitions (M&A), ensuring that our clients make informed decisions that align with their business objectives while complying with legal standards.",
    icon: <Image src={Commercial} width={45} height={45} />,
  },
  {
    id: "contract-vetting-negotiation",
    title: "Contract Vetting & Negotiation",
    description:
      "Our contract vetting and negotiation services ensure that all agreements are precise, enforceable, and aligned with our clients' interests. We meticulously draft and review contracts to minimize risks and foster favorable terms for our clients, facilitating successful business transactions.",
    icon: <Image src={Negotiation} width={40} height={40} />,
  },
  {
    id: "arbitration-and-conciliation",
    title: "Arbitration and Conciliation",
    description:
      "We specialize in alternative dispute resolution (ADR) methods, including arbitration and conciliation, to efficiently resolve disputes outside of traditional court settings. Our experienced team aims to achieve swift and effective resolutions, saving clients time and resources.",
    icon: <Image src={Arbitration} width={57} height={57} />,
  },
];

const consultants = [
  {
    id: "sushil-kumar-gautam",
    name: "Sushil Kumar Gautam",
    designation: "Add. Comm. (R) GST UP",
    // image: PlaceHolder,
    description: `Susheel Kumar Gautam embarked on a distinguished career in tax administration, beginning as an Assistant Sales Tax Officer in 1978. Superannuating as Additional Commissioner (Grade 2). He is B.Sc. LLB from Meerut University. Throughout his career, he played a key role in implementing tax policies, ensuring compliance, and leading enforcement initiatives within the Sales Tax Department. Mr. Gautam’s extensive experience in governance and administration, both in government and non-government sectors, highlights his lifelong dedication to public service and community leadership.`,
  },
  {
    id: "sushil-kumar-jain",
    name: "Sushil Kumar Jain",
    designation: "Advocate Supreme Court",
    // image: PlaceHolder,
    description: "Not Available",
  },
  {
    id: "mp-sharma",
    name: "M.P. Sharma",
    designation: "Former ED Vig. SAIL",
    // image: PlaceHolder,
    description: "Not Available",
  },
  {
    id: "ajit-rai",
    name: "Ajit Rai",
    designation: "Advocate",
    // image: PlaceHolder,
    description: "Not Available",
  },
  {
    id: "anubhav-rastogi",
    name: "Anubhav Rastogi",
    designation: "CS & Advocate",
    // image: PlaceHolder,
    description: `Mr. Anubhav Rastogi is a seasoned tax and corporate law professional with over 13 years of experience, specializing in tax, corporate law, banking, insolvency, and bankruptcy. He has held key roles at SR Batliboi & Co. and PwC, where he led the National Company Law Tribunal practice. Anubhav has successfully represented clients before various tribunals, including the Income Tax Appellate Tribunal and the National Company Law Tribunal.`,
    description1: `Anubhav holds a law degree from the University of Pune and is a qualified Company Secretary. He has advised leading companies across sectors like infrastructure, financial services, and technology, providing strategic solutions in complex legal matters.`,
  },
  {
    id: "kanishka-pandey",
    name: "Kanishka Pandey",
    designation: "Advocate",
    // image: PlaceHolder,
    description: `Mr. Kanishka Pandey, LLB is an accomplished advocate with expertise in legal drafting, research, and representation before various tribunals, including the Debt Recovery Tribunal (DRT), National Company Law Tribunal (NCLT), and the Real Estate Regulatory Authority (RERA). With a strong foundation in law from Amity University, Kanishka is known for delivering precise legal documents and conducting comprehensive research to support litigation and advisory functions. He is a member of the Bar Council of Delhi, and his work spans across debt recovery, corporate law, and real estate disputes.`,
  },
];

const partners = [
  {
    id: "gc-chaturvedi",
    name: "Mr. G.C. Chaturvedi",
    designation: "IAS (R)",
    // image: PlaceHolder,
    description: `Mr. Girish Chandra Chaturvedi is a distinguished retired IAS officer 1997 Batch of Uttar Pradesh cadre. He has held key leadership roles, including Secretary of the Ministry of Petroleum & Natural Gas & Government of India, Chairperson of the Warehousing Development and Regulatory Authority, and Non-Executive Chairperson at ICICI Bank and the National Stock Exchange. His expertise spans energy, finance, and public administration with a focus on governance and policy-making.`,
  },
  {
    id: "sanjiv-kumar-mittal",
    name: "Mr. Sanjiv Kumar Mittal",
    designation: "IAS (R)",
    // image: PlaceHolder,
    description: `Mr. Sanjiv Kumar Mittal is a highly experienced IAS officer of the 1987 batch Uttar Pradesh cadre, with over 36 years of distinguished service in both the Government of Uttar Pradesh and the Government of India. He holds a B.Tech degree in Electrical Engineering from IIT Delhi. His career includes key leadership roles such as Chairman of the Board of Revenue, State Vigilance Commission, Infrastructure and Industrial Development Commissioner, and Additional Chief Secretary in Finance and State Taxes. He has worked in the Ministries of Coal, Mines, and Electronics & IT in the Government of India.`,
  },
  {
    id: "sushil-kumar-gautam",
    name: "Sushil Kumar Gautam",
    designation: "Add. Comm. (R) GST UP",
    // image: PlaceHolder,
    description: `Sushil Kumar Gautam embarked on a distinguished career in tax administration, beginning as an Assistant Sales Tax Officer in 1978. He retired as Additional Commissioner (Grade 2) and holds a B.Sc. LLB from Meerut University. Throughout his career, he played a key role in implementing tax policies, ensuring compliance, and leading enforcement initiatives within the Sales Tax Department. His extensive experience in governance and administration, both in government and non-government sectors, highlights his lifelong dedication to public service and community leadership.`,
  },
  {
    id: "swetashwa-agarwal",
    name: "Swetashwa Agarwal",
    designation: "Advocate Allahabad High Court",
    // image: PlaceHolder,
    description: `Swetashwa Agarwal is an accomplished advocate with expertise in human rights, infrastructure law, and corporate litigation. He holds a BSL-LLB from Symbiosis Law College, Pune, and an LLM from CCS University, Meerut. He has served in key roles including Special Counsel at the National Human Rights Commission and Standing Counsel for the National Highway Authority of India. He is recognized for his strong advocacy before the Allahabad High Court, handling complex legal matters and offering strategic counsel to governmental bodies and corporations. He is also a member of the Allahabad High Court Bar Association and serves as Panel Counsel for the Allahabad High Court Legal Service Authority and Bharat Petroleum Corporation Ltd.`,
  },
];

export { consultants, services, partners };
