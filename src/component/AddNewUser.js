import {  useNavigate } from "react-router-dom";
import Header from "./Header";
function AddNewUser(){
    let navigate = useNavigate();

    return <>
        <section className="row" >

        <Header/>

            <section className="col-12  d-flex justify-content-center align-content-center ">
                <section className="card  rounded-0 m-3 p-3" >
                    <h3 className="h4 mb-3 text-center text-secondary">
                    <i className="fa fa-user-plus me-2" aria-hidden="true"></i>
                        Add User
                    </h3>
                    <form action="">
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-warning ">
                            <i className="fa fa-user-secret fa-2x" aria-hidden="true"></i>
                            </span>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter a user name" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-warning ">
                            <i className="fa fa-envelope-open fa-2x" aria-hidden="true"></i>
                            </span>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Email" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text bg-warning px-3">
                            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                            </span>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter a Phone Number" />
                        </div>
                        <div className="input-group-text mb-3 ">
                         <span className="input-group-text bg-warning">
                            <i className="fa fa-users me-2 "></i>
                            Gender
                            </span>
                         <div className="input-group-text">
                            <input 
                            className="form-check-input mt-0" 
                            type="radio" 
                            value="" 
                            name="gender"
                            aria-label="Radio button for following text input" />
                         </div>
                            <span className="imput-group-text"> 
                                <i className="fa fa-male me-1"></i>
                                Male
                            </span>
                    
                         <div className="input-group-text">
                            <input 
                            className="form-check-input mt-0" 
                            type="radio" 
                            value="" 
                            name="gender"

                            aria-label="Radio button for following text input" />
                         </div>
                            <span className="imput-group-text"> 
                                <i className="fa fa-female me-1"></i>
                                Female</span>
            
                         <div className="input-group-text me-2">
                            <input 
                            className="form-check-input mt-0" 
                            type="radio" 
                            value="" 
                            name="gender"
                            
                            aria-label="Radio button for following text input" />
                         </div>
                            <span className="imput-group-text"> 
                                <i className="fa fa-question-circle me-1" aria-hidden="true"></i>
                                other</span>
                         </div>
                         
                        <div className="input-group mb-3 ">
                         <label className="input-group-text bg-warning" >
                            <i className="fa fa-file-image-o fa-2x"></i>
                        </label>
                         <input
                          type="file"
                          className="form-control p-"
                          />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text px-3 bg-warning ">
                            <i className="fa fa-unlock-alt fa-2x text-white" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Enter password" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text px-3 bg-warning ">
                            <i className="fa fa-unlock-alt fa-2x text-success" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Confirm password" />
                        </div>

                        <div className="text-center">
                            <button 
                              className="btn btn-success me-2 rounded-0" 
                              type="button"
                              onClick={()=> navigate("/")}
                              >
                                <i className="fa fa-save me-2"></i>
                                Save
                            </button>
                            <button className="btn btn-outline-danger rounded-0" type="reser">
                                <i className="fa fa-history me-2"></i>
                                Reset
                            </button>
                        </div>
                    </form>
                </section>
            </section>
            </section>
           
    </>;
}

export default AddNewUser;