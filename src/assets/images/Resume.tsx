import { FunctionalComponent } from "preact"

interface ResumeProps {
    className: string
}

const Resume: FunctionalComponent<ResumeProps> = ({
    className
}) => {
    return (
        <svg class={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" width="18" height="18">
            <path fill="inherit" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z">
            </path>
        </svg>
    );
}

export {
    Resume
}