import React, { useRef, useState } from "react";
import '../../styles/banner/CreateBanner.css';
import UserService from "../../services/UserService";
import * as BiIcons from "react-icons/bi";
import Validator from './validator';


function CreateBanner(props) {
    // THÊM:
    // - USER ADD,
    // - ROLE NEW USER.     
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState([]);

    const [checked, setChecked] = useState();

    const allRoles = [{
        id: 1,
        name: "Admin"
    },
    {
        id: 2,
        name: "User"
    }]
   
    

      
    const validator = new Validator(rules);

   

    const inputEl = (null); // biến để giới thiệu đầu vào ẩn

    const saveUser = (e) => {
        e.preventDefault();
        // let d = new Date();

        // let state = 0;
        // let userAdd = "Luong Van Minh";

        let userItem = {
            name: name,
            email: email,
            username: userName,
            password: password,
            phone: phone,
            role: (checked==1)?["admin"]:["user"],
        }
        console.log('user => ', userItem);

        UserService.createUser(userItem).then(res => {
            props.history.push('/banner/manage');
        })
    }
    const handleComeBack = () => {
        props.history.push('/user/manage');
    }

    return (

        <div className="create-banner-container" >
            <div className="top bg-success text-white">Admin</div>
            <div className="container">
                <div className="header-top">
                    <p className="mt-4 text-left"> Admin <BiIcons.BiChevronRight size={20} /> Quản lý người dùng <BiIcons.BiChevronRight size={20} /> Thêm người dùng</p>
                </div>
                <hr></hr>
                <div className="main-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>Thêm mới người dùng</h1>
                        </div>
                        <div className="col-sm-6 left">
                            <form >
                            <div className="mt-3 form-group">
                                    <label htmlFor="name">Tên người dùng</label>
                                    <input className="form-control" type="text" id="name" name="name"
                                        placeholder="ex: Phung Cong Cuong"
                                        value={name} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="password">Email</label>
                                    <input className="form-control" id="email" type="text" name="email"
                                        placeholder="ex: sapo123@gmail.com"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="password">Phone</label>
                                    <input className="form-control" id="phone" type="text" name="phone"
                                        placeholder="ex: 0934.567.890"
                                        value={phone} onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                {/* <div className="mt-2 form-group">
                                    <label htmlFor="bannerID">Id người dùng</label>
                                    <input className="form-control" id="bannerID" type="text" name="bannerID"
                                        placeholder="ex: 123..."
                                        value={bannerID} onChange={(e) => setBannerID(e.target.value)}
                                    />
                                </div> */}
                                
                                <div className="mt-2 form-group">
                                    <label htmlFor="username">Username</label>
                                    <input className="form-control" id="username" type="text" name="username"
                                        placeholder="ex: sapo123"
                                        value={userName} onChange={(e) => setUserName(e.target.value)}
                                    />
                                </div>

                                <div className="mt-2 form-group">
                                    <label htmlFor="password">Password</label>
                                    <input className="form-control" id="password" type="password" name="password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                

                                <div className="chossing-role">
                                    {allRoles.map(chossingRole =>(
                                        <div key = {role.id}>
                                            <input
                                                type="radio"
                                                checked={checked === chossingRole.id} 
                                                onChange={() => {
                                                    setChecked(chossingRole.id)
                                                }}
                                            />
                                            {chossingRole.name}
                                        </div>
                                    ))}
                                </div>

                            

                            </form>
                        </div>
                        <div className="col-sm-6 right">
                            <div className="col-sm-12">
                                {/* <h1 className="text-center">Ảnh minh họa</h1> */}
                            </div>
                            <div className="col-sm-12" id="imgFrame">

                                {/* <img className="img-rounded" alt="ảnh banner" src={imgUrl} /> */}
                            </div>
                            <div className="button">

                                <button type="button" className="btn btn-cancel" name="btncancel" >Hủy</button>
                                <button type="submit" className="btn btn-add " name="btnsubmit" onClick={(e) => saveUser(e)}>Thêm người dùng</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );

}

export default CreateBanner;
