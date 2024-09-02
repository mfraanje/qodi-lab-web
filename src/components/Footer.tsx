import { Container, Text } from '@mantine/core';
import classes from './Components.module.css';

export default function Footer() {
  return (
    <div
      style={{
        width: '100vw',
        height: '125px',
        background: '#3F3D56',
        position: 'absolute',
        display: 'flex',
        bottom: 0,
      }}
    >
      <Container className={classes.footer} size={'lg'}>
        <Text c='dimmed' size='xs'>
          © 2024 Qodi lab <br />
          info@qodilab.com
          {/* <br />
          KVK-nummer: 93578776 <br />
          Btw-identificatienummer: NL005029056B30 */}
        </Text>
      </Container>
    </div>
  );
}
