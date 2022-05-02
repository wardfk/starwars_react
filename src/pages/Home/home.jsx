import react, { useState, useEffect, useRef } from "react";

//IMPORT BACKGROUND
import background from '../../assets/img/bgstarwars.jpg';

// IMPORT CONTAINERS
import Header from '../../containers/Header/Header';
import Section from '../../containers/Section/Section';
import PeopleList from '../../containers/PeopleList/PeopleList';
import Modal from "../../containers/Modal/Modal";
import GenderFilter from '../../containers/Filter/GenderFilter/GenderFilter';
import Pagenav from '../../containers/Pagenav/Pagenav';
import StarshipList from "../../containers/StarshipList/StarshipList";
import FilterSearchContainer from "../../containers/FilterSearchContainer/FilterSearchContainer";

//IMPORT COMPONENTS
import TitleH1 from '../../components/Text/TitleH1/TitleH1';
import PeopleCard from '../../components/PeopleCard/PeopleCard';
import StarshipCard from "../../components/StarshipCard/StarshipCard";

import Button from "../../components/Button/Button";

//IMPORT HOOKS
import { useStarwars } from '../../services/starwars-services';
import { useModal } from '../../hooks/use-modal';
import { useSsModal } from '../../hooks/use-ss-modal';





function Home() {

  //MODAL
  const {handleModal, modalOpened} = useModal();
  const {handleSsModal, modalSsOpened} = useSsModal();
  
  //PEOPLESERVICE
  const peopleService = useStarwars();

  //PEOPLE
  const [peopleList, setPeopleList] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState({});
  const [searchedPeople, setSearchedPeople] = useState([]);

  //STARSHIPS
  const [starshipList, setStarshipList] = useState([]);
  const [selectedStarships, setSelectedStarships] = useState({});
  const [searchedStarships, setSearchedStarships] = useState([]);

  //SEARCH
  const searchBar = useRef(null);

  //FILTER GENDER
  const [filtered, setFiltered] = useState([]);
  const [filterGender, setFilterGender] = useState(0);


// SHOW US THE PEOPLE LIST
  useEffect(() => {
    const getPeopleList = async () => {
      const people = await peopleService.getPeople();
      const {results} = await people.data;
      setPeopleList(results);
      setSearchedPeople(results);
      setFiltered(results);
    }
    
    // SHOW US THE STARSHIP LIST
    const getStarshipList = async () => {
      const starships = await peopleService.getStarships();
      const {results} = await starships.data;
      setStarshipList(results);
      setSearchedStarships(results);
      console.log(results);
    }
  
  getPeopleList();
  getStarshipList();
  }, []); 

  const handleHuman = async (url) => {
    const human = await peopleService.getHuman(url);
    const humanInfo = await human.data;
    setSelectedPeople(humanInfo);
    handleModal(true);
  }

  const handleStarship = async (url) => {
    const starship = await peopleService.getStarship(url);
    const starshipInfo = await starship.data;
    setSelectedStarships(starshipInfo);
    handleSsModal(true); 
  }

  const handleSearch = () => {
    const searchedValue = searchBar.current.value.toLowerCase();
    const filteredPeople = peopleList.filter(people => people.name.toLowerCase().includes(searchedValue));
    const filteredStarship = starshipList.filter(starship => starship.name.toLowerCase().includes(searchedValue));
    setSearchedPeople(filteredPeople);
    setSearchedStarships(filteredStarship);
  };

   // FILTER WITH GENDER
   useEffect(() => {
    if(filterGender === 0){
      return setFiltered(peopleList);
    }
    const filter = peopleList.filter((people) => people.gender === filterGender);
    setFiltered(filter);
  }, [filterGender]);

  const handlePag = async (url) => {
    const people = await peopleService.getHuman(url);
    const {results} = await people.data;
    setPeopleList(results);
  }
  


  return (
    
    <div  style={{
      background: `URL(${background})`,
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
  }}>
    <Header />
    <Section>
      <div>  
        <div>
          <TitleH1 
            text="Chose your STAR WARS"
          />
        </div>
        
        
          <FilterSearchContainer>
            <input type="text" className="search" ref={searchBar} placeholder="Search" onChange={(e) => handleSearch(e)} />
            <br></br>
          <GenderFilter 
            setFilterGender={(id) => setFilterGender(id)} 
          />
        </FilterSearchContainer>
      </div>
      {peopleService.loading && <span>List is loading...</span>}
      {peopleService.peopleListError !== "" && <span>{peopleService.peopleListError}</span>}
      {peopleService.starshipListError !== "" && <span>{peopleService.starshipListError}</span>}
      <PeopleList>
        {
          searchedPeople.map((people, index) => {
            return(
              <li key={index}>
                <PeopleCard className="card"
                  name={people.name}
                  handleClick={() => handleHuman(people.url)}
                  />
              </li>
            )
          })
        }
        
        {
          searchedStarships.map((starship, index) => {
            return(
              <li key={index}>
                <StarshipCard 
                  name={starship.name}
                  handleClick={() => handleStarship(starship.url)}
                />
              </li>
            )
          })
        }
      </PeopleList>
        {/* <Pagenav 
          prevUrl={peopleList.previous}
          nextUrl={peopleList.next}
          onClick={(url)=>handlePag(url)}
        />  */}
    </Section>
    {
        modalOpened && (
          <Modal handleClick={() => handleModal(false)}>
            { 
              <div>
                <div>
                  <h2>Name:</h2>{selectedPeople.name}
                </div>
                  <h4>Height: </h4>{selectedPeople.height}
                  
                  <h4>Mass: </h4>{selectedPeople.mass}
                  
                  <h4>Hair color: </h4>{selectedPeople.hair_color}
                  
                  <h4>Skin color: </h4>{selectedPeople.skin_color}
                  
                  <h4>Eye color: </h4>{selectedPeople.eye_color}
                  
                  <h4>Birth year: </h4>{selectedPeople.birth_year}
              </div>
            }
          </Modal>
        )
      }
      {
        modalSsOpened && (
          <Modal handleClick={() => handleSsModal(false)}>
            { 
              <div>
                <div>
                  <h2>Name:</h2>{selectedStarships.name}
                </div>
                  <h4>Crew: </h4>{selectedStarships.crew}
                  
                  <h4>Passengers: </h4>{selectedStarships.passengers}
                  
                  <h4>Cargo: </h4>{selectedStarships.cargo_capicity}
                  
                  <h4>Hyperdrive: </h4>{selectedStarships.Hyperdrive_rating}
                  
              </div>
            }
          </Modal>
        )
      }
    </div>
  );
}

export default Home;