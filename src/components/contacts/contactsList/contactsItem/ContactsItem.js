import PropTypes from 'prop-types';
import { ListItem, ItemText, ItemButton } from './ContactsItem.styled';
const ContactsItem = ({ name, number, onClick }) => {
  return (
    <ListItem>
      <ItemText>{name}:</ItemText>
      <ItemText>{number}</ItemText>
      <ItemButton type="button" onClick={onClick}>
        Delete
      </ItemButton>
    </ListItem>
  );
};
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactsItem;
