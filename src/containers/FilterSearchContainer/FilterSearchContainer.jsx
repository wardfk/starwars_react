import FilterSearchContainerContainer from "./FilterSearchContainer-style"

const FilterSearchContainer = ({children}) => {
    return(
        <FilterSearchContainerContainer>
            {children}
        </FilterSearchContainerContainer>
    );
};

export default FilterSearchContainer;