import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export function HouseList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/house`, {}).then(res => {
            console.log(res.data)
            setList(res.data)
        })
    }, [])
    return (
        <>
            <div className="site-section site-section-sm bg-light">
                <h1>Houses List</h1>
                <div className="container">
                    <div className="row mb-5">
                        {list.map((item) => {
                            return (
                                <>
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="property-entry h-100">
                                            <a href="/detail" className="property-thumbnail">
                                                <div className="offer-type-wrap">
                                                    <span className="offer-type bg-success">Rent</span>
                                                </div>
                                                <Link to={'houses/' + item.id + '/detail'}><img
                                                    src={item.images.length > 0 ? item.images[0].fileUrl
                                                        : "https://firebasestorage.googleapis.com/v0/b/casemd4-3a742.appspot.com/o/images%2Fstarbucks.jpg?alt=media&token=543189a3-7d56-4647-a834-8d05d6f69969"}
                                                    alt="Image" className="img-fluid"></img></Link>
                                            </a>
                                            <div className="p-4 property-body">
                                                <a href="#" className="property-favorite"><span
                                                    className="icon-heart-o"></span></a>
                                                <h2 className="property-title"><a
                                                    href="property-details.html">{item.name}</a>
                                                </h2>
                                                <span className="property-location d-block mb-3"><span
                                                    className="property-icon icon-room"></span> {item.address}</span>
                                                <strong
                                                    className="property-price text-primary mb-3 d-block text-success">${item.price}</strong>
                                                <ul className="property-specs-wrap mb-3 mb-lg-0">
                                                    <li>
                                                        <span className="property-specs">Beds</span>
                                                        <span className="property-specs-number">{item.totalBedrooms}
                                                            <sup>+</sup></span>
                                                    </li>
                                                    <li>
                                                        <span className="property-specs">Baths</span>
                                                        <span
                                                            className="property-specs-number">{item.totalBathrooms}</span>
                                                    </li>
                                                    <li>
                                                        <span className="property-specs">SQ FT</span>
                                                        <span className="property-specs-number">7,000</span>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}