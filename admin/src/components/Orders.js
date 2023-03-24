import { List, Datagrid, TextField, TextInput, DeleteButton, useRecordContext } from 'react-admin';
import { httpClient } from '../network/httpClient';
const postFilters = [
    <TextInput label="Search" source="q" alwaysOn />
];
function updateStates(id) {
    console.log(id);
    console.log('dang update');

    httpClient.put(`order/${id}/update/statusdone`)
    .then((result) => {
        result.json().then((resp) => {
            console.warn(resp)
        })
    })
    window.location.reload(false);
}
function ButtonCustomer() {
    const record = useRecordContext();
    return (
        <span>
            {record.status !== 4 ? <button onClick={() => updateStates(record.id)}>Xác nhận</button> : <span></span>}
        </span>
    )
}

function StatusCustomer() {
    const record = useRecordContext();
    return (
        <span>
            {record.status === 4 ? <span style={{ color: 'green' }}>Đã xác nhận</span> : <span style={{ color: 'red' }}>Chưa xác nhận</span>}
        </span>
    )
}
export const listOrders = (props) => (
    <List {...props} filters={postFilters}>
        <Datagrid>
            <TextField source="customerId" label="Mã khách hàng"></TextField>
            <TextField source="phoneNumber" label="SĐT"></TextField>
            <TextField source="totalOrder" label="Giá tiền"></TextField>
            <TextField source="address" label="Địa chỉ"></TextField>
            <TextField source="comment" label="Lời nhắn"></TextField>
            <StatusCustomer label="Trạng thái"></StatusCustomer>
            <DeleteButton></DeleteButton>
            <ButtonCustomer> </ButtonCustomer>
        </Datagrid>
    </List>
)
