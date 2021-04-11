export default function getProductsList(caseTrend, fewCases, increasingCases){
  let objectsList = [];
  if(!fewCases) {
    //too many cases there is still time to go back to work in person
    objectsList.push({
      name: "Ergonomic Chair",
      assetPath: "/assets/ergonomic_chair.jpg",
      price: 50.94,
      ratings: 4.5,
      reason: "Too many cases near you (time to go back to work in person)",
      amazonLink: "https://www.amazon.com/Black-Office-Chair-Computer-Adjustable/dp/B00FS3VJAO/"
    })
    objectsList.push({
      name: "Standing Desk",
      assetPath: "/assets/standing_desk.jpg",
      price: 199.87,
      ratings: 4.6,
      reason: "Too many cases near you (time to go back to work in person)",
      amazonLink: "https://www.amazon.com/SHW-Electric-Height-Adjustable-Computer/dp/B07GVRKCWP/"
    })
  } else {
    objectsList.push({
      name: "Tie",
      assetPath: "/assets/tie.png",
      price: 9.95,
      ratings: 4.7,
      reason: "Get ready for events near you because there are very few cases",
      amazonLink: "https://www.amazon.com/KissTies-Black-Solid-Satin-Necktie/dp/B077MTR9S2/"
    })
    objectsList.push({
      name: "Gym bag",
      assetPath: "/assets/gym_bag.jpg",
      price: 26.99,
      ratings: 4.7,
      reason: "Get ready for working out with very few cases near you",
      amazonLink: "https://www.amazon.com/Ultimate-Gym-Bag-2-0-Compartments/dp/B07GSJ45CF/"
    })
    objectsList.push({
      name: "Bye covid mug",
      assetPath: "/assets/bye_covid.jpg",
      price: 15.83,
      ratings: "N/A",
      reason: "Few cases around you looks like you are getting in the final strech of this pandemic",
      amazonLink: "https://www.amazon.com/Quarantine-Coffee-Covid-Missed-Funny/dp/B08BXZS17V/"
    })
  }

  if(fewCases && !increasingCases){
    objectsList.push({
      name: "Anti Microbial Desk Pad",
      assetPath: "/assets/anti_microbial_desk.jpg",
      price: 25.94,
      ratings: 4.7,
      reason: "The cases are decreasing and there are very few cases around you too which could mean a return to normal",
      amazonLink: "https://www.amazon.com/Artistic-Ultra-Smooth-Exclusive-Antimicrobial-Protection/dp/B00ED3GYFU/"
    })
    objectsList.push({
      name: "Clorox Wipes",
      assetPath: "/assets/clorox_wipes.jpg",
      price: 11.97,
      ratings: 4.3,
      reason: "With a return to normal office you would want to be safe with these wipes",
      amazonLink: "https://www.amazon.com/Clorox-Disinfecting-Bleach-Cleaning-Packaging/dp/B08BKR9YT6/"
    })
  }

  objectsList.push({
    name: "Weighted Blanket",
    assetPath: "/assets/weighted_blanket.jpg",
    price: 25.99,
    ratings: 4.6,
    reason: "Staycation essentials",
    amazonLink: "https://www.amazon.com/Smartqueen-Weighted-Blankets-Blanket%EF%BC%8C-Premium/dp/B07V4KW7MY/"
  })

  objectsList.push({
    name: "Bath Caddy Tray",
    assetPath: "/assets/bath_caddy.jpg",
    price: 39.99,
    ratings: 4.2,
    reason: "Staycation essentials",
    amazonLink: "https://www.amazon.com/Bath-Caddy-Tray-Bathtub-Adjustable/dp/B07H313GF7/"
  })

  objectsList.push({
    name: "Mini Projector",
    assetPath: "/assets/mini_projector.jpg",
    price: 69.99,
    ratings: 4.4,
    reason: "Staycation essentials",
    amazonLink: "https://www.amazon.com/ManyBox-Projector-Portable-Supported-Compatible/dp/B07V9H8919/"
  })

  objectsList.push({
    name: "Foot massager",
    assetPath: "/assets/foot_massager.jpg",
    price: 110.49,
    ratings: 4.4,
    reason: "Staycation essentials",
    amazonLink: "https://www.amazon.com/RENPHO-Massager-Compression-Fasciitis-Circulation/dp/B07F2H1NQR/"
  })

  return objectsList;
}

