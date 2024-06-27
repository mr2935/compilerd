import PropTypes from 'prop-types';

const CodeEditor = ({ code, setCode }) => {
  return (
    <textarea
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Write your code here..."
    />
  );
};

CodeEditor.propTypes = {
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
};

export default CodeEditor;
