import {
  Container,
  Title,
  Button,
  Text,
  Transition,
  Stack,
  Image,
  Group,
} from '@mantine/core';
import classes from './Components.module.css';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export function HeroComponent() {
  const t = useTranslations('HeroPage');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Container size='xl' pos={'relative'} mb={80} className={classes.hero}>
        <div className={classes.inner}>
          <Stack gap={0}>
            <Transition
              mounted={mounted}
              transition='fade-down'
              duration={400}
              timingFunction='ease'
            >
              {(styles) => (
                <div style={styles}>
                  <Title className={classes.title}>
                    {t('title.0')}
                    <br />
                    <span className={classes.highlight}>
                      {t('title.1')}
                    </span>{' '}
                    {t('title.2')}
                  </Title>
                </div>
              )}
            </Transition>
            <Transition
              mounted={mounted}
              transition='fade-up'
              duration={800}
              timingFunction='ease'
            >
              {(styles) => (
                <div style={styles}>
                  <div className={classes.content}>
                    <Text c='#000000' my='xl' size='sm'>
                      {t('description')} <br />
                      <br />
                      <strong className={classes.highlight}>
                        {t('cta.0')}{' '}
                      </strong>
                      {t('cta.1')}
                    </Text>
                  </div>
                </div>
              )}
            </Transition>
            <Transition
              mounted={mounted}
              transition='fade-up'
              duration={800}
              timingFunction='ease'
            >
              {(styles) => (
                <div style={styles}>
                  <Group mt={'md'} visibleFrom='sm'>
                    <Button
                      radius='lg'
                      justify='flex-end'
                      variant='outline'
                      size='md'
                      className={classes.control}
                      onClick={scrollToBottom}
                    >
                      {t('secondaryButton')}
                    </Button>
                    <Button
                      visibleFrom='sm'
                      radius='lg'
                      justify='flex-end'
                      size='md'
                      className={classes.control}
                      onClick={scrollToBottom}
                    >
                      {t('button')}
                    </Button>
                  </Group>
                  <Stack hiddenFrom='sm'>
                    <Button
                      radius='lg'
                      variant='outline'
                      size='md'
                      onClick={scrollToBottom}
                    >
                      {t('secondaryButton')}
                    </Button>
                    <Button
                      hiddenFrom='sm'
                      radius='lg'
                      size='md'
                      onClick={scrollToBottom}
                    >
                      {t('buttonShort')}
                    </Button>
                  </Stack>
                </div>
              )}
            </Transition>
          </Stack>
        </div>
        <Transition
          mounted={mounted}
          transition='fade-left'
          duration={800}
          enterDelay={400}
          timingFunction='ease'
        >
          {(styles) => (
            <div style={styles}>
              <Image
                hiddenFrom='sm'
                src='images/innovation-animate.svg'
                maw={400}
                py={0}
                mt={'xl'}
                my={0}
              />
            </div>
          )}
        </Transition>
      </Container>
    </>
  );
}
