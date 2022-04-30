import PagenavContainer from "./Pagenav-style";
import Button from "../../components/Button/Button";

const Pagenav = ({prevUrl, nextUrl, defClick}) => {
    return(
        <Pagenav>
            {
                prevUrl !== null && <Button onClick={() => defClick(prevUrl)}>Prev</Button>
            }
            {
                nextUrl !== null && <Button onClick={() => defClick(nextUrl)}>Next</Button>
            }
        </Pagenav>
    );
};

export default Pagenav;