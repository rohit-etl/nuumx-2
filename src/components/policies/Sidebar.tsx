interface Policy {
    section: string;
    title: string;
    heading: string;
    description: string[];
}

interface SidebarProps {
    policies: Policy[];
    onPolicyChange: (policyTitle: string) => void;
}

const Sidebar = ({ policies, onPolicyChange }: SidebarProps) => {
    return (
        <div className="w-full text-white flex flex-col gap-1">
            {policies.map((policy) => (
                <p 
                    key={policy.section}
                    className={`py-1 px-2 cursor-pointer rounded-sm`}
                    onClick={() => onPolicyChange(policy.section)}
                >
                    {policy.section}
                </p>
            ))}
        </div>
    )
}

export default Sidebar;