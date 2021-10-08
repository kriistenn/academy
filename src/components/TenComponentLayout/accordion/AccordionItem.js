import React from "react";
import styles from '../ten.module.css'
import plus from './toggle-plus.svg'

const AccordionItem = ({
     showDescription,
     ariaExpanded,
     fontWeightBold,
     item,
     index,
     onClick,
}) => (
    <div className={styles["faq__question"]} key={item.question}>
        <dt>
            <div
                aria-expanded={ariaExpanded}
                aria-controls={`faq${index + 1}_desc`}
                data-qa="faq__question-button"
                className={`faq__question-button ${fontWeightBold}`}
                onClick={onClick}
            >
                <h4 className="toggle-title">{item.question}</h4>
                <img alt={'plus'} src={plus}/>
            </div>
        </dt>
        <dd>
            <p
                id={`faq${index + 1}_desc`}
                data-qa="faq__desc"
                className={`faq__desc ${showDescription}`}
            >
                {item.answer}
            </p>
        </dd>
    </div>
);

export default AccordionItem;