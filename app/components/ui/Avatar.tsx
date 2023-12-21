import Image from "next/image";

export interface AvatarProps {
    url: string
}

export default function Avatar({url}: AvatarProps) {
    return (
        <img className={"aspect-square rounded-full w-full h-full hover:brightness-110"} src={url} alt={"Profile picture of the user"}></img>
    )
}