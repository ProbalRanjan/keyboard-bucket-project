import React from 'react';
import './QuestionAns.css'

const QuestionAns = () => {
    return (
        <div className="ques-ans-container">
            <h1>Questions And Answer</h1>

            {/* Question-1 */}
            <div className="ques">
                <h2>1. How does React Work?</h2>
                <p>
                    <span>Ans:</span>
                    React is a JavaScript library for building user interfaces. It converts JavaScript code to JSX(JavaScript XML) by the help of react package. A developer team realized that the DOM(Document Object Model) is too slow to build a client side apps. <br /> To make it faster, React implement a virtual DOM tree. This virtual DOM basically interact on the client side and React compare the changes between the real DOM and the virtual DOM. It update the real DOM through specific changes without reloading the webpage.
                </p>
            </div>

            {/* Question-2 */}
            <div className="ques">
                <h2>2. Differences between props and state!</h2>
                <div className='difference'>
                    <ul>
                        <h4>Props</h4>
                        <li>The Data is passed from one component to another via HTML attribute.</li>
                        <li>It is Immutable and cannot be modified.</li>
                        <li>State and function can be passed by props.</li>
                        <li>Props are read only.</li>
                        <li>Props can change the parent Component.</li>
                    </ul>

                    <ul>
                        <h4>State</h4>
                        <li>The Data is passed within the component only, like variable declare in a function.</li>
                        <li>It is Mutable can be modified.</li>
                        <li>Only the state component is used on the state.</li>
                        <li>State is both read and write.</li>
                        <li>Props can't change the parent Component.</li>
                    </ul>
                </div>
            </div>

            {/* Question-3 */}
            <div className="ques">
                <h2>3. How does useState work?
                </h2>
                <p>
                    <span>Ans:</span>
                    useState is a Hook in React that allows developer to have state variables in
                    functional components. It can store value, objects in an array. useState is an array which has 2 elements. One is a start variable and
                    other is a function(setFunction). The set function help developer to store
                    the value on the state variable as an array for future uses.
                </p>
            </div>
        </div>
    );
};

export default QuestionAns;