import { List,Datagrid, TextField, Edit, SimpleForm,EditButton, TextInput, Create } from "react-admin";

export const listUsers = (props) => (
    <List {...props}>
        <Datagrid >
            <TextField source="tenKhachHang"></TextField>
            <TextField source="soDienThoai"></TextField>
            <TextField source="email"></TextField>
            <TextField source="diaChi"></TextField>
            <TextField source="username"></TextField>
            <TextField source="xepLoai"></TextField>

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