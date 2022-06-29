import Head from "next/head";
import Accordion from "../components/Accordion";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accordion Component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/smile-icon.PNG" />
      </Head>
      <Accordion />
    </div>
  );
}