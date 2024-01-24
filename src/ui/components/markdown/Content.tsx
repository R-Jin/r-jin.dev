import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
// import remarkMermaid from "remark-mermaidjs"; something with playwright

// import rehypeMermaid from "rehype-mermaid"; something with playwright
import rehypeKatex from "rehype-katex";

export default function Content({ content }: { content: string }) {
  return (
    <div className="prose">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
      ></link>
      <Markdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {content}
      </Markdown>
    </div>
  );
}
