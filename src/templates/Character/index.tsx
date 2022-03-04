/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import * as S from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getCharacterById,
  getCharacterDetailedInfo,
} from "../../services/api/userApi";
import { CharacterType, DetailsLists, List } from "../../types/character";

export function CharacterTemplate() {
  const { query } = useRouter();
  const characterId = query.id?.toString();
  const initialStateDetails: DetailsLists = {
    comics: [],
    stories: [],
    series: [],
    events: [],
  };
  const initialCharacter: CharacterType = {
    id: 1,
    name: "Loading",
    hero: "Loading",
    description: "Loading",
    thumbnail: {
      extension: "",
      path: "/",
    },
  };
  const initialViewState: List[] = [
    {
      id: 1,
      thumbnail: {
        extension: "",
        path: "/",
      },
      title: "Loading",
      src: "/",
    },
  ];

  const [character, setCharacter] = useState(initialCharacter);
  const [details, setDetails] = useState(initialStateDetails);
  const [selectView, setSelectView] = useState(initialViewState);

  useEffect(() => {
    if (characterId) {
      console.log(characterId, "defined character ID");

      getCharacterById(characterId).then((data) => {
        setCharacter(data.data.results[0]);
      });

      getCharacterDetailedInfo(characterId, "comics").then((data) => {
        setSelectView(data.data.results);
        setDetails((old) => ({
          ...old,
          comics: data.data.results,
        }));
      });

      getCharacterDetailedInfo(characterId, "events").then((data) => {
        setDetails((old) => ({
          ...old,
          events: data.data.results,
        }));
      });
      getCharacterDetailedInfo(characterId, "stories").then((data) => {
        setDetails((old) => ({
          ...old,
          stories: data.data.results,
        }));
      });
      getCharacterDetailedInfo(characterId, "series").then((data) => {
        setDetails((old) => ({
          ...old,
          series: data.data.results,
        }));
      });
    }
  }, [characterId]);

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Infos>
            {character.thumbnail && (
              <figure>
                <Image
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt={`${character.name} thumbnail`}
                  width={850}
                  height={850}
                  quality={50}
                />
              </figure>
            )}
            <section>
              <h1>{character?.hero}</h1>
              <h2>{character?.name}</h2>
              <div className="description">{character?.description ?? ""}</div>
            </section>
          </S.Infos>

          <S.List>
            <header>
              {details.comics?.length >= 4 && (
                <h2
                  className={`${selectView === details.comics ? "active" : ""}`}
                  onClick={() => setSelectView(details.comics)}
                >
                  Comics
                </h2>
              )}
              {details.events?.length >= 4 && (
                <h2
                  className={`${selectView === details.events ? "active" : ""}`}
                  onClick={() => setSelectView(details.events)}
                >
                  Events
                </h2>
              )}
              {details.series?.length >= 4 && (
                <h2
                  className={`${selectView === details.series ? "active" : ""}`}
                  onClick={() => setSelectView(details.series)}
                >
                  Series
                </h2>
              )}
              {details.stories?.length >= 4 && (
                <h2
                  className={`${
                    selectView === details.stories ? "active" : ""
                  }`}
                  onClick={() => setSelectView(details.stories)}
                >
                  Stories
                </h2>
              )}
            </header>

            <S.Cards>
              {selectView?.map((comic: any) => {
                return (
                  <div key={comic?.id}>
                    {comic.thumbnail && (
                      <Image
                        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        alt={`${comic?.title} thumbnail`}
                        width={558}
                        height={850}
                        quality={50}
                      />
                    )}
                    <h3>{comic?.title}</h3>
                  </div>
                );
              })}
            </S.Cards>
          </S.List>
        </S.Content>
      </S.Container>
    </>
  );
}
