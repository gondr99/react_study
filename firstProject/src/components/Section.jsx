
export default function Section({title, children, ...props })
{
    // ...props로 합친후에 section에서 다시 전개.
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}