'use client';
import {
  Container,
  Group,
  Title,
  Text,
  Transition,
  Combobox,
  useCombobox,
  Image,
  ActionIcon,
  Stack,
} from '@mantine/core';
import classes from './Components.module.css';
import { startTransition, useEffect, useState } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale.service';

export default function Header({ locale }: { locale: string }) {
  const [switched, setSwitched] = useState(false);
  const mainSubtitle = 'Software';
  const [subtitle, setSubtitle] = useState(mainSubtitle);
  const allSubtitles = [
    'Development',
    'Solutions',
    'Web',
    'Platforms',
    'Software',
    'R&D',
  ];

  const languageOptions = [
    { language: 'nl', flag: 'images/nl-flag.svg' },
    { language: 'en', flag: 'images/en-flag.svg' },
  ];
  const [selectedLanguage, setSelectedLanguage] = useState({
    language: locale,
    flag: `images/${locale}-flag.svg`,
  });
  useEffect(() => {
    setSwitched(true);
    subtitleTimer();
  }, []);

  let subtitleIndex = 1;

  function subtitleTimer() {
    const timer = setTimeout(async () => {
      await rotateSubtitle();
    }, 5000);
    return () => clearTimeout(timer);
  }

  async function rotateSubtitle() {
    if (subtitleIndex < allSubtitles.length) {
      setSwitched(false);
      await delay(400).then(() => {
        setSubtitle(allSubtitles[subtitleIndex]);
        setSwitched(true);
        subtitleIndex++;
        subtitleTimer();
      });
    } else {
      setSwitched(false);
      await delay(400).then(() => {
        setSubtitle(mainSubtitle);
        subtitleIndex = 0;
        setSwitched(true);
      });
      rotateSubtitle();
    }
  }

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

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

  return (
    <div className={classes.header}>
      <Container size='xl' pos={'relative'}>
        <Group py={'0.5rem'} justify='space-between'>
          <Group gap={0}>
            <Image
              src='/images/qodisoft.svg'
              h={30}
              pr={'0.5rem'}
              mt={'0.2rem'}
            ></Image>
            <Title className={classes.logoText} order={4} mt={'0.15rem'}>
              <Stack gap={0}>
                <Group gap={0}>
                  <span className={classes.qodi}>Qodi</span>
                  <span className={classes.slash}>/</span>
                  <Transition
                    mounted={switched}
                    transition='fade-down'
                    duration={400}
                    timingFunction='ease'
                  >
                    {(styles) => (
                      <div style={styles}>
                        <span className={classes.subtitle}>{subtitle}</span>
                      </div>
                    )}
                  </Transition>
                </Group>
                <span className={classes.slogan}>Oplossingen op maat</span>
              </Stack>
            </Title>
          </Group>
          <Group justify='flex-end'>
            <Text
              mt={'0.3rem'}
              size='sm'
              fw={500}
              visibleFrom='xs'
              className={classes.headerText}
            >
              Software Development | Consulting
            </Text>
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
                  mt={5}
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
          </Group>
        </Group>
      </Container>
    </div>
  );
}
