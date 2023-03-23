import { ButtonBase } from '@mui/material';
import { List,Datagrid, TextField, TextInput, Button, EditButton, DeleteButton } from 'react-admin';
import { CreateDialog } from '@react-admin/ra-form-layout';
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
            <DeleteButton></DeleteButton>
            <EditButton> </EditButton>
        </Datagrid>
    </List>
)
export const CustomerList = (props) => (
    <>
        <List hasCreate>
            <Datagrid>
                ...
            </Datagrid>
        </List>
        <CreateDialog>
            <SimpleForm>
                <TextInput source="first_name" validate={required()} />
                <TextInput source="last_name" validate={required()} />
                <DateInput source="date_of_birth" />
            </SimpleForm>
        </CreateDialog>
    </>
);