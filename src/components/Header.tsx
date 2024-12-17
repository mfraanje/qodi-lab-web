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
import classes from './Components.module.css';
import { startTransition, useState } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale.service';
import LogoComponent from './LogoComponent';

export default function Header({ locale }: { locale: string }) {
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
              {/* <Text
                mt={'0.3rem'}
                size='sm'
                fw={500}
                visibleFrom='xs'
                className={classes.headerText}
              >
                Software Development | Consulting
              </Text> */}

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
              {/* <Button variant='subtle' size='xs' c={'blue.9'}>
                Kosten
              </Button>
              <Button variant='subtle' size='xs' c={'blue.9'}>
                Over ons
              </Button> */}
              <Button variant='outline' size='xs' onClick={scrollToBottom}>
                Contact
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}
