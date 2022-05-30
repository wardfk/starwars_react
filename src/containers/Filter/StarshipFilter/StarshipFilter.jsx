import StarshipFilterContainer from "./StarshipFilter-style";

const StarshipFilter = ({setFilterStarship}) => {

    return(
        <StarshipFilterContainer>
            <div className="filter-starship">
                <div className="buttons">
                    <button onClick={() => setFilterStarship(0)}>All</button>
                    <button onClick={() => setFilterStarship("male")}>Male</button>
                    <button onClick={() => setFilterStarship("female")}>Female</button>
                    <button onClick={() => setFilterStarship("n/a")}>Starship neutral</button>
                </div>
            </div>
        </StarshipFilterContainer>
    );
} ;

export default StarshipFilter;