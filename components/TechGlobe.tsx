import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "sql",
  "php",
  "react",
  "flask",
  "django",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "python",
  "amazonaws",
  "postgresql",
  "firebase",
  "apache",
  "vercel",
  "reactnative",
  "bootstrap",
  "cplusplus",
  "docker",
  "git",
  "jira",
  "github",
  "postman",
  "visualstudiocode",
  "figma",
  "tailwindcss",
  "tensorflow",
  "oracle",
  "mysql",
  "mongodb",
  "arduino",
  "terraform",
  "linux",
  "adobephotoshop",
  "adobeillustrator",
];

export function TechGlobe() {
  return (
    <div className="h-full w-full max-w-2xl items-center justify-center overflow-hidden bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
