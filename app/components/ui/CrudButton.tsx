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
    <svg width="20" height="20" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Create</title>
        <path d="M11 13v5h2v-5h5v-2h-5V6h-2v5H6v2h5Z" clipRule="evenodd" fillRule="evenodd" />
    </svg>
);
const kindTrash = (
    <svg width="20px" height="20px" viewBox="0 -.5 21 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Delete</title>
        <g fillRule="evenodd" strokeWidth="1">
            <g transform="translate(-180 -360)">
                <g transform="translate(56 160)">
                    <path d="m130.35 216h2.1v-8h-2.1v8zm4.2 0h2.1v-8h-2.1v8zm-6.3 2h10.5v-12h-10.5v12zm2.1-14h6.3v-2h-6.3v2zm8.4 0v-4h-10.5v4h-5.25v2h3.15v14h14.7v-14h3.15v-2h-5.25z"></path>
                </g>
            </g>
        </g>
    </svg>
);
const kindUpdate = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>Update</title>
        <path d="M6.5,24H0v-6.5L17.5,0L24,6.5L6.5,24z M2,22h3.7L18,9.7L14.3,6L2,18.3V22z M15.7,4.6l3.7,3.7l1.8-1.8l-3.7-3.7L15.7,4.6z" />
    </svg>
);