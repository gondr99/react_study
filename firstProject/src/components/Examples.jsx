import { useState, Fragment } from 'react';
import TabButton from './TabButtons/TabButton.jsx';
import { EXAMPLES } from '../data-with-examples.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    //아무것도 안넣으면 초기값은 undefied
    function handleSelect(selectedBtn) {
        setSelectedTopic(selectedBtn);
        console.log(selectedTopic); //이건 올바르게 나오지 않는다.
    }

    let tabContent = (<p>Please select a topic.</p>);

    if (selectedTopic !== undefined) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>);
    }
    //ButtonsContainer="menu"
    return (
        <Section id="examples" title="Examples">
            <Tabs 
                
                buttons={
                <>
                    <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect("components")}>
                        Components
                    </TabButton>
                    <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect("jsx")}>
                        JSX
                    </TabButton>
                    <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect("props")}>
                        Props
                    </TabButton>
                    <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect("state")}>
                        State
                    </TabButton>
                </>
            }>
                {tabContent}
            </Tabs>

            {/*selectedTopic === undefined ? <p>Please select a topic.</p> : null*/}
            {/* JSX에서 null은 렌더링을 하지 않는 것을 의미한다. 아래와 같이 심플하게도 가능 */}
            {/*!selectedTopic && (<p>Please select a topic.</p>)*/}

            {/*selectedTopic !== undefined ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
          </div>) : null*/}
        </Section>
    );
}