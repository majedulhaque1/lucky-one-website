import React from 'react';
import './Article.css';

const Article = () => {
    return (
        
        <div className='article-container'>
            <div>
            <h2>How dose work react?</h2>
            <p>React is a Javascript library and react use for building user interface. React is declarative and component based approch.React dose not change component react change only state.That means components dose change but change data in components.React actualy maintain a tree.Now lets we know how dose this work.We know react change only state.When will change a state or components data then react first of all go to the virtual DOM and create a node list as like tree then check which point or state change and then updates actual DOM.And react hanlde state efficienly.React will have multiple components and states.React allways check the virtual DOM.And then create a node list like tree and check which state is change and then updates efficienly actual DOM.</p>
            </div>
            <div>
                <h2>Props Vs State?</h2>
                <h3>Props</h3>
                <p>
                    <p>1.Props are read only.</p>
                    <p>2.We can not modified props.</p>
                    <p>3.We can pass data and event handler to the child components using props.</p>
                    <p>4.Props are immutable.</p>
                </p>
                <h3>State</h3>
                <p>
                    <p>1.State is like a store.</p>
                    <p>2.State change can be asynchronously.</p>
                    <p>We can modified state using setState</p>
                    <p>State is mutable</p>
                </p>
            </div>
            <div>
                <h3>How useState work?</h3>
                <p>UseState is a hook.Usestate allows have state variables in functional components.We are pass the initial state to the function.And this function return current value.And then update another function.</p>
            </div>
        </div>
    );
};

export default Article;