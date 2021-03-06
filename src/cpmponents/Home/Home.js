import { Button } from 'react-bootstrap';
import useFakeData from '../../Hooks/useFakeData';
import HomeCards from '../HomeCards/HomeCards';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    const courses = useFakeData();
    return (
        <div className='home'>

            <div className='home-cards'>
                {
                    courses.map(course => {
                        if (course.id <= 4) {
                            return <HomeCards
                                key={course.id}
                                course={course}></HomeCards>
                        }

                    })
                }
            </div>
            <div className='text-center mt-4'>
                <Link to='/services'>
                    <Button style={{ width: '200px', height: '60px', border: '2px solid goldenrod', color: 'yellow' }} variant="success" className='rounded-pill'>All Courses <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Link>
            </div>
        </div >
    );
};

export default Home;