//
// TWF Dash JavaScript Extensions
// Please place this file under 'C:\\Program Files (x86)\Simhub\JavascriptExtensions'
//
function changed(delay, value) {

    root['time'] = timespantoseconds($prop('SystemInfoPlugin.Uptime'));

    root['oldstate'] = root['oldstate'] == null ? value : root['newstate'];
    root['newstate'] = value;

    if (root['newstate'] != root['oldstate']) {
        root['triggerTime'] = root['time'];
    }

    return root['triggerTime'] == null ? false : root['time'] - root['triggerTime'] <= delay / 1000;
}



function isincreasing(delay, value) {

    root['time'] = timespantoseconds($prop('SystemInfoPlugin.Uptime'));

    root['oldstate'] = root['oldstate'] == null ? value : root['newstate'];
    root['newstate'] = value;

    if (root['newstate'] > root['oldstate']) {
        root['triggerTime'] = root['time'];
    }

    return root['triggerTime'] == null ? false : root['time'] - root['triggerTime'] <= delay / 1000;
}

function isdecreasing(delay, value) {

    root['time'] = timespantoseconds($prop('SystemInfoPlugin.Uptime'));

    root['oldstate'] = root['oldstate'] == null ? value : root['newstate'];
    root['newstate'] = value;

    if (root['newstate'] < root['oldstate']) {
        root['triggerTime'] = root['time'];
    }

    return root['triggerTime'] == null ? false : root['time'] - root['triggerTime'] <= delay / 1000;
}

function twf_read_setting(setting, novalue) {
    const settings_file = readtextfile('./JavascriptExtensions/TWF_DASH_CONFIG.json')
    const config = JSON.parse(settings_file);
    setting_key = setting
    let setting_value = config[setting_key];
    if (!config || setting_value == null) {
        return novalue
    } else {
        return setting_value
    }
}

function twf_read_setting_exists(setting, yes, no) {
    const settings_file = readtextfile('./JavascriptExtensions/TWF_DASH_CONFIG.json')
    const config = JSON.parse(settings_file);
    setting_key_e = setting
    let setting_value = config[setting_key_e];
    if (!config || setting_value != null) {
        return yes
    } else {
        return no
    }
}


function twf_read_setting_equals(setting, value, yes, no) {
    const settings_file = readtextfile('./JavascriptExtensions/TWF_DASH_CONFIG.json')
    const config = JSON.parse(settings_file);
    setting_key_eq = setting
    let setting_value = config[setting_key_eq];
    if (!config || !setting_value) {
        return no
    } else if (setting_value == value) {
        return yes
    } else {
        return no
    }
}


function twf_get_driver_name_by_position(position) {
    if (drivername(position) != null) {
        return twf_format_driver_name(drivername(position));
    } else {
        return ''
    }
}

function twf_get_player_name() {
    if ($prop('PlayerName') != null) {
        return twf_format_driver_name($prop('PlayerName'));
    } else {
        return ''
    }
}

function twf_format_driver_name(name) {
    n = name.toUpperCase();
    fn = n.split(' ');
    return fn[0].substr(0, 1) + ' ' + fn[fn.length - 1]
}


function twf_get_ui_color(ui) {
    ui_preference = twf_read_setting("ui_color", 1);
    setting_key_color = ui;

    const color_codes_1 = {
        "border": "#FF233E49",
        "tablebg": "#72233E49",
        "rpmbg": "#FF233E49",
        "spotterbg": "#FF061217",
        "spottergauge": "#FFFF8C00",
        "dimbg": "#FF061217",
        "positionbg": "#FFFFFF",
        "positionbgplayer": "#FFFFD700",
        "bodytext": "#FFFFFF",
        "pagination": "#FF477384",
        "infobg": "#FF152B33"
    }
    const color_codes_2 = {
        "border": "#FF222222",
        "tablebg": "#6E3C3C3C",
        "rpmbg": "#FF222222",
        "spotterbg": "#FF111111",
        "spottergauge": "#FFFF8C00",
        "dimbg": "#FF111111",
        "positionbg": "#FFFFFF",
        "positionbgplayer": "#FFFFD700",
        "bodytext": "#FFFFFF",
        "pagination": "#FF222222",
        "infobg": "#FF222222"
    }
    const color_codes_3 = {
       "border": "#FF333333",
        "tablebg": "#6E3C3C3C",
        "rpmbg": "#FF222222",
        "spotterbg": "#FF111111",
        "spottergauge": "#FFFF8C00",
        "dimbg": "#FF111111",
        "positionbg": "#FFFFFF",
        "positionbgplayer": "#FFFFD700",
        "bodytext": "#FFFFFF",
        "pagination": "#FF222222",
        "infobg": "#FF222222"
    }
     const color_codes_4 = {
       "border": twf_read_setting("ui_custom_color", "#FF333333"),
        "tablebg": twf_read_setting("ui_custom_bgcolor", "#6E3C3C3C"),
        "rpmbg": "#FF222222",
        "spotterbg": "#FF111111",
        "spottergauge": "#FFFF8C00",
        "dimbg": "#FF111111",
        "positionbg": "#FFFFFF",
        "positionbgplayer": "#FFFFD700",
        "bodytext": "#FFFFFF",
        "pagination": "#FF222222",
        "infobg": "#FF222222"
    }

    if (ui_preference == 1) {
        return color_codes_1[setting_key_color];
    }
    if (ui_preference == 2) {
        return color_codes_2[setting_key_color];

    } if (ui_preference == 3) {
        return color_codes_3[setting_key_color];

    }
      if (ui_preference == 4) {
        return color_codes_4[setting_key_color];

    }else {
        return color_codes_1[setting_key_color];

    }
}

function twf_get_ui_bg(ui) {
    ui_preference = twf_read_setting("ui_color", 1);
    setting_key_bg = ui;

    const images_1 = {
        "delta": "deltabg",
        "deltalap": "deltalapbg",
        "mfd1left": "bgmfd1left",
        "mfd2left": "bgmfd2left",
        "mfd1right": "bgmfd1right",
        "mfd2right": "bgmfd2right",
        "contextualleft": "bgmfdcontextualleft",
        "contextualright": "bgmfdcontextualright",
        "bg": "bgmain",
        "carsettings": "bgbottom",
        "dashlights": "deltabg"
    }
    const images_2 = {
        "delta": "deltabgblack",
        "deltalap": "deltalapbgblack",
        "mfd1left": "bgmfd1leftblack",
        "mfd2left": "bgmfd2leftblack",
        "mfd1right": "bgmfd1rightblack",
        "mfd2right": "bgmfd2rightblack",
        "contextualleft": "bgmfdcontextualleft",
        "contextualright": "bgmfdcontextualright",
        "bg": "bgmainblack",
        "carsettings": "bgbottomblack",
        "dashlights": "deltabgblack"

    }
    
     const images_3 = {
        "delta": " ",
        "deltalap": " ",
        "mfd1left": " ",
        "mfd2left": " ",
        "mfd1right": " ",
        "mfd2right": " ",
        "contextualleft": "bgmfdcontextualleft",
        "contextualright": "bgmfdcontextualright",
        "bg": " ",
        "carsettings": " ",
        "dashlights": " "

    }
      const images_4 = {
        "delta": "deltabgblack",
        "deltalap": "deltalapbgblack",
        "mfd1left": "bgmfd1leftblack",
        "mfd2left": "bgmfd2leftblack",
        "mfd1right": "bgmfd1rightblack",
        "mfd2right": "bgmfd2rightblack",
        "contextualleft": "bgmfdcontextualleft",
        "contextualright": "bgmfdcontextualright",
        "bg": "bgmainblack",
        "carsettings": "bgbottomblack",
        "dashlights": "deltabgblack"

    }

    if (ui_preference == 1) {
        return images_1[setting_key_bg];
    }
    if (ui_preference == 2) {
        return images_2[setting_key_bg];

    }  if (ui_preference == 3) {
        return images_3[setting_key_bg];

    
     }  if (ui_preference == 4) {
        return images_4[setting_key_bg];

    }else {
        return images_1[setting_key_bg];

    }
}



function twf_player_best_time_color() {
    if ($prop('BestLapOpponentPosition') !== null) {
        var bestlapdriverposition = $prop('BestLapOpponentPosition') + 1
        if (isplayer(bestlapdriverposition)) {
            return '#C500CE'
        } else {
            if (timespantoseconds($prop('BestLapTime')) < 1) {
                return '#000000'
            } else {
                return '#008200'
            }
        }
    }
}




function twf_rpm_gauge_color() {
    color = twf_read_setting("ui_color", 1)

    if ($prop('DataCorePlugin.GameData.CarSettings_RPMRedLineReached') == true) {
        return 'red'
    } else {

        if (color == 1) {
            return "deepskyblue"
        }
        if (color == 2) {
            return "white"
        }
        if (color == 3) {
            return "white"
        } else {
            return "deepskyblue"
        }
    }
}



function twf_current_lap_color() {
    if (root["invalidlap"] == null) {
        root["invalidlap"] = 0
    }

    if ($prop('DataCorePlugin.CurrentGame') == "IRacing") {
        if ($prop('DataCorePlugin.GameRawData.Telemetry.PlayerTrackSurface') == 0) {
            root["invalidlap"]++

        }
    }
    if ($prop('DataCorePlugin.CurrentGame') == "Automobilista2") {
        if ($prop('GameRawData.mLapInvalidated') == true) {
            root["invalidlap"]++
        }
    }

    if ($prop('DataCorePlugin.CurrentGame') == "AssettoCorsaCompetizione") {
        if ($prop('DataCorePlugin.GameRawData.Graphics.isValidLap') == false) {
            root["invalidlap"]++
        }
    }
    if (timespantoseconds($prop('CurrentLapTime')) < 1) {
        root["invalidlap"] = 0
    }


    if (root["invalidlap"] > 0) {
        return '#FFFF0000'
    } else {
        return '#FFFFFF'
    }

}



function twf_predicted_lap_color() {

    var predicted = $prop('PersistantTrackerPlugin.EstimatedLapTime')
    if ($prop('DataCorePlugin.CurrentGame') == 'AssettoCorsaCompetizione') {
        if (timespantoseconds($prop('BestLapTime')) > 0) {
            predicted = $prop('GameRawData.Graphics.EstimatedLapTime')
        }
    }
    if ($prop('BestLapOpponentPosition') !== null) {
        var overallbestlap = timespantoseconds(driverbestlap($prop('BestLapOpponentPosition') + 1))
        var predictedseconds = timespantoseconds(predicted)
        var sessionbest = timespantoseconds($prop('BestLapTime'))
        if (predictedseconds == 0) {
            return '#666666'
        } else if (predictedseconds == overallbestlap) {
            return '#C500CE'
        } else if (predictedseconds <= sessionbest) {
            return '#FF01ad01'
        } else {
            return '#FFFFD700'
        }
    }
}

function twf_get_session_best_delta(options) {
    currentgame = $prop('DataCorePlugin.CurrentGame')
    delta = 0
    if ($prop('DataCorePlugin.CurrentGame') == 'RFactor2') {
        if (timespantoseconds($prop('DataCorePlugin.GameData.BestLapTime')) == 0) {
            delta = 0
        } else {
            delta = timespantoseconds($prop('PersistantTrackerPlugin.EstimatedLapTime')) - timespantoseconds($prop('DataCorePlugin.GameData.BestLapTime'))
        }
    } else {
        delta = $prop('PersistantTrackerPlugin.SessionBestLiveDeltaSeconds')
    }   
    if (options == "color") {
        return delta

    } else {
        return Math.abs(delta)
    }
}

function twf_get_alltime_best_delta(options) {
    currentgame = $prop('DataCorePlugin.CurrentGame')
    delta = 0
    if ($prop('DataCorePlugin.CurrentGame') == 'RFactor2') {
        delta = "NA"
    } else {
        delta = $prop('PersistantTrackerPlugin.AllTimeBestLiveDeltaSeconds')
    }
    if (options == "color") {
        return delta

    } else {
        return Math.abs(delta)
    }
}

function twf_get_lastlap_delta(options) {
 delta = 0
 predicted = timespantoseconds(twf_predicted_lap_time())
lastlap = timespantoseconds($prop('LastLapTime'))
    if (lastlap>0 && predicted > 0) {
        
        delta = predicted - lastlap
    }
    if (options == "color") {
        return delta

    } else {
        return Math.abs(delta)
    }
}

function twf_get_live_delta(options){
    
}

function twf_predicted_lap_time() {
    var predicted = $prop('PersistantTrackerPlugin.EstimatedLapTime')
    if ($prop('DataCorePlugin.CurrentGame') == 'AssettoCorsaCompetizione') {
        if (timespantoseconds($prop('BestLapTime')) > 0) {
            predicted = secondstotimespan($prop('GameRawData.Graphics.iEstimatedLapTime') / 1000)
        }
    }
    return predicted
}

function twf_last_lap_color(color) {
    if (color != null) {
        text_color = color
    } else {
        text_color = "#FFFFD700"
    }
    if ($prop('BestLapOpponentPosition') !== null) {
        var overallbestlap = timespantoseconds(driverbestlap($prop('BestLapOpponentPosition') + 1))
        var lastlap = timespantoseconds($prop('LastLapTime'))
        var sessionbest = timespantoseconds($prop('BestLapTime'))
        if (lastlap == 0) {
            return text_color
        } else if (lastlap == overallbestlap) {
            return '#FFFF00FF'
        } else if (lastlap == sessionbest) {
            return '#FF01ad01'
        } else {
            return text_color
        }
    }
}

function twf_best_lap_color() {

    if ($prop('BestLapOpponentPosition') !== null) {
        var bestlapdriverposition = $prop('BestLapOpponentPosition') + 1
        if (isplayer(bestlapdriverposition)) {
            return '#FFFF00FF'
        } else {
            if (timespantoseconds($prop('BestLapTime')) < 1) {
                return '#666666'
            } else {
                return '#FF01ad01'
            }
        }
    }
}


function twf_border_radius() {
    return twf_read_setting("ui_radius", 6)
}


function twf_contextual_damage() {
    damage1 = 0

    if ($prop('DataCorePlugin.CurrentGame') == 'Automobilista2') {
        damage1 = Math.round(($prop('CarDamage1'))) + Math.round($prop('CarDamage2'))
        return changed(5000, damage1)

    } else
    if ($prop('DataCorePlugin.CurrentGame') == 'AssettoCorsa') {
        damage1 = isnull($prop('CarDamage1'), 0)
        return changed(5000, damage1)

    } else
    if ($prop('DataCorePlugin.CurrentGame') == 'AssettoCorsaCompetizione') {
        damage1 = isnull($prop('DataCorePlugin.GameData.CarDamage5'), 0)
        return changed(5000, damage1)
    } else {
        damage1 = isnull($prop('DataCorePlugin.GameData.CarDamage5'), 0)
        return changed(5000, damage1)
    }
}


function twf_get_mfd(mfdlocation, mfdname) {
    currentgame = $prop('DataCorePlugin.CurrentGame')
    const mfd_acc = {
        "tyres": 1,
        "damage": 1,
        "status": 0,
        "timings": 1,
        "timingsandgap": 1,
        "gap": 1,
        "relative": 1,
        "class": 1,
        "map": twf_read_setting("mfd_map", 1)
    }
    const mfd_ir = {
        "tyres": 1,
        "damage": 0,
        "status": 1,
        "timings": 1,
        "timingsandgap": 1,
        "gap": 1,
        "relative": 1,
        "class": 1,
        "map": twf_read_setting("mfd_map", 1)
    }
    const mfd_all = {
        "tyres": 1,
        "damage": 1,
        "status": 1,
        "timings": 1,
        "timingsandgap": 1,
        "gap": 1,
        "relative": 1,
        "class": 1,
        "map": twf_read_setting("mfd_map", 1)
    }

    if (currentgame == "AssettoCorsaCompetizione") {
        return mfd_acc[mfdname]
    }
    if (currentgame == "IRacing") {
        return mfd_ir[mfdname]
    } else {
        return mfd_all[mfdname]
    }
}

function twf_refuel(fueltype) {
    fuelconsumption = (Math.ceil($prop('DataCorePlugin.Computed.Fuel_LitersPerLap') * 10) / 10).toFixed(1)
    fuelremainingtime = timespantoseconds($prop('DataCorePlugin.Computed.Fuel_RemainingTime'))
    fuelremaininglaps = $prop('DataCorePlugin.Computed.Fuel_RemainingLaps')
    sessionremaininglaps = $prop('RemainingLaps')
    sessionremainingtime = timespantoseconds($prop('SessionTimeLeft'))
    fuelonboard = $prop('Fuel')
    bestlaptime = timespantoseconds($prop('BestLapTime'))
    avglaptime = (timespantoseconds($prop('PersistantTrackerPlugin.PreviousLap_00')) +
        timespantoseconds($prop('PersistantTrackerPlugin.PreviousLap_01')) + timespantoseconds($prop('PersistantTrackerPlugin.PreviousLap_02'))) / 3
    calculationtime = 0
    if (timespantoseconds($prop('PersistantTrackerPlugin.PreviousLap_00')) < 1 || timespantoseconds($prop('PersistantTrackerPlugin.PreviousLap_01')) < 1 || timespantoseconds($prop('PersistantTrackerPlugin.PreviousLap_02')) < 1) {
        calculationtime = bestlaptime + 0.2
    } else {
        calculationtime = avglaptime
    }


    var fueltoadd = 'NA'
    var fueltoaddbylap = 0
    if ($prop('CurrentLap') > 1) {
        if (sessionremaininglaps > 0 && fuelremaininglaps !== null) {
            fueltoadd = (((sessionremaininglaps - fuelremaininglaps) + 1) * fuelconsumption) + 1
        } else {
            if (fuelremainingtime !== null && fuelremainingtime > 0) {
                fueltoadd = ((sessionremainingtime / calculationtime + 1) * fuelconsumption - fuelonboard) + 1
            }
        }
    }
    if (fueltype == "atfinish") {
        if (fueltoadd < 0) {
            return fueltoadd
        } else {
            return 'NA'
        }
    } else {
        if (fueltoadd > 0) {
            return fueltoadd
        } else {
            return 'NA'
        }
    }
}


function twf_laptimer_blink() {
    if (twf_read_setting("laptimer_blinkonnewlap", 1) == 1) {
        if (changed(5000, $prop('LastLapTime'))) {
            return 1
        } else {
            return 0
        }
    }
}

function twf_opponent_has_fastest_lap() {
    if ($prop('BestLapOpponentPosition') !== null) {
        if (isplayer(bestlapdriverposition)) {
            return 0
        } else {
            return 1
        }
    } else {
        return 0
    }
}


function twf_class_driver_name_repeater(currentindex) {
    driverposition = currentindex
    if (drivername(driverposition) != null) {
        return twf_format_driver_name(drivername(driverposition));
    } else {
        return ''
    }
}

function twf_relative_driver_name_repeater(numofcars, currentindex) {
    numberofcarsahead = numofcars
    numofcarspositive = Math.abs(numofcars)
    repindex = currentindex
    driverraceposition = ''
    if (repindex <= numofcarspositive) {
        driverrelposition = Math.abs(numberofcarsahead + repindex)
        driverraceposition = $prop('PersistantTrackerPlugin.DriverAhead_0' + driverrelposition + '_Position')

    } else if (repindex == (numofcarspositive + 1)) {
        driverraceposition = $prop('Position')
        return twf_get_player_name()

    } else if (repindex > (numofcarspositive + 1)) {
        driverrelposition = Math.abs(numberofcarsahead + repindex - 2)
        driverraceposition = $prop('PersistantTrackerPlugin.DriverBehind_0' + driverrelposition + '_Position')
    }
    return twf_get_driver_name_by_position(driverraceposition)
}

function twf_relative_driver_color_repeater(numofcars, currentindex) {
    numberofcarsahead = numofcars
    numofcarspositive = Math.abs(numofcars)
    repindex = currentindex
    driverraceposition = ''
    if (repindex <= numofcarspositive) {
        var driverrelposition = Math.abs(numberofcarsahead + repindex)
        driverraceposition = $prop('PersistantTrackerPlugin.DriverAhead_0' + driverrelposition + '_LapsToPlayer')

    } else if (repindex == (numofcarspositive + 1)) {
        return '#FFFFE04C'

    } else if (repindex > (numofcarspositive + 1)) {
        var driverrelposition = Math.abs(numberofcarsahead + repindex - 2)
        driverraceposition = $prop('PersistantTrackerPlugin.DriverBehind_0' + driverrelposition + '_LapsToPlayer')

    }

    if (driverraceposition < 0) {
        return '#FF00BFFF'
    } else if (driverraceposition > 0) {
        return '#FFffa500'
    } else {
        return '#FFFFFFFF'
    }
}

function twf_class_driver_color_repeater(currentindex) {
    driverposition = currentindex
    var playerposition = $prop('Position');
    var driverlap = drivercurrentlap(driverposition)
    var playerlap = $prop('CurrentLap')
    var sessionlap = drivercurrentlap(1)


    if (isplayer(driverposition)) {
        return '#FFE04C'
    } else {
        if (sessionlap > 1) {
            if (sessionlap - driverlap > 1) {
                return '#00BFFF'
            } else {
                return '#FFFFFF'
            }
        } else {
            return '#FFFFFF'
        }
    }


}



function twf_player_preferred_name() {
    preferred_name = twf_read_setting(your_name, "");
    return preferred_name;
}

function twf_player_preferred_number() {
    preferred_name = twf_read_setting(your_number, "");
    return player_number
}

function twf_player_preferred_color() {
    preferred_name = twf_read_setting(your_color, "");
    return player_color
}