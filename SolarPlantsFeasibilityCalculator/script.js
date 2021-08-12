let calculatorBtn = document.getElementById("calculator");
let calculatorContainer = document.getElementById("calculatorContainer");
let aboutUsContainer = document.getElementById("aboutUsContainer");
let homeBtn = document.getElementById("homeBtn");
let homeContent = document.getElementById("homeContent");
let annualValuesContainer = document.getElementById("annualVelueInputs");
let generateYearsForAnnualValues = document.getElementById("generateBtn");
let footer = document.getElementById("footer");
let popUp = document.getElementsByClassName("modal")[0];
let calculateBtn = document.getElementById("calculateBtn");

let years = 0;
generateYearsForAnnualValues.addEventListener("click", () => {
  years = document.getElementById("yearsForAnnualValues").value;
  years++
  for (let i = 1; i < years; i++) {
    let outerDiv = document.createElement("div");
        outerDiv.classList.add("accordion-item");
        let header = document.createElement("h2");
        header.classList.add("accordion-header");
        header.setAttribute("id", `heading${i}`);
      let annualValuesButton = document.createElement("button");
        annualValuesButton.classList.add("accordion-button");
        if( i != 1){
          annualValuesButton.classList.add("collapsed");
          annualValuesButton.setAttribute("aria-expanded", "false");
        } else {
          annualValuesButton.setAttribute("aria-expanded", "true");
        }
        annualValuesButton.setAttribute("type", "button");
        annualValuesButton.setAttribute("data-bs-toggle", "collapse");
        annualValuesButton.setAttribute("data-bs-target", `#collapse${i}`);
        annualValuesButton.setAttribute("aria-controls", `collapse${i}`);
        let text = document.createTextNode(`Year ${i}`);
        annualValuesButton.appendChild(text);
        annualValuesButton.value = `Year ${i}`;
        header.appendChild(annualValuesButton);
        outerDiv.appendChild(header);
        

        
        let bodyDiv = document.createElement("div");
        bodyDiv.classList.add("accordion-collapse");
        bodyDiv.classList.add("collapse");
        if(i == 1){
          bodyDiv.classList.add("show");
        }
        bodyDiv.setAttribute("id", `collapse${i}`);
        bodyDiv.setAttribute("aria-labelledby", `heading${i}`)
        bodyDiv.setAttribute("data-bs-parent", "#collapseNine")
        let contentBody = document.createElement("div");
        contentBody.classList.add("accordion-body")
        
        let br = document.createElement("br");
        bodyDiv.appendChild(br);

        let annualEnergyLabel = document.createElement("label");
        annualEnergyLabel.innerText = "Annual Energy (kWh) ";
        bodyDiv.appendChild(annualEnergyLabel);

        let br1 = document.createElement("br");
        bodyDiv.appendChild(br1);
        
        let annualEnergyInput = document.createElement("input");
        annualEnergyInput.setAttribute("id",`annualEnergyInput${i}`)
        annualEnergyInput.setAttribute("type", "number");
        bodyDiv.appendChild(annualEnergyInput);

        let br6 = document.createElement("br");
        bodyDiv.appendChild(br6);
        let br2 = document.createElement("br");
        bodyDiv.appendChild(br2);

        let valueOfElecticitySavings = document.createElement("label");
        valueOfElecticitySavings.innerText = "Value of Electricity Savings ($) ";
        bodyDiv.appendChild(valueOfElecticitySavings);

        let br3 = document.createElement("br");
        bodyDiv.appendChild(br3);

        let valueOfElecticitySavingsInput = document.createElement("input");
        valueOfElecticitySavingsInput.setAttribute("id",`valueOfElecticitySavingsInput${i}`)
        valueOfElecticitySavingsInput.setAttribute("type", "number");
        bodyDiv.appendChild(valueOfElecticitySavingsInput);

        let br4 = document.createElement("br");
        bodyDiv.appendChild(br4);
        let br5 = document.createElement("br");
        bodyDiv.appendChild(br5);

        let annualValuesHeader1 = document.createElement("h4");
        annualValuesHeader1.innerText = "Depreciation (Commercial only)"
        bodyDiv.appendChild(annualValuesHeader1);

        // let br7 = document.createElement("br");
        // bodyDiv.appendChild(br7);
        let br8 = document.createElement("br");
        bodyDiv.appendChild(br8);

        let stateDepreciationPercentages = document.createElement("label");
        stateDepreciationPercentages.innerText = "State Depreciation Percentages (fraction)"
        bodyDiv.appendChild(stateDepreciationPercentages);

        let br9 = document.createElement("br");
        bodyDiv.appendChild(br9);

        let stateDepreciationPercentagesInput = document.createElement("input");
        stateDepreciationPercentagesInput.setAttribute("id",`stateDepreciationPercentagesInput${i}`)
        stateDepreciationPercentagesInput.setAttribute("type", "number");
        bodyDiv.appendChild(stateDepreciationPercentagesInput);

        let br10 = document.createElement("br");
        bodyDiv.appendChild(br10);
        let br11 = document.createElement("br");
        bodyDiv.appendChild(br11);

        let federalDepreciationPercentages = document.createElement("label");
        federalDepreciationPercentages.innerText = "Federal Depreciation Percentages (fraction)"
        bodyDiv.appendChild(federalDepreciationPercentages);

        let br12 = document.createElement("br");
        bodyDiv.appendChild(br12);

        let federalDepreciationPercentagesInput = document.createElement("input");
        federalDepreciationPercentagesInput.setAttribute("id",`federalDepreciationPercentagesInput${i}`)
        federalDepreciationPercentagesInput.setAttribute("type", "number");
        bodyDiv.appendChild(federalDepreciationPercentagesInput);
        
        let br13 = document.createElement("br");
        bodyDiv.appendChild(br13);
        let br14 = document.createElement("br");
        bodyDiv.appendChild(br14);

        let annualValuesHeader2 = document.createElement("h4");
        annualValuesHeader2.innerText = "Income tax rates specified as annual values"
        bodyDiv.appendChild(annualValuesHeader2);

        let br15 = document.createElement("br");
        bodyDiv.appendChild(br15);

        let stateIncomeTaxRate = document.createElement("label");
        stateIncomeTaxRate.innerText = "State Income Tax Rate (%/year) ";
        bodyDiv.appendChild(stateIncomeTaxRate);

        let br16 = document.createElement("br");
        bodyDiv.appendChild(br16);

        let stateIncomeTaxRateInput = document.createElement("input");
        stateIncomeTaxRateInput.setAttribute("id",`stateIncomeTaxRateInput${i}`)
        stateIncomeTaxRateInput.setAttribute("type", "number");
        bodyDiv.appendChild(stateIncomeTaxRateInput);

        let br17 = document.createElement("br");
        bodyDiv.appendChild(br17);
        let br18 = document.createElement("br");
        bodyDiv.appendChild(br18);

        let federalIncomeTaxRate = document.createElement("label");
        federalIncomeTaxRate.innerText = "Federal Income Tax Rate (%/year) ";
        bodyDiv.appendChild(federalIncomeTaxRate);

        let br19 = document.createElement("br");
        bodyDiv.appendChild(br19);

        let federalIncomeTaxRateInput = document.createElement("input");
        federalIncomeTaxRateInput.setAttribute("id",`federalIncomeTaxRateInput${i}`)
        federalIncomeTaxRateInput.setAttribute("type", "number");
        bodyDiv.appendChild(federalIncomeTaxRateInput);

        let br20 = document.createElement("br");
        bodyDiv.appendChild(br20);
        let br21 = document.createElement("br");
        bodyDiv.appendChild(br21);

        let annualValuesHeader3 = document.createElement("h4");
        annualValuesHeader3.innerText = "Operation and maintenance costs specified as annual values"
        bodyDiv.appendChild(annualValuesHeader3);

        let br22 = document.createElement("br");
        bodyDiv.appendChild(br22);

        let fixedCost = document.createElement("label");
        fixedCost.innerText = "Fixed Cost ($) ";
        bodyDiv.appendChild(fixedCost);

        let br23 = document.createElement("br");
        bodyDiv.appendChild(br23);
        
        let fixedCostInput = document.createElement("input");
        fixedCostInput.setAttribute("id",`fixedCostInput${i}`)
        fixedCostInput.setAttribute("type", "number");
        bodyDiv.appendChild(fixedCostInput);
        
        let br24 = document.createElement("br");
        bodyDiv.appendChild(br24);
        let br25 = document.createElement("br");
        bodyDiv.appendChild(br25);

        let fixedRatePerCapacity = document.createElement("label");
        fixedRatePerCapacity.innerText = "Fixed Rate Per Capacity ($/kW) ";
        bodyDiv.appendChild(fixedRatePerCapacity);

        let br26 = document.createElement("br");
        bodyDiv.appendChild(br26);

        let fixedRatePerCapacityInput = document.createElement("input");
        fixedRatePerCapacityInput.setAttribute("id",`fixedRatePerCapacityInput${i}`)
        fixedRatePerCapacityInput.setAttribute("type", "number");
        bodyDiv.appendChild(fixedRatePerCapacityInput);
        
        let br27 = document.createElement("br");
        bodyDiv.appendChild(br27);
        let br28 = document.createElement("br");
        bodyDiv.appendChild(br28);

        let fixedCostPerCapacity = document.createElement("label");
        fixedCostPerCapacity.innerText = "Fixed Cost Per Capacity ($) ";
        bodyDiv.appendChild(fixedCostPerCapacity);

        let br29 = document.createElement("br");
        bodyDiv.appendChild(br29);

        let fixedCostPerCapacityInput = document.createElement("input");
        fixedCostPerCapacityInput.setAttribute("id",`fixedCostPerCapacityInput${i}`)
        fixedCostPerCapacityInput.setAttribute("type", "number");
        bodyDiv.appendChild(fixedCostPerCapacityInput);
        
        let br30 = document.createElement("br");
        bodyDiv.appendChild(br30);
        let br31 = document.createElement("br");
        bodyDiv.appendChild(br31);

        let variableRateByProduction = document.createElement("label");
        variableRateByProduction.innerText = "Variable Rate By Production ($/MWh) ";
        bodyDiv.appendChild(variableRateByProduction);

        let br32 = document.createElement("br");
        bodyDiv.appendChild(br32);

        let variableRateByProductionInput = document.createElement("input");
        variableRateByProductionInput.setAttribute("id",`variableRateByProductionInput${i}`)
        variableRateByProductionInput.setAttribute("type", "number");
        bodyDiv.appendChild(variableRateByProductionInput);

        let br33 = document.createElement("br");
        bodyDiv.appendChild(br33);
        let br34 = document.createElement("br");
        bodyDiv.appendChild(br34);

        let variableCostByProduction = document.createElement("label");
        variableCostByProduction.innerText = "Variable Cost By Production ($) ";
        bodyDiv.appendChild(variableCostByProduction);

        let br35 = document.createElement("br");
        bodyDiv.appendChild(br35);

        let variableCostByProductionInput = document.createElement("input");
        variableCostByProductionInput.setAttribute("id",`variableCostByProductionInput${i}`)
        variableCostByProductionInput.setAttribute("type", "number");
        bodyDiv.appendChild(variableCostByProductionInput);

        let br36 = document.createElement("br");
        bodyDiv.appendChild(br36);
        let br37 = document.createElement("br");
        bodyDiv.appendChild(br37);

        let annualValuesHeader4 = document.createElement("h4");
        annualValuesHeader4.innerText = "Battery replacement at specified schedule"
        bodyDiv.appendChild(annualValuesHeader4);

        let br38 = document.createElement("br");
        bodyDiv.appendChild(br38);

        let batteryCapacity = document.createElement("label");
        batteryCapacity.innerText = "Battery Capacity ";
        bodyDiv.appendChild(batteryCapacity);

        let br39 = document.createElement("br");
        bodyDiv.appendChild(br39);

        let batteryCapacityInput = document.createElement("input");
        batteryCapacityInput.setAttribute("id",`batteryCapacityInput${i}`)
        batteryCapacityInput.setAttribute("type", "number");
        bodyDiv.appendChild(batteryCapacityInput);

        let br40 = document.createElement("br");
        bodyDiv.appendChild(br40);
        let br41 = document.createElement("br");
        bodyDiv.appendChild(br41);

        let batteryReplacementOption = document.createElement("label");
        batteryReplacementOption.innerText = "Battery Replacement Option ";
        bodyDiv.appendChild(batteryReplacementOption);

        let br42 = document.createElement("br");
        bodyDiv.appendChild(br42);

        let batteryReplacementOptionInput = document.createElement("input");
        batteryReplacementOptionInput.setAttribute("id",`batteryReplacementOptionInput${i}`)
        batteryReplacementOptionInput.setAttribute("type", "number");
        bodyDiv.appendChild(batteryReplacementOptionInput);

        let br43 = document.createElement("br");
        bodyDiv.appendChild(br43);
        let br44 = document.createElement("br");
        bodyDiv.appendChild(br44);

        let batteryReplacementCost = document.createElement("label");
        batteryReplacementCost.innerText = "Battery Replacement Cost ($/kWh) ";
        bodyDiv.appendChild(batteryReplacementCost);

        let br45 = document.createElement("br");
        bodyDiv.appendChild(br45);

        let batteryReplacementCostInput = document.createElement("input");
        batteryReplacementCostInput.setAttribute("id",`batteryReplacementCostInput${i}`)
        batteryReplacementCostInput.setAttribute("type", "number");
        bodyDiv.appendChild(batteryReplacementCostInput);

        let br46 = document.createElement("br");
        bodyDiv.appendChild(br46);
        let br47 = document.createElement("br");
        bodyDiv.appendChild(br47);

        let batteryReplacementCostEscalation = document.createElement("label");
        batteryReplacementCostEscalation.innerText = "Battery Replacement Cost Escalation (%/year) ";
        bodyDiv.appendChild(batteryReplacementCostEscalation);

        let br48 = document.createElement("br");
        bodyDiv.appendChild(br48);

        let batteryReplacementCostEscalationInput = document.createElement("input");
        batteryReplacementCostEscalationInput.setAttribute("id",`batteryReplacementCostEscalationInput${i}`)
        batteryReplacementCostEscalationInput.setAttribute("type", "number");
        bodyDiv.appendChild(batteryReplacementCostEscalationInput);

        let br49 = document.createElement("br");
        bodyDiv.appendChild(br49);
        let br50 = document.createElement("br");
        bodyDiv.appendChild(br50);

        let batteryReplacementCostIfRequired = document.createElement("label");
        batteryReplacementCostIfRequired.innerText = "Battery Replacement Cost If Required ($)";
        bodyDiv.appendChild(batteryReplacementCostIfRequired);

        let br51 = document.createElement("br");
        bodyDiv.appendChild(br51);

        let batteryReplacementCostIfRequiredInput = document.createElement("input");
        batteryReplacementCostIfRequiredInput.setAttribute("id",`batteryReplacementCostIfRequiredInput${i}`)
        batteryReplacementCostIfRequiredInput.setAttribute("type", "number");
        bodyDiv.appendChild(batteryReplacementCostIfRequiredInput);

        let br52 = document.createElement("br");
        bodyDiv.appendChild(br52);
        let br53 = document.createElement("br");
        bodyDiv.appendChild(br53);

        let batteryReplacementsPerYear = document.createElement("label");
        batteryReplacementsPerYear.innerText = "Battery Replacements Per Year";
        bodyDiv.appendChild(batteryReplacementsPerYear);

        let br54 = document.createElement("br");
        bodyDiv.appendChild(br54);

        let batteryReplacementsPerYearInput = document.createElement("input");
        batteryReplacementsPerYearInput.setAttribute("id",`batteryReplacementsPerYearInput${i}`)
        batteryReplacementsPerYearInput.setAttribute("type", "number");
        bodyDiv.appendChild(batteryReplacementsPerYearInput);

        let br55 = document.createElement("br");
        bodyDiv.appendChild(br55);
        let br56 = document.createElement("br");
        bodyDiv.appendChild(br56);

        let secondBatteryReplacementCost = document.createElement("label");
        secondBatteryReplacementCost.innerText = "Battery Replacements Cost ($)";
        bodyDiv.appendChild(secondBatteryReplacementCost);

        let br57 = document.createElement("br");
        bodyDiv.appendChild(br57);

        let secondBatteryReplacementCostInput = document.createElement("input");
        secondBatteryReplacementCostInput.setAttribute("id",`secondBatteryReplacementCostInput${i}`)
        secondBatteryReplacementCostInput.setAttribute("type", "number");
        bodyDiv.appendChild(secondBatteryReplacementCostInput);

        let br58 = document.createElement("br");
        bodyDiv.appendChild(br58);
        let br59 = document.createElement("br");
        bodyDiv.appendChild(br59);

        let annualValuesHeader5 = document.createElement("h4");
        annualValuesHeader5.innerText = "Battery replacements as calculated"
        bodyDiv.appendChild(annualValuesHeader5);

        let br60 = document.createElement("br");
        bodyDiv.appendChild(br60);

        let thirdBatteryReplacementCost = document.createElement("label");
        thirdBatteryReplacementCost.innerText = "Battery Replacements Cost ($)";
        bodyDiv.appendChild(thirdBatteryReplacementCost);

        let br61 = document.createElement("br");
        bodyDiv.appendChild(br61);

        let thirdBatteryReplacementCostInput = document.createElement("input");
        thirdBatteryReplacementCostInput.setAttribute("id",`thirdBatteryReplacementCostInput${i}`)
        thirdBatteryReplacementCostInput.setAttribute("type", "number");
        bodyDiv.appendChild(thirdBatteryReplacementCostInput);

        let br62 = document.createElement("br");
        bodyDiv.appendChild(br62);
        let br63 = document.createElement("br");
        bodyDiv.appendChild(br63);

        let annualValuesHeader6 = document.createElement("h4");
        annualValuesHeader6.innerText = "Production Based Incentiv (PBI) specified as annual values"
        bodyDiv.appendChild(annualValuesHeader6);

        let br64 = document.createElement("br");
        bodyDiv.appendChild(br64);

        let pbiFederal = document.createElement("label");
        pbiFederal.innerText = "Federal";
        bodyDiv.appendChild(pbiFederal);

        let br65 = document.createElement("br");
        bodyDiv.appendChild(br65);

        let pbiFederalInput = document.createElement("input");
        pbiFederalInput.setAttribute("id",`pbiFederalInput${i}`)
        pbiFederalInput.setAttribute("type", "number");
        bodyDiv.appendChild(pbiFederalInput);

        let br66 = document.createElement("br");
        bodyDiv.appendChild(br66);
        let br67 = document.createElement("br");
        bodyDiv.appendChild(br67);

        let pbiState = document.createElement("label");
        pbiState.innerText = "State";
        bodyDiv.appendChild(pbiState);

        let br68 = document.createElement("br");
        bodyDiv.appendChild(br68);

        let pbiStateInput = document.createElement("input");
        pbiStateInput.setAttribute("id",`pbiStateInput${i}`)
        pbiStateInput.setAttribute("type", "number");
        bodyDiv.appendChild(pbiStateInput);

        let br69 = document.createElement("br");
        bodyDiv.appendChild(br69);
        let br70 = document.createElement("br");
        bodyDiv.appendChild(br70);

        let pbiUtility = document.createElement("label");
        pbiUtility.innerText = "Utility";
        bodyDiv.appendChild(pbiUtility);

        let br71 = document.createElement("br");
        bodyDiv.appendChild(br71);

        let pbiUtilityInput = document.createElement("input");
        pbiUtilityInput.setAttribute("id",`pbiUtilityInput${i}`)
        pbiUtilityInput.setAttribute("type", "number");
        bodyDiv.appendChild(pbiUtilityInput);

        let br72 = document.createElement("br");
        bodyDiv.appendChild(br72);
        let br73 = document.createElement("br");
        bodyDiv.appendChild(br73);

        let pbiOther = document.createElement("label");
        pbiOther.innerText = "Other";
        bodyDiv.appendChild(pbiOther);

        let br74 = document.createElement("br");
        bodyDiv.appendChild(br74);

        let pbiOtherInput = document.createElement("input");
        pbiOtherInput.setAttribute("id",`pbiOtherInput${i}`)
        pbiOtherInput.setAttribute("type", "number");
        bodyDiv.appendChild(pbiOtherInput);

        let br75 = document.createElement("br");
        bodyDiv.appendChild(br75);
        let br76 = document.createElement("br");
        bodyDiv.appendChild(br76);

        let annualValuesHeader7 = document.createElement("h4");
        annualValuesHeader7.innerText = "Production Tax Credit (PTC) specified as annual values"
        bodyDiv.appendChild(annualValuesHeader7);

        let br77 = document.createElement("br");
        bodyDiv.appendChild(br77);

        let ptcFederal = document.createElement("label");
        ptcFederal.innerText = "Federal";
        bodyDiv.appendChild(ptcFederal);

        let br78 = document.createElement("br");
        bodyDiv.appendChild(br78);

        let ptcFederalInput = document.createElement("input");
        ptcFederalInput.setAttribute("id",`ptcFederalInput${i}`)
        ptcFederalInput.setAttribute("type", "number");
        bodyDiv.appendChild(ptcFederalInput);

        let br79 = document.createElement("br");
        bodyDiv.appendChild(br79);
        let br80 = document.createElement("br");
        bodyDiv.appendChild(br80);

        let ptcState = document.createElement("label");
        ptcState.innerText = "State";
        bodyDiv.appendChild(ptcState);

        let br81 = document.createElement("br");
        bodyDiv.appendChild(br81);

        let ptcStateInput = document.createElement("input");
        ptcStateInput.setAttribute("id",`ptcStateInput${i}`)
        ptcStateInput.setAttribute("type", "number");
        bodyDiv.appendChild(ptcStateInput);



























      bodyDiv.appendChild(contentBody);
      outerDiv.appendChild(bodyDiv);
      annualValuesContainer.appendChild(outerDiv);
      document.getElementById("generateYears").style.display = "none";



  }
});

homeBtn.addEventListener("click", () => {
  changePageInView("home");
  aboutUsContainer.style.display = "block";
  footer.style.display = "block";

  
});

calculatorBtn.addEventListener("click", () => {
  changePageInView("calculator");
  aboutUsContainer.style.display = "none";
  footer.style.display = "none";
});
const changePageInView = (page) => {
  switch (page) {
    case "home":
      changeDisplay(
        homeContent,
        calculatorContainer,
        homeBtn,
        calculatorBtn,
      );
      break;
    case "calculator":
      changeDisplay(
        calculatorContainer,
        homeContent,
        calculatorBtn,
        homeBtn,
      );
      
      break;
    default:
      changeDisplay(
        homeContent,
        calculatorContainer,
        homeBtn,
        calculatorBtn,
      );
      break;
  }
};

const changeDisplay = (
  showEl,
  hideEl,
  activeBtn,
  inactiveBtn
) => {
  if (showEl) {
    showEl.style.display = "block";
  }
  if (hideEl) {
    hideEl.style.display = "none";
  }
  if (activeBtn) {
    activeBtn.classList.add("active");
  }
  if (inactiveBtn) {
    inactiveBtn.classList.remove("active");
  }
};


calculateBtn.addEventListener("click", () => {
  popUp.style.display = "block";
})

document.getElementsByClassName("close")[0].addEventListener("click", () => {
    if(popUp.style.display = "block"){
      popUp.style.display = "none";
    }
})


document.getElementsByClassName("btnClose")[0].addEventListener("click", () => {
    if(popUp.style.display = "block"){
      popUp.style.display = "none";
    }
})