import React from "react";
import Accordion from "./accordion";

const FAQ = () => {
    const [openedAccordion, setOpenedAccordion] = React.useState(0);

    return (
        <section className="faq">
            <div className="container container--pall">
                <div className="faq__text">
                    <h1>
                        Frequently Asked Questions
                    </h1>
                    <p>
                        Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                    </p>
                </div>
                <div className="faq__accordionContainer">
                    <Accordion
                        key={1}
                        id={1}
                        question="What is Bookmark?"
                        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
                        openedAccordion={openedAccordion}
                        setOpenedAccordion={setOpenedAccordion}
                    />
                    <Accordion
                        key={2}
                        id={2}
                        question="How can I request a new browser?"
                        answer="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
                        openedAccordion={openedAccordion}
                        setOpenedAccordion={setOpenedAccordion}
                    />
                    <Accordion
                        key={3}
                        id={3}
                        question="Is there a mobile app?"
                        answer="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum."
                        openedAccordion={openedAccordion}
                        setOpenedAccordion={setOpenedAccordion}
                    />
                    <Accordion
                        key={4}
                        id={4}
                        question="What about other Chromium browsers?"
                        answer="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit."
                        openedAccordion={openedAccordion}
                        setOpenedAccordion={setOpenedAccordion}
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;