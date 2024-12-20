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
} from '@mantine/core';
import Link from 'next/link';
import classes from './Components.module.css';
import { startTransition, useState } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale.service';
import LogoComponent from './LogoComponent';
import { useTranslations } from 'next-intl';
import { SideNavigation } from './SideNavigation';

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations('Header');

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
      <Container size='xl' pos={'relative'} w={'100%'}>
        <Grid py={'0.5rem'} align='center' h={'100%'} justify='center'>
          <Grid.Col span={{ base: 8, sm: 4 }}>
            <LogoComponent></LogoComponent>
          </Grid.Col>

          <Grid.Col span={{ base: 4, sm: 8 }}>
            <Group justify='flex-end' mt={5}>
              <Button
                visibleFrom='sm'
                variant='subtle'
                size='xs'
                component={Link}
                href='/service'
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

              <SideNavigation></SideNavigation>
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
    </div>
  );
}
