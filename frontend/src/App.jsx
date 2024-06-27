import { useState } from 'react';
import Header from './components/Header';
import LanguageSelector from './components/LanguageSelector';
import CodeEditor from './components/CodeEditor';
import Output from './components/Output';
import './App.css';
import { executeCode } from './utils/helperFunctions';

const App = () => {
  const [language, setLanguage] = useState('cpp');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const runCode = async () => {
    const requestData = {
      language,
      script: code,
      stdin: '', // Add stdin if required
    };

    try {
      const response = await executeCode(requestData);
      setOutput(response.val);
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <Header />
      <LanguageSelector language={language} setLanguage={setLanguage} />
      <CodeEditor code={code} setCode={setCode} />
      <button onClick={runCode}>Run Code</button>
      <Output output={output} />
    </div>
  );
};

export default App;
