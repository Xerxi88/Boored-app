import pet from "../assets/boored-pet.png";
import { Generate } from "../types";

const IssuesContainer = ({ handleGenerate }: Generate) => {
  return (
    <div className="issues-container">
      <img src={pet} alt="pet-image" />
      <div className="gray-box">
        <h3>TROBA ALGUNA COSA A FER</h3>
        <button onClick={handleGenerate} className="btn-gen">
          Generar
        </button>
      </div>
    </div>
  );
};

export default IssuesContainer;
