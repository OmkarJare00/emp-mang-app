
import { useEffect } from "react";
import { useUserContext } from "../context/user.context";
import Header from "./Header";
import UserListItem from "./userListItem";

function UserList(){
    let {userList} = useUserContext();

    // mounting
    useEffect(() => {}, []);




    return <>
    <section className="row">
    <Header/>
        <section className="col-8 m-auto mt-3 ">
            <h4 className="text-center">Users List</h4>
            <UserListItem/>
            <UserListItem/>
            <UserListItem/>
            <UserListItem/>
            <UserListItem/>
            <UserListItem/>
            
    
        </section>
    </section>
    </>


}

export default UserList;