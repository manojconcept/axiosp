function MainCard({ value, ind }) {
    return (
        <div key={ind} className="card m-1" style={{ width: "30rem" }}>
            <div className="card-body">
                <h5 className="card-title">{value.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">@{value.username}</h6>
                <div className="d-flex">
                    <div>
                        <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-envelope"></i> <span>{value.email}</span></h6>
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-telephone"></i> <span>{value.phone}</span></h6>
                    </div>
                </div>
                <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-globe2"></i><span> {value.website}</span></h6>
                <hr />
                <div className="d-flex">
                    <div>
                        <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-building-fill"></i> <span>{value.company.name}</span></h6>
                        <h6 className="card-subtitle mb-2 text-muted">{`${value.company.catchPhrase}`}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{`"${value.company.bs}"`}</h6>
                    </div>
                    <div style={{ marginLeft: "10px",padding:"10px" }} className="card">
                        <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-house-door"></i> <span>{value.address.street}</span></h6>
                        <h6 className="card-subtitle mb-2 text-muted">{`${value.address.suite}, ${value.address.city}`}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{value.address.zipcode}</h6>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default MainCard;