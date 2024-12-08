"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Stripe from "@/components/Stripe";
import PayStack from "@/components/Paystack";

export default function Page() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (location == null) {
      (async () => {
        const response = await axios.get("https://ipapi.co/json/");
        setLocation(response.data.continent_code);
      })();
    }
  });
  return location && location !== "AF" ? (
    <Stripe /> // For Non Africans
  ) : location && location === "AF" ? (
    <PayStack /> // For Africans
  ) : (
    <div className="h-screen grid place-items-center">
      <div className="w-10 h-10 lg:w-20 lg:h-20 bg-black rounded-lg loading"></div>
    </div>
  );
}
