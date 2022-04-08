import React from 'react';
import useFakeData from '../../Hooks/useFakeData';
import './About.css';

const About = () => {
    const courses = useFakeData();
    console.log(courses);
    return (
        <div>
            <div className='about my-4 mx-4 bg-primary text-white'>
                <h2>Information</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque magnam! Accusamus quibusdam facere consequatur illum ratione molestiae, nam enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque animi obcaecati illo non tenetur ipsum facere quod? Sunt, neque error! Fugiat, deserunt sit, ut exercitationem expedita magnam iure corporis quae minima omnis sint similique! Expedita numquam eligendi nesciunt id debitis facere, sapiente iure quibusdam quam sit nihil dignissimos incidunt? </p>
            </div>
            <div className='about my-4 mx-4 bg-success text-white'>
                <h2>General Information</h2>
                <hr />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio eaque consequatur sint animi iure corrupti nobis odio illo natus quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ratione nulla sunt tempore iusto doloribus adipisci odio, in quas nisi minima aliquid hic vitae modi laboriosam cum. Tempora inventore et fugiat. Ratione, fuga sed. Ullam ipsum accusamus error harum eligendi suscipit repellat iusto at eveniet necessitatibus. Eveniet officia amet alias?</p>
            </div>
            <div className='about my-4 mx-4 bg-danger text-white'>
                <h2>Why should you choose our Courses?</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatibus vero distinctio incidunt architecto officia ipsa quisquam obcaecati amet quia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sapiente id, necessitatibus vero deserunt, veniam enim corporis nemo rem rerum adipisci odio autem libero quaerat repudiandae quidem voluptates ut aperiam? Et, sit ratione quos harum repellendus officiis, nostrum labore pariatur, facilis aperiam fuga voluptatum molestias perferendis modi nesciunt distinctio reprehenderit?</p>
            </div>
            <div className='about my-4 mx-4 bg-warning text-dark'>
                <h2>Carrer Opportunity</h2>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ut laborum voluptatum, ducimus neque eos expedita. Magnam, voluptates. Mollitia, veritatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quisquam culpa voluptatum voluptates mollitia voluptate aliquid, est fuga? Ipsum, consectetur quidem. Laborum eveniet sapiente ut voluptates qui adipisci, iste dolorem error saepe impedit, placeat iure hic ratione ea? Corporis repudiandae quis eaque ipsam, ipsum nihil quaerat similique repellendus qui accusantium!</p>
            </div>
        </div>
    );
};

export default About;