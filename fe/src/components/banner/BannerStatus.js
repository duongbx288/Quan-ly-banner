import { CheckboxContext } from "../../context/CheckboxContext";
import { useContext } from "react";
import { CheckboxArrContext } from "../../context/CheckboxListContext";

const BannerStatus = ({item}) => {

    const countContext = useContext(CheckboxContext);
    const checkboxArrContext = useContext(CheckboxArrContext);
    const checkboxArray = checkboxArrContext.countArr;
    const handleClickBox = (e, id) => {
          
        // Cần kiểm tra tổng số lượng box đã click xem đã đến giới hạn chưa

        if (document.getElementById(id).checked === true) {
            // Tăng số lượng ở context 
            countContext.setCheckboxCount(countContext.count + 1);
            checkboxArrContext.setCheckboxArr(id);
        }
        else {
            // Giảm số lượng ở context
            countContext.setCheckboxCount(countContext.count - 1);
            checkboxArrContext.removeArrItem(id);
        }
    }

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
          placeholder="Ví dụ: 10"
        />
      </td>
      <td className="text-center checkbox">
        <input
          type="checkbox"
          style={{ transform: "scale(1.5)" }}
          id={item.id}
          defaultChecked={item.id === checkboxArray.find(id => id === item.id)}
          onChange={(e) => handleClickBox(e, item.id)}
        />
      </td>
    </tr>
  );
};

export default BannerStatus;
