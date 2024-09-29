import { Generate, FiltersProps } from "../types";
import Filters from "./Filters";
import IssuesContainer from "./IssuesContainer";

const SectionGenerator = ({
  handleGenerate,
  filter,
  setFilter,
}: Generate & FiltersProps) => {
  return (
    <section>
      <Filters filter={filter} setFilter={setFilter} />
      <IssuesContainer handleGenerate={handleGenerate} />
    </section>
  );
};

export default SectionGenerator;
