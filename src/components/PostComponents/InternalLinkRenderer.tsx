import Link from "next/link";
import styles from "./InternalLinkRenderer.module.css";

const InternalLinkRenderer = ({ children, value }: any) => {
  return (
    <Link className={styles.link} href={value.url}>
      {children}
    </Link>
  );
};

export default InternalLinkRenderer;
