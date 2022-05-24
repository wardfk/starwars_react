import PagenavContainer from './Pagenav-style';
import pageButton from "../../components/Button/Button";

const Pagenav = ({peoplePrevUrl, peopleNextUrl,starshipPrevUrl, starshipNextUrl, onClick}) => {
    return(
        <PagenavContainer>
            {
                peoplePrevUrl !== null && <pageButton onClick={() => onClick(peoplePrevUrl, starshipPrevUrl)}>Prev</pageButton>
            }
            {
                peopleNextUrl !== null && <pageButton onClick={() => onClick(peopleNextUrl, starshipNextUrl)}>Next</pageButton>
            }
        </PagenavContainer>
    );
};

export default Pagenav;