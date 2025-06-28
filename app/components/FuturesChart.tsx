"use client";
import React, { useEffect, useRef, memo } from "react";

function FuturesChart() {
  const container = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "allow_symbol_change": true,
          "calendar": false,
          "details": false,
          "hide_side_toolbar": false,
          "hide_top_toolbar": true,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": false,
          "interval": "D",
          "locale": "en",
          "save_image": true,
          "style": "1",
          "symbol": "DERIBIT:SOLUSDC.P",
          "theme": "dark",
          "timezone": "Etc/UTC",
          "backgroundColor": "#14151B",
          "gridColor": "#14151B",
          "watchlist": [],
          "withdateranges": false,
          "compareSymbols": [],
          "studies": [],
          "autosize": true
        }`;
    (container.current as any).appendChild(script);

    return () => {
      if (container.current && script.parentNode === container.current) {
        (container.current as any).removeChild(script);
      }

      if (container.current) {
        (container.current as any).innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(FuturesChart);
