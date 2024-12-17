import { Container, Group, Text } from '@mantine/core';
import styles from './Components.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container size={'xl'} className={styles.footerText}>
        <Group justify='space-between' w={'100%'} align='flex-end'>
          <Text size='xs'>
            © 2024 QodiSoft <br />
            info@qodisoft.com
            <br />
            <br />
            KVK-nummer: 93578776 <br />
            Btw-identificatienummer: NL005029056B30
          </Text>

          <a href='https://storyset.com/technology'>
            {' '}
            <Text size='xs' c={'#9896B9'}>
              Illustrations by Storyset
            </Text>
          </a>
        </Group>
      </Container>
    </div>
  );
}
