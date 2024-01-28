import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
// import remarkMermaid from "remark-mermaidjs"; something with playwright

// import rehypeMermaid from "rehype-mermaid"; something with playwright
import rehypeKatex from "rehype-katex";
import rehypeFigure from "@microflash/rehype-figure";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Content({ content }: { content: string }) {
  return (
    <div className="prose-th: prose text-left">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
      ></link>
      <Markdown
        remarkPlugins={[[remarkGfm, { tablePipeAlign: false }], remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeFigure]}
        components={customComponents}
      >
        {content}
      </Markdown>
    </div>
  );
}

const customComponents = {
  code(props: any) {
    const { children, className, node, ...rest } = props;
    const match = /language-(\w+)/.exec(className || "");
    const content = String(children).replace(/\n$/, "");
    return match ? (
      <SyntaxHighlighter
        {...rest}
        wrapLongLines={true}
        PreTag="div"
        children={content}
        language={match[1]}
        style={oneDark}
      />
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
};
