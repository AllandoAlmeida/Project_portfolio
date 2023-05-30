import { ProjectCard } from "../../Section/ProjectsSection";
import styles from './styles.module.css';
import { searchRepos } from '../../../components/RenderFunction/requests/requests';
import React, { useEffect, useState } from "react";

export const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const projects = await searchRepos();
      setProjects(projects);
    }

    fetchProjects();
  }, []);

  return (
    <section className={styles.container}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};
