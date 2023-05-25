import ContentLoader from "react-content-loader";
import styles from "@/styles/Section.module.css";

export default function Loading(props: any) {
  return (
    <section className={`${styles.container} ${styles.section}`}>
      <ContentLoader
        speed={2}
        foregroundColor="rgba(97, 123, 255, 0.8)"
        backgroundColor="rgba(77, 98, 205, 0.6)"
        height="1000"
        width="100%"
        viewBox="0 0 100% 1000"
      >
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="600" />
        <rect x="0" y="615" rx="5" ry="5" width="80%" height="40" />
        <rect x="0" y="670" rx="5" ry="5" width="95%" height="20" />
        <rect x="0" y="700" rx="5" ry="5" width="97%" height="20" />
        <rect x="0" y="730" rx="5" ry="5" width="93%" height="20" />
        <rect x="0" y="760" rx="5" ry="5" width="95%" height="20" />
        <rect x="0" y="790" rx="5" ry="5" width="98%" height="20" />
        <rect x="0" y="820" rx="5" ry="5" width="96%" height="20" />
        <rect x="0" y="850" rx="5" ry="5" width="97%" height="20" />
        <rect x="0" y="880" rx="5" ry="5" width="95%" height="20" />
        <rect x="0" y="910" rx="5" ry="5" width="94%" height="20" />
        <rect x="0" y="940" rx="5" ry="5" width="96%" height="20" />
        <rect x="0" y="970" rx="5" ry="5" width="85%" height="20" />
        Test
      </ContentLoader>
    </section>
  );
}
