import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import Order from './Order/Order';
import Shop from './Shop/Shop';
// import './courses.json';
import { useEffect, useState } from 'react';

function App() {
    const [course, setCourse] = useState([]);
    const [courseInCart, setCourseInCart] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => {
                setCourse(data);
            })
    }, []);
    const handleAddCourse = (course) => {
        const courses = [...courseInCart, course];
        setCourseInCart(courses);
    }

    return (
        <div className="App">
            <h1 className='text-center text-primary'>This is ademy Aditya's learning home</h1>
            <Container>
                <Order courseInCart={courseInCart}></Order>
                <Row>
                    {
                        course.map(course => <Shop key={course._id} course={course} handleAddCourse={handleAddCourse}></Shop>)
                    }
                </Row>
            </Container>
        </div>
    );
}

export default App;
