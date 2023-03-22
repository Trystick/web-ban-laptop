import { List,Datagrid, TextField, Edit, SimpleForm,EditButton, TextInput, Create, DeleteButton, EditBase, FileField, FileInput, ImageInput, ImageField} from "react-admin";
import { ReactQueryDevtools } from 'react-query/devtools'
import { dataProvider1 } from "../network/dataProvider";
const authProvider = {
    // ...
    getPermissions: () => Promise.resolve({
        permissions: [
            { action: ['list', 'edit', 'clone'], resource: 'products' },
        ],
    }),
};
export const listProducts = (props) => (
    <List >
        <Datagrid>
        <TextField width="20%" source="hinhanh" label="Hình ảnh"></TextField>

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
            <EditButton basePath='/product' itemScope="true"></EditButton>
            <DeleteButton basePath='delete' />
        </Datagrid>
    </List>
)

export const editProduct =(props)=> (

    <EditBase{...props} >
    
        <SimpleForm>
        <TextInput source="id"  ></TextInput>
            <TextInput source="tenSanPham" required="true"></TextInput>
            <TextInput source="thongSoSanPham"></TextInput>
            <TextInput source="thongSoKyThuat"></TextInput>
            <TextInput source="soluong" required="true"></TextInput>
            <TextInput source="baoHanh"></TextInput>
            <TextInput source="giaTien"></TextInput>
            <TextInput source="phanTramKhuyenMai"></TextInput>
            <TextInput source="khuyenMai"></TextInput>
            <TextInput source="moTa"></TextInput>
            <TextInput source="url" required="true"></TextInput>
            <TextInput source="activated"></TextInput>
            <TextInput source="category"></TextInput>
            <TextInput source="hangSX"></TextInput>
        </SimpleForm>
      
    </EditBase>
)

export const createProduct =(props)=> (
    <Create{...props}>
    
        <SimpleForm>
           <ImageInput source="pictures" placeholder={<p>Drop your file here</p>} label="Related pictures" accept="image/*">
    <ImageField source="src" title="title" />
</ImageInput>
           <TextInput source="id"  ></TextInput>
            <TextInput source="tenSanPham" required="true"></TextInput>
            <TextInput source="thongSoSanPham"></TextInput>
            <TextInput source="thongSoKyThuat"></TextInput>
            <TextInput source="soluong" required="true"></TextInput>
            <TextInput source="baoHanh"></TextInput>
            <TextInput source="giaTien"></TextInput>
            <TextInput source="phanTramKhuyenMai"></TextInput>
            <TextInput source="khuyenMai"></TextInput>
            <TextInput source="moTa"></TextInput>
            <TextInput source="url" required="true"></TextInput>
            <TextInput source="activated"></TextInput>
            <TextInput source="category"></TextInput>
            <TextInput source="hangSX"></TextInput>
        </SimpleForm>
    </Create>
)