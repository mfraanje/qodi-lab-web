import {
  Image,
  Container,
  Title,
  Button,
  Text,
  rem,
  TextInput,
  Grid,
} from '@mantine/core';
import classes from './Components.module.css';
import { IconAt } from '@tabler/icons-react';
import { useForm } from '@mantine/form';

export function HeroImageComponent() {
  const icon = <IconAt style={{ width: rem(16), height: rem(16) }} />;

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Geen valide email'),
    },
  });

  const handleSubmit = (values: string) => {
    console.log(values);
  };

  return (
    <Container size='lg' pos={'relative'} mb={100} mt={50}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Text c='violet.9' mt='md' fw={700} size='xs'>
            Kodikas Labs
          </Text>
          <Title className={classes.title}>
            Software <span className={classes.highlight}>oplossingen</span> op
            maat
          </Title>
          <Text c='black' mt='md'>
            Of je nu een gebruiksvriendelijke applicatie nodig hebt of een
            volledig geïntegreerd platform, wij ontwikkelen maatwerkoplossingen
            die jouw bedrijf efficiënter laten werken. Transformeer jouw ideeën
            in krachtige, schaalbare tools die het verschil maken.
          </Text>
          <form
            onSubmit={form.onSubmit((values) => handleSubmit(values.email))}
          >
            <Grid mt={60}>
              <Grid.Col span={10}>
                <TextInput
                  leftSectionPointerEvents='none'
                  leftSection={icon}
                  placeholder='Email'
                  size='md'
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
                  size='md'
                  className={classes.control}
                  type='submit'
                >
                  Verstuur
                </Button>
              </Grid.Col>
            </Grid>
          </form>
        </div>
        <Image
          src='./image.svg'
          pos='absolute'
          right={-25}
          top={75}
          className={classes.image}
        />
      </div>
    </Container>
  );
}
