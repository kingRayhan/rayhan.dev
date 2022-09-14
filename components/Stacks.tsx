import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Stacks = () => {
  return (
    <div className="flex flex-col gap-20 py-20" id="stack">
      <div className="wrapper">
        <div>
          <h3 className="mb-4 text-xl font-semibold font-code">
            ~/kingrayhan/.stacks
          </h3>
          <SyntaxHighlighter
            className="syntax-highlighter"
            language="javascript"
            wrapLines={true}
            style={vs}
          >
            {`{
  "frontend"   : ["Nextjs", "Nuxtjs", "React", "Gatsby", "Vue", "Alpine.js","Jquery" ...more],
  "mobile-app" : ["React Native", "Flutter"]
  "backend"    : ["Apollo-server", "Nestjs", "Express", "Laravel", "Adonisjs", "Django"],
  "cms"        : ["Ghost", "WordPress", "Strapi", "Contentful", "Shopify"],
  "dbms"       : ["Postgres", "MySQL", "Sqlite", "MongoDB", "Firestore", "Redis", "Array 😂"],
  "dbms-orm"   : ["Eloquent(Laravel)", "Prisma", "Mongoose", "Typegoose", "TypeORM", "Sequilize", "knex"]
  "languages"  : ["Dart", "Java", "Python", "Typescript", "Javascript", "PHP"],
  "ui"         : ["Styled-components", "emotionjs", "tailwind", "Bulma" ...more]
}`}
          </SyntaxHighlighter>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold font-code">
            ~/kingrayhan/.openSource
          </h3>
          <SyntaxHighlighter
            className="syntax-highlighter"
            language="javascript"
            wrapLines={true}
            style={vs}
          >
            {`{
   "reactjs-visibility"  : "https://github.com/kingRayhan/reactjs-visibility",
   "ghost-finder"        : "https://github.com/graph-land/quick-crud",
   "quick-crud"          : "https://github.com/graph-land/quick-crud",
   "graphql-placeholder" : "https://graphqlplaceholder.com",
   "bnnum"               : "https://www.npmjs.com/package/bnnum",
   "LineProgressbar"     : "https://kingrayhan.github.io/LineProgressbar/data-attrs-demo.html",
   "react-tabs"          : "https://www.npmjs.com/package/reactjs-tab",
   "mini-php"            : "https://github.com/kingRayhan/mini-php"
}`}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
