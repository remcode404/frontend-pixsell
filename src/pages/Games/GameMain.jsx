import GamesList from "./GamesList";
import LastProjects from "./LastProjects";
import MainPageGame from "./MainPageGame";

const GamePages = () => {
  return (
    <div>
      <MainPageGame />
      <GamesList />
      <LastProjects />
    </div>
  );
};

export default GamePages;
