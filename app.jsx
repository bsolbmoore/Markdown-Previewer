const { useState } = React;

const MarkdownPreviewer = () => {
  const defaultMarkdown = `# Welcome to Markdown Previewer!
## This is a sub-heading...
### Here are some other cool features:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// This is a code block:
function helloWorld() {
  console.log("Hello World!");
}
\`\`\`

You can make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to ~~cross stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://design-style-guide.freecodecamp.org/downloads/fcc_secondary_small.svg)
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleEditorChange = (e) => {
    setMarkdown(e.target.value);
  };

  const getMarkdownText = () => {
    return { __html: marked.parse(markdown) };
  };

  return (
    <div className="container">
      <header>
        <h1>Markdown Previewer</h1>
        <p className="subtitle">
          Type markdown on the left and see it rendered in real-time on the right
        </p>
      </header>

      <div className="app-container">
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <i className="fas fa-edit"></i>
              <span>Editor</span>
            </div>
            <button className="icon-btn" title="Maximize">
              <i className="fas fa-expand"></i>
            </button>
          </div>
          <textarea
            id="editor"
            value={markdown}
            onChange={handleEditorChange}
            placeholder="Enter your markdown here..."
          ></textarea>
        </div>

        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <i className="fas fa-eye"></i>
              <span>Preview</span>
            </div>
            <button className="icon-btn" title="Maximize">
              <i className="fas fa-expand"></i>
            </button>
          </div>
          <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
        </div>
      </div>

      <div className="footer">
        <p>Markdown Previewer | Created for freeCodeCamp Project</p>
      </div>
    </div>
  );
};

ReactDOM.render(<MarkdownPreviewer />, document.getElementById('app'));
