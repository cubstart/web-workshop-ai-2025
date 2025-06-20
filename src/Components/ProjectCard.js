const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="ProjectCard">
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </div>
  );
};

export default ProjectCard;
