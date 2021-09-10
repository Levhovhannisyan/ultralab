import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Popup from './Popup';
import defaultStar from './images/defaultStar.png'
import favoriteStar from './images/favoriteStar.png'
import deleteExpert from './images/deleteExpert.png'
import Person from './images/Person.png'


const ExpertList = ({ blogs }) => {


    const history = useHistory();


    return (
        <div className="expert-list">
            <ul className="blog-preview titleLi">
                <li>First name</li>
                <li>Last name</li>
                <li>Job title</li>
                <li>Location</li>
                <li>Employment type</li>
                <li className="hourlyRate">Hourly rate (USD)</li>
                <li className="actions">Actions</li>
            </ul>
            {blogs.map((blog)=> (
                <ul className="blog-preview" key={blog.id}>
                    <Link to={`/expert/${blog.id}`}>
                        <li className="userName">
                            <img src={Person} alt="person"/>
                            <span>{blog.firstname}</span>
                        </li>
                        <li>{blog.lastname}</li>
                        <li>{blog.jobtitle}</li>
                        <li>{blog.location}</li>
                        <li>{blog.employmenttype}</li>
                        <li className="hourlyRate">{blog.hourlyrate}</li>
                    </Link>
                        <li className="actions">
                            <button id={blog.id}
                                    onClick={function () {
                                        fetch('http://localhost:8000/blogs/' + blog.id, {
                                            method: 'GET'
                                        }).then(() => {
                                            blog.favorite = !blog.favorite;
                                            if(blog.favorite){
                                                console.log(favoriteStar);
                                                document.getElementById(blog.id).innerHTML = '<img src="' + favoriteStar + '" alt="star" />';
                                            }else{
                                                document.getElementById(blog.id).innerHTML = '<img src="' + defaultStar + '" alt="star" />';
                                            }

                                        })
                                    }}
                            ><img src={defaultStar} alt="star" /></button>


                            <button
                                onClick={
                                    function (){
                                        fetch('http://localhost:8000/blogs/' + blog.id, {
                                            method: 'DELETE'
                                        }).then(() => {
                                            console.log('item was deleted');
                                            // history.push('/');
                                            window.location.reload();
                                        })
                                    }
                                }
                            ><img src={deleteExpert} alt="delete" /></button>
                        </li>

                </ul>
            ))}


            <Popup />
        </div>
    )

}

export default ExpertList;