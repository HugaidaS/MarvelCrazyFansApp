import { useRouter } from "next/dist/client/router";
import { CardList } from "../../components/CardList";
import { CharacterType } from "../../types/character";

import * as S from "./styles";

interface CharactersProps {
  characters: CharacterType[];
}

export function CharactersTemplate({ characters }: CharactersProps) {
  return (
    <>
      <S.Container>
        <CardList characters={characters} />
      </S.Container>
    </>
  );
}
