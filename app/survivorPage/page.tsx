"use client"

import SurvivorPageClient from "./SurvivorPageClient";

// import MapRandomizer from "../components/MapRandomizer";
// import SurvivorItemRandomizer from "./components/SurvivorItemRandomizer";
// import SurvivorPerkRandomizer from "./components/SurvivorPerkRandomizer";
// import SurvivorRandomizer from "./components/SurvivorRandomizer";

const SurvivorPage = () => {
    return (
        <div>
            {/* <SurvivorRandomizer />
            <SurvivorPerkRandomizer />
            <SurvivorItemRandomizer />
            <MapRandomizer /> */}
            <SurvivorPageClient />
        </div>
    )
}

export default SurvivorPage;