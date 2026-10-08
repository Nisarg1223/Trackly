const PROJECT_ID = "6ac630236570f2bfa58ce611";

const API_URL = "http://localhost:3000/api/analytics/visit";

// ------------------------------------
// Detect Browser
// ------------------------------------
function getBrowser() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Edg")) {
    return "Edge";
  }

  if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
    return "Opera";
  }

  if (userAgent.includes("Brave")) {
    return "Brave";
  }

  if (userAgent.includes("Chrome")) {
    return "Chrome";
  }

  if (userAgent.includes("Firefox")) {
    return "Firefox";
  }

  if (userAgent.includes("Safari")) {
    return "Safari";
  }

  return "Unknown";
}

// ------------------------------------
// Detect Operating System
// ------------------------------------
function getOperatingSystem() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Windows")) {
    return "Windows";
  }

  if (userAgent.includes("Android")) {
    return "Android";
  }

  if (userAgent.includes("iPhone") || userAgent.includes("iPad")) {
    return "iOS";
  }

  if (userAgent.includes("Mac OS")) {
    return "macOS";
  }

  if (userAgent.includes("Linux")) {
    return "Linux";
  }

  return "Unknown";
}

// ------------------------------------
// Detect Device
// ------------------------------------
function getDevice() {
  const userAgent = navigator.userAgent;

  if (/iPad|Tablet|Android(?!.*Mobile)/i.test(userAgent)) {
    return "Tablet";
  }

  if (/Mobile|iPhone|Android/i.test(userAgent)) {
    return "Mobile";
  }

  return "Desktop";
}

// ------------------------------------
// Track Visit
// ------------------------------------
if (window.name === "trackly_session") {
  console.log("✅ Existing Trackly session - NO VISIT");
} else {

  // Create session for this tab
  window.name = "trackly_session";

  // Detect visitor information
  const browser = getBrowser();
  const operatingSystem = getOperatingSystem();
  const device = getDevice();

  console.log("🆕 New Trackly visit");

  console.log("🌐 Browser:", browser);
  console.log("💻 OS:", operatingSystem);
  console.log("📱 Device:", device);

  fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      projectId: PROJECT_ID,
      browser: browser,
      operatingSystem: operatingSystem,
      device: device,
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


