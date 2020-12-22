import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade, lineAnim, photoAnim } from "../animation";
import theracer from "../img/theracer-small.png";
import { Link } from "react-router-dom";

const TheRacer = () => {
    const [element, controls] = useScroll();

    return (
        <Movie
            ref={element}
            animate={controls}
            initial="hidden"
            variants={fade}
        >
            <motion.h2 variants={fade}>The Racer</motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <Link to="/work/the-racer">
                <Hide>
                    <motion.img
                        variants={photoAnim}
                        src={theracer}
                        alt="The Racer"
                    />
                </Hide>
            </Link>
        </Movie>
    );
};

const Movie = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default TheRacer;
