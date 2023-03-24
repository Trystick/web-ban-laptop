import { Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, List, ImageInput, ImageField, DeleteButton } from 'react-admin';

import React from "react";

const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />
];

export const listProducts = (props) => (
    <List {...props} filters={postFilters} >
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
            <EditButton basePath='/product'></EditButton>
            <DeleteButton basePath='/product'></DeleteButton>
        </Datagrid>
    </List>
)

export const editProduct =(props)=> (
    console.log(props),
    <Edit{...props}>
        <SimpleForm>
            
            <TextInput width="20%" source="tenSanPham" label="Tên sản phẩm"></TextInput>
            <TextInput source="url" label="URL"></TextInput>
            <TextInput source="category" label="Danh mục"></TextInput>
            <TextInput source="soluong" label="Số lượng"></TextInput>
            <TextInput source="thongSoSanPham" label="Thông số sản phẩm"></TextInput>
            <TextInput source="thongSoKyThuat" label="Thông số kỹ thuật"></TextInput>
            <TextInput source="baoHanh" label="Thời gian bảo hành"></TextInput>
            <TextInput source="giaTien" label="Giá tiền"></TextInput>
            <TextInput source="phanTramKhuyenMai" label="Phần trăm khuyến mãi"></TextInput>
            <TextInput source="khuyenMai" label="Khuyến mãi"></TextInput>
            <TextInput source="moTa" label="Mô tả"></TextInput>
            <TextInput source="activated" label="Kích hoạt"></TextInput>
            <TextInput source="hangSX" label="Hãng sản xuất"></TextInput>
        </SimpleForm>
    </Edit>
)

export const createProduct =(props)=> (
    <Create{...props}>
        <SimpleForm>
            <ImageInput source="pictures" required="true"  multiple="true" label="Related pictures" accept="image/*" placeholder={<p>Drop your file here</p>}>
    <ImageField source="src"  required="true" retitle="title" />
</ImageInput>
            <TextInput width="20%" source="tenSanPham" required={1} label="Tên sản phẩm"></TextInput>
            <TextInput source="url" required={1} label="URL"></TextInput>
            <TextInput source="category" required={1} label="Danh mục"></TextInput>
            <TextInput source="soluong" required={1} label="Số lượng"></TextInput>
            <TextInput source="thongSoSanPham" label="Thông số sản phẩm"></TextInput>
            <TextInput source="thongSoKyThuat" label="Thông số kỹ thuật"></TextInput>
            <TextInput source="baoHanh" label="Thời gian bảo hành"></TextInput>
            <TextInput source="giaTien" label="Giá tiền"></TextInput>
            <TextInput source="phanTramKhuyenMai" label="Phần trăm khuyến mãi"></TextInput>
            <TextInput source="khuyenMai" label="Khuyến mãi"></TextInput>
            <TextInput source="moTa" label="Mô tả"></TextInput>
            <TextInput source="activated" defaultValue={1} label="Kích hoạt"></TextInput>
            <TextInput source="hangSX" label="Hãng sản xuất"></TextInput>
        </SimpleForm>
    </Create>
)