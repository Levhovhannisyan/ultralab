import { useState } from 'react';
import { useHistory } from 'react-router-dom';



const Create = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [jobtitle, setJobtitle] = useState('Tensorflow');
    const [location, setLocation] = useState('');
    const [employmenttype, setEmploymenttype] = useState('Project based');
    const [hourlyrate, setHourlyrate] = useState('');

    const [isPending, setIsPending] = useState(false);
    const favorite = false;
    const history = useHistory();




    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {firstname, lastname, jobtitle, location, employmenttype, hourlyrate, favorite};

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)

        }).then(() => {
            console.log('new item added');
            setIsPending(false);
            // history.go(-1);
            window.location.reload();
        })
    }

    return (
        <div className="create">
            <p className="createTitle">Add a new item</p>
            <p className="createDescription">Complete your profile below.</p>

            <form onSubmit={handleSubmit}>
                <div className="rowItem">
                    <label className="fieldItem">
                        <p>First name</p>
                        <input
                            type="text"
                            maxLength="11"
                            placeholder="First Name"
                            required
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </label>

                    <label className="fieldItem">
                        <p>Last name</p>
                        <input
                            type="text"
                            maxLength="11"
                            placeholder="Last Name"
                            required
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </label>
                </div>





                <div className="rowItem">
                    <label className="fieldItem">
                        <p>Job title</p>
                        <select
                          value={jobtitle}
                          onChange={(e) => setJobtitle(e.target.value)}
                        >
                            <option value="Tensorflow">Tensorflow</option>
                            <option value="Express.js">Express.js</option>
                            <option value="Vue">Vue</option>
                            <option value="React">React</option>
                        </select>
                    </label>
                    <label className="fieldItem">
                        <p>Location</p>
                        <input
                            type="text"
                            maxLength="11"
                            placeholder="e.g. Street Address, City, State"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </label>
                </div>


                <div className="rowItem">
                    <label className="fieldItem">
                        <p>Employment type</p>
                        <select
                            value={employmenttype}
                            onChange={(e) => setEmploymenttype(e.target.value)}
                        >
                            <option value="Project based">Project based</option>
                            <option value="Full time">Full time</option>
                            <option value="Part time">Part time</option>
                            <option value="Hourly">Hourly</option>
                        </select>
                    </label>
                    <label className="fieldItem">
                        <p>Hourly rate</p>
                        <input
                            type="text"
                            maxLength="7"
                            placeholder="e.g.5+ years"
                            required
                            value={hourlyrate}
                            onChange={(e) => setHourlyrate(e.target.value)}
                        />
                    </label>
                </div>


                {!isPending && <button className="save">Save</button>}
                {isPending && <button className="save" disabled>Adding...</button>}


                {/*<p>{firstname}</p>
                <p>{lastname}</p>
                <p>{jobtitle}</p>
                <p>{location}</p>
                <p>{employmenttype}</p>
                <p>{hourlyrate}</p>*/}
            </form>
        </div>
    )
}

export default Create;