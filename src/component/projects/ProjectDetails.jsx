import React from "react";
import { Link } from "react-router-dom";
import { ProjectsDetails } from "./ProjectsData";
import { useParams } from 'react-router-dom';


// Swiper 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow  } from 'swiper/modules';

import parse from "html-react-parser"

import logo from "../../assets/my_logo.png"


const ProjectDetails = () => {
    const { id } = useParams();
    const project = ProjectsDetails.find((p) => p.id === parseInt(id));

    if (!project) {
        return <div>not found </div>;
    }


    return(
    <>
        <div className="container container-details">
            <img className="logo-details" src={logo} alt="" />

            <div className="details">
                <h1 className="name-project">*{project.name}*</h1>
                <p>- Look at the pictures and read the details beneath them to understand the project.</p>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        effect="coverflow"
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        {project.images1.map((image, index) => (
                            <SwiperSlide key={index}>
                            <img className="img-details" src={Object.values(image)[0]} alt="" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <p className="desc-project">-{parse(project.description1)}</p>


            </div>
            <Link to="/" className="btn-project">go to Main Page</Link>
        </div>
    </>
    )
}

/*



<Carousel  infinite={true}>
                    {project.images1.map((image, index) => (
                    <div className="parent-project" key={index}>
                        <img className="img-project-slider" src={Object.values(image)[0]} alt="" />
                    </div>
                    ))}
                </Carousel>


                


*/

export default ProjectDetails;