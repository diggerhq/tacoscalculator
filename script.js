function calculatePricing() {
  var resources = parseInt(document.getElementById('resources').value);
  var users = parseInt(document.getElementById('users').value);
  var runs = parseInt(document.getElementById('runs').value);
  var deployments = parseInt(document.getElementById('deployments').value);

  var result = document.getElementById('result');

  var d1, d2, d3, d4;

  // Spacelift Formula (Middle Tier)
  if (users <= 5) {
    d1 = 250;
  } else {
    d1 = 250 + ((users - 5) * 10);
  }

  // TF Cloud Formula (Middle Tier)
  if (resources <= 500) {
    d2 = 0;
  } else {
    d2 = (resources - 500) * 0.00014 * 8760; 
    // Pricing calculated per hour, per resource, per year.
  }
  // Env0 Formula (Middle Tier)
  if (users <= 10 && deployments <= 100) {
    d3 = 349;
  } else if (users <= 10 && deployments <= 200) {
    d3 = 599;
  } else if (users <= 50 && deployments <= 100) {
    d3 = 549;
  } else if (users <= 50 && deployments <= 200) {
    d3 = 799;
  } else {
    d3 = "You would have to talk to sales";
  }

  // Digger Formula
  if (users <= 5) {
    d4 = 300;
  } else {
    d4 = 300 + ((users - 5) * 10);
  }

  let resultText = ""
  resultText += "TF Cloud Pricing: $" + d2.toFixed(2) + "\n";
  resultText += "Spacelift Pricing: $" + d1 + "\n";
  resultText += "Env0 Pricing: $" + d3 + "\n";
  resultText += "Digger Pricing: $" + d4;
  result.textContent = resultText;
}
