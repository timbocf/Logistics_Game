# Logistics Game — JavaScript Prototype

An early console-based trucking/dispatch simulation focused on modeling drivers, loads, trailers and locations. The current program evaluates whether a sample driver can reach a pickup appointment.

This is a simulation foundation rather than a complete interactive game.

## Run

Install Node.js with support for JavaScript classes, clone or download the repository and run:

~~~bash
node Logistics_Game.js
~~~

There is no package.json and no npm dependency installation. A browser interface is not included.

The sample run prints either **All good** or **Bob won't make it**, depending on the calculated arrival time.

## Current model

| Class | Stores or calculates |
| --- | --- |
| **Driver** | Name, location, duty status, available drive/duty hours and average speed |
| **Location** | A location key, display name and distances to other locations |
| **Load** | Load number, origin/destination, pickup/delivery appointments and status |
| **Trailer** | Trailer number, location and cleanliness |

The preset distance table contains Phoenix–Los Angeles (370 miles), Phoenix–Las Vegas (300 miles) and Los Angeles–Las Vegas (270 miles), in both directions. These are manually supplied game values, not routed road distances.

## Sample scenario

The game clock starts at **October 11, 2026, 20:00** in the runtime's local timezone. Bob starts in Phoenix, and a sample load picks up in Los Angeles at **October 12, 2026, 08:00**.

**Driver.getTravelTime()** divides distance by average speed. The example adds ten hours when the required travel exceeds the driver's available driving hours, then compares the resulting arrival timestamp with the pickup appointment.

## Project layout

All implementation and sample data are in [Logistics_Game.js](Logistics_Game.js). Commented logging statements provide examples for inspecting drivers, loads, locations and trailers.

## Customize

- Adjust drivers' starting locations, speeds and hours.
- Add location distance entries and instantiate matching Location objects.
- Change the game start or appointment dates.
- Uncomment the diagnostic logs to inspect the objects.

## Scope and limitations

The prototype has no dispatch menu, continuous clock, load progression, persistence, map service or financial system. Duty hours are stored but are not comprehensively enforced. The ten-hour-break adjustment is a single simplified calculation, not a complete multi-day driver-hours model.

## Check changes

Run the script with a reachable pickup, then move that appointment earlier to exercise the late-arrival result. Verify distance entries exist before calling **getTravelTime()**; missing keys can propagate an invalid numeric result.
