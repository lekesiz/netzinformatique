import SectorPage from "./SectorPage";
import { sectors } from "./sectorsData";

const SectorPages = {};

sectors.forEach(sector => {
  SectorPages[sector.slug] = () => <SectorPage sector={sector} />;
});

export default SectorPages;
