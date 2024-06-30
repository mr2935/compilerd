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
      // stdin: '1', // Add stdin if required
    };

    try {
      const response = await executeCode(requestData);
      if (response.error === 0) {
        setOutput(response.output);
      } else {
        setOutput(`Error: ${response.errorMessage}\nCompile Message: ${response.compile_message}`);
      }
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
