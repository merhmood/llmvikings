import type { Context } from '@netlify/functions';
import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req: Request, context: Context) {
  // console.log(process.env.FLW_SECRET_KEY);
  (async () => {
    const body = (await req.text()) as unknown as {
      name: string;
      email: string;
    };
    const txRef = `${body.name}-${body.email}`;
    try {
      const response = await axios.post(
        'https://api.flutterwave.com/v3/payments',
        {
          tx_ref: txRef,
          amount: '100',
          currency: 'USD',
          redirect_url: 'https://llmvikings.com/.netlify/functions/verify',
          customer: {
            email: body.email,
            name: body.name,
          },
          customizations: {
            title: 'LLM Vikings Masterclass Payment',
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
      //return new Response(response);
    } catch (err: unknown) {
      // console.error(err.code);
      // console.error(err.response.data);
    }
  })();
}
