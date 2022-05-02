import FilterContainer from "./GenderFilter-style";

const GenderFilter = ({setFilterGender}) => {

    return(
        <FilterContainer>
            <div className="filter-people">
                <h4>Gender People</h4>
                <div className="buttons">
                    <button onClick={() => setFilterGender(0)}>All</button>
                    <button onClick={() => setFilterGender("male")}>Male</button>
                    <button onClick={() => setFilterGender("female")}>Female</button>
                    <button onClick={() => setFilterGender("n/a")}>Gender neutral</button>
                </div>
            </div>
        </FilterContainer>
    );
} ;

export default GenderFilter;