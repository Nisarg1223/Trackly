const PROJECT_ID = "6ac630236570f2bfa58ce611";

const API_URL = "http://localhost:3000/api/analytics/visit";
const PERFORMANCE_API_URL = "http://localhost:3000/api/performance";
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
      `${event.message} (${event.filename || "unknown file"}:${event.lineno || 0})`,
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


// ------------------------------------
// Trackly Page Analytics (SPA + Normal Websites)
// ------------------------------------

const PAGE_VIEW_API_URL =
  "http://localhost:3000/api/page-analytics/view";

const PAGE_DURATION_API_URL =
  "http://localhost:3000/api/page-analytics/duration";

// Current page state
let currentPagePath = getTracklyPagePath();
let currentPageTitle = document.title;

let activeStartTime =
  document.visibilityState === "visible"
    ? performance.now()
    : null;

let totalActiveMilliseconds = 0;
let durationSent = false;

// ------------------------------------
// Get Current Page Path
// ------------------------------------

function getTracklyPagePath() {
  const pathname = window.location.pathname;
  const hash = window.location.hash;

  // Support common hash-based SPA routes:
  // /#/dashboard or /#!/dashboard
  if (hash.startsWith("#/") || hash.startsWith("#!")) {
    return pathname + hash;
  }

  return pathname;
}

// ------------------------------------
// Track Page View
// ------------------------------------

function trackPageView(path, title) {
  fetch(PAGE_VIEW_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      projectId: PROJECT_ID,
      path: path,
      pageTitle: title,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      console.log("📄 Trackly page view:", data);
    })
    .catch((error) => {
      console.error("Trackly page view failed:", error);
    });
}

// ------------------------------------
// Pause Active Time
// ------------------------------------

function pauseActiveTime() {
  if (activeStartTime !== null) {
    totalActiveMilliseconds +=
      performance.now() - activeStartTime;

    activeStartTime = null;
  }
}

// ------------------------------------
// Resume Active Time
// ------------------------------------

function resumeActiveTime() {
  if (
    activeStartTime === null &&
    !durationSent &&
    document.visibilityState === "visible"
  ) {
    activeStartTime = performance.now();
  }
}

// ------------------------------------
// Send Current Page Duration
// ------------------------------------

function sendCurrentPageDuration() {
  if (durationSent) return;

  pauseActiveTime();
  durationSent = true;

  const duration = totalActiveMilliseconds / 1000;

  const payload = JSON.stringify({
    projectId: PROJECT_ID,
    path: currentPagePath,
    pageTitle: currentPageTitle,
    duration: duration,
  });

  const blob = new Blob([payload], {
    type: "application/json",
  });

  const queued = navigator.sendBeacon(
    PAGE_DURATION_API_URL,
    blob
  );

  if (!queued) {
    fetch(PAGE_DURATION_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
      keepalive: true,
    }).catch((error) => {
      console.error("Trackly duration failed:", error);
    });
  }

  console.log(
    "⏱️ Trackly page duration:",
    currentPagePath,
    duration,
    "seconds"
  );
}

// ------------------------------------
// Start Tracking a New Page
// ------------------------------------

function startTrackingPage() {
  const newPath = getTracklyPagePath();

  // Ignore duplicate notifications for the same page
  if (newPath === currentPagePath) return;

  // Finish timing for the previous page
  sendCurrentPageDuration();

  // Initialize the new page
  currentPagePath = newPath;
  currentPageTitle = document.title;

  totalActiveMilliseconds = 0;
  durationSent = false;

  activeStartTime =
    document.visibilityState === "visible"
      ? performance.now()
      : null;

  console.log("📄 Trackly navigated to:", currentPagePath);

  // Record a view for the new page
  trackPageView(currentPagePath, currentPageTitle);
}

// ------------------------------------
// Detect SPA Navigation
// ------------------------------------

function handleLocationChange() {
  // Let the framework update the document title first
  setTimeout(() => {
    startTrackingPage();
  }, 0);
}

// Listen for browser Back / Forward navigation
window.addEventListener("popstate", handleLocationChange);

// Listen for hash-based navigation
window.addEventListener("hashchange", handleLocationChange);

// Detect React Router and other History API navigation
const originalPushState = history.pushState;
const originalReplaceState = history.replaceState;

history.pushState = function (...args) {
  const result = originalPushState.apply(this, args);
  handleLocationChange();
  return result;
};

history.replaceState = function (...args) {
  const result = originalReplaceState.apply(this, args);
  handleLocationChange();
  return result;
};

// ------------------------------------
// Handle Tab Visibility
// ------------------------------------

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    pauseActiveTime();
  } else {
    resumeActiveTime();
  }
});

// ------------------------------------
// Handle Page Exit
// ------------------------------------

window.addEventListener("pagehide", () => {
  sendCurrentPageDuration();
});

// ------------------------------------
// Initial Page View
// ------------------------------------

trackPageView(currentPagePath, currentPageTitle);



// ------------------------------------
// Track Website Load Performance
// ------------------------------------

function trackWebsitePerformance() {
  const navigationEntry = performance.getEntriesByType("navigation")[0];

  if (!navigationEntry || navigationEntry.loadEventEnd <= 0) {
    return;
  }

  const loadTime = Math.round(
    navigationEntry.loadEventEnd - navigationEntry.startTime
  );

  console.log("⚡ Trackly website load time:", loadTime, "ms");

  fetch(PERFORMANCE_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      projectId: PROJECT_ID,
      loadTime: loadTime,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      console.log("⚡ Trackly performance recorded:", data);
    })
    .catch((error) => {
      console.error("Trackly performance failed:", error);
    });
}

// Wait until the complete page load event has finished
if (document.readyState === "complete") {
  trackWebsitePerformance();
} else {
  window.addEventListener("load", trackWebsitePerformance, {
    once: true,
  });
}
