import { CharacterTemplate } from "../../templates/Character";
import { CharacterType } from "../../types/character";

export type CharacterProps = {
  character: CharacterType;
};
const CharacterPage = () => {
  return (
    <div>
      <CharacterTemplate />
    </div>
  );
};

export default CharacterPage;
