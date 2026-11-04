(function () {
  "use strict";

  const projectId = "dake_shimarisu";
  const runtime = window.MarketObserverRuntimePackage;
  const observer = window.MarketObserver;
  const profile = runtime?.profiles?.[projectId];

  if (!runtime || !observer || !profile) return;
  if (profile.transport_policy !== "no_send") {
    window.MarketObserverConsent?.mount({ locale: "ja", privacyUrl: "https://dakeapp.com/policy/" });
  }
  observer.init({
    projectId,
    measurementId: profile.measurement_id,
    profile,
    profileHash: runtime.profileHashes[projectId],
    runtimeSchema: runtime.runtimeSchema,
    runtimeSchemaHash: runtime.runtimeSchemaHash,
  });
  observer.trackPageView();
})();

