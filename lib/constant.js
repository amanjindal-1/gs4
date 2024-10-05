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
import {
  Banking1,
  Banking2,
  Banking3,
  Commercial1,
  Commercial2,
  Commercial3,
  Conciliation1,
  Conciliation2,
  Conciliation3,
  Contract1,
  Contract2,
  Contract3,
  Economic1,
  Economic2,
  Economic3,
  Family1,
  Family2,
  Family3,
  GST1,
  GST2,
  GST3,
  MSME1,
  MSME2,
  MSME3,
  RERA1,
  RERA2,
  RERA3,
  Service1,
  Service2,
  Service3,
  Tax1,
  Tax2,
  Tax3,
} from "./imageImports";

const services = [
  {
    id: "income-tax",
    title: "Income Tax",
    description:
      " Our firm specializes in offering comprehensive tax planning and compliance strategies that are specifically tailored to meet the unique financial goals and requirements of each client. With a deep understanding of tax laws, we provide expert guidance to navigate through tax assessments and filings, ensuring that clients adhere to all legal obligations while optimizing their financial outcomes.",
    description1:
      "In addition to planning and compliance, we represent clients in appellate proceedings and tax-related disputes with authorities. Our team is dedicated to securing favorable resolutions, minimizing tax liabilities, and protecting our clients' financial interests while ensuring full compliance with applicable laws.",
    icon: <Image alt="tax" src={Tax} width={70} height={70} />,
    img1: Tax1,
    img2: Tax2,
    img3: Tax3,
  },
  {
    id: "gst",
    title: "GST",
    description:
      "We offer holistic support in Goods and Services Tax (GST) matters, providing advisory services that help clients understand the intricate details of GST regulations and their application. Our team ensures timely and accurate filing of GST returns, helping businesses stay compliant with evolving tax laws.",
    description1:
      "In addition to compliance, we assist clients in resolving GST-related disputes, offering strategic representation to safeguard their interests. Our goal is to address and resolve GST issues efficiently, minimizing potential risks and ensuring smooth business operations.",
    icon: <Image alt="gst" src={GST} width={56} height={56} />,
    img1: GST1,
    img2: GST2,
    img3: GST3,
  },
  {
    id: "rera",
    title: "RERA",
    description:
      "Navigating the Real Estate Regulation and Development Act (RERA) can be challenging. Our legal services are designed to ensure developers and real estate stakeholders meet all RERA compliance requirements, minimizing legal risks and ensuring smooth project execution.",
    description1:
      "In addition to compliance, we offer expert representation in dispute resolution under the RERA framework, advocating for the rights of both buyers and developers. Our aim is to protect client interests while fostering fair and transparent real estate practices.",
    icon: <Image alt="rera" src={RERA} width={180} height={100} />,
    img1: RERA1,
    img2: RERA2,
    img3: RERA3,
  },
  {
    id: "family-disputes",
    title: "Family Disputes",
    description:
      "Family disputes can be emotionally taxing, and we are here to provide the legal support you need during these difficult times. Our compassionate approach ensures that sensitive matters such as divorce, child custody, alimony, and property settlements are handled with care and understanding.",
    description1:
      "We prioritize creating a supportive environment for our clients while offering strong advocacy to protect their rights and interests. Our goal is to help you navigate family legal issues with confidence and achieve fair outcomes.",
    icon: <Image alt="family-dispute" src={Family} width={70} height={70} />,
    img1: Family1,
    img2: Family2,
    img3: Family3,
  },
  {
    id: "economic-offenses",
    title: "Economic Offenses",
    description:
      "Our firm provides comprehensive defense strategies for clients dealing with allegations of economic offenses such as fraud, money laundering, and financial crimes. We draw upon a deep understanding of the legal landscape to develop tailored approaches that safeguard our clients’ rights and reputations.",
    description1:
      "With a focus on ensuring fair representation, we guide our clients through every stage of the legal process, striving for favorable resolutions and protecting their interests in complex financial crime cases.",
    icon: (
      <Image alt="economic-offenses" src={Economic} width={70} height={70} />
    ),
    img1: Economic1,
    img2: Economic2,
    img3: Economic3,
  },
  {
    id: "banking-and-finance",
    title: "Banking and Finance",
    description:
      "We offer comprehensive legal support in the banking and finance sector, with a focus on ensuring regulatory compliance, effective loan structuring, and management of non-performing assets (NPA). Our team provides tailored solutions to help clients navigate complex financial regulations and mitigate risks.",
    description1:
      "In addition to advisory services, we represent clients in disputes related to banking and financial matters, delivering strong litigation strategies to protect their interests and achieve favorable outcomes.",
    icon: (
      <Image alt="banking-and-finance" src={Banking} width={70} height={70} />
    ),
    img1: Banking1,
    img2: Banking2,
    img3: Banking3,
  },
  {
    id: "msme",
    title: "MSME",
    description:
      "We provide dedicated legal support to micro, small, and medium enterprises (MSMEs) in navigating compliance requirements and managing disputes. Our services empower MSMEs to thrive in the competitive landscape while ensuring adherence to legal obligations.",
    description1: "",
    icon: <Image alt="MSME" src={MSME} width={120} height={120} />,
    img1: MSME1,
    img2: MSME2,
    img3: MSME3,
  },
  {
    id: "service-matters",
    title: "Service Matters",
    description:
      "Our firm offers representation and advisory services for employment-related disputes, including issues related to contracts, terminations, and tribunal matters. We advocate for our clients' rights while ensuring compliance with labor laws and regulations.",
    description1: "",
    icon: <Image alt="service" src={Service} width={40} height={40} />,
    img1: Service1,
    img2: Service2,
    img3: Service3,
  },
  {
    id: "general-commercial-law",
    title: "General Commercial Law",
    description:
      "Our expertise in general commercial law includes business structuring, corporate governance, and contract management. We provide advisory services for mergers and acquisitions (M&A), ensuring that our clients make informed decisions that align with their business objectives while complying with legal standards.",
    description1: "",
    icon: (
      <Image
        alt="general-commercial-law"
        src={Commercial}
        width={45}
        height={45}
      />
    ),
    img1: Commercial1,
    img2: Commercial2,
    img3: Commercial3,
  },
  {
    id: "contract-vetting-negotiation",
    title: "Contract Vetting & Negotiation",
    description:
      "Our contract vetting and negotiation services ensure that all agreements are precise, enforceable, and aligned with our clients' interests. We meticulously draft and review contracts to minimize risks and foster favorable terms for our clients, facilitating successful business transactions.",
    description1: "",
    icon: (
      <Image
        alt="contract-vetting-negotiation"
        src={Negotiation}
        width={40}
        height={40}
      />
    ),
    img1: Contract1,
    img2: Contract2,
    img3: Contract3,
  },
  {
    id: "arbitration-and-conciliation",
    title: "Arbitration and Conciliation",
    description:
      "We specialize in alternative dispute resolution (ADR) methods, including arbitration and conciliation, to efficiently resolve disputes outside of traditional court settings. Our experienced team aims to achieve swift and effective resolutions, saving clients time and resources.",
    description1: "",
    icon: (
      <Image
        alt="Arbitration and Conciliation"
        src={Arbitration}
        width={57}
        height={57}
      />
    ),
    img1: Conciliation1,
    img2: Conciliation2,
    img3: Conciliation3,
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

export { consultants, partners, services };

