import {
  Container,
  Title,
  Button,
  Text,
  rem,
  TextInput,
  Grid,
  Paper,
  Transition,
  Stack,
} from '@mantine/core';
import classes from './Components.module.css';
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useEffect, useState } from 'react';
import { sendInterestEmail } from '@/services/mail.service';
import { useTranslations } from 'next-intl';

export function HeroComponent() {
  const t = useTranslations('HeroPage');
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;
  const [emailSent, setEmailSent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Geen valide email'),
    },
  });

  const handleSubmit = async (email: string) => {
    console.log(email);
    await sendInterestEmail(email);
    setEmailSent(true);
  };

  return (
    <>
      <Container size='lg' pos={'relative'} mb={100} className={classes.hero}>
        <div className={classes.inner}>
          {/* <Text c='violet.9' mt='md' fw={700} size='xs'>
              Qodi Lab - Development
            </Text> */}
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
                    <Text c='#3F3D56' my='xl' size='sm'>
                      {t('description')} <br />
                      <br />
                      <strong className={classes.highlight}>
                        {t('cta.0')}{' '}
                      </strong>
                      {t('cta.1')}
                    </Text>
                  </div>

                  <Transition
                    mounted={emailSent}
                    transition='fade-left'
                    duration={400}
                    timingFunction='ease'
                  >
                    {(styles) => (
                      <Paper
                        style={styles}
                        p={'xs'}
                        px={'lg'}
                        mt={'xl'}
                        bg={'#51A3A3'}
                        radius={'md'}
                        w={{ sm: '100%', md: '50%' }}
                      >
                        <Text size='xs' fw={700} mb={1} c={'white'}>
                          {t('thanksTitle')}
                        </Text>
                        <Text size={'xs'} c={'white'}>
                          {t('thanksDescription')}
                        </Text>
                      </Paper>
                    )}
                  </Transition>
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
                  {!emailSent && (
                    <>
                      <form
                        onSubmit={form.onSubmit((values) =>
                          handleSubmit(values.email)
                        )}
                      >
                        <Grid mt={'1rem'}>
                          <Grid.Col span={{ base: 12, md: 8 }}>
                            <TextInput
                              leftSectionPointerEvents='none'
                              leftSection={icon}
                              placeholder='Email'
                              size='sm'
                              type='email'
                              name='email'
                              id='email'
                              required
                              autoComplete='email'
                              key={form.key('email')}
                              {...form.getInputProps('email')}
                            />
                          </Grid.Col>
                          <Grid.Col span={2}>
                            <Button
                              radius='sm'
                              size='sm'
                              className={classes.control}
                              type='submit'
                            >
                              Vraag aan
                            </Button>
                          </Grid.Col>
                        </Grid>
                      </form>
                    </>
                  )}
                </div>
              )}
            </Transition>
          </Stack>
        </div>
      </Container>
    </>
  );
}
