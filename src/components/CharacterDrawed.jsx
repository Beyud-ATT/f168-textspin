import useGetMe from "../hooks/useGetMe";
import ActiveBG from "../assets/active-bg.png";
import InactiveBG from "../assets/inactive-bg.png";
import FlashF from "../assets/flash-f.png";
import { Flex, Image } from "antd";

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
    <div className="w-full flex justify-center items-end md:gap-5 gap-2 max-[426px]:translate-x-1">
      <Image
        src={FlashF}
        preview={false}
        alt="background-none-light"
        className={`transition-opacity duration-300 ease-in-out lg:!w-[109px] lg:!h-[171px] md:!w-[69px] md:!h-[101px] !w-[40px] !h-[60px] max-[376px]:!w-[30px] max-[376px]:!h-[50px]`}
      />
      {characters.map((character, index) => {
        const isAvailable = character.count > 0;

        return (
          <div
            key={index}
            wordText={index}
            className={`relative flex justify-center items-center
            lg:w-[102px] lg:h-[103px] md:w-[82px] md:h-[83px] w-[45px] h-[46px] max-[376px]:w-[35px] max-[376px]:h-[36px]
            `}
            style={{
              backgroundImage: isAvailable
                ? `url(${ActiveBG})`
                : `url(${InactiveBG})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span
              className={`font-bold font-utm-helvetins lg:text-7xl md:text-5xl text-lg lg:-translate-y-1.5 -translate-y-0.5 
                mx-auto my-auto bg-gradient-to-b ${
                  isAvailable
                    ? "from-[var(--color-brand-primary)] to-[var(--color-brand-primary)]"
                    : "from-[#B1B1B1] to-[#333]"
                } bg-clip-text text-transparent`}
            >
              {character.wordText}
            </span>
            {isAvailable && (
              <span className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 text-white font-bold lg:text-[10px] text-[8px] rounded-full md:border-2 border-1 border-[var(--color-brand-primary)] bg-[#7A190D] lg:py-1 lg:px-1.5 py-0.5 px-1">
                {character.count}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
