import useGetMe from "../hooks/useGetMe";

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
    <div className="w-full flex justify-center items-center md:gap-5 gap-2">
      {characters.map((character, index) => {
        const isAvailable = character.count > 0;

        return (
          <div
            wordText={index}
            className={`relative flex justify-center items-center 
                  md:w-[116px] md:h-[109px] w-[65px] h-[61px]
                  rounded-xl border-[1.8px] border-[#FFF8E3]`}
            style={{
              background: isAvailable
                ? "linear-gradient(180deg, #D7603E 0%, #B7212C 100%)"
                : "linear-gradient(180deg, #FFE0B1 0%, #ECBF86 100%)",
            }}
          >
            <span className="text-white font-bold md:text-7xl text-5xl -translate-y-1.5">
              {character.wordText}
            </span>
            {isAvailable && (
              <span className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 text-white font-bold text-sm rounded-full bg-[#7A190D] py-1 px-2.5">
                {character.count}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
