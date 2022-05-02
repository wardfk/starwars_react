import PagenavContainer from "./Pagenav-style";
import pageButton from "../../components/Button/Button";

const Pagenav = ({prevUrl, nextUrl, onClick}) => {
    return(
        <Pagenav>
            {
                prevUrl !== null && <pageButton onClick={() => onClick(prevUrl)}>Prev</pageButton>
            }
            {
                nextUrl !== null && <pageButton onClick={() => onClick(nextUrl)}>Next</pageButton>
            }
        </Pagenav>
    );
};

export default Pagenav;