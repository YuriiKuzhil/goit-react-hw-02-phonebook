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
export default ContactsItem;
