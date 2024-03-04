import { useState, Fragment } from 'react';
import TabButton from './TabButtons/TabButton.jsx';
import { EXAMPLES } from '../data-with-examples.js';

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

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>
                    Components
                </TabButton>
                <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>
                    JSX
                </TabButton>
                <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>
                    Props
                </TabButton>
                <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>
                    State
                </TabButton>
            </menu>
            {tabContent}
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
        </section>
    );
}