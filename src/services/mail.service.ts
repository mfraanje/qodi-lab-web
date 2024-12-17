import { sendEmailWithTemplate } from '@/lib/email/postmark';

const from = 'aqcuisition@qodisoft.com';
const homeAddress = 'info@qodisoft.com';

export const sendInterestEmail = async (
  name: string,
  email: string,
  phone: string,
  comment: string
) => {
  const templateModel = {
    sender_name: name,
    sender_email: email,
    sender_phone: phone,
    sender_comment: comment,
    origin: 'QodiSoft Web',
  } as any;
  await sendEmailWithTemplate(
    from,
    homeAddress,
    'interest-mail',
    templateModel,
    'outbound'
  );
};
