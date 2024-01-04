/**
 * * The EMOJI_Constants can be in another file and imported here, also they are intended to manage the emoji parallax
 * ! The constants can also be passed as props, but I don't know what would be the best way to do it in this case
 */
const EMOJI_PARALLAX_ITEM_COUNT = 30;
const EMOJI_PARALLAX_ITEM_ = '🧠';
const EMOJI_PARALLAX_SPEED_BASE = 20;
const EMOJI_PARALLAX_INDEX_DELAY = -0.5;

//function that randomly returns a, b or c

function EmojiParallaxItem() {
  const randomScale = () => Math.random() * (3 - 0.5) + 0.5;

  return (
    <div
      className={`grid grid-cols-${EMOJI_PARALLAX_ITEM_COUNT} grid-rows-1 grid-flow-col h-screen`}
    >
      {Array(EMOJI_PARALLAX_ITEM_COUNT)
        .fill(EMOJI_PARALLAX_ITEM_)
        .map((emoji, index) => {
          const scale = randomScale();
          const speed = EMOJI_PARALLAX_SPEED_BASE / scale;
          const delay = index * EMOJI_PARALLAX_INDEX_DELAY;
          return (
            <div
              key={index}
              className={'text-6xl move-y h-fit p-1 m-1 '}
              style={
                {
                  '--scale': scale,
                  '--speed': `${speed}s`,
                  animationDelay: `${delay}s`,
                  animationFillMode: 'backwards',
                } as React.CSSProperties
              }
            >
              {emoji}
            </div>
          );
        })}
    </div>
  );
}
export default EmojiParallaxItem;
