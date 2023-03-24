import { List,Datagrid, TextField, Edit, SimpleForm,EditButton, TextInput, DeleteButton } from 'react-admin';

export const listUsers = (props) => (
    <List {...props}>
        <Datagrid >
            <TextField source="tenKhachHang" label="Tên khác hàng"></TextField>
            <TextField source="soDienThoai" label="SĐT"></TextField>
            <TextField source="email" label="Email liên hệ"></TextField>
            <TextField source="diaChi" label="Địa chỉ"></TextField>
            <TextField source="username" label="Tải khoản"></TextField>
            <TextField source="xepLoai" label="Xếp loại"></TextField>

            <EditButton basePath='/user'></EditButton>
            <DeleteButton basePath='/user'></DeleteButton>
        </Datagrid>
    </List>
)

export const editUser =(props)=> (
    <Edit{...props}>
        <SimpleForm>
            <TextInput source="tenKhachHang" label="Tên khác hàng"></TextInput>
            <TextInput source="soDienThoai" label="SĐT"></TextInput>
            <TextInput source="email" label="Email liên hệ"></TextInput>
            <TextInput source="diaChi" label="Địa chỉ"></TextInput>
            <TextInput source="username" label="Tải khoản"></TextInput>
            <TextInput source="password"></TextInput>
            <TextInput source="xepLoai" label="Xếp loại"></TextInput>
        </SimpleForm>
    </Edit>
)