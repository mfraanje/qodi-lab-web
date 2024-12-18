'use client';
import {
  Container,
  Group,
  Combobox,
  useCombobox,
  Image,
  ActionIcon,
  Button,
  Grid,
  Burger,
  Drawer,
  Stack,
  Divider,
} from '@mantine/core';
import Link from 'next/link';
import classes from './Components.module.css';
import { startTransition, useState } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale.service';
import LogoComponent from './LogoComponent';
import { useTranslations } from 'next-intl';
import { useDisclosure } from '@mantine/hooks';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('Header');
  const [opened, { toggle }] = useDisclosure();

  const languageOptions = [
    { language: 'nl', flag: 'images/nl-flag.svg' },
    { language: 'en', flag: 'images/en-flag.svg' },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: locale,
    flag: `images/${locale}-flag.svg`,
  });

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  function onChangeLanguage(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  const options = languageOptions.map((item) => (
    <Combobox.Option value={item.language} key={item.language}>
      <Image h={25} w={25} src={item.flag}></Image>
    </Combobox.Option>
  ));

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={classes.header}>
      <Container size='xl' pos={'relative'}>
        <Grid py={'0.5rem'}>
          <Grid.Col span={{ base: 6, sm: 4 }}>
            <LogoComponent></LogoComponent>
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 8 }}>
            <Group justify='flex-end' mt={5}>
              <Button
                visibleFrom='sm'
                variant='subtle'
                size='xs'
                component={Link}
                href='/services'
                c={'#79A3C6'}
              >
                {t('services')}
              </Button>
              <Button
                visibleFrom='sm'
                variant='subtle'
                component={Link}
                href='/pricing'
                size='xs'
                c={'#79A3C6'}
              >
                {t('pricing')}
              </Button>

              <Combobox
                store={combobox}
                width={55}
                position='bottom'
                withArrow
                onOptionSubmit={(val) => {
                  setSelectedLanguage({
                    language: val,
                    flag: `images/${val}-flag.svg`,
                  });
                  onChangeLanguage(val);
                  combobox.closeDropdown();
                }}
              >
                <Combobox.Target>
                  <ActionIcon
                    variant='subtle'
                    onClick={() => combobox.toggleDropdown()}
                  >
                    <Image src={selectedLanguage.flag}></Image>
                  </ActionIcon>
                </Combobox.Target>

                <Combobox.Dropdown>
                  <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
              </Combobox>

              <Burger
                hiddenFrom='sm'
                color={'#D2E0EC'}
                opened={opened}
                onClick={toggle}
                aria-label='Toggle navigation'
              />
              <Button
                visibleFrom='sm'
                variant='outline'
                color={'#D2E0EC'}
                size='xs'
                onClick={scrollToBottom}
              >
                Contact
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
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
    </div>
  );
}
