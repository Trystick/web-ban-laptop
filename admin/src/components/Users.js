import { List,Datagrid, TextField, Edit, SimpleForm,EditButton, TextInput, Create } from "react-admin";

export const listUsers = (props) => (
    <List {...props}>
        <Datagrid >
            <TextField source="tenKhachHang" label="Tên khác hàng"></TextField>
            <TextField source="soDienThoai" label="SĐT"></TextField>
            <TextField source="email" label="Email liên hệ"></TextField>
            <TextField source="diaChi" label="Địa chỉ"></TextField>
            <TextField source="username" label="Tải khoản"></TextField>
            <TextField source="xepLoai" label="Xếp loại"></TextField>

            <EditButton basePath='/users'></EditButton>
        </Datagrid>
    </List>
)

export const editUser =(props)=> (
    <Edit{...props}>
        <SimpleForm>
            <TextInput source="tenKhachHang" ></TextInput>
            <TextInput source="soDienThoai"></TextInput>
            <TextInput source="email" type="email"></TextInput>
            <TextInput source="diaChi"></TextInput>
            <TextInput source="username"></TextInput>
            <TextInput source="password"></TextInput>
            <TextInput source="xepLoai"></TextInput>
        </SimpleForm>
    </Edit>
)

export const createUser =(props)=> (
    <Create{...props}>
        <SimpleForm>
            <TextInput source="tenKhachHang"></TextInput>
            <TextInput source="soDienThoai"></TextInput>
            <TextInput source="email" type="email"></TextInput>
            <TextInput source="diaChi"></TextInput>
            <TextInput source="username"></TextInput>
            <TextInput source="password"></TextInput>
            <TextInput source="xepLoai"></TextInput>
        </SimpleForm>
    </Create>
)