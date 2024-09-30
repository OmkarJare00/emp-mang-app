import { Link, useNavigate } from "react-router-dom";

function Login(){
    let navigate = useNavigate();
    return <>
        <section className="row" style={{height:"100vh"}}>
            <section className="col-12 bg-back d-flex justify-content-center align-content-center ">
                <section className="card  rounded-0 m-5" >
                    <h3 className="h4 mb-3 text-center text-white">
                    <i className="fa fa-user-circle-o me-2" aria-hidden="true"></i>
                        User Login
                    </h3>
                    <form>
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
                            <span className="input-group-text px-3 bg-warning ">
                            <i className="fa fa-unlock-alt fa-2x text-white" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Enter password" />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-success me-2 rounded-0" 
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
                        <div>
                            <p className="m-0 text-white text-center h5 mt-3">Don't have account ? <Link to="/new-registration" className="text-white-50">Create new Account</Link> </p>
                        </div>
                    </form>
                </section>
            </section>
            </section>
           
    </>;
}

export default Login;