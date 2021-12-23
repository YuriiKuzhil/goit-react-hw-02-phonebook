const ContactsItem = ({ name, number, onClick }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={onClick}>
        Delete
      </button>
    </li>
  );
};
export default ContactsItem;
