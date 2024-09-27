'use client';
import { Container, Group, Title, Text, Transition } from '@mantine/core';
import classes from './Components.module.css';
import { useEffect, useState } from 'react';

export default function Header() {
  const [switched, setSwitched] = useState(false);
  const [subtitle, setSubtitle] = useState('Lab');
  const allSubtitles = [
    'Lab',
    'Development',
    'Consulting',
    'Data',
    'AI',
    'Tech',
  ];
  useEffect(() => {
    setSwitched(true);
    subtitleTimer();
  }, []);

  let subtitleIndex = 0;

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
        setSubtitle(allSubtitles[0]);
        subtitleIndex = 0;
        setSwitched(true);
      });
      await delay(10000).then(() => {
        rotateSubtitle();
      });
    }
  }

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  return (
    <div className={classes.header}>
      <Container size='lg' pos={'relative'}>
        <Group py={'0.5rem'} justify='space-between'>
          <Title className={classes.logoText} order={3}>
            <Group gap={8}>
              <span className={classes.qodi}>Qodi</span>{' '}
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
          </Title>
          <Text mt={'0.25rem'} size='sm' fw={500} visibleFrom='xs'>
            Software Development | Consulting
          </Text>
        </Group>
      </Container>
    </div>
  );
}
