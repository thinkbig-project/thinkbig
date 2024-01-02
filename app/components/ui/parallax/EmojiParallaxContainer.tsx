type TEmojiParallaxContainer = {
  children: React.ReactNode;
};

function EmojiParallaxContainer({ children }: TEmojiParallaxContainer) {
  return (
    <div className='w-screen h-screen absolute bg-gray-800 overflow-hidden'>
      {children}
    </div>
  );
}
export default EmojiParallaxContainer;
