export interface Project {
  img: string;
  title: string;
  desc: string;
  techs: string[];
  live: string;
  source: string;
}

export interface Experience {
  role: string;
  duration: string;
  company: string;
  companyURL: string;
  location: string;
  description: string;
  skills: string[];
}

export interface ArticleType {
  title: string;
  content: string;
  url: string;
  tags: string[];
}

export interface ProjectCardProps {
  selectedProject: Project;
  closeModal: () => void;
}
