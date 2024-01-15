import { TEmojiParallaxContainer } from "@/types"; // type/interface props

function EmojiParallaxContainer({ children }: TEmojiParallaxContainer) {
  return (
    <div className='w-screen h-screen absolute bg-gray-800 overflow-hidden'>
      {children}
    </div>
  );
}
export default EmojiParallaxContainer;
