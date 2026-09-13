import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "sql",
  "react",
  "flask",
  "django",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nestjs",
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
  // "figma",
  "tailwindcss",
  "tensorflow",
  "oracle",
  "redis",
  "mongodb",
  "arduino",
  "terraform",
  "linux",
  // "adobeillustrator",
  "langchain",
  "huggingface",
  "openai",
  "fastapi",
  "go",
];

export function TechGlobe() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  )

  return (
    <div className="h-full w-full max-w-2xl items-center justify-center overflow-hidden bg-background px-20 pb-10">
      <IconCloud images={images} />
    </div>
  );
}
