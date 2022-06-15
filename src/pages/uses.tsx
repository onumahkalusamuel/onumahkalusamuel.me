import React, { FC } from "react";
import { Icon, Layout, Paragraph, Title } from "@components";

const Category: FC = ({ children }) => (
  <h2 className="text-2xl underline mb-10 mt-20 font-medium">{children}</h2>
);

interface ItemProps {
  title: string;
  extra?: string;
  description?: string;
  icon?: React.ReactNode;
}

const Item: FC<ItemProps> = ({ title, description, extra, icon }) => (
  <div className="mb-6 flex content-start">
    <div className="mr-4 mt-1">{icon || "●"}</div>
    <div>
      <div className="flex items-center">
        <h3 className="font-bold text-xl">{title}</h3>
        {extra && (
          <div className="ml-2 text-gray-800 dark:text-gray-300">({extra})</div>
        )}
      </div>
      {description && (
        <p className="text-gray-800 dark:text-gray-400">{description}</p>
      )}
    </div>
  </div>
);

const backend = [
  {
    title: "PHP",
    extra: "+7 years",
    description: "Laravel, Lumen, Slim, PHPUnit",
    icon: <Icon icon="php" className="text-indigo-600" />,
  },
  {
    title: "Node.JS",
    extra: "+4 years",
    description: "Typescript, NestJS, Jest",
    icon: <Icon icon="nodeJS" className="text-green-500" />,
  },
  {
    title: "GoLang",
    extra: "<1 year",
    description: "Gin, Gorm, Cobra",
    icon: (
      <img src="/golang.png" width={30} style={{ paddingTop: 1 + "rem" }} />
    ),
  },
];

const frontend = [
  {
    title: "Node",
    description: "Typescript, VueJs, SvelteJS, jQuery",
    icon: <Icon icon="nodeJS" className="text-blue-500" />,
  },
  {
    title: "Styles",
    description: "Twitter Bootstrap,TailwindCSS, Styled-Components",
    icon: <Icon icon="css" className="text-blue-400" />,
  },
];

const mobile = [
  {
    title: "Flutter",
    extra: "colaboration",
  },
];

const databases = [
  {
    title: "SQLite",
  },
  {
    title: "MySQL",
  },
  {
    title: "PostgreSQL",
  },
  {
    title: "DynamoDB",
    extra: "serverless",
  },
];

const devops = [
  {
    title: "Hosting",
    description: "AWS, GCP, Vercel, Heroku",
  },
  {
    title: "Mailing",
    description: "Mailgun, Amazon SES",
  },
  {
    title: "Tools",
    description: "Serverless (AWS, Vercel), Cloudflare, Github, Gitlab",
  },
];

const developmentTools = [
  {
    title: "Visual Studio Code",
    description: "As my main IDE for development",
  },
  {
    title: "Insomia",
    description: "Design, Debug, and Deploy APIs",
  },
  {
    title: "BrowserStack",
    description:
      "Instant access to 2000+ browsers and real iOS and Android devices for cross browser testing. ",
  },
];

const design = [
  {
    title: "Figma",
    description:
      "Figma is a cross-platform and collaborative design tools in your browser, It allow you to access your design anywhere and share them with your team to get quick feedbacks.",
  },
  {
    title: "Gigo Tools",
    description:
      "A free online portal with productivity-focused tools for image manipulators, webmasters, document creators and website developers.",
  },
  {
    title: "Photopea.com",
    description:
      "Perfect tool for quick image manipulation for high quality banners, logos, mockups, etc without the hassle of installing any extra software on your pc",
  },
];

const business = [
  {
    title: "Trello",
    description:
      "I have tried many tasks management tools in my career, but Trello is the most mature tool for Agile teams, allowing you to plan, track, and design your workflows.",
  },
  {
    title: "Google Apps",
    description:
      "The best option for companies for hosting their email, documents, calendar, etc.",
  },
  {
    title: "Notion",
    description:
      "The best tool for planning, documenting, and collaborate with all staff in the company.",
  },
  {
    title: "Slack",
    description:
      "An internal communication tool, that can be integrated with many of the services mentioned here.",
  },
];

const marketing = [
  {
    title: "Ads",
    description: "Google Ads, Facebook Ads, Bing Ads",
  },
  {
    title: "SEO",
    description: "Google Analytics, Webmaster Tools, Hotjar",
  },
];

const Page: FC = () => {
  return (
    <Layout title="Uses">
      <Layout.Main>
        <Title>Uses</Title>
        <Paragraph>
          What I use at work on a day to day basis changes from time to time but
          I’ll try to keep this up to date.
        </Paragraph>

        {/* Backend */}
        <Category>Backend</Category>
        {backend.map((item) => (
          <Item key={item.title} {...item} />
        ))}

        {/* Frontend */}
        <Category>Frontend</Category>
        {frontend.map((item) => (
          <Item key={item.title} {...item} />
        ))}

        {/* Mobile */}
        <Category>Mobile</Category>
        {mobile.map((item) => (
          <Item key={item.title} {...item} />
        ))}

        {/* Databases */}
        <Category>Databases</Category>
        {databases.map((item) => (
          <Item key={item.title} {...item} />
        ))}

        {/* DevOps */}
        <Category>DevOps</Category>
        {devops.map((item) => (
          <Item key={item.title} {...item} />
        ))}

        {/* Development Tools */}
        <Category>Development Tools</Category>
        {developmentTools.map((item) => (
          <Item key={item.title} {...item} />
        ))}

        {/* Design */}
        <Category>Design</Category>
        {design.map((item) => (
          <Item key={item.title} {...item} />
        ))}

        {/* Business */}
        <Category>Business</Category>
        {business.map((item) => (
          <Item key={item.title} {...item} />
        ))}

        {/* Marketing */}
        <Category>Marketing</Category>
        {marketing.map((item) => (
          <Item key={item.title} {...item} />
        ))}
      </Layout.Main>
    </Layout>
  );
};

export default Page;
