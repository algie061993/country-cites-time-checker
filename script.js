// Countries where Hinge dating app is available with states and cities
const countryData = {
    'United States': {
        'New York': {
            timezone: 'America/New_York',
            cities: ['New York, NY', 'Buffalo, NY']
        },
        'California': {
            timezone: 'America/Los_Angeles',
            cities: ['Los Angeles, CA', 'San Diego, CA', 'San Jose, CA', 'San Francisco, CA', 'Fresno, CA', 'Sacramento, CA', 'Long Beach, CA', 'Oakland, CA', 'Bakersfield, CA', 'Anaheim, CA', 'Stockton, CA', 'Riverside, CA', 'Santa Ana, CA', 'Irvine, CA', 'Chula Vista, CA']
        },
        'Texas': {
            timezone: 'America/Chicago',
            cities: ['Houston, TX', 'San Antonio, TX', 'Dallas, TX', 'Austin, TX', 'Fort Worth, TX', 'El Paso, TX', 'Arlington, TX', 'Corpus Christi, TX', 'Plano, TX']
        },
        'Florida': {
            timezone: 'America/New_York',
            cities: ['Jacksonville, FL', 'Miami, FL', 'Tampa, FL', 'Orlando, FL']
        },
        'Illinois': {
            timezone: 'America/Chicago',
            cities: ['Chicago, IL']
        },
        'Arizona': {
            timezone: 'America/Phoenix',
            cities: ['Phoenix, AZ', 'Tucson, AZ', 'Mesa, AZ', 'Chandler, AZ', 'Gilbert, AZ']
        },
        'Pennsylvania': {
            timezone: 'America/New_York',
            cities: ['Philadelphia, PA', 'Pittsburgh, PA']
        },
        'Ohio': {
            timezone: 'America/New_York',
            cities: ['Columbus, OH', 'Cleveland, OH', 'Cincinnati, OH']
        },
        'North Carolina': {
            timezone: 'America/New_York',
            cities: ['Charlotte, NC', 'Raleigh, NC', 'Greensboro, NC', 'Durham, NC']
        },
        'Indiana': {
            timezone: 'America/New_York',
            cities: ['Indianapolis, IN']
        },
        'Washington': {
            timezone: 'America/Los_Angeles',
            cities: ['Seattle, WA']
        },
        'Colorado': {
            timezone: 'America/Denver',
            cities: ['Denver, CO', 'Colorado Springs, CO', 'Aurora, CO']
        },
        'Oklahoma': {
            timezone: 'America/Chicago',
            cities: ['Oklahoma City, OK', 'Tulsa, OK']
        },
        'Tennessee': {
            timezone: 'America/Chicago',
            cities: ['Nashville, TN', 'Memphis, TN']
        },
        'Massachusetts': {
            timezone: 'America/New_York',
            cities: ['Boston, MA']
        },
        'Nevada': {
            timezone: 'America/Los_Angeles',
            cities: ['Las Vegas, NV', 'Henderson, NV', 'North Las Vegas, NV']
        },
        'Oregon': {
            timezone: 'America/Los_Angeles',
            cities: ['Portland, OR']
        },
        'Michigan': {
            timezone: 'America/New_York',
            cities: ['Detroit, MI']
        },
        'Kentucky': {
            timezone: 'America/New_York',
            cities: ['Louisville, KY', 'Lexington, KY']
        },
        'Maryland': {
            timezone: 'America/New_York',
            cities: ['Baltimore, MD']
        },
        'Wisconsin': {
            timezone: 'America/Chicago',
            cities: ['Milwaukee, WI']
        },
        'New Mexico': {
            timezone: 'America/Denver',
            cities: ['Albuquerque, NM']
        },
        'Georgia': {
            timezone: 'America/New_York',
            cities: ['Atlanta, GA']
        },
        'Missouri': {
            timezone: 'America/Chicago',
            cities: ['Kansas City, MO', 'St. Louis, MO']
        },
        'Nebraska': {
            timezone: 'America/Chicago',
            cities: ['Omaha, NE', 'Lincoln, NE']
        },
        'Virginia': {
            timezone: 'America/New_York',
            cities: ['Virginia Beach, VA']
        },
        'Minnesota': {
            timezone: 'America/Chicago',
            cities: ['Minneapolis, MN', 'Saint Paul, MN']
        },
        'Kansas': {
            timezone: 'America/Chicago',
            cities: ['Wichita, KS']
        },
        'Louisiana': {
            timezone: 'America/Chicago',
            cities: ['New Orleans, LA']
        },
        'Hawaii': {
            timezone: 'Pacific/Honolulu',
            cities: ['Honolulu, HI']
        },
        'New Jersey': {
            timezone: 'America/New_York',
            cities: ['Newark, NJ', 'Jersey City, NJ']
        },
        'Alaska': {
            timezone: 'America/Anchorage',
            cities: ['Anchorage, AK']
        },
        'District of Columbia': {
            timezone: 'America/New_York',
            cities: ['Washington, DC']
        }
    },
    'Canada': {
        'Ontario': {
            timezone: 'America/Toronto',
            cities: ['Toronto, ON', 'North York, ON', 'Ottawa, ON', 'Hamilton, ON', 'Mississauga, ON', 'Scarborough, ON', 'Kitchener, ON', 'Brampton, ON', 'Oshawa, ON', 'Etobicoke, ON', 'London, ON', 'Windsor, ON', 'Markham, ON', 'Vaughan, ON', 'Oakville, ON', 'Richmond Hill, ON', 'Burlington, ON', 'Nepean, ON', 'Greater Sudbury, ON', 'Barrie, ON', 'St. Catharines, ON', 'Guelph, ON', 'Cambridge, ON', 'East York, ON', 'Kingston, ON', 'Thunder Bay, ON', 'Waterloo, ON', 'Ajax, ON', 'Pickering, ON', 'Brantford, ON', 'Sarnia, ON', 'Niagara Falls, ON', 'Willowdale, ON', 'Peterborough, ON', 'Sault Ste. Marie, ON', 'Newmarket, ON', 'Belleville, ON', 'Welland, ON', 'North Bay, ON', 'Cornwall, ON', 'Chatham, ON', 'Timmins, ON', 'Quinte West, ON', 'St. Thomas, ON', 'Woodstock, ON', 'Ancaster, ON', 'Orangeville, ON', 'Midland, ON', 'Stratford, ON', 'Orillia, ON', 'Brockville, ON', 'Owen Sound, ON', 'Lindsay, ON', 'Huntsville, ON', 'Cobourg, ON', 'Fort Erie, ON', 'Collingwood, ON', 'Pembroke, ON', 'Greater Napanee, ON', 'Kenora, ON', 'Elliot Lake, ON', 'Ingersoll, ON', 'Amherstburg, ON', 'Paris, ON', 'Smiths Falls, ON', 'Temiskaming Shores, ON']
        },
        'Quebec': {
            timezone: 'America/Montreal',
            cities: ['Montreal, QC', 'Quebec, QC', 'Laval, QC', 'Gatineau, QC', 'Longueuil, QC', 'Sherbrooke, QC', 'Levis, QC', 'Trois-Rivieres, QC', 'Saint-Laurent, QC', 'Repentigny, QC', 'La Haute-Saint-Charles, QC', 'Saint-Leonard, QC', 'Saint-Jean-sur-Richelieu, QC', 'Brossard, QC', 'Notre-Dame-de-Grace, QC', 'Drummondville, QC', 'Saint-Jerome, QC', 'Jonquiere, QC', 'Granby, QC', 'Saint-Hyacinthe, QC', 'Shawinigan, QC', 'Dollard-Des Ormeaux, QC', 'Blainville, QC', 'Chateauguay, QC', 'Rimouski, QC', 'Saint-Eustache, QC', 'Boucherville, QC', 'Salaberry-de-Valleyfield, QC', 'Rock Forest, QC', 'Joliette, QC', 'Mascouche, QC', 'Mirabel, QC', 'Victoriaville, QC', 'Cote-Saint-Luc, QC', 'Saint-Georges, QC', 'Val-d\'Or, QC', 'Pointe-Claire, QC', 'Baie-Comeau, QC', 'Alma, QC', 'Sainte-Julie, QC', 'Boisbriand, QC', 'Vaudreuil-Dorion, QC', 'Thetford-Mines, QC', 'Sainte-Therese, QC', 'Saint-Bruno-de-Montarville, QC', 'Rouyn-Noranda, QC', 'Saint-Constant, QC', 'Chambly, QC', 'Sept-Iles, QC', 'La Prairie, QC', 'Varennes, QC', 'Westmount, QC', 'Kirkland, QC', 'Beaconsfield, QC', 'Mont-Royal, QC', 'Beloeil, QC', 'Riviere-du-Loup, QC', 'Dorval, QC', 'Amos, QC', 'Deux-Montagnes, QC', 'Saint-Augustin-de-Desmaures, QC', 'Saint-Lazare, QC', 'Sainte-Catherine, QC', 'L\'Assomption, QC', 'L\'Ancienne-Lorette, QC', 'Candiac, QC', 'Mont-Saint-Hilaire, QC', 'Saint-Basile-le-Grand, QC', 'Magog, QC', 'le Plateau, QC', 'Gaspe, QC', 'Matane, QC', 'Rosemere, QC', 'Saint-Lin-Laurentides, QC', 'Mont-Laurier, QC', 'Dolbeau-Mistassini, QC', 'Beauharnois, QC', 'Montmagny, QC', 'Sainte-Marie, QC', 'Pincourt, QC', 'Becancour, QC', 'Cowansville, QC', 'Sainte-Anne-des-Plaines, QC', 'Sainte-Adele, QC', 'Les Coteaux, QC', 'Cantley, QC', 'Rawdon, QC', 'Prevost, QC', 'Mercier, QC']
        },
        'British Columbia': {
            timezone: 'America/Vancouver',
            cities: ['Vancouver, BC', 'Surrey, BC', 'Burnaby, BC', 'Richmond, BC', 'Victoria, BC', 'Abbotsford, BC', 'Coquitlam, BC', 'Delta, BC', 'Kelowna, BC', 'Kamloops, BC', 'Nanaimo, BC', 'Chilliwack, BC', 'Prince George, BC', 'New Westminster, BC', 'Maple Ridge, BC', 'White Rock, BC', 'North Vancouver, BC', 'Vernon, BC', 'West Vancouver, BC', 'Penticton, BC', 'Campbell River, BC', 'Courtenay, BC', 'North Cowichan, BC', 'West Kelowna, BC', 'Port Moody, BC', 'Langley, BC', 'Langford, BC', 'Duncan, BC', 'Port Alberni, BC', 'Oak Bay, BC', 'Pitt Meadows, BC', 'Fort St. John, BC', 'Salmon Arm, BC', 'Colwood, BC', 'Williams Lake, BC', 'Quesnel, BC', 'Powell River, BC', 'Canmore, BC', 'Aldergrove, BC', 'Parksville, BC', 'North Saanich, BC', 'Dawson Creek, BC', 'Whistler, BC', 'Sylvan Lake, BC']
        },
        'Alberta': {
            timezone: 'America/Edmonton',
            cities: ['Calgary, AB', 'Edmonton, AB', 'Red Deer, AB', 'Lethbridge, AB', 'Fort McMurray, AB', 'Medicine Hat, AB', 'St. Albert, AB', 'Sherwood Park, AB', 'Grande Prairie, AB', 'Airdrie, AB', 'Cochrane, AB', 'Spruce Grove, AB', 'Fort Saskatchewan, AB', 'Okotoks, AB', 'Camrose, AB', 'Leduc, AB', 'Cold Lake, AB', 'Wetaskiwin, AB', 'Lacombe, AB', 'Strathmore, AB']
        },
        'Manitoba': {
            timezone: 'America/Winnipeg',
            cities: ['Winnipeg, MB', 'Brandon, MB', 'Portage la Prairie, MB', 'Thompson, MB']
        },
        'Saskatchewan': {
            timezone: 'America/Regina',
            cities: ['Saskatoon, SK', 'Regina, SK', 'Prince Albert, SK', 'Moose Jaw, SK', 'North Battleford, SK', 'Swift Current, SK', 'Yorkton, SK']
        },
        'Nova Scotia': {
            timezone: 'America/Halifax',
            cities: ['Halifax, NS', 'Sydney, NS', 'Dartmouth, NS', 'Lower Sackville, NS', 'Cole Harbour, NS', 'Glace Bay, NS', 'New Glasgow, NS', 'Truro, NS', 'Kentville, NS']
        },
        'New Brunswick': {
            timezone: 'America/Moncton',
            cities: ['Moncton, NB', 'Saint John, NB', 'Fredericton, NB', 'Dieppe, NB', 'Miramichi, NB', 'Edmundston, NB', 'Bathurst, NB']
        },
        'Newfoundland and Labrador': {
            timezone: 'America/St_Johns',
            cities: ['St. John\'s, NL', 'Mount Pearl, NL', 'Corner Brook, NL', 'Conception Bay South, NL', 'Bay Roberts, NL', 'Grand Falls-Windsor, NL', 'Labrador City, NL']
        },
        'Prince Edward Island': {
            timezone: 'America/Halifax',
            cities: ['Charlottetown, PE', 'Summerside, PE']
        },
        'Northwest Territories': {
            timezone: 'America/Yellowknife',
            cities: ['Yellowknife, NT']
        },
        'Yukon': {
            timezone: 'America/Whitehorse',
            cities: ['Whitehorse, YT']
        }
    },
    'United Kingdom': {
        'England': {
            timezone: 'Europe/London',
            cities: ['ABINGDON, ENG', 'ANNESLEY, ENG', 'AUCKLEY, ENG', 'AYLESBURY, ENG', 'BANBURY, ENG', 'BARKING, ENG', 'BARTLEY, ENG', 'BASFORD, ENG', 'BASINGSTOKE, ENG', 'BATH, ENG', 'BEDFORD, ENG', 'BELPER, ENG', 'BIRMINGHAM, ENG', 'BISPHAM, ENG', 'BLACKPOOL, ENG', 'BODMIN, ENG', 'BOREHAMWOOD, ENG', 'BOSTON, ENG', 'BOURNEMOUTH, ENG', 'BRADFORD, ENG', 'BRAMFORD, ENG', 'BRENT, ENG', 'BRIDGWATER, ENG', 'BRIGHTON, ENG', 'BRISTOL, ENG', 'BROMLEY, ENG', 'BROUGHTON, ENG', 'BRUMBY, ENG', 'BURNLEY, ENG', 'CAMBRIDGE, ENG', 'CANTERBURY, ENG', 'CHELMSFORD, ENG', 'CHELTENHAM, ENG', 'CHESTER, ENG', 'CHESTERFIELD, ENG', 'CLEVELEYS, ENG', 'COLCHESTER, ENG', 'COLTON, ENG', 'COTON, ENG', 'COTTINGHAM, ENG', 'COVENTRY, ENG', 'CRANMORE, ENG', 'CREWE, ENG', 'DARESBURY, ENG', 'DERBY, ENG', 'DOVER, ENG', 'DURHAM, ENG', 'EASTGATE, ENG', 'EASTLEIGH, ENG', 'ELLOUGHTON, ENG', 'EXETER, ENG', 'FAREHAM, ENG', 'FARNBOROUGH, ENG', 'FLAMBOROUGH, ENG', 'FORMBY, ENG', 'GARSTANG, ENG', 'GARTH, ENG', 'GORLESTON-ON-SEA, ENG', 'GOSPORT, ENG', 'GRANTHAM, ENG', 'GREAT MARTON, ENG', 'GRIMBSY, ENG', 'GUILDFORD, ENG', 'HARLOW, ENG', 'HARTLEPOOL, ENG', 'HATFIELD, ENG', 'HEMPSTEAD, ENG', 'HIGH WYCOMBE, ENG', 'HORSHAM, ENG', 'HUDDERSFIELD, ENG', 'HULL, ENG', 'INGOLDMELLS, ENG', 'KEELE, ENG', 'KENN, ENG', 'LANCASTER, ENG', 'LEEDS, ENG', 'LEICESTER, ENG', 'LINCOLN, ENG', 'LIVERPOOL, ENG', 'LONDON, ENG', 'LOUGHBOROUGH, ENG', 'LOWESTOFT, ENG', 'MAIDENHEAD, ENG', 'MANCHESTER, ENG', 'MIDDLESBROUGH, ENG', 'MIDVILLE, ENG', 'MILTON KEYNES, ENG', 'NEWBURY, ENG', 'NEWCASTLE UPON TYNE, ENG', 'NORTH KILWORTH, ENG', 'NORTH SHIELDS, ENG', 'NORTHAMPTON, ENG', 'NORWICH, ENG', 'NOTTINGHAM, ENG', 'NUNEATON, ENG', 'OXFORD, ENG', 'PENRITH, ENG', 'PETERBOROUGH, ENG', 'PLYMOUTH, ENG', 'POOLE, ENG', 'POPLAR, ENG', 'PORTSMOUTH, ENG', 'PRESTON, ENG', 'READING, ENG', 'REDDITCH, ENG', 'ROCHDALE, ENG', 'RUGBY, ENG', 'RUNCORN, ENG', 'SAINT ALBANS, ENG', 'SALISBURY, ENG', 'SEABROOK, ENG', 'SEACROFT, ENG', 'SHEFFIELD, ENG', 'SHREWSBURY, ENG', 'SILKSWORTH, ENG', 'SKEGNESS, ENG', 'SKELMERSDALE, ENG', 'SLOUGH, ENG', 'SOLIHULL, ENG', 'SOUTH SHORE, ENG', 'SOUTHAMPTON, ENG', 'STAFFORD, ENG', 'STEVENAGE, ENG', 'STOCKTON-ON-TEES, ENG', 'STOKE-ON-TRENT, ENG', 'STREET, ENG', 'SUNBURY-ON-THAMES, ENG', 'SUNDERLAND, ENG', 'SWINDON, ENG', 'TAKELEY, ENG', 'TARPORLEY, ENG', 'TELFORD, ENG', 'THORPE THEWLES, ENG', 'TRENT, ENG', 'UXBRIDGE, ENG', 'WAKEFIELD, ENG', 'WALTON LE DALE, ENG', 'WARRINGTON, ENG', 'WARWICK, ENG', 'WASHINGTON, ENG', 'WHITELEY, ENG', 'WOKING, ENG', 'WOLVERHAMPTON, ENG', 'WORCESTER, ENG', 'YORK, ENG']
        },
        'Scotland': {
            timezone: 'Europe/London',
            cities: ['ABERDEEN, SCT', 'AYR, SCT', 'CARLUKE, SCT', 'CARRON, SCT', 'CUMBERNAULD, SCT', 'DUNDEE, SCT', 'EAST KILBRIDE, SCT', 'EDINBURGH, SCT', 'GLASGOW, SCT', 'GREENOCK, SCT', 'HAMILTON, SCT', 'IRVINE, SCT', 'LIVINGSTON, SCT', 'PITLURG, SCT', 'SAINT ANDREWS, SCT', 'STIRLING, SCT', 'THURSO, SCT']
        },
        'Wales': {
            timezone: 'Europe/London',
            cities: ['BANGOR, WAL', 'BRIDGEND, WAL', 'CARDIFF, WAL', 'CHEPSTOW, WAL', 'MAINDEE, WAL', 'MARCHWIEL, WAL', 'NEWBRIDGE, WAL', 'NEWPORT, WAL', 'NEWRY, WAL', 'PENTRE, WAL', 'SWANSEA, WAL']
        },
        'Northern Ireland': {
            timezone: 'Europe/London',
            cities: ['BELFAST, NIR']
        }
    },
    'Australia': {
        'New South Wales': {
            timezone: 'Australia/Sydney',
            cities: ['Sydney, NSW', 'Newcastle, NSW', 'Wollongong, NSW', 'Central Coast, NSW', 'Maitland, NSW']
        },
        'Victoria': {
            timezone: 'Australia/Melbourne',
            cities: ['Melbourne, VIC', 'Geelong, VIC', 'Ballarat, VIC', 'Bendigo, VIC', 'Frankston, VIC']
        },
        'Queensland': {
            timezone: 'Australia/Brisbane',
            cities: ['Brisbane, QLD', 'Gold Coast, QLD', 'Townsville, QLD', 'Cairns, QLD', 'Toowoomba, QLD']
        }
    },

};

let timeInterval;

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    populateCountrySelect();
    populateTimeSelect();
    setupEventListeners();
});

function populateCountrySelect() {
    const select = document.getElementById('countrySelect');
    Object.keys(countryData).forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        select.appendChild(option);
    });
}

function populateTimeSelect() {
    const select = document.getElementById('userTime');
    
    // Add AM times
    for (let hour = 1; hour <= 12; hour++) {
        const amOption = document.createElement('option');
        const hourStr = hour.toString().padStart(2, '0');
        amOption.value = hour === 12 ? '00:00' : `${hourStr}:00`;
        amOption.textContent = `${hour}:00 AM`;
        select.appendChild(amOption);
    }
    
    // Add PM times
    for (let hour = 1; hour <= 12; hour++) {
        const pmOption = document.createElement('option');
        pmOption.value = hour === 12 ? '12:00' : `${hour + 12}:00`;
        pmOption.textContent = `${hour}:00 PM`;
        select.appendChild(pmOption);
    }
}

function setupEventListeners() {
    document.getElementById('countrySelect').addEventListener('change', handleCountrySelection);
    document.getElementById('stateSelect').addEventListener('change', handleStateSelection);
    document.getElementById('showCities').addEventListener('click', handleShowAllCities);
}

function handleCountrySelection(event) {
    const selectedCountry = event.target.value;
    const timeInput = document.getElementById('timeInput');
    const stateSelector = document.getElementById('stateSelector');
    const citiesInfo = document.getElementById('citiesInfo');
    
    if (selectedCountry) {
        timeInput.style.display = 'block';
        populateStateSelect(selectedCountry);
        stateSelector.style.display = 'block';
        citiesInfo.style.display = 'none';
        clearInterval(timeInterval);
    } else {
        timeInput.style.display = 'none';
        stateSelector.style.display = 'none';
        citiesInfo.style.display = 'none';
        clearInterval(timeInterval);
    }
}

function populateStateSelect(country) {
    const stateSelect = document.getElementById('stateSelect');
    stateSelect.innerHTML = '<option value="">Choose a state...</option>';
    
    Object.keys(countryData[country]).forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

function handleStateSelection(event) {
    const selectedState = event.target.value;
    const selectedCountry = document.getElementById('countrySelect').value;
    const citiesInfo = document.getElementById('citiesInfo');
    
    if (selectedState && selectedCountry) {
        displayCities(selectedCountry, selectedState);
        citiesInfo.style.display = 'block';
    } else {
        citiesInfo.style.display = 'none';
        clearInterval(timeInterval);
    }
}

function displayCities(country, state) {
    const stateData = countryData[country][state];
    const citiesList = document.getElementById('citiesList');
    citiesList.innerHTML = '';
    
    stateData.cities.forEach(city => {
        const cityRow = document.createElement('tr');
        cityRow.innerHTML = `
            <td>${state}</td>
            <td>${city}</td>
            <td class="city-time" id="time-${city.replace(/[\s']+/g, '-')}"></td>
        `;
        citiesList.appendChild(cityRow);
    });
    
    startCitiesTimeDisplay(stateData.timezone, stateData.cities);
}

function startCitiesTimeDisplay(timezone, cities) {
    clearInterval(timeInterval);
    
    function updateTimes() {
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        
        cities.forEach(city => {
            const timeElement = document.getElementById(`time-${city.replace(/[\s']+/g, '-')}`);
            if (timeElement) {
                timeElement.textContent = timeString;
            }
        });
    }
    
    updateTimes();
    timeInterval = setInterval(updateTimes, 1000);
}

function handleShowAllCities() {
    const selectedCountry = document.getElementById('countrySelect').value;
    const userTime = document.getElementById('userTime').value;
    const citiesInfo = document.getElementById('citiesInfo');
    
    if (selectedCountry && userTime) {
        displayAllCitiesWithUserTime(selectedCountry, userTime);
        citiesInfo.style.display = 'block';
    }
}

function displayAllCitiesWithUserTime(country, userTime) {
    const citiesList = document.getElementById('citiesList');
    citiesList.innerHTML = '';
    
    const matchingCities = [];
    
    Object.keys(countryData[country]).forEach(state => {
        const stateTimezone = countryData[country][state].timezone;
        
        countryData[country][state].cities.forEach(city => {
            if (doesCityMatchTime(userTime, stateTimezone)) {
                matchingCities.push({ city, timezone: stateTimezone });
                
                const cityRow = document.createElement('tr');
                cityRow.innerHTML = `
                    <td>${state}</td>
                    <td>${city}</td>
                    <td class="city-time" id="time-${city.replace(/[\s']+/g, '-')}"></td>
                `;
                citiesList.appendChild(cityRow);
            }
        });
    });
    
    if (matchingCities.length > 0) {
        startRealTimeUpdates(matchingCities);
    } else {
        const noMatchRow = document.createElement('tr');
        noMatchRow.innerHTML = `
            <td colspan="3" style="text-align: center; color: #666; font-style: italic;">No cities match the selected time currently</td>
        `;
        citiesList.appendChild(noMatchRow);
    }
}

function startRealTimeUpdates(cities) {
    clearInterval(timeInterval);
    
    function updateTimes() {
        cities.forEach(({ city, timezone }) => {
            const now = new Date();
            const timeString = now.toLocaleString('en-US', {
                timeZone: timezone,
                hour: 'numeric',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            
            const timeElement = document.getElementById(`time-${city.replace(/[\s']+/g, '-')}`);
            if (timeElement) {
                timeElement.textContent = timeString;
            }
        });
    }
    
    updateTimes();
    timeInterval = setInterval(updateTimes, 1000);
}

function doesCityMatchTime(userTime, cityTimezone) {
    const now = new Date();
    const cityCurrentTime = new Date(now.toLocaleString('en-US', { timeZone: cityTimezone }));
    
    const [userHours] = userTime.split(':');
    const userHour24 = parseInt(userHours);
    
    const cityHour = cityCurrentTime.getHours();
    
    return cityHour === userHour24;
}

function convertTo12Hour(time24) {
    const [hours, minutes] = time24.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
}

