import { List,Datagrid, TextField, TextInput} from 'react-admin';

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />
];

export const listOrders = (props) => (
    <List {...props} filters={postFilters}>
        <Datagrid>
            <TextField source="customerId" label="Mã khách hàng"></TextField>
            <TextField source="phoneNumber" label="SĐT"></TextField>
            <TextField source="totalOrder" label="Giá tiền"></TextField>
            <TextField source="address" label="Địa chỉ"></TextField>
            <TextField source="comment" label="Lời nhắn"></TextField>
        </Datagrid>
    </List>
)