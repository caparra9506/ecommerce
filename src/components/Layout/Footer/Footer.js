import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="E-Commerce" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button as="a" href="#" circular color="facebook" icon="facebook" style={{ background: 'white' }} />
            <Button as="a" href="#" circular color="twitter" icon="twitter" style={{ background: 'white' }} />
            <Button as="a" href="#" circular color="linkedin" icon="linkedin" style={{ background: 'white' }} />
            <Button as="a" href="#" circular color="youtube" icon="youtube" style={{ background: 'white' }} />
          </div>  
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2024 E-Commerce - All rights reserved</span>
        </div>
      </Container>
    </div>
  );
}
