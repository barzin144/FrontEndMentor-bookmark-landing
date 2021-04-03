import React from "react";

const Accordion = (props) => {
    const { id, answer, question, openedAccordion, setOpenedAccordion } = props;

    const accordionClickHandler = () => {
        if (openedAccordion === id) {
            setOpenedAccordion(0);
        }
        else {
            setOpenedAccordion(id);
        }
    }

    return (
        <div className="accordion">
            <div className="accordion__title" onClick={accordionClickHandler}>
                <h1 className={openedAccordion === id ? "open" : ""}>
                    {question}
                </h1>
            </div>
            <div className="accordion__description">
                <p className={openedAccordion === id ? "open" : ""}>{answer}</p>
            </div>
        </div>
    );
};

export default Accordion;