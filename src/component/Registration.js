import { Link } from "react-router-dom";
import { useAdminContext } from "../context/admin.context";

function Registration(){
    let {newUserDetails, handelInput, saveRecord} = useAdminContext();



    return <>
        <section className="row" style={{height:"100vh"}}>
            <section className="col-12 bg-back d-flex justify-content-center align-content-center ">
                <section className="card  rounded-0 m-5" >
                    <h3 className="h4 mb-3 text-center text-white">
                    <i className="fa fa-edit me-2" aria-hidden="true"></i>
                        User Resgistration
                    </h3>
                    <form action="">
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-warning ">
                            <i className="fa fa-user-secret fa-2x" aria-hidden="true"></i>
                            </span>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter a user name" 
                            value={newUserDetails.name}
                            onChange={handelInput}
                            name="name"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-warning ">
                            <i className="fa fa-envelope-open fa-2x" aria-hidden="true"></i>
                            </span>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Email" 
                            value={newUserDetails.email}
                            onChange={handelInput}
                            name="email"
                            />
                            
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text bg-warning px-3">
                            <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                            </span>
                            <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter a Phone Number" 
                            value={newUserDetails.mobile}
                            onChange={handelInput}
                            name="mobile"
                            />
                        </div>
                        {/* <div className="input-group-text mb-3 ">
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
                         </div> */}
                         
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
                            <input type="text" className="form-control" placeholder="Enter password" 
                            value={newUserDetails.password}
                            onChange={handelInput}
                            name="password"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text px-3 bg-warning ">
                            <i className="fa fa-unlock-alt fa-2x text-success" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Confirm password" />
                        </div>

                        <div className="text-center">
                            <button className="btn btn-success me-2 rounded-0" type="button" 
                            onClick={saveRecord}
                            >
                                <i className="fa fa-save me-2"></i>
                                Save
                            </button>
                            <button className="btn btn-outline-danger rounded-0" type="reser">
                                <i className="fa fa-history me-2"></i>
                                Reset
                            </button>
                        </div>
                        <div>
                            <p className="m-0 text-white text-center h5 mt-3"> Have account ? 
                                <Link to="/login" className="text-white-50">Sign In</Link> </p>
                        </div>
                    </form>
                </section>
            </section>
            </section>
           
    </>;
}

export default Registration;