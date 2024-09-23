'use server';
import { Attachment, ServerClient } from 'postmark';

const emailApi = process.env.EMAIL_API as string;

let client: ServerClient;
if (emailApi) {
  client = new ServerClient(emailApi);
}

export const sendEmailWithTemplate = async (
  from: string,
  to: string,
  templateId: string,
  templateModel: any,
  messageStream: string,
  attachments: Attachment[] = []
) => {
  if (!client) {
    console.error('Email API not configured');
    return;
  }
  try {
    await client.sendEmailWithTemplate({
      From: from,
      To: to,
      TemplateAlias: templateId,
      TemplateModel: templateModel,
      MessageStream: messageStream,
      Attachments: attachments,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
