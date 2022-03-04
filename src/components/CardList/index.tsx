import Image from "next/image";
import Link from "next/link";

import * as S from "./styles";

type CardListProps = {
  characters: any[];
};

export function CardList({ characters }: CardListProps) {
  return (
    <S.Content>
      {characters.map(({ thumbnail, name, hero, id }) => {
        return (
          <S.Character key={id}>
            <Link href={`/character/${id}`}>
              <a>
                <S.Thumb>
                  <figure className="wrapper">
                    <Image
                      src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
                      alt={`${name} thumbnail`}
                      quality={50}
                      layout={"fill"}
                    />
                  </figure>
                </S.Thumb>
                <div className="info">
                  <h2>{hero}</h2>
                  <h3>{name ? name : "No name"}</h3>
                </div>
              </a>
            </Link>
          </S.Character>
        );
      })}
    </S.Content>
  );
}
