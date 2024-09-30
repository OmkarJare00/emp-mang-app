function UserListItem (){
    return <>
    <section className="my-3 border border-1 p-2 d-flex align-items-center justify-content-between shadow-sm">
                <section className="d-flex align-items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcjF15gXwe6ccf1ZcIg7etoCA-npdeVU3dA&s"
                 alt="" 
                 className="img-thumbnail " style={{width:"70px"}}
                 />
                <p className="d-flex flex-column m-0 ms-2">
                    <span className="fw-bold">Omkar jare</span>
                    <small> <i className="fa fa-envelope me-2"></i>omkarjare@gmail.com</small>
                </p>
                </section>
                <p className="fs-4 fw-bold text-success m-0">
                    <i className="fa fa-male me-2"></i>Male</p>
                <section className="gap-2 d-flex">
                    <button className="btn btn-outline-info btn-sm">
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </section>
            </section>
    </>
}

export default UserListItem;