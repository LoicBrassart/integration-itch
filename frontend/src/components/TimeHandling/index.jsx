import { useEffect, useState } from "react";
import { DateTime, Settings } from "luxon";
import useInterval from "@services/useInterval";
import STimeHandling from "./style";

export default function TimeHandling() {
  const [dateNow, setNow] = useState(null);
  const [dateStart, setStart] = useState(null);
  const [dateEnd, setEnd] = useState(null);
  const format = "dd/MM/yy HH:mm:ss";
  const [countDown, setCountDown] = useState({});

  useEffect(() => {
    Settings.defaultLocale = "fr";
    setStart(DateTime.fromISO("2022-09-12T09:00:00"));
    setEnd(DateTime.fromISO("2023-02-12T17:30:00"));
  }, []);

  useInterval(() => {
    setNow(DateTime.now());
    if (dateEnd && dateNow) {
      setCountDown(
        dateEnd
          .diff(dateNow, ["days", "hours", "minutes", "seconds"])
          .toObject()
      );
    }
  }, 1000);

  return (
    <STimeHandling>
      {dateNow && dateStart && dateEnd && countDown && (
        <>
          <p>Maintenant: {dateNow.toFormat(format)}</p>
          <p>
            Début de la session: {dateStart.toFormat(format)} (
            {dateStart.toRelative()})
          </p>
          <p>
            Fin de la session: {dateEnd.toFormat(format)} (
            {dateEnd.toRelative()})
          </p>
          <p>
            Final Countdown:{" "}
            {`${`${countDown.days}`.padStart(
              2,
              "0"
            )}:${`${countDown.hours}`.padStart(
              2,
              "0"
            )}:${`${countDown.minutes}`.padStart(2, "0")}:${`${Math.floor(
              countDown.seconds
            )}`.padStart(2, "0")}`}
          </p>
        </>
      )}
    </STimeHandling>
  );
}
