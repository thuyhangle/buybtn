/*<![CDATA[*/
  (function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }

    function loadScript() {
      var script = document.createElement('script');
      script.async = true;
      script.src = scriptURL;
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
      script.onload = ShopifyBuyInit;
    }

    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: 'hang-test-shop.myshopify.com',
        apiKey: 'b191172d3aebed0675c04203f5458372',
        appId: '6',
      });

      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('collection', {
          id: 56687919162,
          node: document.getElementById('collection-component-9ed1ca6db48'),
          moneyFormat: '%E2%82%AC%7B%7Bamount_with_comma_separator%7D%7D',
          options: {
            "product": {
              "buttonDestination": "modal",
              "variantId": "all",
              "contents": {
                "imgWithCarousel": false,
                "variantTitle": false,
                "options": false,
                "description": false,
                "buttonWithQuantity": false,
                "quantity": false
              },
              "text": {
                "button": "VIEW PRODUCT"
              },
              "styles": {
                "product": {
                  "@media  only screen and (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    "vertical-align": "baseline"
                  },
                  "vertical-align": "baseline"
                },
                "button": {
                  "background-color": "#7fd69f",
                  ":hover": {
                    "background-color": "#72c18f"
                  },
                  ":focus": {
                    "background-color": "#72c18f"
                  }
                }
              }
            },
            "cart": {
              "contents": {
                "button": true
              },
              "styles": {
                "button": {
                  "background-color": "#7fd69f",
                  ":hover": {
                    "background-color": "#72c18f"
                  },
                  ":focus": {
                    "background-color": "#72c18f"
                  }
                },
                "footer": {
                  "background-color": "#ffffff"
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "variantTitle": false,
                "buttonWithQuantity": false,
                "button": true,
                "quantity": false,
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                }
              }
            },
            "toggle": {
              "styles": {
                "toggle": {
                  "background-color": "#7fd69f",
                  ":hover": {
                    "background-color": "#72c18f"
                  },
                  ":focus": {
                    "background-color": "#72c18f"
                  }
                }
              }
            },
            "productSet": {
              "styles": {
                "button": {
                  "background-color": "#7fd69f",
                  ":hover": {
                    "background-color": "#72c18f"
                  },
                  ":focus": {
                    "background-color": "#72c18f"
                  }
                },
                "products": {
                  "@media only screen and (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            }
          }
        });
      });
    }
  })();
  /*]]>*/