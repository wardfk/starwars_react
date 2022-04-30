import react, {useState, useEffect} from "react";

//IMPORT BACKGROUND
import background from './assets/img/bgstarwars.jpg';

// IMPORT CONTAINERS
import Header from './containers/Header/Header';
import Section from './containers/Section/Section';
import PeopleList from './containers/PeopleList/PeopleList';

//IMPORT COMPONENTS
import TitleH1 from './components/Text/TitleH1/TitleH1';
import PeopleCard from './components/PeopleCard/PeopleCard';

//IMPORT HOOKS
import {useStarwars} from './services/starwars-services';

function App() {

  const [peopleList, setPeopleList] = useState([]);
  const peopleService = useStarwars();

  useEffect(() => {
    const getPeopleList = async () => {
      const people = await peopleService.getPeople();
      const {results} = await people.data;
      console.log(results);
      setPeopleList(results);
    }
    getPeopleList();
  }, [])
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
      {peopleService.loading && <span>List is loading...</span>}
      {peopleService.peopleListError !== "" && <span>{peopleService.peopleListError}</span>}
      <PeopleList>
              {
                peopleList.map((people, index) => {
                  return(
                    <li key={index}>
                      <PeopleCard className=" card col-6"
                        name={people.name}
                      />
                    </li>
                  )
                })
              }
            </PeopleList>
    </Section>
    </div>
  );
}

export default App;
