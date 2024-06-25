import { useDispatch, useSelector } from "react-redux"
import { Book } from "../interface/interface";
import { actionBook } from "../actions/action";
export default function TodoBook() {
    // lấy data ở trong kho dùng useSelector()
    const data: any = useSelector(state => state);
    const disPatch= useDispatch();
    console.log("giá trị data lấy về", data);
    // hàm đi update trạng thái
    const handleUpdateStatus=(id:number)=>{
        console.log("id",id);
        // disPatch({
        //     type:"UPDATE_STATUS",
        //     payload:id
        // })
        disPatch(actionBook("UPDATE_STATUS",id));
    }
    return (
        <div>Book
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên sách</th>
                        <th>Người mượn</th>
                        <th>Ngày mượn</th>
                        <th>Ngày trả</th>
                        <th>Trạng thái</th>
                        <th>Chức năng</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        data.bookReducer.map((book: Book, index: number) => {
                            return (
                                <tr key={book.id}>
                                    <td>{index + 1}</td>
                                    <td>{book.name}</td>
                                    <td>{book.student}</td>
                                    <td>{book.borrow}</td>
                                    <td>{book.pay}</td>
                                    <td onClick={() => handleUpdateStatus(book.id)}>{book.status?<button>đã trả</button>:<button>chưa trả</button>}</td>
                                    <td>
                                        <button>Sửa</button>
                                        <button>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>


            </table>
        </div>
    )
}