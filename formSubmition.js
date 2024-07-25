const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const config =require('./config')
// Function to generate a random secret key
function generateSecretKey() {
    return crypto.randomBytes(32).toString('hex');
}

// Function to encrypt data
function encryptData(data, secretKey) {
    const iv = crypto.randomBytes(16); // Generate an initialization vector
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), iv);
    let encryptedData = cipher.update(data, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return {
        iv: iv.toString('hex'),
        encryptedData: encryptedData
    };
}

// Generate a secret key (make sure to keep this secure)
const secretKey = generateSecretKey();

// Encrypt your Gmail password
const encryptedPassword = encryptData('wkel nmgf uetf zljm', secretKey); //enter your app generated password in gmail

// Export the configuration
module.exports = {
    gmail: {
        username: 'bcautooffer@gmail.com', //enter your gmail 
        encryptedPassword: encryptedPassword.encryptedData, // Access encrypted data property
        iv: encryptedPassword.iv, // Include initialization vector
        secretKey: secretKey
    }
};

const selectionMappings = {
    'year': { '1': '2010', '2': '2011', '3': '2012', '4': '2013', '5': '2014', '6': '2015', '7': '2016', '8': '2017', '9': '2018', '10': '2019', '11': '2020', '12': '2021', '13': '2022', '14': '2023' },
    'make': { '1': 'Acura', '2': 'Aston Martin', '3': 'Alfa Romeo', '4': 'Audi', '5': 'Bentley', '6': 'BMW', '7': 'Buick', '8': 'Bugatti', '9': 'Cadillac', '10': 'Chevorlet', '11': 'Chrysler', '12': 'Dodge', '13': 'Ferrari', '14': 'Fiat', '15': 'Fisker', '16': 'Ford', '17': 'GMC', '18': 'Genesis', '19': 'Honda', '20': 'Hummer','21': 'Hyundai', '22': 'Infiniti', '23': 'Isuzu', '24': 'Jaguar', '25': 'Jeep', '26': 'Kia', '27': 'Lamborghini', '28': 'Land Rover', '29': 'Lexus', '30': 'Lincoln', '31': 'Lotus', '32': 'Maserati', '33': 'Maybach', '34': 'Mazda', '35': 'Mclaren', '36': 'Mercedes Benz', '37': 'Mercury', '38': 'MIni', '39': 'Mitsubishi', '40': 'Nissan', '41': 'Pontiac', '42': 'Porsche', '43': 'Ram', '44': 'Rolls Royce', '45': 'Saab', '46': 'Saturn', '47': 'Scion', '48': 'Smart', '49': 'Spyker', '50': 'Subaru', '51': 'Suzuki', '52': 'Tesla', '53': 'Toyota', '54': 'Volkswagen', '55': 'Volvo'},
    'model' : {
    '1': 'csx',
    '2': 'mdx',
    '3': 'rdx',
    '4': 'rl',
    '5': 'tl',
    '6': 'tsx',
    '7': 'zdx',
    '8': 'db9',
    '9': 'dbs',
    '10': 'rapide',
    '11': 'v8-vantage',
    '12': '4c',
    '13': 'giulia',
    '14': 'stelvio',
    '15': 'a3',
    '16': 'a4',
    '17': 'a4-avant',
    '18': 'a5',
    '19': 'a6',
    '20': 'a6-avant',
    '21': 'a8',
    '22': 'q5',
    '23': 'q7',
    '24': 'r8',
    '25': 's4',
    '26': 's5',
    '27': 's6',
    '28': 'tt',
    '29': 'azure',
    '30': 'continental-flying-spur',
    '31': 'continental-gt',
    '32': 'continental-gtc',
    '33': 'continental-supersports',
    '34': '1-series',
    '35': '3-series-sport-wagon',
    '36': '5-series',
    '37': '5-series-granturismo',
    '38': '5-series-sport-wagon',
    '39': '6-series',
    '40': '7-series',
    '41': 'f-650',
    '42': 'f-800',
    '43': 'f800gs',
    '44': 'f800r',
    '45': 'f800s',
    '46': 'f800st',
    '47': 'g-450',
    '48': 'g-650',
    '49': 'g450x',
    '50': 'g650gs',
    '51': 'hp2',
    '52': 'hp2-sport',
    '53': 'k-1200',
    '54': 'k-1300',
    '55': 'k1300r',
    '56': 'k1300s',
    '57': 'm3',
    '58': 'm5',
    '59': 'm6',
    '60': 'r-1200',
    '61': 'r1200gs',
    '62': 'r1200r',
    '63': 's-100',
    '64': 's100rs',
    '65': 'x3',
    '66': 'x5',
    '67': 'x6',
    '68': 'z4',
    '69': 'allure',
    '70': 'enclave',
    '71': 'lacrosse',
    '72': 'lucerne',
    '73': 'veyron',
    '74': 'cts',
    '75': 'cts-sport-wagon',
    '76': 'dts',
    '77': 'escalade',
    '78': 'escalade-ext',
    '79': 'escalade-hybrid',
    '80': 'limousine',
    '81': 'srx',
    '82': 'sts',
    '83': 'avalanche',
    '84': 'aveo',
    '85': 'aveo5',
    '86': 'camaro',
    '87': 'captiva-sport',
    '88': 'cobalt',
    '89': 'colorado',
    '90': 'corvette',
    '91': 'equinox',
    '92': 'express',
    '93': 'express-3500',
    '94': 'hhr',
    '95': 'impala',
    '96': 'malibu',
    '97': 'malibu-hybrid',
    '98': 'silverado-1500',
    '99': 'silverado-2500',
    '100': 'silverado-2500hd',
    '101': 'silverado-3500hd',
    '102': 'silverado-hybrid',
    '103': 'suburban',
    '104': 'tahoe',
    '105': 'tahoe-hybrid',
    '106': 'traverse',
    '107': '300',
    '108': 'pt-cruiser',
    '109': 'sebring',
    '110': 'town-country',
    '111': 'avenger',
    '112': 'caliber',
    '113': 'challenger',
    '114': 'dakota',
    '115': 'grand-caravan',
    '116': 'journey',
    '117': 'nitro',
    '118': 'ram-1500',
    '119': 'ram-2500',
    '120': 'ram-3500',
    '121': 'ram-pickup-2500',
    '122': 'viper',
    '123': '458-italia',
    '124': '599-gtb-fiorano',
    '125': '612',
    '126': 'california',
    '127': '500',
    '128': '500e',
    '129': '500l',
    '130': '500x',
    '131': '124-spider',
    '132': 'karma',
    '133': 'courier-i',
    '134': 'crown-victoria',
    '135': 'e150',
    '136': 'econoline',
    '137': 'ecosport-xlt',
    '138': 'edge',
    '139': 'escape',
    '140': 'escape-hybrid',
    '141': 'expedition',
    '142': 'explorer',
    '143': 'explorer-sport-trac',
    '144': 'f-150',
    '145': 'f-350',
    '146': 'f-350-sd',
    '147': 'f-450',
    '148': 'f-450sd',
    '149': 'f-550',
    '150': 'f-650',
    '151': 'f-750',
    '152': 'fiesta',
    '153': 'flex',
    '154': 'focus',
    '155': 'fusion',
    '156': 'fusion-hybrid',
    '157': 'mustang',
    '158': 'ranger',
    '159': 'shelby-gt500',
    '160': 'taurus',
    '161': 'transit-connect',
    '162': 'acadia',
    '163': 'canyon',
    '164': 'savana',
    '165': 'savana2500',
    '166': 'savanaCargo',
    '167': 'sierra1500',
    '168': 'sierra2500',
    '169': 'sierra2500hd',
    '170': 'sierra3550hd',
    '171': 'sierraHybrid',
    '172': 'terrian',
    '173': 'w45042',
    '174': 'w5500-hd',
    '175': 'w55042',
    '176': 'yukon',
    '177': 'yukonDenali',
    '178': 'yukonHybrid',
    '179': 'yukon-xl',
    '180': 'g70',
    '181': 'g80',
    '182': 'g90',
    '183': 'gv60',
    '184': 'gv70',
    '185': 'gv80',
    '186': '250',
    '187': '750-shadow',
    '188': 'accord',
    '189': 'accord-crosstour',
    '190': 'anf125i',
    '191': 'cb1000r',
    '192': 'cb1300sa',
    '193': 'cbf100',
    '194': 'cbf125',
    '195': 'cbf600n',
    '196': 'cbf600s',
    '197': 'cbr1000rr',
    '198': 'cbr600rr',
    '199': 'civic',
    '200': 'cr-v',
    '201': 'crf100f',
    '202': 'crf150f',
    '203': 'crf150r',
    '204': 'crf230f',
    '205': 'crf230l',
    '206': 'crf230m',
    '207': 'crf250r',
    '208': 'crf250x',
    '209': 'crf450r',
    '210': 'crf450x',
    '211': 'crf50f',
    '212': 'crf70f',
    '213': 'crf80f',
    '214': 'deauville',
    '215': 'deauville-700',
    '216': 'dn-01',
    '217': 'element',
    '218': 'elite',
    '219': 'fcx-clarity',
    '220': 'fit',
    '221': 'fourtrax',
    '222': 'fourtrax-foreman',
    '223': 'fourtrax-rancher',
    '224': 'fury',
    '225': 'gl1800-gold',
    '226': 'gold-wing',
    '227': 'insight',
    '228': 'interstate',
    '229': 'metropolitan',
    '230': 'muv700',
    '231': 'nt-700v',
    '232': 'odyssey',
    '233': 'pcx',
    '234': 'pilot',
    '235': 'ridgeline',
    '236': 'ruckus',
    '237': 's-wing',
    '238': 'sabre',
    '239': 'sh125i',
    '240': 'sh150d',
    '241': 'sh150i',
    '242': 'sh300i',
    '243': 'shadow',
    '244': 'shadow-750',
    '245': 'shadow-spirit',
    '246': 'silver',
    '247': 'silver-wing',
    '248': 'st-1300',
    '249': 'st1300a',
    '250': 'stateline',
    '251': 'trx250x',
    '252': 'trx300x',
    '253': 'trx400x',
    '254': 'trx450r',
    '255': 'trx700xx',
    '256': 'trx90x',
    '257': 'varadero-125',
    '258': 'vfr-800',
    '259': 'vfr1200f',
    '260': 'vfr800-interceptor',
    '261': 'vt1300cx',
    '262': 'vtx1300t',
    '263': 'vtx1800f',
    '264': 'vtx1800n',
    '265': 'vtx1800t',
    '266': 'xl125v',
    '267': 'xl700v',
    '268': 'xl700v-transalp',
    '269': 'xr100r',
    '270': 'xr650l',
    '271': 'h3',
    '272': 'h3t',
    '273': 'accent',
    '274': 'azera',
    '275': 'elantra',
    '276': 'elantra-touring',
    '277': 'entourage',
    '278': 'genesis',
    '279': 'genesis-coupe',
    '280': 'santa-fe',
    '281': 'sonata',
    '282': 'tucson',
    '283': 'veracruz',
    '284': 'ex',
    '285': 'fx',
    '286': 'g-convertible',
    '287': 'g-coupe',
    '288': 'g-sedan',
    '289': 'm',
    '290': 'qx56',
    '291': 'npr',
    '292': 'nqr',
    '293': 'xf',
    '294': 'xf-series',
    '295': 'xj-series',
    '296': 'xk',
    '297': 'xk-series',
    '298': 'commander',
    '299': 'compass',
    '300': 'grand-cherokee',
    '301': 'liberty',
    '302': 'patriot',
    '303': 'wrangler',
    '304': 'wrangler-unlimited',
    '305': 'borrego',
    '306': 'forte',
    '307': 'forte-koup',
    '308': 'magentis',
    '309': 'optima',
    '310': 'rio',
    '311': 'rio5',
    '312': 'rondo',
    '313': 'sedona',
    '314': 'soul',
    '315': 'sportage',
    '316': 'gallardo',
    '317': 'murcielago',
    '318': 'lr2',
    '319': 'lr4',
    '320': 'rangeRover',
    '321': 'rangeRoverSport',
    '322': 'es-350',
    '323': 'gs',
    '324': 'gs-450h',
    '325': 'gx-460',
    '326': 'hs-250h',
    '327': 'is',
    '328': 'is-350-c',
    '329': 'is-c',
    '330': 'is-f',
    '331': 'ls-460',
    '332': 'ls-600h',
    '333': 'ls-600h-l',
    '334': 'lx-570',
    '335': 'rx-350',
    '336': 'rx-450h',
    '337': 'sc-430',
    '338': 'mks',
    '339': 'mkt',
    '340': 'mkx',
    '341': 'mkz',
    '342': 'navigator',
    '343': 'town-car',
    '344': 'elise',
    '345': 'evora',
    '346': 'exige',
    '347': 'granturismo',
    '348': 'granturisomConvertible',
    '349': 'quattroporte',
    '350': '57',
    '351': '62',
    '352': 'cx-7',
    '353': 'cx-9',
    '354': 'mazda3',
    '355': 'mazda5',
    '356': 'mazda6',
    '357': 'miata-mx-5',
    '358': 'rx-8',
    '359': 'tribute',
    '360': 'tributeHybrid',
    '361': 'truck',
    '362': 'endeavor',
    '363': 'galant',
    '364': 'lancer',
    '365': 'lancer-evolution',
    '366': 'lancer-sportback',
    '367': 'outlander',
    '368': 'a-class',
    '369': 'b-class',
    '370': 'c-class',
    '371': 'cl-class',
    '372': 'clk-class',
    '373': 'cls-class',
    '374': 'e-class',
    '375': 'g-class',
    '376': 'gl-class',
    '377': 'glk-class',
    '378': 'm-class',
    '379': 'r-class',
    '380': 's-class',
    '381': 'sl-class',
    '382': 'slk-class',
    '383': 'sprinter',
    '384': 'grandMarquis',
    '385': 'mariner',
    '386': 'marinerHybrid',
    '387': 'milan',
    '388': 'vzr1800',
    '389': 'mountaineer',
    '390': 'clubman',
    '391': 'cooper',
    '392': 'eclipse',
    '393': 'endeavor',
    '394': 'galant',
    '395': 'lancer',
    '396': 'lancerSportBack',
    '397': 'outlander',
    '398': 'altima',
    '399': 'altimaHybrid',
    '400': 'armada',
    '401': 'Cube',
    '402': 'frontier',
    '403': 'gt-r',
    '404': 'maxima',
    '405': 'murano',
    '406': 'pahtfinder',
    '407': 'rogue',
    '408': 'sentra',
    '409': 'titan',
    '410': 'ud1400',
    '411': 'ud1800cs',
    '412': 'versa',
    '413': 'xterra',
    '414': 'z',
    '415': 'g5',
    '416': 'g6',
    '417': 'solstice',
    '418': 'vibe',
    '419': '911',
    '420': 'boxster',
    '421': 'cayenne',
    '422': 'cayman',
    '423': 'panamera',
    '424': '1500',
    '425': '2500',
    '426': '3500',
    '427': 'dakota',
    '428': 'ghost',
    '429': 'phantom',
    '430': 'phantom-coupe',
    '431': '09-mar',
    '432': '09-may',
    '433': '9-3-sportCombi',
    '434': 'outlook',
    '435': 'sky',
    '436': 'vue',
    '437': 'tc',
    '438': 'xb',
    '439': 'xd',
    '440': 'fortwo',
    '441': 'c8',
    '442': 'forester',
    '443': 'impreza',
    '444': 'impreza-wrx',
    '445': 'legacy',
    '446': 'outback',
    '447': 'tribeca',
    '448': 'tribeca-limited',
    '449': '250-gt-naked',
    '450': 'address',
    '451': 'an400',
    '452': 'an650',
    '453': 'b-king',
    '454': 'bandit',
    '455': 'bandit-1250',
    '456': 'bandit-1250f',
    '457': 'bandit-1250s',
    '458': 'boulevard',
    '459': 'boulevard-c50',
    '460': 'boulevard-m109r',
    '461': 'boulevard-m50',
    '462': 'burgman',
    '463': 'burgman-125',
    '464': 'burgman-200',
    '465': 'burgman-650',
    '466': 'burgman-fuel',
    '467': 'dl1000',
    '468': 'dl650',
    '469': 'dr-125',
    '470': 'dr-z125',
    '471': 'dr-z125l',
    '472': 'dr-z400e',
    '473': 'dr-z400s',
    '474': 'dr-z400sm',
    '475': 'dr-z70',
    '476': 'dr200se',
    '477': 'dr650se',
    '478': 'equator',
    '479': 'gladius',
    '480': 'gladius-400',
    '481': 'grandVitara',
    '482': 'gs500e',
    '483': 'gs500f',
    '484': 'gsf1250sa',
    '485': 'gsr',
    '486': 'gsx-1250',
    '487': 'gsx-r-100',
    '488': 'gsx-r600',
    '489': 'gsx-r750',
    '490': 'gsx1300r',
    '491': 'gsx650f',
    '492': 'gz250',
    '493': 'gz250',
    '494': 'intruder',
    '495': 'kizashi',
    '496': 'ls650',
    '497': 'lt-a400',
    '498': 'lt-a400f',
    '499': 'lt-a450',
    '500': 'lt-a500',
    '501': 'lt-a750',
    '502': 'lt-f250',
    '503': 'lt-f400',
    '504': 'lt-f400f',
    '505': 'lt-r450',
    '506': 'lt-z250',
    '507': 'lt-z400',
    '508': 'lt-z50',
    '509': 'lt-z90',
    '510': 'marauder',
    '511': 'rk-z250',
    '512': 'rm250',
    '513': 'rm85',
    '514': 'rm85l',
    '515': 'rmx450z',
    '516': 'rmz',
    '517': 'rmz-450',
    '518': 'sfv650',
    '519': 'sixteen',
    '520': 'sv650',
    '521': 'sv650sa',
    '522': 'sv650sf',
    '523': 'swift',
    '524': 'sx4',
    '525': 'sx4-crossover',
    '526': 'sx4-sport',
    '527': 'tu250',
    '528': 'tu250x',
    '529': 'v-storm',
    '530': 'v-storm-650',
    '531': 'van-van',
    '532': 'v1800',
    '533': 'vlr1800',
    '534': 'vz800',
    '535': 'vzr1800',
    '536': 'roadster',
    '537': '4runner',
    '538': 'Avalon',
    '539': 'camry',
    '540': 'camryHybrid',
    '541': 'corolla',
    '542': 'fjCruiser',
    '543': 'highLander',
    '544': 'HighLanderHybrid',
    '545': 'landCruiser',
    '546': 'matrix',
    '547': 'prius',
    '548': 'rav4',
    '549': 'squoia',
    '550': 'sienna',
    '551': 'tacoma',
    '552': 'tundra',
    '553': 'venza',
    '554': 'yaris',
    '555': 'cc',
    '556': 'v',
    '557': 'eos',
    '558': 'golf',
    '559': 'gti',
    '560': 'jetta',
    '561': 'jettaSportWagen',
    '562': 'newBeetle',
    '563': 'passat',
    '564': 'passatWagon',
    '565': 'routan',
    '566': 'tiguan',
    '567': 'touareg',
    '568': 'c30',
    '569': 'c70',
    '570': 's40',
    '571': 's80',
    '572': 'v50',
    '573': 'v70',
    '574': 'vhd',
    '575': 'vnl',
    '576': 'vnm',
    '577': 'vt',
    '578': 'xc60',
    '579': 'xc70',
    '580': 'xc90' 
}
,
    'trim': { '1': 'Premium', '2': 'Premium-Plus', '3': 'Prestige' }
};

function decryptData(encryptedData, secretKey, iv) {
    try {
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), Buffer.from(iv, 'hex'));
        let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
        decryptedData += decipher.final('utf-8');
        return decryptedData;
    } catch (error) {
        console.error('Error decrypting data:', error);
        return null;
    }
}

const decryptedPassword = decryptData(config.gmail.encryptedPassword, config.gmail.secretKey, config.gmail.iv);

if (decryptedPassword !== null) {
    console.log('Decrypted password:', decryptedPassword);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.gmail.username,
            pass: decryptedPassword,
        },
    });

    const MAX_ATTACHMENT_SIZE_LIMIT = 25 * 1024 * 1024;

    async function sendEmail(submittedData, files, senderEmail, res) {
        console.log('Sending email...');
        const mailOptions = {
            from: senderEmail,
            to: 'bcautooffer@gmail.com', //enter your gmail
            subject: 'Submitted Form Data',
            text: JSON.stringify(submittedData),
            attachments: []
        };

        const attachments = [];
        for (const file of Object.values(files)) {
            try {
                const content = await fs.promises.readFile(file.path);
                attachments.push({
                    filename: file.name,
                    content: content,
                    contentType: getContentType(file.type)
                });
            } catch (error) {
                console.error('Error reading file:', error);
            }
        }

        const totalAttachmentSize = attachments.reduce((total, attachment) => total + attachment.content.length, 0);

        if (totalAttachmentSize <= MAX_ATTACHMENT_SIZE_LIMIT) {
            mailOptions.attachments = attachments;
        } else {
            console.error('Attachments exceed size limit. Email will be sent without attachments.');
        }

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent:', info.response);
            // Send thank you page content as the response
            fs.readFile(__dirname + '/submitted.html', 'utf8', (err, content) => {
                if (err) {
                    console.error('Error reading thank you HTML file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content);
                }
            });
        } catch (error) {
            console.error('Error sending email:', error);
            // Send alert to user if email sending fails
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error sending email');
        }
    }

    function getContentType(fileType) {
        switch (fileType) {
            case 'image/jpeg':
            case 'image/jpg':
                return 'image/jpeg';
            case 'image/png':
                return 'image/png';
            case 'application/pdf':
                return 'application/pdf';
            default:
                return 'application/octet-stream';
        }
    }

    const server = http.createServer((req, res) => {
        console.log('Received request:', req.method, req.url);

        // Access control headers
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS'); // Include GET method
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        if (req.method === 'OPTIONS') {
            console.log('Handling OPTIONS request');
            res.writeHead(200);
            res.end();
            return;
        }

        if (req.method === 'GET' && req.url === '/submitted.html') {
            console.log('Handling GET request for /submitted.html');
            // Send thank you page content as the response
            fs.readFile(__dirname + '/submitted.html', 'utf8', (err, content) => {
                if (err) {
                    console.error('Error reading thank you HTML file:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content);
                }
            });
        } else if (req.method === 'POST') {
            console.log('Handling POST request');
            const form = new formidable.IncomingForm();

            form.parse(req, (err, fields, files) => {
                if (err) {
                    console.error('Error parsing form data:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }

                const senderEmail = fields.senderEmail;

                Object.entries(fields).forEach(([key, value]) => {
                    if (selectionMappings[key] && selectionMappings[key][value]) {
                        fields[key] = selectionMappings[key][value];
                    }
                });

                console.log('Submitted data:', fields);

                const formData = { ...fields, files };

                sendEmail(formData, files, senderEmail, res);
            });
        } else {
            console.error('Unsupported method:', req.method);
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.end('Error: Only POST method is allowed for form submission.');
        }
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} else {
    console.error('Decryption failed. Check decryption parameters and encrypted data.');
}