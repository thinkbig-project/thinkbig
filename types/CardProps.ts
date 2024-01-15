export interface CardProps {
    type: string;
    title: string;
    desc: string;
    matches: Matches[];
}

export interface Matches {
    id: number;
    name: string;
    avatar: string;
}