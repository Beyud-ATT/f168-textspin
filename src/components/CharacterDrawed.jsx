import useGetMe from "../hooks/useGetMe";
import ActiveBG from "../assets/active-bg.png";
import InactiveBG from "../assets/inactive-bg.png";

const codes = ["F", "1", "6", "8"];

export default function CharacterDrawed() {
  const { me } = useGetMe();
  const { words, uniqueWords } = me?.data || { words: [], uniqueWords: [] };

  let characters = [];

  for (const code of codes) {
    if (uniqueWords.indexOf(code) < 0) {
      characters.push({ wordText: code, count: 0 });
    } else {
      const wordData = words.filter((character) => character.wordText === code);
      characters.push(wordData[0]);
    }
  }

  return (
    <div className="w-full flex justify-center items-center md:gap-5 gap-3 max-[376px]:gap-1 max-[426px]:translate-x-2">
      {characters.map((character, index) => {
        const isAvailable = character.count > 0;

        return (
          <div
            key={index}
            wordText={index}
            className={`relative flex justify-center items-center
                  lg:w-[131px] lg:h-[133px] md:w-[82px] md:h-[83px] w-[45px] h-[46px]
                  rounded-xl border-[1.8px] border-[#FFF8E3]`}
            style={{
              backgroundImage: isAvailable
                ? `url(${ActiveBG})`
                : `url(${InactiveBG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span
              className={`font-bold font-utm-helvetins lg:text-8xl md:text-5xl text-3xl lg:-translate-y-2 -translate-y-0.5 
                mx-auto my-auto bg-gradient-to-b ${
                  isAvailable
                    ? "from-[#FFF9EA] to-[#FFE098]"
                    : "from-[#B1B1B1] to-[#333]"
                } bg-clip-text text-transparent`}
            >
              {character.wordText}
            </span>
            {isAvailable && (
              <span className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 text-white font-bold lg:text-sm text-[8px] rounded-full bg-[#7A190D] lg:py-1 lg:px-2.5 py-0.5 px-1">
                {character.count}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
