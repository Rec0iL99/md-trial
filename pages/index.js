/* eslint-disable */
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Home() {
  const title = "Beat The Odds";
  const description =
    'There is a string 𝑠 of length 3, consisting of uppercase and lowercase English letters. Check if it is equal to "YES" (without quotes), where each letter can be in any case. For example, "yES", "Yes", "yes" are all allowable.\n\n## Input\n\nThe first line of the input contains an integer 𝑡 (1≤𝑡≤103) — the number of testcases.\n\nThe description of each test consists of one line containing one string 𝑠 consisting of three characters. Each character of 𝑠 is either an uppercase or lowercase English letter.\n\n## Output\n\nFor each test case, output "YES" (without quotes) if 𝑠 satisfies the condition, and "NO" (without quotes) otherwise.\n\nYou can output "YES" and "NO" in any case (for example, strings "yES", "yes" and "Yes" will be recognized as a positive response).\n\n## Example\n\n### Input\n\n```js\n10\nYES\nyES\nyes\nYes\nYeS\nNoo\norZ\nyEz\nYas\nXES\n```\n\n### Output\n\n```js\nYES\nYES\nYES\nYES\nYES\nNO\nNO\nNO\nNO\nNO\n```\n\n### Note\nThe first five test cases contain the strings "YES", "yES", "yes", "Yes", "YeS". All of these are equal to "YES", where each character is either uppercase or lowercase.';

  const markdown = `
  # ${title}
  ${description}
  `;

  return (
    <ReactMarkdown
      children={markdown}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
}
