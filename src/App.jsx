import react, { useState, useEffect, useRef } from "react";

//IMPORT BACKGROUND
import background from './assets/img/bgstarwars.jpg';

// IMPORT CONTAINERS
import Header from './containers/Header/Header';
import Section from './containers/Section/Section';
import PeopleList from './containers/PeopleList/PeopleList';
import Modal from "./containers/Modal/Modal";
import GenderFilter from './containers/Filter/GenderFilter/GenderFilter';

//IMPORT COMPONENTS
import TitleH1 from './components/Text/TitleH1/TitleH1';
import PeopleCard from './components/PeopleCard/PeopleCard';

//IMPORT HOOKS
import { useStarwars } from './services/starwars-services';
import { useModal } from './hooks/use-modal';





function App() {

  //MODAL
  const {handleModal, modalOpened} = useModal();
  
  //PEOPLESERVICE
  const peopleService = useStarwars();

  //PEOPLE
  const [peopleList, setPeopleList] = useState([]);
  const [selectedPeople, setSelectedPeople] = useState({});
  const [searchedPeople, setSearchedPeople] = useState([]);

  //SEARCH
  const searchBar = useRef(null);

  //FILTER GENDER
  const [filtered, setFiltered] = useState([]);
  const [filterGender, setFilterGender] = useState(0);

  useEffect(() => {
    const getPeopleList = async () => {
      const people = await peopleService.getPeople();
      const {results} = await people.data;
      setPeopleList(results);
      setSearchedPeople(results);
      setFiltered(results);
    }
    getPeopleList();
  }, []);

  const handleHuman = async (url) => {
    const human = await peopleService.getHuman(url);
    const humanInfo = await human.data;
    setSelectedPeople(humanInfo);
    handleModal(true);
  }

  const handleSearch = () => {
    const searchedValue = searchBar.current.value.toLowerCase();
    const filteredPeople = peopleList.filter(people => people.name.toLowerCase().includes(searchedValue));
    setSearchedPeople(filteredPeople);
  };

   // FILTER WITH GENDER
   useEffect(() => {
    if(filterGender === 0){
      return setFiltered(peopleList);
    }
    const filter = peopleList.filter((people) => people.gender === filterGender);
    setFiltered(filter);
  }, [filterGender]);


  return (
    
    <div  style={{
      backgroundImage: `URL(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
  }}>
    <Header />
    <Section>
      <TitleH1 
        text="Chose your STAR WARS"
      />
      <div>
        <input type="text" className="search" ref={searchBar} placeholder="Search" onChange={(e) => handleSearch(e)} />
        <br></br>
      </div>
      <GenderFilter 
        setFilterGender={(id) => setFilterGender(id)} 
      />
      {peopleService.loading && <span>List is loading...</span>}
      {peopleService.peopleListError !== "" && <span>{peopleService.peopleListError}</span>}
      <PeopleList>
        {
          filtered.map((people, index) => {
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
      </PeopleList>
    </Section>
    {
        modalOpened && (
          <Modal handleClick={() => handleModal(false)}>
            { 
              <div>
                <div>
                  <h2>Name:</h2>{selectedPeople.name}
                  <br></br>
                </div>
                <h4>Height: </h4>{selectedPeople.height}
                <br></br>
                <h4>Mass: </h4>{selectedPeople.mass}
                <br></br>
                <h4>Hair color: </h4>{selectedPeople.hair_color}
                <br></br>
                <h4>Skin color: </h4>{selectedPeople.skin_color}
                <br></br>
                <h4>Eye color: </h4>{selectedPeople.eye_color}
                <br></br>
                <h4>Birth year: </h4>{selectedPeople.birth_year}
              </div>
            }
          </Modal>
        )
      }
    </div>
  );
}

export default App;
