import { motion } from "framer-motion"

const ProjectList01 = ({ project }) => {
  return (
    <motion.div 
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 0.95 }}
    >
      <a href={project.link} target="_blank" rel="noreferrer">
        <img src={project.imgUrl} alt="" />
        <h2>{project.name}</h2>
        <p>{project.cbt}</p>
        <p>{project.skill}</p>
        <p>{project.date}</p>
      </a>
    </motion.div>
  )
}

export default ProjectList01