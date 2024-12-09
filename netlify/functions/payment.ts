/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import type { Context } from "@netlify/functions";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "llmvikings.firebaseapp.com",
  projectId: "llmvikings",
  storageBucket: "llmvikings.firebasestorage.app",
  messagingSenderId: "612818568614",
  appId: "1:612818568614:web:1a9a4d1ddc995d3db8fb67",
  measurementId: "G-H7VT2B93Z0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

interface FormData {
  name: string;
  email: string;
  amount: string;
  date: string;
  tx_id: string;
}

export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  try {
    const requestText = await req.text();
    const body: FormData = JSON.parse(requestText || "");

    const { name, email, amount, date, tx_id } = body;

    console.log(`secret key - ${process.env.apiKey}`);
    console.log(name, email, date, tx_id);

    // Add the form details to the "waitlist" collection
    await addDoc(collection(db, "masterclass-payment"), {
      name,
      email,
      amount,
      date,
      tx_id,
      timestamp: new Date(), // Optionally store the submission time
    });

    return new Response(
      JSON.stringify({
        statusCode: 200,
        body: JSON.stringify({ message: "Form submitted successfully" }),
      })
    );
  } catch (error) {
    if (error)
      return new Response(
        JSON.stringify({
          statusCode: 500,
          body: JSON.stringify({ error: "Internal Server Error" }),
        })
      );
  }
};
