import { GobalContext } from "../../config/Utils"
import { GetPost } from "../../config/Api"

const UserAdd = () => {
    const { setUadd,
        uAdd, users } = GobalContext()

    const handleChange = (e) => {
        const { name, value } = e.target
        if (value.trim() !== 0) {
            setUadd({ ...uAdd, [name]: value })
        }
    }

    const handleClick = () => {
        const userCheck = users.find((ele)=> ele.username === uAdd.username )
        userCheck !== undefined ? console.log("username already exists") :  GetPost(uAdd)
        
    }
    
    return (
        <frameElement>
            <div className="container mt-2">
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div style={{ boxShadow: "10px 10px 5px gray " }} className="card p-4 mt-5" s>

                            <div className="form-group">
                                <label htmlFor="exampleInputUsername">Name</label>
                                <input onChange={handleChange} type="text" className="form-control" id="name" name="name" aria-describedby="usernameHelp" placeholder="Enter name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputUsername">@Username</label>
                                <input onChange={handleChange} type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="Enter Username" />
                            </div>

                            <div className="form-group mt-2">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input onChange={handleChange} type="email" className="form-control" id="email" name="email" placeholder="email" aria-describedby="passwordHelp" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputStreet">Street</label>
                                <input onChange={handleChange} type="text" className="form-control" id="adstreet" name="adstreet" aria-describedby="streetHelp" placeholder="Enter street" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputstreet">Suite</label>
                                <input onChange={handleChange} type="text" className="form-control" id="adsuite" name="adsuite" aria-describedby="streetHelp" placeholder="Enter suite" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputCity">City</label>
                                <input onChange={handleChange} type="text" className="form-control" id="adcity" name="adcity" aria-describedby="cityHelp" placeholder="Enter city" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputzipcode">Zipcode</label>
                                <input onChange={handleChange} type="text" className="form-control" id="adzipcode" name="adzipcode" aria-describedby="zipcodeHelp" placeholder="Enter zipcode" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputgeolat">geolat</label>
                                <input onChange={handleChange} type="text" className="form-control" id="geolat" name="geolat" aria-describedby="geolatHelp" placeholder="Enter geolat" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputGeolng">geolng</label>
                                <input onChange={handleChange} type="text" className="form-control" id="geolng" name="geolng" aria-describedby="geolngHelp" placeholder="Enter geolng" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputphone">phone</label>
                                <input onChange={handleChange} type="text" className="form-control" id="phone" name="phone" aria-describedby="phoneHelp" placeholder="Enter phone" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputwebsite">website</label>
                                <input onChange={handleChange} type="text" className="form-control" id="website" name="website" aria-describedby="websiteHelp" placeholder="Enter website" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputcompanyname">company name</label>
                                <input onChange={handleChange} type="text" className="form-control" id="comname" name="comname" aria-describedby="websiteHelp" placeholder="Enter comname" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputcompany catchphrase">company catch phrase</label>
                                <input onChange={handleChange} type="text" className="form-control" id="comcatchPhrase" name="comcatchPhrase" aria-describedby="websiteHelp" placeholder="Enter comname" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputcomBs">Business Slogan</label>
                                <input onChange={handleChange} type="text" className="form-control" id="comBs" name="comBs" aria-describedby="comBsHelp" placeholder="Enter Business Solgan" />
                            </div>

                            <div className="d-flex justify-content-end mt-2">
                                <button onClick={handleClick} type="submit" className="btn btn-dark m-2">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </frameElement>
    )
}

export default UserAdd;