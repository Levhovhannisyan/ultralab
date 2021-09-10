import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import editCover from './images/editCoverphoto.png';
import leftArrow from './images/leftArrow.png';
import Person from './images/Person.png';
import defaultStar from './images/defaultStar.png';
import favoriteStar from './images/favoriteStar.png';
import skills from './images/skills.png';

const ExpertDetails = () => {

    const { id } = useParams();
    const {data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return(

        <div>
            <div className="blog-details">
                <div className="backgroundImage">
                    <div className="singleBlock">
                        <div className="singleLeft">

                        </div>
                        <div className="singleRight">
                            <Link to="/"><img className="goBackLeftArrow" src={leftArrow} alt="arrow" /> Go Back</Link>
                            <div className="editCoverPhoto">
                                <img src={editCover} alt="edit" />
                                <span>Edit cover photo</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="expert-content">


                        { isPending && <div>Loading...</div> }
                        { error && <div>{ error }</div> }
                        { blog && (
                            <div className="singleBlock">
                                <div className="singleLeft">
                                    <img src={Person} alt="user"/>
                                    <p>{blog.firstname} {blog.lastname}</p>
                                </div>
                                <div className="singleRight">
                                    <div className="singleRightRow">
                                        <h4>Basic info</h4>
                                        <button id={blog.id}
                                            onClick={function () {
                                                fetch('http://localhost:8000/blogs/' + blog.id, {
                                                    method: 'GET'
                                                }).then(() => {
                                                    blog.favorite = !blog.favorite;
                                                    if(blog.favorite){
                                                        console.log(favoriteStar);
                                                        document.getElementById(blog.id).innerHTML = '<img src="' + favoriteStar + '" alt="star" /><span>Add to favorites</span>';
                                                    }else{
                                                        document.getElementById(blog.id).innerHTML = '<img src="' + defaultStar + '" alt="star" /><span>Add to favorites</span>';
                                                    }

                                                })
                                            }}
                                        >
                                            <img src={defaultStar} alt="star" />
                                            <span>Add to favorites</span>
                                        </button>
                                    </div>


                                    <div className="basicInfo">

                                        <div className="infoColumn">
                                            <span>Location</span>
                                            <p>{blog.location}</p>
                                        </div>
                                        <div className="infoColumn">
                                            <span>Job title</span>
                                            <p>{blog.jobtitle}</p>
                                        </div>
                                        <div className="infoColumn">
                                            <span>Preferred employment type</span>
                                            <p className="employmentType">{blog.employmenttype}</p>
                                        </div>
                                    </div>


                                    <div className="basicInfo">
                                        <div className="infoColumn">
                                            <span>Preferred minimum time</span>
                                            <p>e.g. 5 hours</p>
                                        </div>
                                        <div className="infoColumn">
                                            <span>Houtly rate</span>
                                            <p>{blog.hourlyrate}</p>
                                        </div>
                                        <div className="infoColumn">
                                        </div>
                                    </div>


                                    <div className="basicInfo">
                                        <div className="about">
                                            <span>About</span>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet lacus posuere odio nec sed non. Eget senectus amet sit sem nec in. Gravida egestas nulla condimentum venenatis massa vitae parturient neque tempor. Hac morbi malesuada aliquet libero sit elit pellentesque tortor libero. Et dis pellentesque turpis amet, dictumst dui mi. At elit sed netus congue cras senectus et congue feugiat.
                                            </p>
                                            <p>
                                                Dignissim semper blandit amet nec integer facilisis. Cursus vulputate tempor, nec bibendum aliquet massa. Ornare lacinia pellentesque ultrices varius ligula. Penatibus faucibus nulla adipiscing ac aliquet fames tortor. Sed pellentesque habitasse morbi feugiat ornare amet. Lectus arcu, velit at egestas ut dui est amet, eget. Vestibulum vivamus morbi viverra rutrum amet nisl non risus. Massa.
                                            </p>
                                        </div>
                                    </div>


                                    <div className="skills">
                                        <h4>Skills</h4>

                                        <span>UI/UX <img src={skills} /></span>
                                        <span>Testing <img src={skills} /></span>
                                        <span>Teamwork <img src={skills} /></span>
                                        <span>Work breakdown<img src={skills} /></span>

                                    </div>
                                </div>


                            </div>
                        )}


                </div>



                <Footer />



            </div>
        </div>
    );
}

export default ExpertDetails;