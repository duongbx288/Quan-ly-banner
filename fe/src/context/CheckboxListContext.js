import { createContext, useState } from "react";



// Sử dụng để lưu các checkbox đã được tích 
// để khi chuyển trang (ở phần phân trang) thì 
// các items đã được tích sẽ vẫn giữ nguyên hiện trạng 
const CheckboxArrContext = createContext();

const CheckboxArrProvider = ({children}) => {
    const [countArr, setCountArr] = useState([]);
    
    const setCheckboxArr = (idNumber) => {
        setCountArr(state => [...state, idNumber]);
    }

    const removeArrItem = (idNumber) => {
        setCountArr(countArr.filter(item => {
            return item !== idNumber
        }));
    } 

    console.log(countArr);

    const checkboxArray = {
        countArr,
        setCheckboxArr,
        removeArrItem
    }
    
    return (
        <CheckboxArrContext.Provider value={checkboxArray}>
            {children}
        </CheckboxArrContext.Provider>
    )
}

export {CheckboxArrProvider, CheckboxArrContext};
