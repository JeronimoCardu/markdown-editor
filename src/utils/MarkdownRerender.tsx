import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import useEditorStore from "../hooks/useEditorStore";

type Props = {
  children: string;
};

export default function MarkdownRerender({ children }: Props) {
  const showDeleteModal = useEditorStore((state) => state.showDeleteModal);
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ ...props }) => (
          <h1 className="title1 text-black-700 dark:text-gray-100" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2 className="title2 text-black-700 dark:text-gray-100" {...props} />
        ),
        h3: ({ ...props }) => (
          <h3 className="title3 text-black-700 dark:text-gray-100" {...props} />
        ),
        h4: ({ ...props }) => (
          <h4
            className="title4 text-black-700 my-3 dark:text-gray-100"
            {...props}
          />
        ),
        h5: ({ ...props }) => (
          <h5
            className="title5 text-black-700 my-3 dark:text-gray-100"
            {...props}
          />
        ),
        h6: ({ ...props }) => (
          <h6
            className="title6 text-black-700 my-3 dark:text-gray-100"
            {...props}
          />
        ),
        p: ({ ...props }) => (
          <p
            className="paragraph text-gray-500 dark:text-gray-400"
            {...props}
          />
        ),

        ol: ({ ...props }) => (
          <ol
            className="paragraph list-decimal pl-6 text-gray-500 dark:text-gray-400"
            {...props}
          />
        ),
        ul: ({ ...props }) => (
          <ul
            className="paragraph marker:text-orange listStyle list-disc pl-6 text-gray-500 dark:text-gray-400"
            {...props}
          />
        ),
        code: ({ ...props }) => (
          <code
            className={`${showDeleteModal && "brightness-50 dark:brightness-150"} dark:bg-black-800 rounded bg-gray-200 px-1 py-0.5 dark:text-gray-100`}
            {...props}
          />
        ),
        pre: ({ ...props }) => (
          <pre
            className={`${showDeleteModal && "brightness-50 dark:brightness-150"} text-black-700 dark:bg-black-800 my-2 overflow-x-auto rounded bg-gray-100 p-4`}
            {...props}
          />
        ),
        blockquote: ({ ...props }) => (
          <blockquote
            className={`${showDeleteModal && "brightness-50 dark:brightness-150"} title6 dark:bg-black-800 border-l-orange my-4 !rounded-[4px] border-l-4 bg-gray-200 p-4 text-black [&>p]:text-black dark:[&>p]:text-gray-100`}
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
