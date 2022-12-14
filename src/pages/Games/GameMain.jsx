import GamesList from "./GamesList";
import LastProjects from "./LastProjects";
import MainPageGame from "./MainPageGame";

const GamePages = () => {
  return (
    <div className="">
      <div id="mainPage">
        <MainPageGame />
      </div>

      <div id="gameList">
        <GamesList />
      </div>
      <div id="lastProjects">
        <LastProjects />
      </div>
    </div>
  );
};

export default GamePages;
