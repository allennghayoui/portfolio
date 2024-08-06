import Markdown from "react-markdown";

interface MarkdownRendererProps {
  markdown?: string | null;
}

const MarkdownRenderer = ({ markdown }: MarkdownRendererProps) => {
  return (
    <Markdown
      className="prose prose-slate prose-xl"
      components={{
        code: (props) => {
          const { node, ...rest } = props;
          return (
            <code
              className="rounded-md bg-slate-800 px-2 text-white"
              {...rest}
            />
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};

export default MarkdownRenderer;
