import React, { FC } from "react";
import {
  Icon,
  IconType,
  Layout,
  Paragraph,
  Subtitle,
  Title,
} from "@components";
import Link from "next/link";
import { GITHUB, LINKEDIN, TWITTER } from "src/constants";
interface ItemProps {
  icon: IconType;
  href: string;
}

const Item: FC<ItemProps> = ({ children, icon, href }) => {
  return (
    <a
      href={href}
      target="blank"
      className="rounded-md mr-4 sm:mr-10 mb-8 flex items-center text-lg"
    >
      <Icon icon={icon} className="sm:mr-2" size="md" />
      <div className="text-gray-700 dark:text-gray-500 hidden sm:block">
        {children}
      </div>
    </a>
  );
};

const Page: FC = () => {
  return (
    <Layout title="About">
      <Layout.Main>
        <Title>About</Title>

        <div className="flex flex-wrap">
          <Item icon="github" href={GITHUB}>
            Github
          </Item>

          <Item icon="twitter" href={TWITTER}>
            Twitter
          </Item>

          <Item icon="linkedin" href={LINKEDIN}>
            Linkedin
          </Item>
        </div>

        <Subtitle className="mt-10">Who am I?</Subtitle>
        <Paragraph>
          My name is Onumah Kalu Samuel. I am a Full-stack developer,
          entrepreneur, and Nigerian. I have been living in Abuja, Nigeria since
          2022. I offer consultation services to companies and individuals in
          technical and non-technical fields.
        </Paragraph>

        <Subtitle className="mt-20">What can I do?</Subtitle>
        <Paragraph>
          I have experience as a project manager leading different types of
          projects and team sizes. I use Agile methodology and adapt the process
          depending on the project and resources available. I am also a strong
          advocate of SOLID principles in software design and development.
          <br />
          <br />
          As a developer, I have been in the web development space since 2008
          when I started tinkering with HTML and CSS. I have a combined
          experience of more than 7 years working with PHP, Slim and Laravel. In
          the last 3 years, I have been working with SvelteJS, VueJS and
          Node.JS. Recently, I took interest in Golang and have developed a full
          Windows application in Go. I focus more on building backend services
          and APIs and I deploy them on AWS.
          <br />
          <br />I dont limit myself just as a developer. I am also interested in
          UI/UX and Marketing. I always try to keep myself updated with the
          latest trends.
          <br />
          <br />
          One of my strongest points is my broad knowledge of different fields
          such as Programming, Marketing, Design, Project Management, Critical
          Thinking, etc. that allow me to communicate better with different
          teams in order to achieve company goals.
        </Paragraph>
        <Link href="/uses">
          <a className="text-blue-700 dark:text-blue-400 underline block mt-6">
            Learn more about the technologies and tools I use →
          </a>
        </Link>
      </Layout.Main>
    </Layout>
  );
};

export default Page;
