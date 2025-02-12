'use server';

import { Resend } from "resend";
import React from "react";
import ContactEmail from "../components/contact-email";
import RequestEmail from "../components/request-email";
const resend =  new Resend("re_LvqEguT8_8C1wgi2cVenxtodhaLWXcucE");

export const sendEmail = async (formData: FormData) => {
    console.log("Running on server");
    console.log(formData.get("email"));
    console.log(formData.get("message"));
    console.log(formData.get("name"));
    const message = formData.get("message");
    const email = formData.get("email")
    const name = formData.get("name")


    await  resend.emails.send({
        from: 'Official stie Message <frostforgestudio@frostforge.co.uk>',
        to: 'team@frostforge.co.uk',
        subject: `Message from ${name}`,
        reply_to: email as string,
        react: React.createElement(ContactEmail,{
          message: message as string,
          email:email as string,
          name: name as string,
        })
      });
}

export const requestEmail = async (formData: FormData, requestId:string) => {

  const email = formData.get("clientEmail");
  const name = formData.get("clientName");
  const message = `${name} has sent you a request`
  await resend.emails.send({
      from: 'Frost Forge Studio <frostforgestudio@frostforge.co.uk>',
      to: email as string,
      subject: `Dear ${name}, your request is received`,
      reply_to: 'team@frostforge.co.uk',
      react: React.createElement(RequestEmail,{
        name: name as string,
        requestId: requestId as string,
      })
    });

    await  resend.emails.send({
      from: 'Official stie Message <frostforgestudio@frostforge.co.uk>',
      to: 'team@frostforge.co.uk',
      subject: `Request from ${name}`,
      react: React.createElement(ContactEmail,{
        message: message as string,
        email:email as string,
        name: name as string,
      })
    });
}
