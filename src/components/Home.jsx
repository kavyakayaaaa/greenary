import React from 'react'
import Picture from './Picture'
import logo from '../components/assests/multipleplant.webp'
import logo1 from '../components/assests/image.webp'
import logo2 from '../components/assests/image2.jpg'
import logo3 from '../components/assests/images3.jpg'

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img style={{ height: 500 }}src={logo} class="d-block w-100" alt="PICTURE" />
    </div>
                        <div class="carousel-item">
                            <img style={{ height: 500 }}src={logo1} class="d-block w-100" alt="PICTURE"/>
    </div>
                            <div class="carousel-item">
                                <img style={{ height: 500 }}src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" class="d-block w-100" alt="PICTURE" height="500px"/>
    </div>
                            <div class="carousel-item">
                                <img style={{ height: 500 }}src="https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg" class="d-block w-100" alt="PICTURE" />
    </div>                  
                            <div class="carousel-item">
                            <img style={{ height: 500 }}src={logo2} class="d-block w-100" alt="PICTURE"/>
    </div>
                            <div class="carousel-item">
                            <img style={{ height: 500 }}src={logo3} class="d-block w-100" alt="PICTURE"/>
    </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <Picture/>
                    </div>
                    )
}


export default Home
