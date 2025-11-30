export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  highlights?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CertificationItem {
  name: string;
  issuer?: string;
  year?: string;
}