// khai báo hàm tạo các hành động cho dự án

export const actionBook = (type1: any, payload1: any) => {
    return {
        type: type1,
        payload: payload1,
    };
};
// bình thường khi các e bắn action
/* 
    const dispatch= useDispatch({
        type:"ADD",
        payload:{id:1,name:"hoa"}
    })
        const dispatch= useDispatch(actionBook("ADD",{id:1,name:"hoa"}))
        disPatch(actionBook("DELETE",11))
*/