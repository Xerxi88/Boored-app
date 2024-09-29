import { Activity } from "../types";

const SectionActivity = ({ activity }: Activity) => {
  return (
    <section className="activitat">
      <div>
        <h3>Activitat:</h3>
        <p>{activity}</p>
      </div>
    </section>
  );
};

export default SectionActivity;
