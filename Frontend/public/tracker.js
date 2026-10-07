const PROJECT_ID = "6ac630236570f2bfa58ce611";

const API_URL = "http://localhost:3000/api/analytics/visit";

// Prevent multiple executions on the same page
if (window.name === "trackly_session") {
  console.log("✅ Existing Trackly session - NO VISIT");
} else {
  // Create session for this tab
  window.name = "trackly_session";

  console.log("🆕 New Trackly visit");

  fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      projectId: PROJECT_ID,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("📊 Trackly:", data);
    })
    .catch((error) => {
      console.error("❌ Trackly error:", error);
    });
}