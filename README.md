
![TWF Dash Screenshot](https://raw.githubusercontent.com/hakanuzunoglu/TWF-Dash/main/documentation/img/twf_dash3.jpg)
## TWF Dashboard Ecosystem Beta

Rather than replica dashboards made for real-life racing, use a family of 7 dashboards custom-made for different DDUs with many features that can make you better or faster in sim racing. 

The TWF Dash Ecosystem is now made universal, so ideally it should work with every game that SimHub supports - some features might not work or be missing as intended depending on game.

**Fully compatible with: AMS2, ACC, AC, iRacing with enhanced features.**

![TWF Dash Screenshot](https://raw.githubusercontent.com/hakanuzunoglu/TWF-Dash/main/documentation/img/twf_dash2.jpg)

## Highlights:

 - **New tyres module design** with inner, outer, and middle sections of tyres displayed seperately
	 - ACC & AC: Tyre pressure, tyre temp, brake temp, inner, outer and middle sections seperate temps, wheel spin and lock per tyre
	 - AMS2: Tyre pressure, tyre temp, brake temp, brake wear, inner, outer and middle tyre section temps
	 - IRacing: Tyre pressure, tyre temp, tyre wear, inner, outer and middle tyre section temps
	 - For other games, it uses SimHub native properties, so it will be displayed as per SimHub support
 - **Always on live and progress delta** that shows your delta per corner and overall lap
 - **Integrated spotter & CAS (radar)** that shows the distance and of cars behind or next to you
 - **New car damage module design**
	 - ACC: front, rear, right, left
	 - AC: overall damage
	 - AMS2: Aero, engine, brake wear per wheel
	 - IRacing: disabled
	 - For other games, it uses SimHub native properties, so it will be displayed as per SimHub support
 - **New idle screens** with customizable name, number and color
 - **Contextual modules** that appear automatically and briefly for:
	- Pits (**refuel calculators** tyres and distance to the pit box)
	- Spins (shows a map for you to safely rejoin)
	- Damage (shows damages of your car)
	- Head 2 Head (shows info such as gap, license and safety rating, best lap and last lap of the car ahead and behind once the gap is within certain threshold)
 - **Multi-function displays** with customization
	- Tyres
	- Damage (Not available for IRacing)
	- Vehicle Status (Not available for ACC)
	- Timings (current, predicted, last and best laps with correct color coding)
	- Timings and gap to ahead or behind)
	- Ahead or behind 
	- Relative leaderboard
	- Class leaderboard
	- Map (Can slow down performance, so it can be turned off in JSON configuration file)
	You can also choose which MFD to show by default in JSON file
 - **Car logos** for major brands that appear when ignition is off
 - **Automatic counter rotation** for gear, speed and RPM similar to Fanatec Bentley wheel - requires additional plugins.
 - **Overspeed and pit limiter reminders** for pit lanes. 
 - **Shift / RPM leds** for people who use phones as their DDUs.
 - Environment information such as **track and air temps**
 - **Incident counts and iRating gains** for iRacing
 - **Flags, lap recaps, alerts, car settings** and many more...
 -  7 Dashes for different use cases:
	 - TWF DASH: Main dash with all features
	 - TWF DASH WIDE: Main dash with additional flag lights on the side (for phones)
	 - TWF DASH ULTRAWIDE: Main dash customized for Porsche 10" DDUs.
	 - TWF RADAR: Radar dash with collision avoidance system combined with screens from TWF LAPTIMER. Good for secondary DDUs.
	 - TWF LAPTIMER: Laptimer dash with your laps, car damage and status, leaderboards, map as seperate screens. Good for secondary DDUs.
	 - TWF VERTICAL DASH: A secondary DDU specifically made for tablets in vertical position, including tyres, damage and all screens from TWF LAPTIMER and TWF RADAR.

## **Known Issues**

Features might not work as intended for games that are not mentioned seperately.
Also MFD Default display customization numbers might change depending on the game. 

## Requirements

**SimHub 8.3.7** 
https://www.simhubdash.com/download-2/

**Rajdhani Font**
https://fonts.google.com/specimen/Rajdhani

**Romain Rob Input Display**
For counter-rotation to work (similar to Fanatec Bentley wheel)\
https://www.simhubdash.com/community-2/dashboard-templates/romainrobs-collection/

**iRacing Extra Properties**
For class, safety rating, iRating info
https://www.simhubdash.com/community-2/dashboard-templates/romainrobs-collection/

# Installation

- Download the [latest release](https://github.com/hakanuzunoglu/TWF-Dash/releases/). 
- Unzip the file contents and double click on the dashes you want to install. 
- Copy **TWF_DASH_HELPER.JS** and **TWF_DASH_CONFIG.JSON** under **C:\Program Files (x86)\SimHub\JavascriptExtensions**


You can customize TWF_DASH_CONFIG.JSON file to add your name, number and color to dashes.

If you run multiple DDUs and do not want the same alerts and flags to appear on all, you can also turn alerts and flags on/off based on each dash.

**Credits**

Inspired by [LovelyDashboard](https://github.com/cdemetriadis/lovely-dashboard).
Special thanks to Romain Rob for his awesome plugins.


**Disclaimer**

All trademarks, logos and brand names are the property of their respective owners. All company, product and service names used in this application are for identification purposes only. Use of these names, trademarks and brands does not imply endorsement.

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg
