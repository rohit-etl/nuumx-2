interface Policy {
    section: string;
    title: string;
    heading: string;
    description: string[];
    content?:any
}

interface PolicyContentProps {
    policy: Policy;
}

const PolicyContent = ({ policy }: PolicyContentProps) => {
    return (
        <div className="flex flex-col gap-4 text-white">
            {/* <h2 className="whitespace-pre-line">{policy.title}</h2>
            <h3 className="text-[var(--text-secondary)]">{policy.heading}</h3>
            <div className="flex flex-col gap-4 text-[var(--text-secondary)]">
                {policy.description.map((paragraph, index) => (
                    <p key={index} className="py-2">
                        {paragraph}
                    </p>
                ))}
            </div>
             */}
             {policy?.content}
        </div>
    )
}

export default PolicyContent;