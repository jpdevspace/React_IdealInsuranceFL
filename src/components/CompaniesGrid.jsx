import React from "react";
import { Grid, GridItem } from "./Styled/Grid";
import AmbetterLogo from "../assets/ambetter-logo.png";
import BrightHealthLogo from "../assets/brighthealth-logo.png";
import FloridaBlueLogo from "../assets/floridablue-logo.png";
import FreedomLogo from "../assets/freedom-logo.gif";
import HumanaLogo from "../assets/humana-logo.png";
import MolinaLogo from "../assets/molina-logo.png";
import OscarLogo from "../assets/oscar-logo.png";
import WellcareLogo from "../assets/wellcare-logo.png";

const CompaniesGrid = () => {
  const companies = [
    { logo: FloridaBlueLogo, name: "Florida Blue", size: "cover" },
    { logo: BrightHealthLogo, name: "Bright Health", size: "cover" },
    { logo: FreedomLogo, name: "Freedom Health" },
    { logo: AmbetterLogo, name: "Ambetter" },
    { logo: MolinaLogo, name: "Molina Healthcare", size: "cover" },
    { logo: WellcareLogo, name: "WellCare", size: "cover" },
    { logo: OscarLogo, name: "Oscar" },
    { logo: HumanaLogo, name: "Humana" },
  ];

  const gridContent = companies.map(company => (
    <GridItem 
      key={company.name} 
      bg={company.logo} 
      size={company.size ? company.size : null} />
  ));

  return (
    <Grid>
      {gridContent}
    </Grid>
  );
}
 
export default CompaniesGrid;