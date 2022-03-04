/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <div>
        <a href="/" target="_blank" rel="noreferrer">
          Marvel API APP
        </a>
      </div>
    </S.Header>
  );
}
