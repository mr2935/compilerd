import PropTypes from 'prop-types';

const Output = ({ output }) => {
  return (
    <div className="output">
      <h2>Output:</h2>
      <pre>{output}</pre>
    </div>
  );
};

Output.propTypes = {
  output: PropTypes.string.isRequired,
};

export default Output;
