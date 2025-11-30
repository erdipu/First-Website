import { ExperienceItem, EducationItem, SkillCategory, CertificationItem } from './types';
import { 
  Server, 
  Cloud, 
  Code, 
  Terminal, 
  ShieldCheck, 
  Database,
  BarChart,
  Cpu
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Deepak Kumar",
  title: "Monitoring Tool Administrator",
  subtitle: "Information Technology Senior Associate",
  location: "Noida, Uttar Pradesh, India",
  email: "deepakkumar721487@gmail.com",
  linkedin: "https://www.linkedin.com/in/deepak-kumar-7a8987152",
  summary: "As an Information Technology Senior Associate at NTT DATA Services, I leverage my B.Tech degree in Computer Science & Engineering and my skills in BMC Helix, BMC TrueSight & OpsRamp to provide IT solutions and support to clients across various industries. I have 3+ years of experience in this role. I also have a passion for Android app development and am always eager to learn new technologies to solve real-world problems. I am a team player, a problem solver, and a customer-oriented professional."
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "NTT DATA North America",
    role: "Information Technology Senior Associate II",
    period: "March 2024 - Present",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Specialized in Monitoring Setup using TrueSight for servers, apps, DBs, networks, and cloud.",
      "Deployed Patrol Agents, set thresholds, and implemented dynamic policies for critical systems.",
      "Performed Real-Time Monitoring to track system health, utilizing historical data for capacity planning.",
      "Managed Incidents by correlating events to find root causes and reducing alert noise.",
      "Automated ITSM ticketing workflows with ServiceNow and BMC Helix.",
      "Built custom Dashboards & Reports for visibility into critical metrics and optimization trends."
    ]
  },
  {
    company: "NTT DATA North America",
    role: "Information Technology Senior Associate I",
    period: "July 2022 - March 2024",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Integrated monitoring with ITSM tools for seamless workflows.",
      "Monitored Patrol Agent health, performed system updates and scaling.",
      "Conducted troubleshooting and root cause analysis for monitoring issues."
    ]
  },
  {
    company: "NTT DATA North America",
    role: "Technical Graduate Trainee",
    period: "May 2022 - July 2022",
    location: "Noida, Uttar Pradesh, India",
    description: "Initial training and onboarding into the IT services ecosystem, focusing on monitoring tools and enterprise infrastructure."
  },
  {
    company: "Tech Mahindra",
    role: "Associate",
    period: "October 2020 - March 2022",
    location: "Noida, Uttar Pradesh, India",
    description: "Gained valuable exposure to different IT domains and platforms, contributing to client support and service delivery."
  },
  {
    company: "Cogent E Services",
    role: "Support Executive",
    period: "March 2020 - September 2020",
    location: "Noida, Uttar Pradesh, India",
    description: "Provided customer support and issue resolution services."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "Guru Gobind Singh Education Society Technical Campus, Bokaro",
    degree: "Bachelor of Technology - BTech, Computer Science Engineering",
    period: "August 2016 - September 2020"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Monitoring & IT Operations",
    skills: ["HPE OpsRamp", "BMC Helix", "BMC TrueSight", "ITIL", "Incident Management", "Patrol Agents"]
  },
  {
    title: "Cloud & Security",
    skills: ["AWS Cloud Practitioner", "Cloud Security & Compliance", "Generative AI", "Infrastructure Monitoring"]
  },
  {
    title: "Development",
    skills: ["Full Stack Java", "Android Development (Java)", "Python for ML", "Automation"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { name: "HPE OpsRamp", issuer: "HPE" },
  { name: "Generative AI Certified" },
  { name: "AWS Cloud Practitioner: Security & Compliance", year: "2020" },
  { name: "AWS Cloud Practitioner: Cloud & Value Proposition", year: "2020" },
  { name: "Full Stack Java Developer" },
  { name: "ITIL 4 Foundation" },
  { name: "Python for Machine Learning" },
  { name: "Complete Android Course - Android 11 with Java", issuer: "Udemy" }
];

export const ICONS = {
  Server,
  Cloud,
  Code,
  Terminal,
  ShieldCheck,
  Database,
  BarChart,
  Cpu
};