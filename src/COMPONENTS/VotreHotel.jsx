import React from 'react'
import "../CSS/votreHotel.css"
import locate from "../IMAGES/location-2955.svg"
import door from "../IMAGES/door.svg"
import car from "../IMAGES/blue-car-icon.png"
import Dj from "../IMAGES/dj-image.jpg"
import magic from "../IMAGES/magic.avif"
import music from "../IMAGES/music-group.png"
import cocktail from "../IMAGES/cocktail2.png"

function VotreHotel() {
    return (
        <div className='main-wrapper '>
            <h3 className='title-text'>
                Votre hotel
            </h3>
            <div className='heading-wrapper d-flex mt-3 '>

                <div>
                    <img src={locate} style={{ height: "20px" }} className="ms-4" />
                    <label htmlFor="" className="icon-txt ms-2">
                        Rue du Calvaire, 4400 Nantes
                    </label>
                </div>
                <div>
                    <img src={door} style={{ height: "20px" }} className="ms-4" />
                    <label htmlFor="" className='icon-txt ms-2'>
                        7 Salles
                    </label>
                </div>
                <div>
                    <img src={car} style={{ height: "20px" }} className="ms-4" />
                    <label htmlFor="" className='icon-txt ms-2'>
                        177 Chambers
                    </label>
                </div>
            </div>
            <div className='row mt-4'>
                <div className="col-lg-2 pe-0 ">
                    <button style={{ width: "100%" }} className="cards-buttons">
                        Hebergement
                    </button>
                </div>
                <div className="col-lg-2 ps-0 pe-0">
                    <button className="cards-buttons">
                        Restauration
                    </button>
                </div>
                <div className="col-lg-2  ps-0 pe-0 ">
                    <button className="cards-buttons">
                        Seminaire
                    </button>
                </div>
                <div className="col-lg-2  ps-0 pe-0 ">
                    <button className="cards-buttons">
                        Activities
                    </button>
                </div>
                <div className="col-lg-2  ps-0 pe-0">
                    <button className="cards-buttons" id='active-btn'>
                        Evenementiel
                    </button>
                </div>
                <div className="col-lg-2 ps-0">
                    <button className="cards-buttons">
                        Offerts
                    </button>
                </div>

                <div className="col-lg-12  mt-4">
                    <div className="cards-wrapper">
                        <div className="row">
                            <p className='main-heading-card'>
                                Animation proposees
                            </p>
                            <div className="col-lg-3">
                                <div className="card-1">
                                    <div>
                                        <img src={Dj} alt="" style={{ width: "100%", height: "180px", borderRadius: "5px" }} />
                                    </div>
                                    <div className='card-bdy-1'>
                                        <div>
                                            <label htmlFor="" className='card-heading'>DJ</label>
                                            <p className='mt-2'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, placeat culpa praesentium amet voluptates vel sed .
                                            </p>
                                        </div>
                                        <div>
                                            <button className='price-tag'>
                                                10,00 $
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card-1">
                                    <div>
                                        <img src={magic} alt="" style={{ width: "100%", height: "180px", borderRadius: "5px" }} />
                                    </div>
                                    <div className='card-bdy-1'>
                                        <div>
                                            <label htmlFor="" className='card-heading'>Magecien</label>
                                            <p className='mt-2'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, placeat culpa praesentium amet voluptates vel sed .
                                            </p>
                                        </div>
                                        <div>
                                            <button className='price-tag'>
                                                10,00 $
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card-1">
                                    <div>
                                        <img src={music} alt="" style={{ width: "100%", height: "180px", borderRadius: "5px" }} />
                                    </div>
                                    <div className='card-bdy-1'>
                                        <div>
                                            <label htmlFor="" className='card-heading'>Grope de musique</label>
                                            <p className='mt-2'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, placeat culpa praesentium amet voluptates vel sed .
                                            </p>
                                        </div>
                                        <div>
                                            <button className='price-tag'>
                                                10,00 $
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card-1">
                                    <div>
                                        <img src={cocktail} alt="" style={{ width: "100%", height: "180px", borderRadius: "5px" }} />
                                    </div>
                                    <div className='card-bdy-1'>
                                        <div>
                                            <label htmlFor="" className='card-heading'>Bar a Cocktail</label>
                                            <p className='mt-2'>
                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, placeat culpa praesentium amet voluptates vel sed .
                                            </p>
                                        </div>
                                        <div>
                                            <button className='price-tag'>
                                                10,00 $
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default VotreHotel