import React, {useState} from "react";
import styles from './ten.module.css'
import AccordionItem from "./accordion/AccordionItem";

const questionsAnswers = [
    {
        question: "How many team members can I invite?",
        answer:
            "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
        question: "What is the maximum file upload size?",
        answer:
            "No more than 2GB. All files in your account must fit your allotted storage space.",
    },
    {
        question: "How do I reset my password?",
        answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
    },
    {
        question: "Can I cancel my subscription?",
        answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
    },
    {
        question: "Do you provide additional support?",
        answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
    },
];

const TenComponentLayout = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
        const showDescription = index === activeIndex ? "show-description" : "";
        const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
        const ariaExpanded = index === activeIndex ? "true" : "false";
        return (
            <AccordionItem
                showDescription={showDescription}
                fontWeightBold={fontWeightBold}
                ariaExpanded={ariaExpanded}
                item={item}
                index={index}
                onClick={() => {
                    setActiveIndex(index);
                }}
            />
        );
    });
    return (
        <div className={styles["container"]}>
            <div className={styles["component"]}>
                <h2 className={styles['h2_ten']}>Часто задаваемые вопросы</h2>
                <dl className="faq__list">{renderedQuestionsAnswers}</dl>
            </div>
        </div>
    )
}


export default  TenComponentLayout