import { List,Datagrid, TextField, Edit, SimpleForm,EditButton, TextInput, Create, Button} from "react-admin";

export const listProducts = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField width="20%" source="tenSanPham" label="Tên sản phẩm"></TextField>
            <TextField source="thongSoSanPham" label="Thông số sản phẩm"></TextField>
            <TextField source="thongSoKyThuat" label="Thông số kỹ thuật"></TextField>
            <TextField source="soluong" label="Số lượng"></TextField>
            <TextField source="baoHanh" label="Thời gian bảo hành"></TextField>
            <TextField source="giaTien" label="Giá tiền"></TextField>
            <TextField source="phanTramKhuyenMai" label="Phần trăm khuyến mãi"></TextField>
            <TextField source="khuyenMai" label="Khuyến mãi"></TextField>
            <TextField source="moTa" label="Mô tả"></TextField>
            <TextField source="hangSX" label="Hãng sản xuất"></TextField>
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