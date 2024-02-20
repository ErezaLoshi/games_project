
import GamesList from "../../components/Games/GamesList";
import GameForm from "../../components/GameForm/GameForm";


import GamesContextProvider from "../../lib/context/GamesContext/GamesContextProvider";
import Banner from "../../components/Banner/Banner";
import TabButton from "../../components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../components/data";

// interface Props{
//   components: dataInt
// }

// interface dataInt{
//       title: string,
//       description:string
//   }

export const Home = () => {
// const [selectedTopic, setSelectedTopic]= useState<Props>('')

// function handleSelect(selectedButton:Props){
// setSelectedTopic(selectedButton);



  return (
    <GamesContextProvider>
      <>
        {/* <Banner/> */}
        <div className="ui container mt-6 ">
        <GameForm />
        <hr />
        <GamesList />
        
        {/* <section id="examples">
           <h2>exmp</h2>
           <menu>
           <TabButton onSelect={()=>handleSelect('components')}>comps</TabButton>
           <TabButton onSelect={()=>handleSelect('jsx')}>props</TabButton>
           <TabButton onSelect={()=>handleSelect('props')}>lols</TabButton>
           <TabButton onSelect={()=>handleSelect('state')}>o</TabButton>
           </menu>
           <div>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
           </div>
        </section> */}
        </div>

      </>
    </GamesContextProvider>
  );
};
