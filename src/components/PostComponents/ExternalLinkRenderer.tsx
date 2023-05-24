import styles from "./ExternalLinkRenderer.module.css";

const ExternalLinkRenderer = ({ children, value }: any) => {
  return (
    <a
      className={styles.link}
      href={value.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

export default ExternalLinkRenderer;
