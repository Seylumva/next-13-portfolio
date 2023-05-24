import styles from "./ExternalLinkRenderer.module.css";
import { BiLinkExternal } from "react-icons/bi";

const ExternalLinkRenderer = ({ children, value }: any) => {
  return (
    <a
      className={styles.link}
      href={value.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
      <BiLinkExternal />
    </a>
  );
};

export default ExternalLinkRenderer;
