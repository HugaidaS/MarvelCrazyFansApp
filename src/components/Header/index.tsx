/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <div>
        <a
          href="https://developer.marvel.com/"
          target="_blank"
          rel="noreferrer"
        >
          Marvel API app
        </a>
      </div>
    </S.Header>
  );
}
