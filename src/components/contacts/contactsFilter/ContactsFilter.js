const ContactsFilter = ({ value, onChange }) => {
  return (
    <label>
      <input type="text" value={value} onChange={onChange} />
      Find contacts by name
    </label>
  );
};
export default ContactsFilter;
