'use server'
import { redirect, useRouter} from 'next/navigation';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { requestEmail } from './sendEmail';
const FormSchema = z.object({
    numPages: z.coerce.number(),
    businessType: z.string(),
    projectType: z.string(),
    logoRequired: z.string(),
    hostingRequired: z.string(),
  });

const production="http://frostforgestudio-env.eba-k2agrvtb.eu-west-2.elasticbeanstalk.com"
const dev="http://localhost:5000"

export async function calculatePrice(formData:FormData) {

    const numPages = formData.get('numPages');
    const businessType = formData.get('businessType');
    const projectType = formData.get('projectType');
    const logoRequired = formData.get('logoRequired');
    const hostingRequired = formData.get('hostingRequired');
    const estimatedPrice = 0;

    const requestData = {
        numPages,
        businessType,
        projectType,
        logoRequired,
        hostingRequired,
        estimatedPrice,
    };

    console.log(requestData)

   
    const response = await fetch(`${production}/api/pricing/calculate`, {
    method: 'POST',
    headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json',
        },
        body: JSON.stringify(requestData),
      });

    const data = await response.json();
    requestData.estimatedPrice = data;
    const serializedData = encodeURIComponent(JSON.stringify(requestData));
    const redirectUrl = `/pricing/estimate?data=${serializedData}`;

    redirect(redirectUrl);
  
    
  }

  export async function sendRequest(formData:FormData) {


    const numPages = formData.get('numPages');
    const businessType = formData.get('businessType');
    const projectType = formData.get('projectType');
    const logoRequired = formData.get('logoRequired');
    const hostingRequired = formData.get('hostingRequired');
    const estimatedPrice = formData.get('estimatedPrice');
    const clientName = formData.get('clientName');
    const clientEmail = formData.get('clientEmail');
    const clientPhone = formData.get('clientPhone');
    const refUrl = formData.get('refUrl');
    const message = formData.get('message');

  const requestData = {
    numPages,
    businessType,
    projectType,
    logoRequired,
    hostingRequired,
    estimatedPrice,
    clientName,
    clientEmail,
    clientPhone,
    refUrl,
    message
    
  };
  console.log(requestData)

    const response = await fetch(`${production}/ff/sendrequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json',
      },
      body: JSON.stringify(requestData),
    });
  
    const data = await response.json();
    const requestId = data.data.requestId;
    if (data.code==200){
      requestEmail(formData,requestId);
      const serializedData = encodeURIComponent(JSON.stringify(data.data));
      redirect(`/pricing/estimate/success?data=${serializedData}`);
    }
    
    


    


}
  
 