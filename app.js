const summaryToggle = document.querySelector(".summary-toggle");
const summaryMenu = document.querySelector("#screenSummary");
const summaryOverlay = document.querySelector(".nav-overlay");
const summaryCloseButtons = document.querySelectorAll("[data-close-summary]");

const setSummaryOpen = (isOpen) => {
  document.body.classList.toggle("summary-open", isOpen);
  summaryToggle?.setAttribute("aria-expanded", String(isOpen));
  summaryMenu?.setAttribute("aria-hidden", String(!isOpen));

  if (summaryOverlay) {
    summaryOverlay.hidden = !isOpen;
  }
};

setSummaryOpen(false);

summaryToggle?.addEventListener("click", () => {
  setSummaryOpen(!document.body.classList.contains("summary-open"));
});

summaryCloseButtons.forEach((button) => {
  button.addEventListener("click", () => setSummaryOpen(false));
});

summaryMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setSummaryOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setSummaryOpen(false);
  }
});

const tabs = document.querySelectorAll(".tab");
const tabPanels = document.querySelectorAll(".tab-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selected = tab.dataset.tab;

    tabs.forEach((item) => item.classList.toggle("active", item === tab));
    tabPanels.forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === selected);
    });
  });
});

const filterButtons = document.querySelectorAll("[data-search-filter]");
const results = document.querySelector("#searchResults");
const emptyState = document.querySelector("#searchEmpty");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    const shouldShowEmpty = button.dataset.searchFilter === "data";
    results.hidden = shouldShowEmpty;
    emptyState.hidden = !shouldShowEmpty;
  });
});

document.querySelector("#orderSearch")?.addEventListener("input", (event) => {
  const shouldShowEmpty = event.target.value.trim().toLowerCase() === "vazio";
  results.hidden = shouldShowEmpty;
  emptyState.hidden = !shouldShowEmpty;
});

document.querySelectorAll(".history-summary").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".history-item").classList.toggle("expanded");
  });
});

document.querySelectorAll(".toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("online");
  });
});

const confirmation = document.querySelector(".confirmation-screen");

document.querySelector(".confirm-button")?.addEventListener("click", () => {
  confirmation.dataset.confirmationState = "success";
});

document.querySelector(".error-button")?.addEventListener("click", () => {
  confirmation.dataset.confirmationState = "error";
});

document.querySelector(".reset-confirmation")?.addEventListener("click", () => {
  confirmation.dataset.confirmationState = "idle";
});

document.querySelector(".mark-read")?.addEventListener("click", () => {
  document.querySelectorAll(".notification-item.unread").forEach((item) => {
    item.classList.remove("unread");
    item.querySelector(".blue-dot")?.remove();
  });
});
