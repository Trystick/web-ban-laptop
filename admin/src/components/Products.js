import { List,Datagrid, TextField, Edit, SimpleForm,EditButton, TextInput, Create } from "react-admin";

export const listProducts = (props) => (
    console.log(props),
    <List {...props}>
        <Datagrid>
            <TextField source="tenSanPham"></TextField>
            <TextField source="thongSoSanPham"></TextField>
            <TextField source="thongSoKyThuat"></TextField>
            <TextField source="soluong"></TextField>
            <TextField source="baoHanh"></TextField>
            <TextField source="giaTien"></TextField>
            <TextField source="phanTramKhuyenMai"></TextField>
            <TextField source="khuyenMai"></TextField>
            <TextField source="moTa"></TextField>
            <TextField source="hangSX"></TextField>
            <EditButton basePath='/products'></EditButton>
        </Datagrid>
    </List>
)

export const editProduct =(props)=> (
    <Edit{...props}>
        <SimpleForm>
            <TextInput source="tenSanPham"></TextInput>
            <TextInput source="thongSoSanPham"></TextInput>
            <TextInput source="thongSoKyThuat"></TextInput>
            <TextInput source="soluong"></TextInput>
            <TextInput source="baoHanh"></TextInput>
            <TextInput source="giaTien"></TextInput>
            <TextInput source="phanTramKhuyenMai"></TextInput>
            <TextInput source="khuyenMai"></TextInput>
            <TextInput source="moTa"></TextInput>
            <TextInput source="hangSX"></TextInput>
        </SimpleForm>
    </Edit>
)

export const createProduct =(props)=> (
    <Create{...props}>
        <SimpleForm>
            <TextInput source="tenSanPham"></TextInput>
            <TextInput source="thongSoSanPham"></TextInput>
            <TextInput source="thongSoKyThuat"></TextInput>
            <TextInput source="soluong"></TextInput>
            <TextInput source="baoHanh"></TextInput>
            <TextInput source="giaTien"></TextInput>
            <TextInput source="phanTramKhuyenMai"></TextInput>
            <TextInput source="khuyenMai"></TextInput>
            <TextInput source="moTa"></TextInput>
            <TextInput source="hangSX"></TextInput>
        </SimpleForm>
    </Create>
)