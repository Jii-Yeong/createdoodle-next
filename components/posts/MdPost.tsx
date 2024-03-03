import Image from 'next/image';
import Markdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import remarkGfm from 'remark-gfm';

type MdPostProps = {
  markdownText: string;
};

export default function MdPost({markdownText}: MdPostProps) {
  return (
    <div className="bg-white rounded-2xl p-16 max-w-[1000px]">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          img(props) {
            return (
              <Image
                src={`${process.env.CLIENT_URL}/${props.src}`}
                alt={`${props.alt}`}
                width={800}
                height={100}
              />
            );
          },
          code(props) {
            const {children, className, node, ref, ...rest} = props;
            const match = /language-(\w+)/.exec(className || '');
            return match ? (
              <SyntaxHighlighter
                {...rest}
                style={a11yDark}
                PreTag="div"
                language={match[1]}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}>
        {markdownText}
      </Markdown>
    </div>
  );
}
