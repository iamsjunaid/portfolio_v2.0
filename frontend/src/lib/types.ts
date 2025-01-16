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
}

export interface ProjectCardProps {
  selectedProject: Project;
  closeModal: () => void;
}
