export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "629eee8a9683fd2ee4965514",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-vladdyhell-studio",
                  apiId: "53a972f2-9984-4da7-91cc-b8ca2da46d66",
                },
                {
                  buildHookId: "629eee8a158e13301af79a8c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-vladdyhell",
                  apiId: "0e82dbf9-8fa8-4ef4-9afe-4cf21abf89f0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/VladdyHell/sanity-gatsby-blog-vladdyhell",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-vladdyhell.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
