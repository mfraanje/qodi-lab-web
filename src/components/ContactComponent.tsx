import {
  Title,
  Button,
  Text,
  rem,
  TextInput,
  Paper,
  Transition,
  Stack,
  Textarea,
  Card,
  Divider,
  Flex,
} from '@mantine/core';
import classes from './Components.module.css';
import { IconAt, IconBulb, IconPhone, IconUser } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { sendInterestEmail } from '@/services/mail.service';
import { useTranslations } from 'next-intl';

export function ContactComponent() {
  const t = useTranslations('ContactPage');
  const [emailSent, setEmailSent] = useState(false);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      comment: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Geen valide email'),
    },
  });

  const handleSubmit = async (
    name: string,
    email: string,
    phone: string,
    comment: string
  ) => {
    await sendInterestEmail(name, email, phone, comment);
    setEmailSent(true);
  };

  return (
    <>
      <Card
        p={'xl'}
        w={{ base: '100%' }}
        shadow='md'
        radius={'xl'}
        className={classes.contactCard}
      >
        <Stack p={{ base: 0, lg: 'xl' }}>
          <Transition
            mounted={emailSent}
            transition='fade-left'
            duration={400}
            timingFunction='ease'
          >
            {(styles) => (
              <Paper
                style={styles}
                p={'lg'}
                px={'xl'}
                mt={'xl'}
                bg={'#51A3A3'}
                radius={'md'}
                w={{ base: '100%' }}
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

          {!emailSent && (
            <>
              <form
                onSubmit={form.onSubmit((values) =>
                  handleSubmit(
                    values.name,
                    values.email,
                    values.phone,
                    values.comment
                  )
                )}
              >
                <Stack>
                  <Title c='#012E4A' order={2} my={'xs'} fw={900}>
                    {t('title')}
                  </Title>
                  <Text>{t('description')}</Text>
                  <Divider></Divider>
                  <TextInput
                    leftSectionPointerEvents='none'
                    leftSection={
                      <IconUser style={{ width: rem(16), height: rem(16) }} />
                    }
                    placeholder={t('name')}
                    size='sm'
                    type='name'
                    name='name'
                    id='name'
                    required
                    autoComplete='name'
                    key={form.key('name')}
                    {...form.getInputProps('name')}
                  />
                  <TextInput
                    leftSectionPointerEvents='none'
                    leftSection={
                      <IconAt style={{ width: rem(16), height: rem(16) }} />
                    }
                    placeholder={t('email')}
                    size='sm'
                    type='email'
                    name='email'
                    id='email'
                    required
                    autoComplete='email'
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                  />
                  <TextInput
                    leftSectionPointerEvents='none'
                    leftSection={
                      <IconPhone style={{ width: rem(16), height: rem(16) }} />
                    }
                    placeholder={t('phone')}
                    size='sm'
                    type='tel'
                    name='tel'
                    id='tel'
                    required
                    autoComplete='tel'
                    key={form.key('phone')}
                    {...form.getInputProps('phone')}
                  />

                  <Textarea
                    leftSection={
                      <IconBulb style={{ width: rem(16), height: rem(16) }} />
                    }
                    placeholder={t('message')}
                    {...form.getInputProps('comment')}
                  />
                </Stack>
                <Divider my={'xl'} color={'#012E4A'}></Divider>
                <Flex justify={'center'}>
                  <Button
                    radius='xl'
                    size='lg'
                    className={classes.control}
                    type='submit'
                  >
                    {t('button')}
                  </Button>
                </Flex>
              </form>
            </>
          )}
        </Stack>
      </Card>
    </>
  );
}
