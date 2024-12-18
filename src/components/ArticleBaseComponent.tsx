import { Title, Box, BackgroundImage, Paper, Container } from '@mantine/core';
import classes from './Components.module.css';
import { ContactSection } from './ContactSection';
// TODO Check if animations affect SEO
export function ArticleBaseComponent({
  title,
  image,
  children,
}: {
  title: string;
  image: string;
  children: any;
}) {
  return (
    <>
      <Paper className={classes.articleBanner} pos='absolute'></Paper>
      <Container size={'md'} className={classes.article}>
        <Title className={classes.articleHeader}>{title}</Title>
        <BackgroundImage
          h={400}
          src={image}
          className={classes.titleCard}
        ></BackgroundImage>
        <Box className={classes.articleContainer}>
          {/* TODO make into component */}
          <Box className={classes.articleContent}>{children}</Box>
        </Box>
      </Container>

      <Paper className={classes.pagecard} p={'xl'} w={'100%'} mt={200}>
        <Container size={'lg'}>
          <ContactSection></ContactSection>
        </Container>
      </Paper>
    </>
  );
}
