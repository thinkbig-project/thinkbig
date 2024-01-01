import React from 'react';

interface CrudButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    kind: 'create' | 'update' | 'delete';
}

const CrudButton: React.FC<CrudButtonProps> = ({ kind, ...props }) => {
    let icon;
    switch (kind) {
        case 'create':
            icon = kindCreate;
            break;
        case 'update':
            icon = kindUpdate;
            break;
        case 'delete':
            icon = kindTrash;
            break;
    }
    return (
        <button {...props} className="p-2 m-1 rounded bg-violet-600 hover:bg-violet-700 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 fill-white transition-all">
            {icon}<span className="sr-only">{kind}</span>
        </button >
    );
};
export default CrudButton;

const kindCreate = (
    <svg width="20" height="20" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <title>Create</title>
        <path fillRule="evenodd" d="M11 13v5h2v-5h5v-2h-5V6h-2v5H6v2h5Z" clipRule="evenodd" />
    </svg>
);
const kindTrash = (
    <svg height="20px" width="20px" viewBox="0 -0.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <title>Delete</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-179.000000, -360.000000)" >
                <g id="types" transform="translate(56.000000, 160.000000)">
                    <path d="M130.35,216 L132.45,216 L132.45,208 L130.35,208 L130.35,216 Z M134.55,216 L136.65,216 L136.65,208 L134.55,208 L134.55,216 Z M128.25,218 L138.75,218 L138.75,206 L128.25,206 L128.25,218 Z M130.35,204 L136.65,204 L136.65,202 L130.35,202 L130.35,204 Z M138.75,204 L138.75,200 L128.25,200 L128.25,204 L123,204 L123,206 L126.15,206 L126.15,220 L140.85,220 L140.85,206 L144,206 L144,204 L138.75,204 Z" id="delete-[#1487]">
                    </path>
                </g>
            </g>
        </g>
    </svg>);
const kindUpdate = (
    <svg height="20px" width="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Update</title>
        <g id="edit">
            <g><path d="M6.5,24H0v-6.5L17.5,0L24,6.5L6.5,24z M2,22h3.7L18,9.7L14.3,6L2,18.3V22z M15.7,4.6l3.7,3.7l1.8-1.8l-3.7-3.7L15.7,4.6z" /></g>
        </g>
    </svg>
);

