import { sendEmailWithTemplate } from '@/lib/email/postmark';

const from = 'mail@mickeyfraanje.com';
const homeAddress = 'info@mickeyfraanje.com';

export const sendInterestEmail = async (email: string, comment: string) => {
  const templateModel = {
    sender_email: email,
    sender_comment: comment,
    origin: 'Qodilab',
  } as any;
  await sendEmailWithTemplate(
    from,
    homeAddress,
    'interest-mail',
    templateModel,
    'outbound'
  );
};
