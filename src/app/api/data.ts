import type { ImageLoaderProps, StaticImageData } from "next/image";
import testimonial1 from "../../../public/desktop/testimonial-1.webp";
import testimonial2 from "../../../public/desktop/testimonial-2.webp";
import testimonial3 from "../../../public/desktop/testimonial-3.webp";
import testimonial4 from "../../../public/desktop/testimonial-4.webp";
import treatment1 from "../../../public/desktop/treatment-1.webp";
import herni1 from "../../../public/herniatedTreatment.png";
import herniTesti1 from "../../../public/herniTest1.png";
import herniTesti2 from "../../../public/herniTesti2.png";
import herniTesti3 from "../../../public/herniTesti3.png";
import backPain2 from "../../../public/backpain2.png";
import backPain3 from "../../../public/backpain3.png";
import backTesti1 from "../../../public/backTest1.png";
import backTesti2 from "../../../public/backTesti2.png";
import backTesti3 from "../../../public/backTesti3.png";
import treatment2 from "../../../public/desktop/treatment-2.webp";
import treatment3 from "../../../public/desktop/treatment-3.webp";
import kneeTestimonial1 from "../../../public/desktop/kneepain/knee-testimonial-1.webp";
import kneeTestimonial2 from "../../../public/desktop/kneepain/knee-testimonial-2.webp";
import kneeTestimonial3 from "../../../public/desktop/kneepain/knee-testimonial-3.webp";
import kneeTreatment1 from "../../../public/desktop/kneepain/knee-treatment-1.webp";
import kneeTreatment2 from "../../../public/desktop/kneepain/knee-treatment-2.webp";
import kneeTreatment3 from "../../../public/desktop/kneepain/knee-treatment-3.webp";
import kneeTreatment4 from "../../../public/desktop/kneepain/knee-treatment-4.webp";
import kneeTreatment5 from "../../../public/desktop/kneepain/knee-treatment-5.webp";
import doc1Mob from "../../../public/mobile/doc1-mob.webp";
import doc2Mob from "../../../public/mobile/doc2-mob.webp";
import doc3Mob from "../../../public/mobile/doc3-mob.webp";
import doc1 from "../../../public/desktop/doc-1.webp";
import doc2 from "../../../public/desktop/doc-2.webp";
import doc3 from "../../../public/desktop/doc-3.webp";
import painSpecialist from "../../../public/Pain-Specialists.svg";
import physiotherapists from "../../../public/Physiotherapists.svg";
import psychologists from "../../../public/Psychologists.svg";
import nutritionists from "../../../public/Nutritionists.svg";
import painSpecialistMob from "../../../public/thankyou1.svg";
import physiotherapistsMob from "../../../public/thankyou2.svg";
import psychologistsMob from "../../../public/thankyou3.svg";
import nutritionistsMob from "../../../public/thankyou4.svg";

// Type definitions
export type Review = {
  id: number;
  name: string;
  reviewText: string;
  postedWhen: string;
  img: StaticImageData;
};

export type faqData = {
  title: string;
  desc: string;
};

export type TreatmentData = {
  id: number;
  name: string;
  img: StaticImageData;
  process: string;
  benefits: string[];
};

export type Link = {
  subTitle: string;
  url: string;
};

export type FooterLinkSection = {
  id: number;
  title: string;
  links: Link[];
};

export type Doctor = {
  id: number;
  img: StaticImageData;
  name: string;
  field: string;
  degree: string;
  experience: string;
};

export type ThankYou = {
  img: StaticImageData;
  mobImg: StaticImageData;
  title: string;
};

export type Treatment = {
  heading: string;
  para: string;
};

// thankyou card data
export const ThankYouCardData: ThankYou[] = [
  { img: painSpecialist, mobImg: painSpecialistMob, title: "Pain Specialist" },
  {
    img: physiotherapists,
    mobImg: physiotherapistsMob,
    title: "Physiotherapists",
  },
  { img: psychologists, mobImg: psychologistsMob, title: "Psychologists" },
  { img: nutritionists, mobImg: nutritionistsMob, title: "Nutritionists" },
];

// Footer Links
export const FooterLinks: FooterLinkSection[] = [
  {
    id: 1,
    title: "Quick links",
    links: [
      {
        subTitle: "Privacy Policy",
        url: "https://www.nivaancare.com/privacy-policy/",
      },
      {
        subTitle: "Terms of Use",
        url: "https://www.nivaancare.com/terms-and-conditions/",
      },
    ],
  },
  {
    id: 2,
    title: "Clinic locations",
    links: [
      {
        subTitle: "East-Delhi",
        url: "https://maps.app.goo.gl/fmNjuaiuNwNQxWbS7",
      },
      { subTitle: "West-Delhi", url: "https://g.co/kgs/zYFLo96" },
      {
        subTitle: "North-Delhi",
        url: "https://maps.app.goo.gl/3Dg5FdmaM87GsS2UA",
      },
      {
        subTitle: "South-Delhi",
        url: "https://maps.app.goo.gl/ShnPReST8DKN9gRs5",
      },
    ],
  },
  {
    id: 3,
    title: "About Us",
    links: [
      { subTitle: "Blogs", url: "https://www.nivaancare.com/blog/" },
      {
        subTitle: "How It Works",
        url: "https://www.nivaancare.com/how-it-works/",
      },
    ],
  },
  {
    id: 4,
    title: "Contact Us",
    links: [
      { subTitle: "care@nivaancare.com", url: "mailto:care@nivaancare.com" },
      { subTitle: "+91-73 5871 2483", url: "tel:+917358712483" },
    ],
  },
];

// Herniated Data
export const herniatedPatientReviewData: Review[] = [
  {
    id: 1,
    name: "Naresh Shukla",
    reviewText:
      "“I got relief from my herniated disc pain without surgery with Nivaan’s RFA procedure. The procedure was simple yet changed my life forever. Thanks, Nivaan for eliminating pain from my life.”",
    postedWhen: "2 weeks ago",
    img: herniTesti1,
  },
  {
    id: 2,
    name: "Pramod",
    reviewText:
      "“I finally got relief from my back pain with Nivaan’s Nerve Block procedure. I still cannot believe I got rid of herniated disc pain without any surgery, thanks Nivaan.”",
    postedWhen: "3 weeks ago",
    img: herniTesti2,
  },
  {
    id: 3,
    name: "Sarita",
    reviewText:
      "”Surgery felt like the only option for my herniated disc.When I heard about Nivaan's non-surgical treatment I decided to try it. Their RFA procedure really helped me with the pain.”",
    postedWhen: "5 weeks ago",
    img: herniTesti3,
  },
];

export const backPainReview: Review[] = [
  {
    id: 1,
    name: "Surendra",
    reviewText:
      "“After enduring years of back pain, Nivaan's Nerve Block gave me my life back. No surgery, just care & comfort”",
    postedWhen: "2 weeks ago",
    img: backTesti1,
  },
  {
    id: 2,
    name: "Ajeet",
    reviewText:
      "“My chronic back pain resolved with Nivaan’s RFA procedure. Surgery-free and absolutely life-changing”",
    postedWhen: "3 weeks ago",
    img: backTesti2,
  },
  {
    id: 3,
    name: "Vivek",
    reviewText:
      "”Back pain crippled my daily life until Nivaan’s intervention. Their treatment strategy avoided surgery and restored my mobility.”",
    postedWhen: "5 weeks ago",
    img: backTesti3,
  },
];

export const backPainHeading: Treatment = {
  heading: "Back Pain Treatments at Nivaan",
  para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
};

export const herniatedFaqData: faqData[] = [
  {
    title: "What is Herniated Disc?",
    desc: "Disk herniation is most often the result of a gradual, aging-related wear and tear called disk degeneration. As people age, the disks become less flexible and more prone to tearing or rupturing with even a minor strain or twist.",
  },
  {
    title: "What are the primary causes of Herniated Disc?",
    desc: "Primary causes for Herniated Disc include weight gain, ageing, joint injuries, medical disorders that affect joints, and genetic factors.",
  },
  {
    title:
      "Who is involved in the diagnosis and treatment processes at Nivaan?",
    desc: "A pain specialist, physiotherapist, nutritionist, mindset counsellor, and care manager are involved in creating a treatment plan after proper patient evaluation and discussion among the team.",
  },
  {
    title: "What is the best way to get instant Herniated Disc pain relief?",
    desc: "If medical management is not working, pain specialist doctors suggest a nerve block, radiofrequency ablation & pain Injections. Once administered, these procedures are performed under local anaesthesia and immediately start relieving pain.",
  },
  {
    title:
      "What are the various Herniated Disc treatments available at Nivaan?",
    desc: "Herniated Disc can be managed through lifestyle changes, physical therapy, medicines, and various non-invasive procedures. At Nivaan, a pain specialist doctor and physiotherapist understand the patient’s chief complaint, and medical history and then develop a comprehensive, tailor-made Herniated Disc treatment plan.",
  },
  {
    title:
      "What are the advantages of Herniated Disc pain treatment procedures?",
    desc: "Herniated Disc treatment procedures are safe and come with minimal to no side effects. Additionally, one can experience pain relief from these procedures almost immediately. These procedures are performed by trained pain specialists under local anaesthesia with x-ray/ultrasound guidance in a clean, sterile environment.",
  },
  {
    title: "How long does a Herniated Disc pain treatment procedure take?",
    desc: "A Herniated Disc treatment procedure can take anywhere from 30-40 minutes, depending on the type of procedure.",
  },
  {
    title: "Does insurance cover Herniated Disc treatment?",
    desc: "Nivaan works with various providers to have most of its treatment procedures covered under insurance.",
  },
  {
    title: "When can one join work after the treatment procedure?",
    desc: "Since Herniated Disc pain treatments are daycare procedures, one can join work the next day. However, the doctor may advise taking it lightly for a few days for proper healing.",
  },
];

export const herniatedHeading: Treatment = {
  heading: "Herniated Disc Treatments at Nivaan",
  para: "We use the most advanced pain-relief technologies to ensure  maximum pain relief",
};

export const herniatedTreatmentAtNivan: TreatmentData[] = [
  {
    id: 1,
    name: "Endoscopic Discectomy",
    img: herni1,
    process:
      "Doctor makes a key-hole incision to remove herniated disc material with the help of an endoscope.",
    benefits: [
      "Much safer than other surgeries",
      "Small incision",
      "Minimal scar tissue formation",
      "No damage to bones and muscles",
    ],
  },
  {
    id: 2,
    name: "Nerve Blocks",
    img: treatment1,
    process:
      "A numbing medication is injected near nerves to block the pain signals from being sent to the brain. ",
    benefits: [
      "Provides immediate & long-term relief",
      "Reduces inflammation",
      "Helps with additional medical care",
    ],
  },
  {
    id: 3,
    name: "Radiofrequency Ablation",
    img: treatment2,
    process: "Radiofrequency waves are used to eliminate pain sensations.",
    benefits: [
      "Minimal recovery time",
      "Instant pain relief",
      "Reduces reliance on painkillers",
    ],
  },
];

export const backPainTreatmentAtNivaan: TreatmentData[] = [
  {
    id: 1,
    name: "Lumbar Radiofrequency Ablation",
    img: treatment2,
    process:
      "Doctor uses Radiofrequency waves to eliminate pain sensations in the nerves.",
    benefits: ["Minimises inflammation ", "Quick recovery time"],
  },
  {
    id: 2,
    name: "Caudal Epidural Injection",
    img: backPain2,
    process:
      "Doctor injects a specific steroid/numbing medicine in the epidural space to reduce pain and inflammation. ",
    benefits: [
      "Daycare procedure",
      "Provides instant pain relief",
      "Increases mobility",
      "Reduces reliance on painkillers",
    ],
  },
  {
    id: 3,
    name: "Lumbar Transforaminal Nerve Block",
    img: backPain3,
    process:
      "Doctor injects anaesthesia and steroids near lumbar nerves to block the pain signals from being sent to the brain.",
    benefits: [
      "Minimally invasive",
      "Long-term pain relief",
      "No scars or stitches",
      "Helps identify the source of pain",
    ],
  },
];

// Knee Pain Data
export const kneePainPatientReviewData: Review[] = [
  {
    id: 1,
    name: "Kamal",
    reviewText:
      '“After months of chronic knee pain, Nivaan’s RFA procedure provided relief without surgery. Grateful for my new pain-free life"',
    postedWhen: "1 week ago",
    img: kneeTestimonial1,
  },
  {
    id: 2,
    name: "Prakhar",
    reviewText:
      '"Years of knee pain finally healed thanks to Nivaan’s intra-articular injection. No surgery required, simply amazing!"',
    postedWhen: "3 weeks ago",
    img: kneeTestimonial2,
  },
  {
    id: 3,
    name: "Rajeev",
    reviewText:
      '"I suffered from severe knee pain until Nivaan’s Nerve Block procedure helped me get relief without surgery. Thankful every day!"',
    postedWhen: "4 weeks ago",
    img: kneeTestimonial3,
  },
];

export const kneePainFaqData: faqData[] = [
  {
    title: "Why choose Nivaan over other hospitals for knee pain treatment?",
    desc: "Nivaan stands out for its multidisciplinary approach, combining advanced non-surgical methods, personalised care, and a team of experienced specialists. This holistic approach ensures comprehensive treatment with a focus on not just relieving symptoms but also addressing the root causes of knee pain.",
  },
  {
    title: "Why should I not opt for surgery for knee pain?",
    desc: "Non-surgical treatments for knee pain often provide effective relief with fewer risks and a quicker recovery compared to surgery. They are especially beneficial for those seeking alternatives to invasive procedures and for conditions where surgery is not a necessity. Nivaan focuses on these less invasive options to ensure patient safety and a quicker return to daily activities.",
  },
  {
    title: "Does insurance cover knee pain treatment?",
    desc: "Nivaan collaborates with various insurance providers, and most knee pain treatment procedures are covered under insurance plans.",
  },
  {
    title: "When can one return to work after the treatment procedure?",
    desc: "As most knee pain treatments at Nivaan are daycare procedures, patients can usually return to work the following day. However, it is advised to avoid strenuous activities for a few days for optimal healing.",
  },
  {
    title: "How long does a knee pain treatment procedure take?",
    desc: "The duration of a knee pain treatment procedure at Nivaan typically ranges from 30-60 minutes, depending on the specific treatment being administered.",
  },
  {
    title:
      "Who is involved in the diagnosis and treatment processes at Nivaan?",
    desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
  },
  {
    title:
      "What are the advantages of non-invasive knee pain treatment procedures?",
    desc: "Knee pain treatment procedures at Nivaan are safe with minimal to no side effects. Patients often experience immediate pain relief. These procedures are conducted by skilled specialists in a sterile environment with advanced guidance techniques.",
  },
  {
    title: "Why should one not delay knee pain treatment?",
    desc: "One should avoid delaying knee pain treatment to avoid further damage to the bones, for a faster, more effective recovery, to prevent complications and disability, and to improve the overall quality of life.",
  },
];

export const kneePainTreatmentAtNivan: TreatmentData[] = [
  {
    id: 1,
    name: "Radiofrequency Ablation",
    img: kneeTreatment1,
    process:
      "Doctor uses Radiofrequency waves to eliminate pain sensations in the nerves.",
    benefits: ["Minimises inflammation ", "Quick recovery time"],
  },
  {
    id: 2,
    name: "Genicular Nerve Block",
    img: kneeTreatment2,
    process:
      "Doctor injects anaesthesia and steroids near Genicular Nerves to block the pain signals from being sent to the brain.",
    benefits: ["No scars or stitches", "Helps identify the source of pain"],
  },
  {
    id: 3,
    name: "Ozone Injection",
    img: kneeTreatment3,
    process:
      "Doctor injects Ozone gas into the knee joint. This helps in reducing inflammation and pain.",
    benefits: [
      "Quick Daycare Procedure",
      "Mobility Improvement",
      "Promotes Long Term Healing",
      "Reduces reliance on painkillers",
    ],
  },
  {
    id: 4,
    name: "Intra Articular Injection",
    img: kneeTreatment4,
    process:
      "Doctor injects corticosteroids directly into the joint space. This method targets the source of knee pain effectively and efficiently.",
    benefits: ["Targeted Pain Relief", "Reduces Inflammation"],
  },
  {
    id: 5,
    name: "Prolotherapy",
    img: kneeTreatment5,
    process:
      "Doctor injects a saline/dextrose solution into damaged knee tendons, joints, ligaments, or adjacent joint spaces.",
    benefits: ["Promotes tissue repair and growth", "Long-term pain relief"],
  },
];

export const kneePainTreatmentAtNivanHeading: Treatment = {
  heading: "Knee Pain Treatments at Nivaan",
  para: "We use the most advanced, scientifically proven technologies to ensure pain relief",
};

// Osteoarthritis Data
export const osteoarthritisPatientReviewData: Review[] = [
  {
    id: 1,
    name: "Shushma",
    reviewText:
      "“I got relief from osteoarthritis pain without surgery with Nivaan’s RFA procedure. The procedure was quick but had a great impact on my life. Thanks Nivaan.”",
    postedWhen: "2 weeks ago",
    img: testimonial1,
  },
  {
    id: 2,
    name: "Renu Kaur",
    reviewText:
      "“My osteoarthritis pain was finally gone. Opting for Nivaan’s Nerve Block procedure was the best decision of my life. I got rid of that pain that too without surgeries. Thanks Nivaan”",
    postedWhen: "3 weeks ago",
    img: testimonial2,
  },
  {
    id: 3,
    name: "Amit Sharma",
    reviewText:
      "After years of struggling with osteoarthritis in my knees, I found relief with Nivaan's Nerve Block. A treatment that changed my life, allowing me to walk & move freely again.",
    postedWhen: "5 weeks ago",
    img: testimonial3,
  },
  {
    id: 4,
    name: "Deepa Joshi",
    reviewText:
      "“When I heard about Nivaan's non-surgical treatment for osteoarthritis, I was skeptical but desperate for a solution. But Nivaan's RFA procedure turned out to be a life-altering choice!",
    postedWhen: "7 weeks ago",
    img: testimonial4,
  },
];

export const osteoarthritisFaqData: faqData[] = [
  {
    title: "What is the Osteoarthritis?",
    desc: "Osteoarthritis is a degenerative joint disease that is characterized by the breakdown of joint cartilage and the underlying bones, causing joint pain with swelling, reduced mobility, and joint stiffness.",
  },
  {
    title: "What are the primary causes of Osteoarthritis?",
    desc: "Primary causes for Osteoarthritis include joint overuse, weight gain, ageing, joint injuries, medical disorders that affect joints, and genetic factors.",
  },
  {
    title:
      "Who is involved in the diagnosis and treatment processes at Nivaan?",
    desc: "A pain specialist, physiotherapist, nutritionist, mindset counsellor, and care manager are involved in creating a treatment plan after proper patient evaluation and discussion among the team.",
  },
  {
    title: "What is the best way to get instant Osteoarthritis pain relief?",
    desc: "If medical management is not working, pain specialist doctors suggest a nerve block, radiofrequency ablation & pain Injections. Once administered, these procedures are performed under local anaesthesia and immediately start relieving pain.",
  },
  {
    title:
      "What are the various Osteoarthritis treatments available at Nivaan?",
    desc: "Osteoarthritis can be managed through lifestyle changes, physical therapy, medicines, and various non-invasive procedures. At Nivaan, a pain specialist doctor and physiotherapist understand the patient’s chief complaint, and medical history and then develop a comprehensive, tailor-made Osteoarthritis treatment plan.",
  },
  {
    title:
      "What are the advantages of Osteoarthritis pain treatment procedures?",
    desc: "Osteoarthritis treatment procedures are safe and come with minimal to no side effects. Additionally, one can experience pain relief from these procedures almost immediately. These procedures are performed by trained pain specialists under local anaesthesia with x-ray/ultrasound guidance in a clean, sterile environment.",
  },
  {
    title: "How long does an Osteoarthritis pain treatment procedure take?",
    desc: "An Osteoarthritis treatment procedure can take anywhere from 30-40 minutes, depending on the type of procedure.",
  },
  {
    title: "Does insurance cover Osteoarthritis treatment?",
    desc: "Nivaan works with various providers to have most of its treatment procedures covered under insurance.",
  },
  {
    title: "When can one join work after the treatment procedure?",
    desc: "Since Osteoarthritis pain treatments are daycare procedures, one can join work the next day. However, the doctor may advise taking it lightly for a few days for proper healing.",
  },
];

export const osteooarthritisTreatmentAtNivan: TreatmentData[] = [
  {
    id: 1,
    name: "Nerve Blocks",
    img: treatment1,
    process:
      "A numbing medication is injected near nerves to block the pain signals from being sent to the brain.",
    benefits: [
      "Provides immediate & long-term relief",
      "Reduces inflammation",
      "Helps with additional medical care",
    ],
  },
  {
    id: 2,
    name: "Radiofrequency Ablation",
    img: treatment2,
    process: "Radiofrequency waves are used to eliminate pain sensations.",
    benefits: [
      "Minimal recovery time",
      "Instant pain relief",
      "Reduces reliance on painkillers",
    ],
  },
  {
    id: 3,
    name: "Pain Injections",
    img: treatment3,
    process:
      "Specific steroid/numbing medicine is injected into joints, muscles, or a soft tissue site close to a joint.",
    benefits: [
      "Provides instant pain relief",
      "Increases mobility",
      "Reduces reliance on painkillers",
    ],
  },
];

export const osteooarthritisTreatmentAtNivanHeading: Treatment = {
  heading: "Osteoarthritis Treatments at Nivaan",
  para: "We use the most advanced pain-relief technologies to ensure  maximum pain relief",
};

// Our Care Expert Data

export const doctorData: Doctor[] = [
  {
    id: 1,
    img: doc1,
    name: "Dr. Rohit Gulati ",
    field: "Pain Management Specialist",
    degree: "MBBS, DA, DNB",
    experience: "18+",
  },
  {
    id: 2,
    img: doc2,
    name: "Dr. Naveen Talwar",
    field: "Orthopaedic Surgeon,",
    degree: "MBBS, MS – Orthopaedics",
    experience: "32+",
  },
  {
    id: 3,
    img: doc3,
    name: "Dr. Garima Gupta",
    field: "Pain Management Specialist",
    degree: "MBBS, DA, FIPM",
    experience: "15+",
  },
];

const doctorDataMob: Doctor[] = [
  {
    id: 1,
    img: doc1Mob,
    name: "Dr. Naveen Talwar",
    field: "Orthopaedic Surgeon,",
    degree: "MBBS, MS – Orthopaedics",
    experience: "32+",
  },
  {
    id: 2,
    img: doc2Mob,
    name: "Dr. Rohit Gulati ",
    field: "Pain Management Specialist",
    degree: "MBBS, DA, DNB",
    experience: "18+",
  },
  {
    id: 3,
    img: doc3Mob,
    name: "Dr. Garima Gupta",
    field: "Pain Management Specialist",
    degree: "MBBS, DA, FIPM",
    experience: "15+",
  },
];

export const backPainFaqData = [
  {
    title: "Why choose Nivaan over other hospitals for Back pain treatment?",
    desc: "Nivaan stands out for its multidisciplinary approach, combining advanced non-surgical methods, personalised care, and a team of experienced specialists. This holistic approach ensures comprehensive treatment with a focus on not just relieving symptoms but also addressing the root causes of Back pain.",
  },
  {
    title: "Why should I not opt for surgery for Back pain?",
    desc: "Non-surgical treatments for Back pain often provide effective relief with fewer risks and a quicker recovery compared to surgery. They are especially beneficial for those seeking alternatives to invasive procedures and for conditions where surgery is not a necessity. Nivaan focuses on these less invasive options to ensure patient safety and a quicker return to daily activities.",
  },
  {
    title: "Does insurance cover Back pain treatment?",
    desc: "Nivaan collaborates with various insurance providers, and most Back pain treatment procedures are covered under insurance plans.",
  },
  {
    title: "When can one return to work after the treatment procedure?",
    desc: "As most Back pain treatments at Nivaan are daycare procedures, patients can usually return to work the following day. However, it is advised to avoid strenuous activities for a few days for optimal healing.",
  },
  {
    title: "How long does a Back pain treatment procedure take?",
    desc: "The duration of a Back pain treatment procedure at Nivaan typically ranges from 30-60 minutes, depending on the specific treatment being administered.",
  },
  {
    title:
      "Who is involved in the diagnosis and treatment processes at Nivaan?",
    desc: "Nivaan has a team of pain management specialists, physiotherapists, nutritionists, counsellors, and care managers, who help with the diagnosis and treatment processes. They collaboratively create a personalised treatment plan after thoroughly evaluating the patient.",
  },
  {
    title:
      "What are the advantages of non-invasive Back pain treatment procedures?",
    desc: "Back pain treatment procedures at Nivaan are safe with minimal to no side effects. Patients often experience immediate pain relief. These procedures are conducted by skilled specialists in a sterile environment with advanced guidance techniques.",
  },
  {
    title: "Why should one not delay Back pain treatment?",
    desc: "One should avoid delaying Back pain treatment to avoid further damage to the bones, for a faster, more effective recovery, to prevent complications and disability, and to improve the overall quality of life.",
  },
];
