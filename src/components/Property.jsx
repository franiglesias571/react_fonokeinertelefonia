import React, { Fragment } from react;


const Propert = () => {
    return (
        <Fragment>

            <section className="property">

                <div className="center">
                    <h3>he comprao leche xd</h3>
                </div> {/* HASTA ACA VA EL CENTRO DE LA CARD DE LA TIENDA*/}

                <div className="row">
                    <div className="column">
                        <div className="single-property">
                            <div className="card">

                                <div className="property-thumb">
                                    <div className="property-tag">For Venta</div>
                                    <img src="" alt="" />
                                </div>

                                <div className="property-content"> {/*ACA VA EL CONTENIDO EN GENERAL, PRECIO Y MARCAS*/}
                                    <h3></h3>
                                    <div className="mark">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span></span>
                                    </div>
                                    <span className="amount"></span>
                                </div>

                                <div className="property-footer">
                                    <ul>
                                        <li>
                                            <span></span>    {/*ACA SON LAS PROPIEDADES DE ESTILO DEL FOOTER DE LA CARD*/}
                                        </li>
                                        <li>
                                            <img src="" alt=""/>
                                            <span></span>
                                        </li>
                                        <li><img src="" alt=""/>
                                            <span></span>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="more-property">
                    <a  className="property-btn" href="#">MAS PROPIEDADES</a>
                </div>

            </section>
        </Fragment>
    )



}