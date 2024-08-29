import { sendEmailWithTemplate } from '@/lib/email/postmark';

const from = 'mail@mickeyfraanje.com';

export const sendInterestEmail = async (email: string) => {
  const templateModel = {
    sender_email: email,
  } as any;
  await sendEmailWithTemplate(
    from,
    email,
    'interest-mail',
    templateModel,
    'outbound'
  );
};
