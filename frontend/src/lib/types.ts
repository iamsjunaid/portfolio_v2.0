export interface Project {
  img: string;
  title: string;
  desc: string;
  techs: string[];
  live: string;
  source: string;
}

export interface ProjectCardProps {
  selectedProject: Project;
  closeModal: () => void;
}
