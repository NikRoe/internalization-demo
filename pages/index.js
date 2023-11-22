import { appInformation } from "@/db/db";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const { locale, pathname, asPath } = router;

  const dataToDisplay = appInformation.find(
    (appInfo) => appInfo.locale === locale
  );

  return (
    <div>
      <h1>Hello from Next.js</h1>
      <select
        onChange={(event) =>
          router.push({ pathname }, asPath, {
            locale: event.target.value,
          })
        }
      >
        <option value="en-US">English</option>
        <option value="de-DE">German</option>
      </select>
      {dataToDisplay && (
        <>
          <h2>{dataToDisplay.title}</h2>
          <p>{dataToDisplay.description}</p>
        </>
      )}
    </div>
  );
}
