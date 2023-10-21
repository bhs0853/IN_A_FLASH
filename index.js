import "./index.css";
import Logo from "./assests/logo-trans-white.svg";
import React from "react";
import ReactDOM from "react-dom/client";
/**
 * Build a Food Ordering App
Think of a cool name for your app - In a flash
Build a AppLayout
Build a Header Component with Logo & Nav Items & Cart
Build a Body Component
Build RestaurantList Component
Build RestaurantCard Component
Use static data initially
Make your card dynamic(pass in props)
Props - passing arguments to a function - Use Destructuring & Spread operator
Render your cards with dynamic data of restaurants
Use Array.map to render all the restaurants
 */

const header = (
  <div id="header" key="header">
    <div className="left-header" key="left-header">
      <a href="/">
        <img src={Logo} id="logo-img"></img>
      </a>
    </div>

    <div className="right-header" key="right-header">
      <ul className="right-header">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li className="cart">Cart</li>
      </ul>
    </div>
  </div>
);
// const BurgerKing = {
//     name: "BurgerKing",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
//     cuisines : "Burgers, American",
//     rating : "4.1",
// };
// const Dominos = {
//     name: "Dominos",
//     image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hw419mm4irnetgbzkldu",
//     cuisines : "Pizzas, Italian, Pastas, Desserts",
//     rating : "4.2",
// };
/**
 * img
 * name
 * cuisines
 * rating
 */
const RestaurantList = [
  {
    info: {
      id: "67800",
      name: "Bunnys Family Restaurant",
      cloudinaryImageId: "dxknlfkvtfmx94f2cwxi",
      locality: "Kalyan Enclave",
      areaName: "Kurmannapalem",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Andhra", "North Indian", "Chinese"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "67800",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3100,
      },
      parentId: "12847",
      avgRatingString: "3.9",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.1,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "4.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-20 22:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/bunnys-family-restaurant-kalyan-enclave-kurmannapalem-vizag-67800",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "72859",
      name: "Domino's Pizza",
      cloudinaryImageId: "hw419mm4irnetgbzkldu",
      locality: "Auto Nagar",
      areaName: "Gajuwaka",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "72859",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2300,
      },
      parentId: "2456",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 25,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-20 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-auto-nagar-gajuwaka-vizag-72859",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "69418",
      name: "Paradise Biryani",
      cloudinaryImageId: "oejvdna5nvevbtnpc8t3",
      locality: "Chaitanya nagar",
      areaName: "Gajuwaka",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Kebabs", "North Indian", "Hyderabadi"],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: "69418",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "700",
      avgRatingString: "3.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 21,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-20 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/paradise-biryani-chaitanya-nagar-gajuwaka-vizag-69418",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "323686",
      name: "Cream Stone Ice Cream",
      cloudinaryImageId: "e6af7ef8b8ad04f12d748f144b602c0f",
      areaName: "Gajuwaka",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Desserts", "Beverages"],
      avgRating: 4.4,
      veg: true,
      feeDetails: {
        restaurantId: "323686",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2300,
      },
      parentId: "289",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-20 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cream-stone-ice-cream-gajuwaka-vizag-323686",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "429771",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Exhibition Road",
      areaName: "Gajuwaka",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "429771",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2200,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2200,
      },
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-20 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹129",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-exhibition-road-gajuwaka-vizag-429771",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "363713",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Chaitanya nagar",
      areaName: "Gajuwaka",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "363713",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2800,
      },
      parentId: "547",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-20 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-chaitanya-nagar-gajuwaka-vizag-363713",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "390655",
      name: "The Red Box",
      cloudinaryImageId: "zlx1hsdkqe0eoayx7pmx",
      locality: "Lbs Nagar",
      areaName: "Gajuwaka",
      costForTwo: "₹400 for two",
      cuisines: ["Chinese"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "390655",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2300,
      },
      parentId: "1636",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 0.5,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "0.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-10-20 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/the-red-box-lbs-nagar-gajuwaka-vizag-390655",
      type: "WEBLINK",
    },
  },
];
const style = {
    overflow:"hidden"
}
const RestaurantCard = (props) => {
  let image = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + props.info.cloudinaryImageId;
  return (
    <div className="card" key={props.info.id}>
      <img src={image}></img>
      <div>{props.info.name}</div>
      <div>
        {props.info.avgRating} . {props.info.costForTwo}
      </div>
      <div style={style}>{props.info.cuisines.join(", ")}</div>
      <div>{props.info.areaName}</div>
    </div>
  );
};
// const body = (
//   <div id="hero-container" key="heroContainer">
//     <RestaurantCard {...RestaurantList[0].info} />
//     <RestaurantCard {...RestaurantList[1].info} />
 
//   </div>
// );
const body = (
    <div id="hero-container" key="heroContainer">
        <>
            {RestaurantList.map((Restaurant) => {
                return <RestaurantCard {...Restaurant}/>
            })}
            {RestaurantList.map((Restaurant) => {
                return <RestaurantCard {...Restaurant}/>
            })}
            {RestaurantList.map((Restaurant) => {
                return <RestaurantCard {...Restaurant}/>
            })}
            {RestaurantList.map((Restaurant) => {
                return <RestaurantCard {...Restaurant}/>
            })}
        </>
            
    </div>
);
const footer = <h4>footer</h4>;
const AppLayout = function () {
  return (
    <>
      {header}
      {body}
      {/* {footer} */}
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
