document.addEventListener("DOMContentLoaded", function() {
  const e = {
    siteData: null,
    offers: [],
    games: [],
    payments: [],
    providers: [],
  },
    t = {
      website: "https://api.adkey-seo.com/api/website/get-website/1046",
      games: "https://api.adkey-seo.com/api/website/get-games/gambling",
      payments: "https://api.adkey-seo.com/api/website/get-payments/1046",
      providers: "https://api.adkey-seo.com/api/website/get-providers/",
    };
  function n() {
    const t = document.getElementById("gamesContainer"),
      n = document.getElementById("allGamesLink");
    e.offers &&
      e.offers.length > 0 &&
      n &&
      (n.href = `casino.html?id=${e.offers[0].id}`),
      t &&
      e.games &&
      e.games.length > 0 &&
      ((t.innerHTML = ""),
        e.games.forEach((n) => {
          const a = (function(t) {
            const n = document.createElement("div");
            n.className = "gameContainer";
            const a = document.createElement("a");
            (a.className = "gameLink"),
              (a.href =
                e.offers && e.offers.length > 0
                  ? `casino.html?id=${e.offers[0].id}`
                  : "/"),
              a.setAttribute("aria-label", "Game image"),
              a.setAttribute("target", "_blank");
            const s = document.createElement("img");
            (s.className = "gameImage"),
              (s.width = 264),
              (s.height = 142),
              (s.src = `https://api.adkey-seo.com/storage/images/games/${t.image}`),
              (s.alt = t.name),
              a.appendChild(s),
              n.appendChild(a);
            const o = document.createElement("a");
            (o.href =
              e.offers && e.offers.length > 0
                ? `casino.html?id=${e.offers[0].id}`
                : "/"),
              o.setAttribute("aria-label", "Play game"),
              o.setAttribute("target", "_blank");
            const i = document.createElement("span");
            i.className = "gggradientContainer";
            const d = document.createElement("span");
            d.className = "gameDescription";
            const c = document.createElement("span");
            (c.className = "gameTitle"), (c.textContent = t.name);
            const l = document.createElement("span");
            l.className = "playBlock";
            const m = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "svg",
            );
            m.setAttribute("class", "icon");
            m.setAttribute("width", "33");
            m.setAttribute("height", "33");

            const use = document.createElementNS(
              "http://www.w3.org/2000/svg",
              "use",
            );
            use.setAttributeNS(
              "http://www.w3.org/1999/xlink",
              "href",
              playButtonName,
            );

            m.appendChild(use);
            const r = document.createElement("span");
            return (
              (r.className = "gamePlayText"),
              (r.textContent = playNowText),
              l.appendChild(m),
              l.appendChild(r),
              d.appendChild(c),
              d.appendChild(l),
              i.appendChild(d),
              o.appendChild(i),
              n.appendChild(o),
              n
            );
          })(n);
          t.appendChild(a);
        }));
  }
  function a() {
    const t = document.getElementById("paymentRowsContainer"),
      n = document.getElementById("paymentCardsContainer");
    t &&
      (function(t) {
        if (!e.payments || 0 === e.payments.length)
          return void (t.innerHTML =
            '<div class="no-data">No payment methods available</div>');
        t.innerHTML = "";
        let n = "";
        e.payments.forEach((t) => {
          const a =
            e.offers && e.offers.length > 0
              ? `casino.html?id=${e.offers[0].id}`
              : "/";
          n += `\n      <div class="pygradientContainer">\n      <div class="payMethodRow payMethodRowContent">\n      <div class="payMethodItem payMethodItemImage">\n      <div class="payMethodItemContent">\n      <img \n      class="payMethodImage" \n      src="https://api.adkey-seo.com/storage/images/payments/${t.image || "default.png"}" \n      alt="${t.name || "Payment method"}" \n      width="120" \n      height="70"\n      onerror="this.src='./assets/images/placeholder.png'"\n      />\n      </div>\n      </div>\n      <div class="payMethodItem">\n      <div class="payMethodItemContent">${t.type || "N/A"}</div>\n      </div>\n      <div class="payMethodItem">\n      <div class="payMethodItemContent">${t.country || "N/A"}</div>\n      </div>\n      <div class="payMethodItem">\n      <div class="payMethodItemContent">${t.commission || "N/A"}</div>\n      </div>\n      <div class="payMethodItem">\n      <div class="payMethodItemContent payMethodItemWide">${t.processing_time || "N/A"}</div>\n      </div>\n      <div class="payMethodItem">\n      <div class="payMethodItemContent payMethodItemWide">${t.min_dep || "N/A"}</div>\n      </div>\n      <div class="payMethodItem payMethodItemDeposit">\n      <div class="payMethodItemContent">\n      <a target="_blank" class="payMethodLink" href="${a}" aria-label="Play game">\n      <span class="bonusButton-deposit btn btn--small">${depositText}</span>\n      </a>\n      </div>\n      </div>\n      </div>\n      </div>\n      `;
        }),
          (t.innerHTML = n);
      })(t),
      n &&
      (function(t) {
        if (!e.payments || 0 === e.payments.length)
          return void (t.innerHTML =
            '<div class="no-data">No payment methods available</div>');
        t.innerHTML = "";
        let n = "";
        e.payments.forEach((t) => {
          const a =
            e.offers && e.offers.length > 0
              ? `casino.html?id=${e.offers[0].id}`
              : "/";
          n += `\n      <div class="payMethodCardGroup">\n      <div class="payMethodCard">\n      <div class="payMethodCardPicture">\n      <img \n      class="payMethodCardImage" \n      src="https://api.adkey-seo.com/storage/images/payments/${t.image || "default.png"}" \n      alt="${t.name || "Payment method"}" \n      width="140" \n      height="64"\n      onerror="this.src='./assets/images/placeholder.png'"\n      />\n      <div class="payMethodCardDeposit">\n      <a target="_blank" href="${a}" aria-label="Play game">\n      <span class="bonusButton-deposit btn btn--small">Deposit</span>\n      </a>\n      </div>\n      </div>\n      <div class="payMethodCardContainer">\n      <div class="payMethodCardDescription">\n      <div class="payMethodCardBlock">\n      <div class="payMethodCardItem">Type</div>\n      <div class="payMethodCardText">${t.type || "N/A"}</div>\n      </div>\n      <div class="payMethodCardBlock">\n      <div class="payMethodCardItem">Country</div>\n      <div class="payMethodCardText">${t.country || "N/A"}</div>\n      </div>\n      <div class="payMethodCardBlock">\n      <div class="payMethodCardItem">Commission</div>\n      <div class="payMethodCardText">${t.commission || "N/A"}</div>\n      </div>\n      <div class="payMethodCardBlock">\n      <div class="payMethodCardItem">Processing time</div>\n      <div class="payMethodCardText">${t.processing_time || "N/A"}</div>\n      </div>\n      <div class="payMethodCardBlock">\n      <div class="payMethodCardItem">Minimum deposit</div>\n      <div class="payMethodCardText">${t.min_dep || "N/A"}</div>\n      </div>\n      </div>\n      </div>\n      </div>\n      </div>\n      `;
        }),
          (t.innerHTML = n);
      })(n);
  }
  function s() {
    const t = document.getElementById("providersContainer");
    t &&
      (function(t) {
        if (!e.providers || 0 === e.providers.length)
          return void (t.innerHTML =
            '<div class="no-data">No providers available</div>');
        t.innerHTML = "";
        let n = "";
        e.providers.forEach((t) => {
          const a =
            e.offers && e.offers.length > 0
              ? `casino.html?id=${e.offers[0].id}`
              : "/";
          n += `\n      <span class="sprgradientContainer">\n      <span class="sprovidersContainer">\n      <img \n      class="sprovidersImage" \n      src="https://api.adkey-seo.com/storage/images/providers/${t.image || "default.png"}" \n      alt="${t.name || "Provider"}" \n title="${t.name} in ${casinoName}"      width="106" \n      height="47"\n      onerror="this.src='./assets/images/placeholder.png'"\n      />\n      </span>\n      </span>\n           `;
        }),
          (t.innerHTML = n);
      })(t);
  }
  function o(e, t) {
    e.forEach((e) => {
      const n = (function(e) {
        const t = document.createElement("div");
        t.className = "tcgradientContainer";
        const n = document.createElement("div");
        n.className = "casinoCard";
        const a = document.createElement("img");
        (a.className = "cardImage"),
          (a.src = `https://api.adkey-seo.com/storage/images/offers/${e.logo}`),
          (a.alt = e.name),
          (a.width = 190),
          (a.height = 76);
        const s = document.createElement("div");
        s.className = "cardBonusText";
        const o = document.createElement("p");
        (o.className = "cardName"), (o.textContent = e.name);
        const i = document.createElement("p");
        (i.className = "cardWelcome"), (i.textContent = welcomeBonusText);
        const d = document.createElement("p");
        (d.className = "cardBonus"),
          (d.textContent = e.bonuses.welcome_bonus || "-"),
          s.appendChild(o),
          s.appendChild(i),
          s.appendChild(d);
        const c = document.createElement("a");
        (c.className = "cardButton"),
          (c.target = "_blank"),
          (c.href = `casino.html?id=${e.id}`),
          c.setAttribute("aria-label", "Play game");
        const l = document.createElement("span");
        return (
          (l.className = "btn btn--medium"),
          (l.textContent = topCasinoButtonText),
          c.appendChild(l),
          n.appendChild(a),
          n.appendChild(s),
          n.appendChild(c),
          t.appendChild(n),
          t
        );
      })(e);
      t.appendChild(n);
    });
  }
  function i(e, t) {
    e.forEach((e) => {
      const n = (function(e) {
        const t = document.createElement("div");
        t.className = "bonusTableRow";
        const n = document.createElement("div");
        n.className = "bonusTableRowContainer";
        const a = document.createElement("div");
        a.className = "bonusDetailsPicture";
        const s = document.createElement("img");
        (s.className = "bonusDetailsImage"),
          (s.src = `https://api.adkey-seo.com/storage/images/offers/${e.logo}`),
          (s.alt = e.name),
          (s.width = 140),
          (s.height = 53),
          a.appendChild(s);
        const o = document.createElement("div"),
          i = document.createElement("p");
        (i.className = "bonusDetailsText bonusDetailsWelcome"),
          (i.textContent = "Welcome bonus"),
          o.appendChild(i);
        const d = document.createElement("div"),
          c = document.createElement("p");
        (c.className = "bonusDetailsText bonusDetailsRate"),
          (c.textContent = e.bonuses.rate | "-"),
          d.appendChild(c);
        const l = document.createElement("div"),
          m = document.createElement("p");
        (m.className = "bonusDetailsText"),
          (m.textContent = e.bonuses.free_spins
            ? `${e.bonuses.free_spins} FS`
            : "-"),
          l.appendChild(m);
        const r = document.createElement("div");
        r.className = "bonusShowMore";
        const p = document.createElement("input");
        (p.className = "moreInfoInput"),
          (p.type = "checkbox"),
          (p.id = `info-${e.id}`);
        const h = document.createElement("label");
        (h.className = "moreInfoLabel"), (h.htmlFor = `info-${e.id}`);

        const u = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        u.setAttribute("class", "icon");
        u.setAttribute("width", "20");
        u.setAttribute("height", "20");

        const use = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "use",
        );
        use.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "href",
          informationOutlineName,
        );

        u.appendChild(use);

        h.appendChild(u), r.appendChild(p), r.appendChild(h);
        const f = document.createElement("div");
        f.className = "claimBonus";
        const g = document.createElement("a");
        (g.href = `casino.html?id=${e.id}`),
          (g.target = "_blank"),
          g.setAttribute("aria-label", "Play game");
        const v = document.createElement("span");
        (v.className = "bonusButton btn btn--medium"),
          (v.textContent = bonusDetailsButtonText),
          g.appendChild(v),
          f.appendChild(g),
          n.appendChild(a),
          n.appendChild(o),
          n.appendChild(d),
          n.appendChild(l),
          n.appendChild(r),
          n.appendChild(f);
        const y = document.createElement("div");
        y.className = "bonusDetailsInfo";
        const C = document.createElement("div");
        C.className = "bonusDetailBlock";
        const b = document.createElement("div");
        b.className = "bonusDetailsContainer";
        const E = document.createElement("p");
        (E.className = "bonusDetailsText bonusDetailsAmount"),
          (E.textContent = maximumAmountText);
        const M = document.createElement("p");
        (M.className = "bonusDetailsContent"),
          (M.textContent = e.bonuses.amount),
          b.appendChild(E),
          C.appendChild(b),
          C.appendChild(M);
        const N = document.createElement("div");
        N.className = "bonusDetailBlock";
        const I = document.createElement("div");
        I.className = "bonusDetailsContainer";
        const B = document.createElement("p");
        (B.className = "bonusDetailsText"), (B.textContent = wagerText);
        const k = document.createElement("p");
        (k.className = "bonusDetailsContent"),
          (k.textContent = e.wager),
          I.appendChild(B),
          N.appendChild(I),
          N.appendChild(k);
        const w = document.createElement("div");
        w.className = "bonusDetailBlock";
        const $ = document.createElement("div");
        $.className = "bonusDetailsContainer";
        const D = document.createElement("p");
        (D.className = "bonusDetailsText"), (D.textContent = bonusCodeText);
        const x = document.createElement("p");
        (x.className = "bonusDetailsContent"),
          (x.textContent = e.bonus_code),
          $.appendChild(D),
          w.appendChild($),
          w.appendChild(x);
        return (
          y.appendChild(C),
          y.appendChild(N),
          y.appendChild(w),
          t.appendChild(n),
          t.appendChild(y),
          p.addEventListener("change", function() {
            this.checked
              ? (y.style.display = "grid")
              : (y.style.display = "none");
          }),
          t
        );
      })(e);
      t.appendChild(n);
    });
  }
  fetch(t.website)
    .then((e) => e.json())
    .then((t) => ((e.siteData = t), (e.offers = t.offers || []), t))
    .catch((e) => (console.error("Error fetching site data:", e), null))
    .then(() => {
      !(function() {
        const t = document.getElementById("navSignUp"),
          n = document.getElementById("navPlayNow");
        if (e.offers.length > 0) {
          const a = e.offers[0];
          t && (t.href = `casino.html?id=${a.id}`),
            n && (n.href = `casino.html?id=${a.id}`);
        }
      })(),
        (function() {
          const t = document.getElementById("bonusText"),
            n = document.getElementById("bonusLink");
          if (e.offers.length > 0) {
            const a = e.offers[0];
            t && (t.textContent = a.bonuses.welcome_bonus),
              n && (n.href = `casino.html?id=${a.id}`);
          }
        })(),
        (function() {
          const t = document.getElementById("casinoCardContainer"),
            n = document.getElementById("showMoreButton"),
            a = document.getElementById("countryName");
          a &&
            e.siteData &&
            e.siteData.website &&
            e.siteData.website.country_name &&
            (a.textContent = e.siteData.website.country_name),
            t &&
            (o(e.offers.slice(0, 8), t),
              n &&
              (e.offers.length <= 8
                ? (n.style.display = "none")
                : n.addEventListener("click", function() {
                  o(e.offers.slice(8), t), (n.style.display = "none");
                })));
        })(),
        (function() {
          const t = document.getElementById("bonusTableRows"),
            n = document.getElementById("refreshButton");
          t && i(e.offers.slice(0, 6), t),
            n &&
            n.addEventListener("click", function() {
              if (e.offers && e.offers.length > 0) {
                const n = (function(e) {
                  const t = [...e];
                  let n,
                    a = t.length;
                  for (; a > 0;)
                    (n = Math.floor(Math.random() * a)),
                      a--,
                      ([t[a], t[n]] = [t[n], t[a]]);
                  return t;
                })(e.offers);
                (t.innerHTML = ""), i(n.slice(0, 6), t);
              }
            });
        })(),
        (function() {
          const t = document.getElementById("advantagesLink"),
            n = document.getElementById("appStoreLink"),
            a = document.getElementById("googlePlayLink");
          if (e.offers && e.offers.length > 0) {
            const s = e.offers[0].id;
            t && (t.href = `casino.html?id=${s}`),
              n && (n.href = `casino.html?id=${s}`),
              a && (a.href = `casino.html?id=${s}`);
          }
        })(),
        Promise.all([
          fetch(t.games)
            .then((e) => e.json())
            .then((t) => ((e.games = t || []), t))
            .catch((e) => (console.error("Error fetching games data:", e), []))
            .then(n),
          fetch(t.payments)
            .then((e) => e.json())
            .then((t) => ((e.payments = t || []), t))
            .catch(
              (t) => (
                console.error("Error fetching payments data:", t),
                (e.payments = [
                  {
                    payment_id: 1,
                    name: "Visa",
                    image: "visa.png",
                    type: "Credit Card",
                    country: "Global",
                    commission: "0%",
                    processing_time: "Instant",
                    min_dep: "100 SEK",
                  },
                  {
                    payment_id: 2,
                    name: "MasterCard",
                    image: "mastercard.png",
                    type: "Credit Card",
                    country: "Global",
                    commission: "0%",
                    processing_time: "Instant",
                    min_dep: "100 SEK",
                  },
                ]),
                e.payments
              ),
            )
            .then(a),
          fetch(t.providers)
            .then((e) => e.json())
            .then((t) => ((e.providers = t || []), t))
            .catch(
              (t) => (
                console.error("Error fetching providers data:", t),
                (e.providers = [
                  { id: 1, name: "NetEnt", image: "netent.png" },
                  { id: 2, name: "Microgaming", image: "microgaming.png" },
                  { id: 3, name: "Evolution Gaming", image: "evolution.png" },
                  { id: 4, name: "Pragmatic Play", image: "pragmatic.png" },
                ]),
                e.providers
              ),
            )
            .then(s),
        ]).catch((e) => {
          console.error("Error initializing components:", e);
        }),
        (function() {
          const t = document.getElementById("appStoreAppLink"),
            n = document.getElementById("googlePlayAppLink");
          if (e.offers && e.offers.length > 0) {
            const a = e.offers[0].id;
            t && (t.href = `casino.html?id=${a}`),
              n && (n.href = `casino.html?id=${a}`);
          }
        })();
    })
    .catch((e) => {
      console.error("Error initializing app:", e);
    }),
    (function() {
      const e = document.querySelectorAll(".faqInput");
      e.forEach((t) => {
        t.addEventListener("change", function() {
          this.checked;
        });
      });
    })();
}),
  document.addEventListener("DOMContentLoaded", function() {
    const e = new URLSearchParams(window.location.search).get("id");
    if (e) {
      fetch("https://api.adkey-seo.com/api/website/get-website/1046")
        .then((e) => {
          if (!e.ok) throw new Error(`HTTP error! Status: ${e.status}`);
          return e.json();
        })
        .then((t) => {
          if (t && t.offers) {
            const n = t.offers.find((t) => t.id.toString() === e);
            n && n.link
              ? (window.location.href = n.link)
              : (console.error("No matching offer found or offer has no link"),
                (window.location.href = "/"));
          } else
            console.error("Invalid site data structure"),
              (window.location.href = "/");
        })
        .catch((e) => {
          console.error("Error fetching site data:", e),
            (window.location.href = "/");
        })
        .finally(() => {
          setTimeout(() => {
            history.replaceState(
              { page: 1 },
              "Paf Casino Sverige: Licensierat kasino med bonusar och coola spel",
              "/",
            );
          }, 1e3);
        });
    }
  });
