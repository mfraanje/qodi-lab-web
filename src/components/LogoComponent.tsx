import { Image, Group, Title, Stack, Transition, Anchor } from '@mantine/core';
import classes from './Components.module.css';
import { useEffect, useState } from 'react';
export default function LogoComponent() {
  const [switched, setSwitched] = useState(false);
  const mainSubtitle = 'Software';
  const [subtitle, setSubtitle] = useState(mainSubtitle);
  const allSubtitles = [
    'Development',
    'Solutions',
    'Consulting',
    'Web',
    'Platforms',
    'Software',
    'R&D',
    'Data',
  ];

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Anchor href={'/'}>
      <Group gap={0} onClick={scrollToTop} className={classes.logo}>
        <Image
          src='images/qodisoft-blue.svg'
          mah={30}
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
    </Anchor>
  );
}
