import React from "react";
import "./carousel.css"
import Slider from "react-slick";
import image from "../../images/restaurants/restaurant2.avif";

function Carousel() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                        <div id="Carousel" class="carousel slide">
                        
                        <ol class="carousel-indicators">
                            <li data-target="#Carousel" data-slide-to="0" class="active"></li>
                            <li data-target="#Carousel" data-slide-to="1"></li>
                            <li data-target="#Carousel" data-slide-to="2"></li>
                        </ol>
                        
                       
                        <div class="carousel-inner">
                            
                        <div class="item active">
                            <div class="row">
                            <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                            <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                            <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                            <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                            </div>
                        </div>
                        
                        <div class="item">
                            <div class="row">
                                <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                                <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                                <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                                <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                            </div>
                        </div>
                        
                        <div class="item">
                            <div class="row">
                                <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                                <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                                <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                                <div class="col-md-3"><a href="#" class="thumbnail"><img src="http://placehold.it/250x250" alt="Image" style="max-width:100%;" /></a></div>
                            </div>
                        </div>
                        
                        </div>
                        <a data-slide="prev" href="#Carousel" class="left carousel-control">‹</a>
                        <a data-slide="next" href="#Carousel" class="right carousel-control">›</a>
                        </div>
                        
                </div>
            </div>
        </div>

    );
}

export default Carousel;





