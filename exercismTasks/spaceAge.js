/*
Instructions
Given an age in seconds, calculate how old someone would be on:

Mercury: orbital period 0.2408467 Earth years
Venus: orbital period 0.61519726 Earth years
Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
Mars: orbital period 1.8808158 Earth years
Jupiter: orbital period 11.862615 Earth years
Saturn: orbital period 29.447498 Earth years
Uranus: orbital period 84.016846 Earth years
Neptune: orbital period 164.79132 Earth years
So if you were told someone were 1,000,000,000 seconds old,
you should be able to say that they're 31.69 Earth-years old.
*/

const age = (planet, ageInSeconds) => {
    const SECONDS_IN_YEAR_EARTH = 31557600;

    let ORBITALS_PERIOD_RATES = {
        'earth': 1,
        'mercury': 0.2408467,
        'venus': 0.61519726,
        'mars': 1.8808158,
        'jupiter': 11.862615,
        'saturn': 29.447498,
        'uranus': 84.016846,
        'neptune': 164.79132,
    }

    return Number((ageInSeconds / SECONDS_IN_YEAR_EARTH / ORBITALS_PERIOD_RATES[planet]).toFixed(2));
};
