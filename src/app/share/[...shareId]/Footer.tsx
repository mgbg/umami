import { CURRENT_VERSION, HOMEPAGE_URL } from '@/lib/constants';
import styles from './Footer.module.css';
import { useEffect } from "react";

export function Footer() {

   useEffect(() => {
        const sendHeight = () => {
            window.parent.postMessage({ height: document.body.scrollHeight }, "*");
        };

        // Send height when the page loads
        window.addEventListener("load", sendHeight);

        // Optional: Also send height if content updates
        const observer = new MutationObserver(sendHeight);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("load", sendHeight);
            observer.disconnect();
        };
    }, []);
  
  return (
    <footer className={styles.footer}>
{/*       <a href={HOMEPAGE_URL}>
        <b>umami</b> {`v${CURRENT_VERSION}`}
      </a> */}
    </footer>
  );
}

export default Footer;
