import { CheckboxContext } from "../../context/CheckboxContext";
import { useContext, useState } from "react";
import { CheckboxArrContext } from "../../context/CheckboxListContext";

const BannerStatus = ({ item }) => {
  const countContext = useContext(CheckboxContext);
  const checkboxArrContext = useContext(CheckboxArrContext);
  const checkboxArray = checkboxArrContext.countArr;


  // Dung de lay thong tin object co trong array
  const arrayItem = checkboxArray.find(banner => banner.id === item.id);

  // Thong tin luu vao trong array : gom co ti trong va id
  // 1!== 0 để kiếm tra xem banner có trong phần array trên context không
  const [status, setStatus] = useState({ id: item.id, rate: (typeof arrayItem === 'undefined') ? 1 : arrayItem.rate });

  const handleClickBox = (e, id) => {
    // Cần kiểm tra tổng số lượng box đã click xem đã đến giới hạn chưa

    if (document.getElementById(id).checked === true) {
      // Tăng số lượng ở context
      console.log(status);
      countContext.setCheckboxCount(countContext.count + 1);
      checkboxArrContext.setCheckboxObject(status);
    } else {
      // Giảm số lượng ở context
      countContext.setCheckboxCount(countContext.count - 1);
      checkboxArrContext.removeArrItem(id);
    }
  };

  const changeInfo = (id, rate) => {
    setStatus((prevState) => ({
      id: id,
      rate: rate,
    }));
    checkboxArrContext.updateCheckboxArr(id, rate);
  };

  // Chi cho phep nhap chu so
  const changeRate = (e) => {
    const regEx = /^[0-9\b]+$/;

    if (e.target.value === "" || regEx.test(e.target.value)) {
      changeInfo(item.id, e.target.value);
    }
  };

  return (
    <tr className="item" key={item.id}>
      <th className="text-center code">{item.code}</th>
      <td className="text-center name">{item.name}</td>
      <td className="text-center image">
        <img
          src="https://mdbootstrap.com/img/new/slides/041.webp"
          width={300}
          height={80}
          alt={""}
        />
      </td>
      <td className="text-center ">
        <input
          className="form-control text-center"
          type="text"
          maxLength="3"
          placeholder="Ví dụ: 10"
          value={status.rate}
          onChange={changeRate}
        />
      </td>
      <td className="text-center checkbox">
        <input
          type="checkbox"
          style={{ transform: "scale(1.5)" }}
          id={item.id}
          defaultChecked={
            checkboxArray.indexOf(
              checkboxArray.find((banner) => {
                return banner.id === item.id;
              })
            ) > -1
          }
          onChange={(e) => handleClickBox(e, item.id)}
        />
      </td>
    </tr>
  );
};

export default BannerStatus;
