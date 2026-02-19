async function plotCatchPhraseCharacterLength() {
  try {
    //  Retrieve data from API
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const userData = await apiResponse.json();

    //  Transform and Sort: High to Low
    const processedMetrics = userData.map(u => ({
      index: u.company.name,
      value: u.company.catchPhrase.length
    })).sort((a, b) => b.value - a.value);

    // Define analysisPanel in the tfjs-vis visor
    const analysisPanel = { 
      name: 'Company Catch Phrase Character Count', 
      tab: 'Company Analysis' 
    };

    // Render with custom styling
    const chartConfigs = {
      xLabel: 'Company Name',
      yLabel: 'Total Characters',
      height: 350,
      colors: ['#FF5722']
    };

    tfvis.render.barchart(analysisPanel, processedMetrics, chartConfigs);

    // Customize console feedback
    console.log("Catchphrase count chart rendered successfully!");
    
  } catch (error) {
    console.error("Error creating catchphrase count chart:", error);
  }
}

