import { appInformation } from "@/db/db";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  const { locale } = router;

  const dataToDisplay = appInformation.find(
    (appInfo) => appInfo.locale === locale
  );

  console.log(router);
  return (
    <div>
      <h1>Hello from Next.js</h1>
      {dataToDisplay && (
        <>
          <h2>{dataToDisplay.title}</h2>
          <p>{dataToDisplay.description}</p>
        </>
      )}
    </div>
  );
}
