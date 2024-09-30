import { Tooltip, Image } from '@mantine/core';

function ClientCard({ name, logo, url }: any) {
  return (
    <>
      <Tooltip label={name}>
        <a href={url}>
          <Image fit='contain' w={100} h={50} mr='lg' src={logo} alt='' />
        </a>
      </Tooltip>
    </>
  );
}
export default ClientCard;
