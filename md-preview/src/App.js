import React, {useState} from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {

  const [markdown, setMarkdown] = useState('# Markdown Preview')

  return (
    <main>
      <section className="markdown">
      <textarea value={markdown} onChange={(e) => setMarkdown(e.target.value)} className="input">
      </textarea>

      <article className="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
      </section>
      
    </main>
  );
}

export default App;
