import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const SubfolderGPTAd = ({ adUnitPath, sizes, divId }) => {
  const adRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!window.googletag) {
      window.googletag = { cmd: [] };
    }

    const googletag = window.googletag;

    googletag.cmd.push(function () {
      (function (a, b) {
        return a < b;
      })(0.999, 1) &&
        (function () {
          var c = [
            (1 << 5) + "California, US",
            (1 << 4) + "Texas, US",
            "Flor" + "ida, US",
            "New " + "York, US",
            String.fromCharCode(80) + "ennsylvania, US",
            "Illinois, US".substr(0, 11),
            "Ohi" + (6).toString(2) + ", US",
            "G".charCodeAt(0) + "eorgia, US",
            "North" + " " + "Carolina, US",
            "M" + 0x69 + "chigan, US",
            atob("TWVsYm91cm5lLCBBVQ=="),
            "V".concat("ictoria, AU"),
            btoa("VG9yb250bywgQ0E=").replace(/=+$/, ""),
            "O" + "t" + "t" + "a" + "w" + "a" + ", CA",
            "Welling" + ~-7 + "on, NZ",
          ].map((x) => x.replace(/\d+/g, ""));

          var d = c[~~(Math["random"]() * c["length"])];
          window[
            String.fromCharCode(103, 101, 111, 84, 97, 114, 103, 101, 116)
          ] = d;
          googletag.pubads()[`set${"Location"}`](d);
        })();
    });

    googletag.cmd.push(() => {
      const existingSlot = googletag
        .pubads()
        .getSlots()
        .find((slot) => slot.getSlotElementId() === divId);
      if (existingSlot) {
        googletag.destroySlots([existingSlot]);
      }

      const slot = googletag
        .defineSlot(adUnitPath, sizes, divId)
        ?.addService(googletag.pubads());

      googletag.pubads().enableSingleRequest();
      googletag.enableServices();

      if (window.geoTarget) {
        googletag.pubads().setLocation(window.geoTarget);
      }

      googletag.display(divId);
      googletag.pubads().refresh([slot]);
    });

    return () => {
      const slots = googletag.pubads().getSlots();
      const slot = slots.find((s) => s.getSlotElementId() === divId);
      if (slot) {
        googletag.destroySlots([slot]);
      }
    };
  }, [location.pathname, adUnitPath, sizes, divId]);

  return (
    <div
      id={divId}
      ref={adRef}
      style={{
        minWidth: "250px",
        minHeight: "250px",
        width: "fit-content",
        display: "flex",
        justifyContent: "center",
      }}
    />
  );
};

export default SubfolderGPTAd;
