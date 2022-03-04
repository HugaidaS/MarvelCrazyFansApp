import * as Styled from "../../styles/charachtersStyles";
import { useQuery } from "react-query";
import api from "../../services/api/api";
import { CharacterType } from "../../types/character";
import { CharactersTemplate } from "../../templates/Characters";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  getCurrentPage,
  setPage,
} from "../../services/redux/pageReducer/pageActions";

const CarachtersDirectory = () => {
  const { query } = useRouter();
  const queryPageResult = Number(query.page);
  // I implemented redux feature here, but it is not really necessary here, react-query is enough
  setPage(queryPageResult);
  const pageModelData = getCurrentPage();
  const { page } = pageModelData.page;

  const fetchCharacters = async () => {
    const response = await api.get("characters", {
      params: {
        limit: 20,
        offset: (page - 1) * 20,
      },
    });
    return response;
  };

  const { data, status } = useQuery(["characters", page], fetchCharacters, {
    keepPreviousData: true,
  });

  const results: CharacterType[] = data?.data.data.results;
  const totalPages = data?.data.data.total;

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error</div>;
  }

  return (
    <Styled.Container>
      <CharactersTemplate characters={results} />
      <Styled.ButtonsContainer>
        <Link href={`/characters/${page - 1}`} passHref>
          <Styled.ButtonSwitch disabled={page === 1}>
            Previous
          </Styled.ButtonSwitch>
        </Link>
        <Link href={`/characters/${page + 1}`} passHref>
          <Styled.ButtonSwitch disabled={page === totalPages}>
            Next
          </Styled.ButtonSwitch>
        </Link>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
};

export default CarachtersDirectory;
