const renderingTopics = [
    {
        id: "component-shape-and-readability",
        title: "Component shape and readability",
        summary: "Keep each component focused, readable, and easy to explain in one sentence.",
    },
    {
        id: "props-vs-hardcoded-values",
        title: "Props vs hardcoded values",
        summary: "Hardcoded values are fine for quick demos, but reusable components should receive data through props.",
    },
    {
        id: "composition-vs-inheritance",
        title: "Composition vs inheritance",
        summary: "React prefers combining smaller components over building inheritance hierarchies.",
    },
    {
        id: "children-pattern",
        title: "Children pattern",
        summary: "Use children when a wrapper component should control layout while callers provide inner content.",
    },
    {
        id: "what-causes-a-re-render",
        title: "What causes a re-render",
        summary: "A component re-renders when its state changes, its parent re-renders, or its props change.",
    },
    {
        id: "why-stable-keys-matter",
        title: "Why stable keys matter",
        summary: "Stable keys help React match list items correctly and avoid broken state or unnecessary DOM changes.",
    },
    {
        id: "conditional-rendering-patterns",
        title: "Conditional rendering patterns",
        summary: "Show different UI based on state, but keep the conditions readable and avoid nested branching mess.",
    },
    {
        id: "derived-ui-from-state-and-props",
        title: "Derived UI from state and props",
        summary: "Most UI should be computed from existing state and props instead of stored again as duplicated state.",
    },
];

function Rendering() {
    return (
        <section className="flex flex-col gap-4">
            <div className="border-b border-gray-200 pb-3">
                <h1 className="text-xl font-semibold text-gray-900">Rendering</h1>
                <p className="mt-1 text-sm text-gray-600">
                    Core rendering topics to review before moving into examples.
                </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-700">
                {renderingTopics.map((topic) => (
                    <a
                        key={topic.id}
                        href={`#${topic.id}`}
                        className="w-fit hover:text-gray-900 hover:underline"
                    >
                        {topic.title}
                    </a>
                ))}
            </div>

            <div
                id="component-shape-and-readability"
                className="scroll-mt-6 flex flex-col gap-3 rounded-md border border-gray-200 bg-gray-50 p-4"
            >
                <h2 className="text-base font-semibold text-gray-900">
                    Component shape and readability
                </h2>

                <p className="text-sm text-gray-700">
                    A good component has one clear job. A large UI block like a
                    product card is fine if it mainly renders product data and
                    exposes actions through props such as add to cart, compare,
                    or wishlist.
                </p>

                <p className="text-sm text-gray-700">
                    The parent usually owns page-level coordination and passes
                    data plus callbacks down. The child can still keep small
                    local UI behavior if that behavior belongs to the child.
                </p>

                <div className="rounded border border-gray-200 bg-white p-3">
                    <p className="text-sm font-medium text-gray-900">Example shape</p>

                    <div className="mt-3 flex flex-col gap-2 text-sm text-gray-700">
                        <div className="rounded border border-gray-200 bg-gray-50 px-3 py-2">
                            <p className="font-medium text-gray-900">Page</p>
                            <p className="mt-1 text-xs text-gray-600">
                                Owns page-level coordination
                            </p>
                        </div>

                        <p className="pl-2 text-xs text-gray-500">down to</p>

                        <div className="ml-4 rounded border border-gray-200 bg-gray-50 px-3 py-2">
                            <p className="font-medium text-gray-900">ProductList</p>
                            <p className="mt-1 text-xs text-gray-600">
                                Maps product data into cards
                            </p>
                        </div>

                        <p className="pl-6 text-xs text-gray-500">down to</p>

                        <div className="ml-8 rounded border border-gray-200 bg-gray-50 px-3 py-2">
                            <p className="font-medium text-gray-900">ProductCard</p>
                            <ul className="mt-2 flex flex-col gap-1 text-xs text-gray-600">
                                <li>receives product data as props</li>
                                <li>renders image, title, and price</li>
                                <li>calls add to cart and wishlist actions</li>
                                <li>can keep small local UI state when needed</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-700">
                    Bad shape is when one component mixes unrelated concerns:
                    fetching, filtering, cart totals, modal logic, and product
                    card rendering all in one place.
                </p>
            </div>

            {renderingTopics.slice(1).map((topic) => (
                <div
                    key={topic.id}
                    id={topic.id}
                    className="scroll-mt-6 rounded-md border border-gray-200 bg-gray-50 p-4"
                >
                    <h2 className="text-base font-semibold text-gray-900">
                        {topic.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-700">{topic.summary}</p>
                </div>
            ))}
        </section>
    );
}
export default Rendering;
