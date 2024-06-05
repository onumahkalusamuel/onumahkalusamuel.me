"use client"
import React, { FC, useEffect, useState } from "react";
import moment from "moment-timezone";
import {TIMEZONE} from "@/constants";

interface TimezoneBlockProps {
  timezone: string;
}

const TimezoneBlock: FC<TimezoneBlockProps> = ({ timezone }) => {
  const tz = moment.tz(timezone);
  console.log(tz.zoneName());

  return (
    <div className="border-2 rounded-md p-4 flex flex-wrap sm:flex-no-wrap items-center text-xl mb-4 justify-between">
      <div className="flex flex-wrap">
        <div className="w-full font-medium">{tz.zoneName()}</div>
        <div className="w-full text-sm opacity-75">
          (GMT {tz.format("Z")})
        </div>
      </div>
      <div className="text-lg sm:text-center whitespace-no-wrap">
          {tz.format("ddd, MMM D, YYYY")}
      </div>
      <div className="text-sm sm:text-lg whitespace-no-wrap">
          {tz.format("h:mm A")}
      </div>
    </div>
  );
};

export const Timezone = () => {
  const userTimezone = moment.tz.guess();
  const [showTimezone, setShowTimezone] = useState(false);

  useEffect(() => {
    setShowTimezone(true);
  }, []);

  if (!showTimezone) {
    return <React.Fragment />;
  }

  return (
    <div className="mb-20">
      <TimezoneBlock timezone={TIMEZONE} />
      {userTimezone != TIMEZONE && <TimezoneBlock timezone={userTimezone} />}
    </div>
  );
};
