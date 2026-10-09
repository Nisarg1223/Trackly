const PROJECT_ID = "6ac630236570f2bfa58ce611";

const API_URL = "http://localhost:3000/api/analytics/visit";

// ------------------------------------
// Detect Browser
// ------------------------------------
function getBrowser() {
  const userAgent = navigator.userAgent;

  // Brave
  if (navigator.brave && typeof navigator.brave.isBrave === "function") {
    return "Brave";
  }

  // Edge
  if (userAgent.includes("Edg")) {
    return "Edge";
  }

  // Opera
  if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
    return "Opera";
  }

  // Chrome
  if (userAgent.includes("Chrome")) {
    return "Chrome";
  }

  // Firefox
  if (userAgent.includes("Firefox")) {
    return "Firefox";
  }

  // Safari
  if (userAgent.includes("Safari")) {
    return "Safari";
  }

  return "Other";
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

  return "Other";
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


// ------------------------------------
// Trackly Error, Warning & Console Logs
// ------------------------------------

const ERROR_API_URL = "http://localhost:3000/api/error-logs";

// Send error, warning, or log to Trackly backend
function sendErrorLog(type, message) {
  if (!message) return;

  fetch(ERROR_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      projectId: PROJECT_ID,
      type: type,
      message: String(message).slice(0, 1000),
    }),
  }).catch((error) => {
    console.error("Trackly error logging failed:", error);
  });
}

// Convert console arguments into a readable message
function formatLogMessage(args) {
  return args
    .map((item) => {
      if (item instanceof Error) {
        return `${item.name}: ${item.message}`;
      }

      if (typeof item === "string") {
        return item;
      }

      try {
        return JSON.stringify(item) ?? String(item);
      } catch {
        return String(item);
      }
    })
    .join(" ")
    .slice(0, 1000);
}

// Preserve original console methods
const originalLog = console.log.bind(console);
const originalWarn = console.warn.bind(console);
const originalError = console.error.bind(console);

// Capture console.log()
console.log = (...args) => {
  originalLog(...args);
  sendErrorLog("log", formatLogMessage(args));
};

// Capture console.warn()
console.warn = (...args) => {
  originalWarn(...args);
  sendErrorLog("warning", formatLogMessage(args));
};

// Capture console.error()
console.error = (...args) => {
  originalError(...args);
  sendErrorLog("error", formatLogMessage(args));
};

// Capture uncaught JavaScript errors
window.addEventListener("error", (event) => {
  if (event.message) {
    sendErrorLog(
      "error",
      `${event.message} (${event.filename || "unknown file"}:${event.lineno || 0})`
    );
  }
});

// Capture unhandled Promise rejections
window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason;

  const message =
    reason instanceof Error
      ? `${reason.name}: ${reason.message}`
      : formatLogMessage([reason]);

  sendErrorLog("error", `Unhandled Promise Rejection: ${message}`);
});

