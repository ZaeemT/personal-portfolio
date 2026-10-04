import { CodeBlock } from "@/components/mdx/code-block";
import { MediaContainer } from "@/components/mdx/media-container";
import type { ComponentProps } from "react";

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string;
};

export const mdxComponents = {
  MediaContainer,
  pre: (props: ComponentProps<"pre">) => <CodeBlock {...props} />,
  hr: (props: ComponentProps<"hr">) => (
    <div className="my-10 flex w-full items-center" {...props}>
      <div
        className="flex-1 h-px bg-border"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      />
    </div>
  ),
  table: (props: ComponentProps<"table">) => (
    <div className="my-6 border border-border rounded-xl overflow-hidden">
      <div className="w-full overflow-x-auto">
        <table
          className="!m-0 w-full min-w-full border-separate border-spacing-0 text-sm [&_tbody_tr:last-child_td]:border-b-0"
          {...props}
        />
      </div>
    </div>
  ),
  thead: (props: ComponentProps<"thead">) => (
    <thead className="bg-muted/50" {...props} />
  ),
  th: (props: ComponentProps<"th">) => (
    <th
      className="!px-4 !py-2.5 text-left text-xs font-medium uppercase tracking-wide text-muted-foreground border-b border-border"
      {...props}
    />
  ),
  td: (props: ComponentProps<"td">) => (
    <td
      className="!px-4 !py-2.5 align-top border-b border-border/60 tabular-nums"
      {...props}
    />
  ),
  tr: (props: ComponentProps<"tr">) => (
    <tr className="transition-colors hover:bg-muted/30" {...props} />
  ),
  code: ({ children, ...props }: CodeProps) => {
    if (props["data-language"]) {
      return <code {...props}>{children}</code>;
    }
    return (
      <code
        className="px-1.5 py-0.5 rounded-md bg-muted/60 dark:bg-muted/40 text-[0.85em] font-mono font-normal text-foreground/90 before:content-none after:content-none"
        {...props}
      >
        {children}
      </code>
    );
  },
} as const;
