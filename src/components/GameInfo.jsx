import "../styles/GameInfo.css";

const GameInfo = ({ score, maxScore }) => {
  return (
    <div className="gameInfo">
      <h2>
        Score: <span className="score">{score}</span>
      </h2>
      <h2>
        Max Score: <span className="max-score">{maxScore}</span>
      </h2>
    </div>
  );
};

export default GameInfo;
