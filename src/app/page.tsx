import {Button, Icon, Layout, LogoName} from "@/components";
import Link from "next/link";
import {GITHUB, LINKEDIN, TWITTER} from "@/constants";

export default function Home() {
  return (
      <Layout title="Home">
        <Layout.Main className="flex md:h-screen md:-mt-20">
          <div className="flex-wrap md:flex items-center my-10 md:my-20">
            <div className="w-full md:w-1/2">
              <LogoName className="w-full" />
              <h2 className="text-2xl font-light mb-4 text-gray-700 dark:text-gray-500">
                Full Stack Developer
              </h2>
              <div className="flex items-center mb-10">
                <Icon icon="nodeJS" className="mr-4 text-green-500" />
                <img src="/vuejs.png" className="mr-4" />
                <img src="/svelte.png" className="mr-4" />
                <Icon icon="php" className="mr-4 text-indigo-600" />
                <img src="/golang.png" className="mr-4" />
                <img src="/nigeria.png" className="mr-4" />
              </div>
              <Link href="/contact" passHref>
                <Button className="px-10 w-full md:w-auto">{`Let's Chat`}</Button>
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="mt-10 md:mt-0 md:ml-10">
                <img src="/profile.png" className="w-full md:w-auto mx-auto" alt={'profile'} />
                <div className="flex items-center justify-center mt-8">
                  <a href={GITHUB} target="_blank" rel="noreferrer">
                    <Icon icon="github" className="mr-4" />
                  </a>

                  <a href={TWITTER} target="_blank" rel="noreferrer">
                    <Icon icon="twitter" className="mr-4" />
                  </a>

                  <a href={LINKEDIN} target="_blank" rel="noreferrer">
                    <Icon icon="linkedin" className="mr-4" />
                  </a>

                  <Link href="/contact">
                      <Icon icon="email" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Layout.Main>
      </Layout>
  );
}
