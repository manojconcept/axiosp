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
                        <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-building-fill"></i> <span>{value.comname}</span></h6>
                        <h6 className="card-subtitle mb-2 text-muted">{`${value.comcatchPhrase}`}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{`"${value.comBs}"`}</h6>
                    </div>
                    <div style={{ marginLeft: "10px",padding:"10px" }} className="card">
                        <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-house-door"></i> <span>{value.adstreet}</span></h6>
                        <h6 className="card-subtitle mb-2 text-muted">{`${value.adsuite}, ${value.adcity}`}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{value.adzipcode}</h6>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default MainCard;