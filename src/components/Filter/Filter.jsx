const Filter = ({ value, onChange }) => (
  <label>
    Finde contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);
export default Filter;
