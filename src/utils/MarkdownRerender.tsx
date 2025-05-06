import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type Props = {
  children: string;
};

export default function MarkdownRerender({ children }: Props) {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ ...props }) => (
          <h1 className="title1 text-black-700" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2 className="title2 text-black-700" {...props} />
        ),
        h3: ({ ...props }) => (
          <h3 className="title3 text-black-700" {...props} />
        ),
        h4: ({ ...props }) => (
          <h4 className="title4 text-black-700 my-3" {...props} />
        ),
        h5: ({ ...props }) => (
          <h5 className="title5 text-black-700 my-3" {...props} />
        ),
        h6: ({ ...props }) => (
          <h6 className="title6 text-black-700 my-3" {...props} />
        ),
        p: ({ ...props }) => (
          <p className="paragraph text-gray-500" {...props} />
        ),

        ol: ({ ...props }) => (
          <ol
            className="paragraph list-decimal pl-6 text-gray-500"
            {...props}
          />
        ),
        ul: ({ ...props }) => (
          <ul
            className="paragraph marker:text-orange listStyle list-disc pl-6 text-gray-500"
            {...props}
          />
        ),
        code: ({ ...props }) => (
          <code className="rounded bg-gray-200 px-1 py-0.5" {...props} />
        ),
        pre: ({ ...props }) => (
          <pre
            className="text-black-700 my-2 overflow-x-auto rounded bg-gray-100 p-4"
            {...props}
          />
        ),
        blockquote: ({ ...props }) => (
          <blockquote
            className="title6 border-l-orange my-4 !rounded-[4px] border-l-4 bg-gray-200 p-4 text-black [&>p]:text-black"
            {...props}
          />
        ),
        a: ({ ...props }) => (
          <a className="underline underline-offset-3" {...props} />
        ),
      }}
    >
      {children}
    </Markdown>
  );
}
