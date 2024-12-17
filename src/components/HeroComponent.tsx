import {
  Container,
  Title,
  Button,
  Text,
  Transition,
  Stack,
  Image,
  Group,
  Box,
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
                  <Title className={classes.heroTitle}>
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

            <Box>
              <Transition
                mounted={mounted}
                transition='fade-up'
                duration={800}
                timingFunction='ease'
              >
                {(styles) => (
                  <div style={styles}>
                    <div className={classes.content}>
                      <Text my='xl' size='sm' className={classes.heroText}>
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
            </Box>
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
                      visibleFrom='md'
                      justify='flex-end'
                      variant='outline'
                      size='md'
                      className={classes.control}
                      onClick={scrollToBottom}
                    >
                      {t('secondaryButton')}
                    </Button>
                    <Button
                      radius='lg'
                      hiddenFrom='md'
                      justify='flex-end'
                      color='#D2E0EC'
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
                      color='#D2E0EC'
                      size='md'
                      onClick={scrollToBottom}
                    >
                      {t('secondaryButton')}
                    </Button>
                    <Button radius='lg' size='md' onClick={scrollToBottom}>
                      {t('buttonShort')}
                    </Button>
                  </Stack>
                </div>
              )}
            </Transition>
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
                    // w={600}
                    py={0}
                    mt={'xl'}
                    bg='#0e66a0'
                    my={0}
                  />
                </div>
              )}
            </Transition>
          </Stack>
        </div>
      </Container>
    </>
  );
}
