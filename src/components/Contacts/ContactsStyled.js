import styled from 'styled-components';

const ContactsList = styled.ol`
    font-size: 24px;
    margin-left: 40px;
`;
const ContactItem = styled.li`
    display: flex;
    align-items: center;
    margin-left: 40px;
`;

const DeleteContactBtn = styled.button`
    margin-left: 15px;
`;

export { ContactsList, ContactItem, DeleteContactBtn };