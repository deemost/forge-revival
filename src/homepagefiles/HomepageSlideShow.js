import Carousel from 'react-bootstrap/Carousel';
import {Button, Image} from "react-bootstrap";
import image1 from '../photos/Image_1.jpg'
import image2 from '../photos/NewImage2.png'
import image3 from '../photos/NewImage3.png'
import image4 from '../photos/NewImage4.png'
import image5 from '../photos/NewImage5.png'
import image6 from '../photos/Image_6.jpg'
import './Homepage.css'

import RealDesign from "../photos/Real Design System.svg";
import AnimationHolder from "../photos/Animation holder.svg";

function HomePageSlideShow() {
    return (
        <Carousel fade controls={false} indicators={false} autoPlay={true} interval={3000} wrap={true}>
            <Carousel.Item>
                {/*<div className='bg-image'>*/}
                <Image src={image2}  fluid/>
                {/*</div>*/}
                <Carousel.Caption>
                    <div>
                        <h3 className={"imageslide"} >Northeastern’s home of builders, entrepreneurs, and leaders. </h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<div className='bg-image'>*/}
                <Image src={image3} fluid/>
                {/*</div>*/}
                <Carousel.Caption>
                    <div>
                        <h3 className={"imageslide"} >Northeastern’s home of builders, entrepreneurs, and leaders. </h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<div className='bg-image'>*/}
                <Image src={image4}  fluid/>
                {/*</div>*/}
                <Carousel.Caption>
                    <div>
                        <h3 className={"imageslide"} >Northeastern’s home of builders, entrepreneurs, and leaders. </h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/*<div className='bg-image'>*/}
                <Image src={image5} fluid/>
                {/*</div>*/}
                <Carousel.Caption>
                    <div>
                        <h3 className={"imageslide"} >Northeastern’s home of builders, entrepreneurs, and leaders. </h3>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            {/*<Carousel.Item>*/}
            {/*    /!*<div className='bg-image'>*!/*/}
            {/*    <Image src={image6} fluid/>*/}
            {/*    /!*</div>*!/*/}
            {/*    <Carousel.Caption>*/}
            {/*        <h3>Northeastern’s home of builders, entrepreneurs,*/}
            {/*            and leaders. </h3>*/}
            {/*    </Carousel.Caption>*/}
            {/*</Carousel.Item>*/}
        </Carousel>
    );
}

export default HomePageSlideShow;