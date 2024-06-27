import PropTypes from 'prop-types';

const LanguageSelector = ({ language, setLanguage }) => {
  const languages = ['c', 'cpp', 'python', 'java', 'nodejs', 'ruby', 'php', 'go', 'swift'];

  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

LanguageSelector.propTypes = {
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
};

export default LanguageSelector;
