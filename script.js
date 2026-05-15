window.dataLayer = window.dataLayer || [];

document.getElementById("signup-button").addEventListener("click", function () {
  window.dataLayer.push({
    event: "lead_button_click",
    event_category: "engagement",
    event_action: "click",
    event_label: "Sign Up Button",
  });

  console.log("dataLayer event pushed: lead_button_click");
});

document.getElementById("purchase-button").addEventListener("click", function () {
  window.dataLayer.push({
    event: "purchase_button_click",
    event_category: "conversion",
    event_action: "click",
    event_label: "Buy Now Button",
    value: 49.99,
    currency: "USD",
  });

  console.log("dataLayer event pushed: purchase_button_click");
});

document.getElementById("external-link").addEventListener("click", function () {
  window.dataLayer.push({
    event: "external_link_click",
    event_category: "navigation",
    event_action: "click",
    event_label: "Google External Link",
  });

  console.log("dataLayer event pushed: external_link_click");
});