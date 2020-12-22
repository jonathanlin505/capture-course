import React, { useState } from "react";
import Toggle from "./Toggle";

// Import styles
import styled from "styled-components";
import { About } from "../styles";

// Import Framer Motion
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
    const [faqToggle, setFaqToggle] = useState(false);

    return (
        <Faq>
            <h2>
                Any Questions? <span>FAQ</span>
            </h2>

            <AnimateSharedLayout>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Possimus, expedita?
                        </p>
                    </div>
                </Toggle>

                <Toggle title="Daily schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Possimus, expedita?
                        </p>
                    </div>
                </Toggle>

                <Toggle title="Different payment methods">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Possimus, expedita?
                        </p>
                    </div>
                </Toggle>

                <Toggle title="What products do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Possimus, expedita?
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 3rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem 0rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;

        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
