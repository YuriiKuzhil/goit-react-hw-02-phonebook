import { Label, Input } from './ContactsFilter.styled';
const ContactsFilter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
export default ContactsFilter;
