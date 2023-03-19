import { List,Datagrid, TextField, Edit, SimpleForm,EditButton, TextInput, Create } from "react-admin";
import { listUsers } from "./Users";


export const listOrders = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="customerId" label="Mã khách hàng"></TextField>
            <TextField source="phoneNumber" label="SĐT"></TextField>
            <TextField source="totalOrder" label="Giá tiền"></TextField>
            <TextField source="address" label="Địa chỉ"></TextField>
            <TextField source="comment" label="Lời nhắn"></TextField>
            <EditButton basePath='/products'></EditButton>
        </Datagrid>
    </List>
)