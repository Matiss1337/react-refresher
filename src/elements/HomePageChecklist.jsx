// React hooks used in this component:
// - useState stores the checked/unchecked values
// - useEffect syncs that state to localStorage
import { useEffect, useState } from "react";

// Static checklist data.
// This stays outside the component because the list itself does not change.
const topics = [
    { id: "rendering", title: "Rendering" },
    { id: "state-and-forms", title: "State and Forms" },
    { id: "effects", title: "Effects" },
    { id: "refs", title: "Refs" },
    { id: "state-ownership", title: "State Ownership" },
    { id: "performance", title: "Performance" },
    { id: "context-and-custom-hooks", title: "Context and Custom Hooks" },
    { id: "async-ui", title: "Async UI" },
    { id: "routing", title: "Routing" },
    { id: "testing", title: "Testing" },
];

function HomePageChecklist() {
    // checkedTopics is the current state object.
    // Example shape:
    // { rendering: true, effects: false }
    //
    // setCheckedTopics updates that state.
    //
    // We pass a function to useState so localStorage is read only once
    // when the component first mounts.
    const [checkedTopics, setCheckedTopics] = useState(() => {
        // Read any previously saved checklist state from the browser.
        const saved = localStorage.getItem("home-page-checklist");

        // If there is nothing saved yet, start with an empty object.
        if (!saved) {
            return {};
        }

        // Convert the saved JSON string back into a JavaScript object.
        return JSON.parse(saved);
    });

    // Whenever checkedTopics changes, save the latest version to localStorage.
    useEffect(() => {
        localStorage.setItem("home-page-checklist", JSON.stringify(checkedTopics));
    }, [checkedTopics]);

    // Toggle one topic by its id.
    function handleCheckboxChange(topicId) {
        // Use the callback form so React gives us the latest current state.
        setCheckedTopics((current) => ({
            // Copy the existing values first.
            ...current,
            // Then flip only the clicked topic.
            [topicId]: !current[topicId],
        }));
    }

    return (
        <section className="flex flex-col gap-4">
            {/* Simple section heading */}
            <div className="border-b border-gray-200 pb-3">
                <h1 className="text-xl font-semibold text-gray-900">Home Page Checklist</h1>
                <p className="mt-1 text-sm text-gray-600">
                    Track the main React topics you want to refresh.
                </p>
            </div>

            <ul className="flex flex-col gap-2">
                {/* Turn each topic object into one rendered list item */}
                {topics.map((topic) => (
                    <li key={topic.id} className="rounded-md border border-gray-200 bg-white">
                        {/* Wrapping the input with label makes the text clickable too */}
                        <label className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800">
                            <input
                                type="checkbox"
                                // This makes the checkbox controlled by React state.
                                className="h-4 w-4"
                                checked={Boolean(checkedTopics[topic.id])}
                                // When changed, toggle the matching topic id.
                                onChange={() => handleCheckboxChange(topic.id)}
                            />
                            {/* Visible text shown next to the checkbox */}
                            <span>{topic.title}</span>
                        </label>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default HomePageChecklist;
