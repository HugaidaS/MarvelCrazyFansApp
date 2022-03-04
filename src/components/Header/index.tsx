/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <div>
        <Link href="/characters/1">HOME</Link>
      </div>
      <div>Current version: Beta</div>
    </S.Header>
  );
}
