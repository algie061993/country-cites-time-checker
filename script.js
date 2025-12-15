// Countries where Hinge dating app is available with states and cities
const countryData = {
    'United States': {
        'New York': {
            timezone: 'America/New_York',
            cities: ['New York', 'Buffalo']
        },
        'California': {
            timezone: 'America/Los_Angeles',
            cities: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Stockton', 'Riverside', 'Santa Ana', 'Irvine', 'Chula Vista']
        },
        'Texas': {
            timezone: 'America/Chicago',
            cities: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano']
        },
        'Florida': {
            timezone: 'America/New_York',
            cities: ['Jacksonville', 'Miami', 'Tampa', 'Orlando']
        },
        'Illinois': {
            timezone: 'America/Chicago',
            cities: ['Chicago']
        },
        'Arizona': {
            timezone: 'America/Phoenix',
            cities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Gilbert']
        },
        'Pennsylvania': {
            timezone: 'America/New_York',
            cities: ['Philadelphia', 'Pittsburgh']
        },
        'Ohio': {
            timezone: 'America/New_York',
            cities: ['Columbus', 'Cleveland', 'Cincinnati']
        },
        'North Carolina': {
            timezone: 'America/New_York',
            cities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham']
        },
        'Indiana': {
            timezone: 'America/New_York',
            cities: ['Indianapolis']
        },
        'Washington': {
            timezone: 'America/Los_Angeles',
            cities: ['Seattle']
        },
        'Colorado': {
            timezone: 'America/Denver',
            cities: ['Denver', 'Colorado Springs', 'Aurora']
        },
        'Oklahoma': {
            timezone: 'America/Chicago',
            cities: ['Oklahoma City', 'Tulsa']
        },
        'Tennessee': {
            timezone: 'America/Chicago',
            cities: ['Nashville', 'Memphis']
        },
        'Massachusetts': {
            timezone: 'America/New_York',
            cities: ['Boston']
        },
        'Nevada': {
            timezone: 'America/Los_Angeles',
            cities: ['Las Vegas', 'Henderson', 'North Las Vegas']
        },
        'Oregon': {
            timezone: 'America/Los_Angeles',
            cities: ['Portland']
        },
        'Michigan': {
            timezone: 'America/New_York',
            cities: ['Detroit']
        },
        'Kentucky': {
            timezone: 'America/New_York',
            cities: ['Louisville', 'Lexington']
        },
        'Maryland': {
            timezone: 'America/New_York',
            cities: ['Baltimore']
        },
        'Wisconsin': {
            timezone: 'America/Chicago',
            cities: ['Milwaukee']
        },
        'New Mexico': {
            timezone: 'America/Denver',
            cities: ['Albuquerque']
        },
        'Georgia': {
            timezone: 'America/New_York',
            cities: ['Atlanta']
        },
        'Missouri': {
            timezone: 'America/Chicago',
            cities: ['Kansas City', 'St. Louis']
        },
        'Nebraska': {
            timezone: 'America/Chicago',
            cities: ['Omaha', 'Lincoln']
        },
        'Virginia': {
            timezone: 'America/New_York',
            cities: ['Virginia Beach']
        },
        'Minnesota': {
            timezone: 'America/Chicago',
            cities: ['Minneapolis', 'Saint Paul']
        },
        'Kansas': {
            timezone: 'America/Chicago',
            cities: ['Wichita']
        },
        'Louisiana': {
            timezone: 'America/Chicago',
            cities: ['New Orleans']
        },
        'Hawaii': {
            timezone: 'Pacific/Honolulu',
            cities: ['Honolulu']
        },
        'New Jersey': {
            timezone: 'America/New_York',
            cities: ['Newark', 'Jersey City']
        },
        'Alaska': {
            timezone: 'America/Anchorage',
            cities: ['Anchorage']
        },
        'District of Columbia': {
            timezone: 'America/New_York',
            cities: ['Washington']
        }
    },
    'Canada': {
        'Ontario': {
            timezone: 'America/Toronto',
            cities: ['Toronto', 'North York', 'Ottawa', 'Hamilton', 'Mississauga', 'Scarborough', 'Kitchener', 'Brampton', 'Oshawa', 'Etobicoke', 'London', 'Windsor', 'Markham', 'Vaughan', 'Oakville', 'Richmond Hill', 'Burlington', 'Nepean', 'Greater Sudbury', 'Barrie', 'St. Catharines', 'Guelph', 'Cambridge', 'East York', 'Kingston', 'Thunder Bay', 'Waterloo', 'Ajax', 'Pickering', 'Brantford', 'Sarnia', 'Niagara Falls', 'Willowdale', 'Peterborough', 'Sault Ste. Marie', 'Newmarket', 'Belleville', 'Welland', 'North Bay', 'Cornwall', 'Chatham', 'Timmins', 'Quinte West', 'St. Thomas', 'Woodstock', 'Ancaster', 'Orangeville', 'Midland', 'Stratford', 'Orillia', 'Brockville', 'Owen Sound', 'Lindsay', 'Huntsville', 'Cobourg', 'Fort Erie', 'Collingwood', 'Pembroke', 'Greater Napanee', 'Kenora', 'Elliot Lake', 'Ingersoll', 'Amherstburg', 'Paris', 'Smiths Falls', 'Temiskaming Shores']
        },
        'Quebec': {
            timezone: 'America/Montreal',
            cities: ['Montreal', 'Quebec', 'Laval', 'Gatineau', 'Longueuil', 'Sherbrooke', 'Levis', 'Trois-Rivieres', 'Saint-Laurent', 'Repentigny', 'La Haute-Saint-Charles', 'Saint-Leonard', 'Saint-Jean-sur-Richelieu', 'Brossard', 'Notre-Dame-de-Grace', 'Drummondville', 'Saint-Jerome', 'Jonquiere', 'Granby', 'Saint-Hyacinthe', 'Shawinigan', 'Dollard-Des Ormeaux', 'Blainville', 'Chateauguay', 'Rimouski', 'Saint-Eustache', 'Boucherville', 'Salaberry-de-Valleyfield', 'Rock Forest', 'Joliette', 'Mascouche', 'Mirabel', 'Victoriaville', 'Cote-Saint-Luc', 'Saint-Georges', 'Val-d\'Or', 'Pointe-Claire', 'Baie-Comeau', 'Alma', 'Sainte-Julie', 'Boisbriand', 'Vaudreuil-Dorion', 'Thetford-Mines', 'Sainte-Therese', 'Saint-Bruno-de-Montarville', 'Rouyn-Noranda', 'Saint-Constant', 'Chambly', 'Sept-Iles', 'La Prairie', 'Varennes', 'Westmount', 'Kirkland', 'Beaconsfield', 'Mont-Royal', 'Beloeil', 'Riviere-du-Loup', 'Dorval', 'Amos', 'Deux-Montagnes', 'Saint-Augustin-de-Desmaures', 'Saint-Lazare', 'Sainte-Catherine', 'L\'Assomption', 'L\'Ancienne-Lorette', 'Candiac', 'Mont-Saint-Hilaire', 'Saint-Basile-le-Grand', 'Magog', 'le Plateau', 'Gaspe', 'Matane', 'Rosemere', 'Saint-Lin-Laurentides', 'Mont-Laurier', 'Dolbeau-Mistassini', 'Beauharnois', 'Montmagny', 'Sainte-Marie', 'Pincourt', 'Becancour', 'Cowansville', 'Sainte-Anne-des-Plaines', 'Sainte-Adele', 'Les Coteaux', 'Cantley', 'Rawdon', 'Prevost', 'Mercier']
        },
        'British Columbia': {
            timezone: 'America/Vancouver',
            cities: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Victoria', 'Abbotsford', 'Coquitlam', 'Delta', 'Kelowna', 'Kamloops', 'Nanaimo', 'Chilliwack', 'Prince George', 'New Westminster', 'Maple Ridge', 'White Rock', 'North Vancouver', 'Vernon', 'West Vancouver', 'Penticton', 'Campbell River', 'Courtenay', 'North Cowichan', 'West Kelowna', 'Port Moody', 'Langley', 'Langford', 'Duncan', 'Port Alberni', 'Oak Bay', 'Pitt Meadows', 'Fort St. John', 'Salmon Arm', 'Colwood', 'Williams Lake', 'Quesnel', 'Powell River', 'Canmore', 'Aldergrove', 'Parksville', 'North Saanich', 'Dawson Creek', 'Whistler', 'Sylvan Lake']
        },
        'Alberta': {
            timezone: 'America/Edmonton',
            cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'Fort McMurray', 'Medicine Hat', 'St. Albert', 'Sherwood Park', 'Grande Prairie', 'Airdrie', 'Cochrane', 'Spruce Grove', 'Fort Saskatchewan', 'Okotoks', 'Camrose', 'Leduc', 'Cold Lake', 'Wetaskiwin', 'Lacombe', 'Strathmore']
        },
        'Manitoba': {
            timezone: 'America/Winnipeg',
            cities: ['Winnipeg', 'Brandon', 'Portage la Prairie', 'Thompson']
        },
        'Saskatchewan': {
            timezone: 'America/Regina',
            cities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'North Battleford', 'Swift Current', 'Yorkton']
        },
        'Nova Scotia': {
            timezone: 'America/Halifax',
            cities: ['Halifax', 'Sydney', 'Dartmouth', 'Lower Sackville', 'Cole Harbour', 'Glace Bay', 'New Glasgow', 'Truro', 'Kentville']
        },
        'New Brunswick': {
            timezone: 'America/Moncton',
            cities: ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Miramichi', 'Edmundston', 'Bathurst']
        },
        'Newfoundland and Labrador': {
            timezone: 'America/St_Johns',
            cities: ['St. John\'s', 'Mount Pearl', 'Corner Brook', 'Conception Bay South', 'Bay Roberts', 'Grand Falls-Windsor', 'Labrador City']
        },
        'Prince Edward Island': {
            timezone: 'America/Halifax',
            cities: ['Charlottetown', 'Summerside']
        },
        'Northwest Territories': {
            timezone: 'America/Yellowknife',
            cities: ['Yellowknife']
        },
        'Yukon': {
            timezone: 'America/Whitehorse',
            cities: ['Whitehorse']
        }
    },
    'United Kingdom': {
        'England': {
            timezone: 'Europe/London',
            cities: ['ABINGDON', 'ANNESLEY', 'AUCKLEY', 'AYLESBURY', 'BANBURY', 'BARKING', 'BARTLEY', 'BASFORD', 'BASINGSTOKE', 'BATH', 'BEDFORD', 'BELPER', 'BIRMINGHAM', 'BISPHAM', 'BLACKPOOL', 'BODMIN', 'BOREHAMWOOD', 'BOSTON', 'BOURNEMOUTH', 'BRADFORD', 'BRAMFORD', 'BRENT', 'BRIDGWATER', 'BRIGHTON', 'BRISTOL', 'BROMLEY', 'BROUGHTON', 'BRUMBY', 'BURNLEY', 'CAMBRIDGE', 'CANTERBURY', 'CHELMSFORD', 'CHELTENHAM', 'CHESTER', 'CHESTERFIELD', 'CLEVELEYS', 'COLCHESTER', 'COLTON', 'COTON', 'COTTINGHAM', 'COVENTRY', 'CRANMORE', 'CREWE', 'DARESBURY', 'DERBY', 'DOVER', 'DURHAM', 'EASTGATE', 'EASTLEIGH', 'ELLOUGHTON', 'EXETER', 'FAREHAM', 'FARNBOROUGH', 'FLAMBOROUGH', 'FORMBY', 'GARSTANG', 'GARTH', 'GORLESTON-ON-SEA', 'GOSPORT', 'GRANTHAM', 'GREAT MARTON', 'GRIMBSY', 'GUILDFORD', 'HARLOW', 'HARTLEPOOL', 'HATFIELD', 'HEMPSTEAD', 'HIGH WYCOMBE', 'HORSHAM', 'HUDDERSFIELD', 'HULL', 'INGOLDMELLS', 'KEELE', 'KENN', 'LANCASTER', 'LEEDS', 'LEICESTER', 'LINCOLN', 'LIVERPOOL', 'LONDON', 'LOUGHBOROUGH', 'LOWESTOFT', 'MAIDENHEAD', 'MANCHESTER', 'MIDDLESBROUGH', 'MIDVILLE', 'MILTON KEYNES', 'NEWBURY', 'NEWCASTLE UPON TYNE', 'NORTH KILWORTH', 'NORTH SHIELDS', 'NORTHAMPTON', 'NORWICH', 'NOTTINGHAM', 'NUNEATON', 'OXFORD', 'PENRITH', 'PETERBOROUGH', 'PLYMOUTH', 'POOLE', 'POPLAR', 'PORTSMOUTH', 'PRESTON', 'READING', 'REDDITCH', 'ROCHDALE', 'RUGBY', 'RUNCORN', 'SAINT ALBANS', 'SALISBURY', 'SEABROOK', 'SEACROFT', 'SHEFFIELD', 'SHREWSBURY', 'SILKSWORTH', 'SKEGNESS', 'SKELMERSDALE', 'SLOUGH', 'SOLIHULL', 'SOUTH SHORE', 'SOUTHAMPTON', 'STAFFORD', 'STEVENAGE', 'STOCKTON-ON-TEES', 'STOKE-ON-TRENT', 'STREET', 'SUNBURY-ON-THAMES', 'SUNDERLAND', 'SWINDON', 'TAKELEY', 'TARPORLEY', 'TELFORD', 'THORPE THEWLES', 'TRENT', 'UXBRIDGE', 'WAKEFIELD', 'WALTON LE DALE', 'WARRINGTON', 'WARWICK', 'WASHINGTON', 'WHITELEY', 'WOKING', 'WOLVERHAMPTON', 'WORCESTER', 'YORK']
        },
        'Scotland': {
            timezone: 'Europe/London',
            cities: ['ABERDEEN', 'AYR', 'CARLUKE', 'CARRON', 'CUMBERNAULD', 'DUNDEE', 'EAST KILBRIDE', 'EDINBURGH', 'GLASGOW', 'GREENOCK', 'HAMILTON', 'IRVINE', 'LIVINGSTON', 'PITLURG', 'SAINT ANDREWS', 'STIRLING', 'THURSO']
        },
        'Wales': {
            timezone: 'Europe/London',
            cities: ['BANGOR', 'BRIDGEND', 'CARDIFF', 'CHEPSTOW', 'MAINDEE', 'MARCHWIEL', 'NEWBRIDGE', 'NEWPORT', 'NEWRY', 'PENTRE', 'SWANSEA']
        },
        'Northern Ireland': {
            timezone: 'Europe/London',
            cities: ['BELFAST']
        }
    },
    'Australia': {
        'New South Wales': {
            timezone: 'Australia/Sydney',
            cities: ['Sydney', 'Newcastle', 'Wollongong', 'Central Coast', 'Maitland']
        },
        'Victoria': {
            timezone: 'Australia/Melbourne',
            cities: ['Melbourne', 'Geelong', 'Ballarat', 'Bendigo', 'Frankston']
        },
        'Queensland': {
            timezone: 'Australia/Brisbane',
            cities: ['Brisbane', 'Gold Coast', 'Townsville', 'Cairns', 'Toowoomba']
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
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
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
                    <td>${city}</td>
                    <td class="city-time" id="time-${city.replace(/[\s']+/g, '-')}"></td>
                `;
                citiesList.appendChild(cityRow);
            }
        });
    });
    
    if (matchingCities.length > 0) {
        startRealTimeUpdates(matchingCities);
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

