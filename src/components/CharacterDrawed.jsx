import useGetMe from "../hooks/useGetMe";

export default function CharacterDrawed() {
  const { me } = useGetMe();
  const { words } = me?.data || { words: [] };
  const characters =
    words.length > 0
      ? words?.map((word) => {
          if (word.wordText === "F") {
            return { key: "F", count: word.count || 0 };
          }
          if (word.wordText === "1") {
            return { key: "1", count: word.count || 0 };
          }
          if (word.wordText === "6") {
            return { key: "6", count: word.count || 0 };
          }
          if (word.wordText === "8") {
            return { key: "8", count: word.count || 0 };
          }
        })
      : [
          { key: "F", count: 0 },
          { key: "1", count: 0 },
          { key: "6", count: 0 },
          { key: "8", count: 0 },
        ];

  return (
    <div className="w-full flex justify-center items-center md:gap-5 gap-2">
      {characters.map((character, index) => {
        const isAvailable = character.count > 0;

        return (
          <div
            key={index}
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
              {character.key}
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
