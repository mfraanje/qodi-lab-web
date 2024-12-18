import { Drawer, Burger, Divider, Stack, Button } from '@mantine/core';
import Link from 'next/link';
import LogoComponent from './LogoComponent';
import classes from './Components.module.css';
import { useTranslations } from 'next-intl';
import { useDisclosure } from '@mantine/hooks';

export function SideNavigation() {
  const t = useTranslations('Header');
  const [opened, { toggle }] = useDisclosure();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Burger
        hiddenFrom='sm'
        color={'#D2E0EC'}
        opened={opened}
        onClick={toggle}
        aria-label='Toggle navigation'
      />
      <Drawer.Root
        opened={opened}
        position='right'
        onClose={toggle}
        className={classes.navigationDrawer}
      >
        <Drawer.Content className={classes.navigationDrawer}>
          <Drawer.Header className={classes.navigationDrawer}>
            <Drawer.Title onClick={toggle}>
              <LogoComponent></LogoComponent>
            </Drawer.Title>
            <Burger
              hiddenFrom='sm'
              color={'#D2E0EC'}
              opened={opened}
              onClick={toggle}
              aria-label='Toggle navigation'
            />
          </Drawer.Header>
          <Divider c={'#D2E0EC'}></Divider>
          <Stack onClick={toggle} p={'xl'} gap={'xl'}>
            <Button
              variant='subtle'
              size='xs'
              component={Link}
              href='/'
              color={'#D2E0EC'}
            >
              Home
            </Button>
            {/* <Button
              variant='subtle'
              size='xs'
              component={Link}
              href='/services'
              color={'#D2E0EC'}
            >
              {t('services')}
            </Button> */}
            <Button
              variant='subtle'
              component={Link}
              href='/pricing'
              size='xs'
              color={'#D2E0EC'}
            >
              {t('pricing')}
            </Button>
            <Button
              variant='outline'
              color={'#D2E0EC'}
              size='xs'
              onClick={scrollToBottom}
            >
              Contact
            </Button>
          </Stack>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
