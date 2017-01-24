module.exports = function (i18n) {
  return {
    smartFile: {
      url: 'https://app.smartfile.com/api/2',
      folderName: '/recalbox-support',
      api: {
        upload: '/path/data',
        link: '/link/'
      },
      keys: {
        public: 'xmoZ9l3lL83utppjY7TzPML0jaTUu4',
        private: 'C8SU1dYRj7gFImkEZfMUNm0h6ZGwkP'
      }
    },

    recalbox: {
      ip: '127.0.0.1',
      port: 1337,
      logsPaths: [
        '/var/log/messages',
        '/recalbox/share/system/.emulationstation/es_log.txt',
        '/recalbox/share/system/logs/recalbox.log',
      ],
      confPath: '/recalbox/share/system/recalbox.conf',
      supportScript: '/recalbox/scripts/recalbox-support.sh',
      emulationStationPath: '/etc/init.d/S31emulationstation',
      configScript: '/recalbox/scripts/recalbox-config.sh',
      raspi2png: {
        command: 'raspi2png -p',
        savePath: '/recalbox/share/screenshots'
      },
      romsPath: '/recalbox/share/roms',
      romsExcludedFolders: ['downloaded_images'],
      biosPath: '/recalbox/share/bios',
      esSystemsCfgPath: '/recalbox/share_init/system/.emulationstation/es_systems.cfg',
      systemSettingsCommand: 'python /usr/lib/python2.7/site-packages/configgen/settings/recalboxSettings.pyc',

      // Audio
      audio: {
        devices: [
          {key: 'auto', value: i18n.__("Automatique")},
          {key: 'hdmi', value: i18n.__("Prise HDMI")},
          {key: 'jack', value: i18n.__("Prise Jack")}
        ]
      },

      // Controllers
      controllers: {
        ps3drivers: [
          {key: 'official', value: i18n.__("Officiel")},
          {key: 'bluez', value: i18n.__("Bluez 5")}
        ]
      },

      // Configuration
      configuration: {
        updatesTypes: [
          {key: 'stable', value: i18n.__("Stable")},
          {key: 'beta', value: i18n.__("Bêta")},
          {key: 'unstable', value: i18n.__("Instable")},
        ],
        esMenus: [
          'default',
          'none',
          'bartop',
        ],
        emulatorsSpecialkeys: [
          'default',
          'nomenu',
          'none'
        ],
        keyboardlayouts: [
          {key: 'us', value: 'American'},
          {key: 'de', value: 'Deutsch'},
          {key: 'en', value: 'English'},
          {key: 'fr', value: 'Français'},
          {key: 'es', value: 'Spanish'}
        ],
        systemlocales: [
          {key: 'de_DE', value: 'Deutschland'},
          {key: 'es_ES', value: 'España (es_ES)'},
          {key: 'eu_ES', value: 'España (eu_ES)'},
          {key: 'fr_FR', value: 'Français'},
          {key: 'it_IT', value: 'Italia'},
          {key: 'pt_BR', value: 'Português do Brasil'},
          {key: 'tr_TR', value: 'Türkiye'},
          {key: 'en_GB', value: 'United Kingdom'},
          {key: 'en_US', value: 'USA'},
          {key: 'zh_CN', value: '中华人民共和国'}
        ],
        timezones: [
          'Africa/Abidjan',
          'Africa/Accra',
          'Africa/Addis_Ababa',
          'Africa/Algiers',
          'Africa/Asmara',
          'Africa/Asmera',
          'Africa/Bamako',
          'Africa/Bangui',
          'Africa/Banjul',
          'Africa/Bissau',
          'Africa/Blantyre',
          'Africa/Brazzaville',
          'Africa/Bujumbura',
          'Africa/Cairo',
          'Africa/Casablanca',
          'Africa/Ceuta',
          'Africa/Conakry',
          'Africa/Dakar',
          'Africa/Dar_es_Salaam',
          'Africa/Djibouti',
          'Africa/Douala',
          'Africa/El_Aaiun',
          'Africa/Freetown',
          'Africa/Gaborone',
          'Africa/Harare',
          'Africa/Johannesburg',
          'Africa/Juba',
          'Africa/Kampala',
          'Africa/Khartoum',
          'Africa/Kigali',
          'Africa/Kinshasa',
          'Africa/Lagos',
          'Africa/Libreville',
          'Africa/Lome',
          'Africa/Luanda',
          'Africa/Lubumbashi',
          'Africa/Lusaka',
          'Africa/Malabo',
          'Africa/Maputo',
          'Africa/Maseru',
          'Africa/Mbabane',
          'Africa/Mogadishu',
          'Africa/Monrovia',
          'Africa/Nairobi',
          'Africa/Ndjamena',
          'Africa/Niamey',
          'Africa/Nouakchott',
          'Africa/Ouagadougou',
          'Africa/Porto-Novo',
          'Africa/Sao_Tome',
          'Africa/Timbuktu',
          'Africa/Tripoli',
          'Africa/Tunis',
          'Africa/Windhoek',
          'America/Adak',
          'America/Anchorage',
          'America/Anguilla',
          'America/Antigua',
          'America/Araguaina',
          'America/Argentina/Buenos_Aires',
          'America/Argentina/Catamarca',
          'America/Argentina/ComodRivadavia',
          'America/Argentina/Cordoba',
          'America/Argentina/Jujuy',
          'America/Argentina/La_Rioja',
          'America/Argentina/Mendoza',
          'America/Argentina/Rio_Gallegos',
          'America/Argentina/Salta',
          'America/Argentina/San_Juan',
          'America/Argentina/San_Luis',
          'America/Argentina/Tucuman',
          'America/Argentina/Ushuaia',
          'America/Aruba',
          'America/Asuncion',
          'America/Atikokan',
          'America/Atka',
          'America/Bahia',
          'America/Bahia_Banderas',
          'America/Barbados',
          'America/Belem',
          'America/Belize',
          'America/Blanc-Sablon',
          'America/Boa_Vista',
          'America/Bogota',
          'America/Boise',
          'America/Buenos_Aires',
          'America/Cambridge_Bay',
          'America/Campo_Grande',
          'America/Cancun',
          'America/Caracas',
          'America/Catamarca',
          'America/Cayenne',
          'America/Cayman',
          'America/Chicago',
          'America/Chihuahua',
          'America/Coral_Harbour',
          'America/Cordoba',
          'America/Costa_Rica',
          'America/Creston',
          'America/Cuiaba',
          'America/Curacao',
          'America/Danmarkshavn',
          'America/Dawson',
          'America/Dawson_Creek',
          'America/Denver',
          'America/Detroit',
          'America/Dominica',
          'America/Edmonton',
          'America/Eirunepe',
          'America/El_Salvador',
          'America/Ensenada',
          'America/Fort_Nelson',
          'America/Fort_Wayne',
          'America/Fortaleza',
          'America/Glace_Bay',
          'America/Godthab',
          'America/Goose_Bay',
          'America/Grand_Turk',
          'America/Grenada',
          'America/Guadeloupe',
          'America/Guatemala',
          'America/Guayaquil',
          'America/Guyana',
          'America/Halifax',
          'America/Havana',
          'America/Hermosillo',
          'America/Indiana/Indianapolis',
          'America/Indiana/Knox',
          'America/Indiana/Marengo',
          'America/Indiana/Petersburg',
          'America/Indiana/Tell_City',
          'America/Indiana/Vevay',
          'America/Indiana/Vincennes',
          'America/Indiana/Winamac',
          'America/Indianapolis',
          'America/Inuvik',
          'America/Iqaluit',
          'America/Jamaica',
          'America/Jujuy',
          'America/Juneau',
          'America/Kentucky/Louisville',
          'America/Kentucky/Monticello',
          'America/Knox_IN',
          'America/Kralendijk',
          'America/La_Paz',
          'America/Lima',
          'America/Los_Angeles',
          'America/Louisville',
          'America/Lower_Princes',
          'America/Maceio',
          'America/Managua',
          'America/Manaus',
          'America/Marigot',
          'America/Martinique',
          'America/Matamoros',
          'America/Mazatlan',
          'America/Mendoza',
          'America/Menominee',
          'America/Merida',
          'America/Metlakatla',
          'America/Mexico_City',
          'America/Miquelon',
          'America/Moncton',
          'America/Monterrey',
          'America/Montevideo',
          'America/Montreal',
          'America/Montserrat',
          'America/Nassau',
          'America/New_York',
          'America/Nipigon',
          'America/Nome',
          'America/Noronha',
          'America/North_Dakota/Beulah',
          'America/North_Dakota/Center',
          'America/North_Dakota/New_Salem',
          'America/Ojinaga',
          'America/Panama',
          'America/Pangnirtung',
          'America/Paramaribo',
          'America/Phoenix',
          'America/Port_of_Spain',
          'America/Port-au-Prince',
          'America/Porto_Acre',
          'America/Porto_Velho',
          'America/Puerto_Rico',
          'America/Rainy_River',
          'America/Rankin_Inlet',
          'America/Recife',
          'America/Regina',
          'America/Resolute',
          'America/Rio_Branco',
          'America/Rosario',
          'America/Santa_Isabel',
          'America/Santarem',
          'America/Santiago',
          'America/Santo_Domingo',
          'America/Sao_Paulo',
          'America/Scoresbysund',
          'America/Shiprock',
          'America/Sitka',
          'America/St_Barthelemy',
          'America/St_Johns',
          'America/St_Kitts',
          'America/St_Lucia',
          'America/St_Thomas',
          'America/St_Vincent',
          'America/Swift_Current',
          'America/Tegucigalpa',
          'America/Thule',
          'America/Thunder_Bay',
          'America/Tijuana',
          'America/Toronto',
          'America/Tortola',
          'America/Vancouver',
          'America/Virgin',
          'America/Whitehorse',
          'America/Winnipeg',
          'America/Yakutat',
          'America/Yellowknife',
          'Antarctica/Casey',
          'Antarctica/Davis',
          'Antarctica/DumontDUrville',
          'Antarctica/Macquarie',
          'Antarctica/Mawson',
          'Antarctica/McMurdo',
          'Antarctica/Palmer',
          'Antarctica/Rothera',
          'Antarctica/South_Pole',
          'Antarctica/Syowa',
          'Antarctica/Troll',
          'Antarctica/Vostok',
          'Arctic/Longyearbyen',
          'Asia/Aden',
          'Asia/Almaty',
          'Asia/Amman',
          'Asia/Anadyr',
          'Asia/Aqtau',
          'Asia/Aqtobe',
          'Asia/Ashgabat',
          'Asia/Ashkhabad',
          'Asia/Baghdad',
          'Asia/Bahrain',
          'Asia/Baku',
          'Asia/Bangkok',
          'Asia/Barnaul',
          'Asia/Beirut',
          'Asia/Bishkek',
          'Asia/Brunei',
          'Asia/Calcutta',
          'Asia/Chita',
          'Asia/Choibalsan',
          'Asia/Chongqing',
          'Asia/Chungking',
          'Asia/Colombo',
          'Asia/Dacca',
          'Asia/Damascus',
          'Asia/Dhaka',
          'Asia/Dili',
          'Asia/Dubai',
          'Asia/Dushanbe',
          'Asia/Gaza',
          'Asia/Harbin',
          'Asia/Hebron',
          'Asia/Ho_Chi_Minh',
          'Asia/Hong_Kong',
          'Asia/Hovd',
          'Asia/Irkutsk',
          'Asia/Istanbul',
          'Asia/Jakarta',
          'Asia/Jayapura',
          'Asia/Jerusalem',
          'Asia/Kabul',
          'Asia/Kamchatka',
          'Asia/Karachi',
          'Asia/Kashgar',
          'Asia/Kathmandu',
          'Asia/Katmandu',
          'Asia/Khandyga',
          'Asia/Kolkata',
          'Asia/Krasnoyarsk',
          'Asia/Kuala_Lumpur',
          'Asia/Kuching',
          'Asia/Kuwait',
          'Asia/Macao',
          'Asia/Macau',
          'Asia/Magadan',
          'Asia/Makassar',
          'Asia/Manila',
          'Asia/Muscat',
          'Asia/Nicosia',
          'Asia/Novokuznetsk',
          'Asia/Novosibirsk',
          'Asia/Omsk',
          'Asia/Oral',
          'Asia/Phnom_Penh',
          'Asia/Pontianak',
          'Asia/Pyongyang',
          'Asia/Qatar',
          'Asia/Qyzylorda',
          'Asia/Rangoon',
          'Asia/Riyadh',
          'Asia/Saigon',
          'Asia/Sakhalin',
          'Asia/Samarkand',
          'Asia/Seoul',
          'Asia/Shanghai',
          'Asia/Singapore',
          'Asia/Srednekolymsk',
          'Asia/Taipei',
          'Asia/Tashkent',
          'Asia/Tbilisi',
          'Asia/Tehran',
          'Asia/Tel_Aviv',
          'Asia/Thimbu',
          'Asia/Thimphu',
          'Asia/Tokyo',
          'Asia/Tomsk',
          'Asia/Ujung_Pandang',
          'Asia/Ulaanbaatar',
          'Asia/Ulan_Bator',
          'Asia/Urumqi',
          'Asia/Ust-Nera',
          'Asia/Vientiane',
          'Asia/Vladivostok',
          'Asia/Yakutsk',
          'Asia/Yekaterinburg',
          'Asia/Yerevan',
          'Atlantic/Azores',
          'Atlantic/Bermuda',
          'Atlantic/Canary',
          'Atlantic/Cape_Verde',
          'Atlantic/Faeroe',
          'Atlantic/Faroe',
          'Atlantic/Jan_Mayen',
          'Atlantic/Madeira',
          'Atlantic/Reykjavik',
          'Atlantic/South_Georgia',
          'Atlantic/St_Helena',
          'Atlantic/Stanley',
          'Australia/ACT',
          'Australia/Adelaide',
          'Australia/Brisbane',
          'Australia/Broken_Hill',
          'Australia/Canberra',
          'Australia/Currie',
          'Australia/Darwin',
          'Australia/Eucla',
          'Australia/Hobart',
          'Australia/LHI',
          'Australia/Lindeman',
          'Australia/Lord_Howe',
          'Australia/Melbourne',
          'Australia/North',
          'Australia/NSW',
          'Australia/Perth',
          'Australia/Queensland',
          'Australia/South',
          'Australia/Sydney',
          'Australia/Tasmania',
          'Australia/Victoria',
          'Australia/West',
          'Australia/Yancowinna',
          'Brazil/Acre',
          'Brazil/DeNoronha',
          'Brazil/East',
          'Brazil/West',
          'Canada/Atlantic',
          'Canada/Central',
          'Canada/Eastern',
          'Canada/East-Saskatchewan',
          'Canada/Mountain',
          'Canada/Newfoundland',
          'Canada/Pacific',
          'Canada/Saskatchewan',
          'Canada/Yukon',
          'CET',
          'Chile/Continental',
          'Chile/EasterIsland',
          'CST6CDT',
          'Cuba',
          'EET',
          'Egypt',
          'Eire',
          'EST',
          'EST5EDT',
          'Etc/GMT',
          'Etc/GMT+0',
          'Etc/GMT+1',
          'Etc/GMT+10',
          'Etc/GMT+11',
          'Etc/GMT+12',
          'Etc/GMT+2',
          'Etc/GMT+3',
          'Etc/GMT+4',
          'Etc/GMT+5',
          'Etc/GMT+6',
          'Etc/GMT+7',
          'Etc/GMT+8',
          'Etc/GMT+9',
          'Etc/GMT0',
          'Etc/GMT-0',
          'Etc/GMT-1',
          'Etc/GMT-10',
          'Etc/GMT-11',
          'Etc/GMT-12',
          'Etc/GMT-13',
          'Etc/GMT-14',
          'Etc/GMT-2',
          'Etc/GMT-3',
          'Etc/GMT-4',
          'Etc/GMT-5',
          'Etc/GMT-6',
          'Etc/GMT-7',
          'Etc/GMT-8',
          'Etc/GMT-9',
          'Etc/Greenwich',
          'Etc/UCT',
          'Etc/Universal',
          'Etc/UTC',
          'Etc/Zulu',
          'Europe/Amsterdam',
          'Europe/Andorra',
          'Europe/Astrakhan',
          'Europe/Athens',
          'Europe/Belfast',
          'Europe/Belgrade',
          'Europe/Berlin',
          'Europe/Bratislava',
          'Europe/Brussels',
          'Europe/Bucharest',
          'Europe/Budapest',
          'Europe/Busingen',
          'Europe/Chisinau',
          'Europe/Copenhagen',
          'Europe/Dublin',
          'Europe/Gibraltar',
          'Europe/Guernsey',
          'Europe/Helsinki',
          'Europe/Isle_of_Man',
          'Europe/Istanbul',
          'Europe/Jersey',
          'Europe/Kaliningrad',
          'Europe/Kiev',
          'Europe/Kirov',
          'Europe/Lisbon',
          'Europe/Ljubljana',
          'Europe/London',
          'Europe/Luxembourg',
          'Europe/Madrid',
          'Europe/Malta',
          'Europe/Mariehamn',
          'Europe/Minsk',
          'Europe/Monaco',
          'Europe/Moscow',
          'Europe/Nicosia',
          'Europe/Oslo',
          'Europe/Paris',
          'Europe/Podgorica',
          'Europe/Prague',
          'Europe/Riga',
          'Europe/Rome',
          'Europe/Samara',
          'Europe/San_Marino',
          'Europe/Sarajevo',
          'Europe/Simferopol',
          'Europe/Skopje',
          'Europe/Sofia',
          'Europe/Stockholm',
          'Europe/Tallinn',
          'Europe/Tirane',
          'Europe/Tiraspol',
          'Europe/Ulyanovsk',
          'Europe/Uzhgorod',
          'Europe/Vaduz',
          'Europe/Vatican',
          'Europe/Vienna',
          'Europe/Vilnius',
          'Europe/Volgograd',
          'Europe/Warsaw',
          'Europe/Zagreb',
          'Europe/Zaporozhye',
          'Europe/Zurich',
          'GB',
          'GB-Eire',
          'GMT',
          'GMT+0',
          'GMT0',
          'GMT-0',
          'Greenwich',
          'Hongkong',
          'HST',
          'Iceland',
          'Indian/Antananarivo',
          'Indian/Chagos',
          'Indian/Christmas',
          'Indian/Cocos',
          'Indian/Comoro',
          'Indian/Kerguelen',
          'Indian/Mahe',
          'Indian/Maldives',
          'Indian/Mauritius',
          'Indian/Mayotte',
          'Indian/Reunion',
          'Iran',
          'Israel',
          'Jamaica',
          'Japan',
          'Kwajalein',
          'Libya',
          'MET',
          'Mexico/BajaNorte',
          'Mexico/BajaSur',
          'Mexico/General',
          'MST',
          'MST7MDT',
          'Navajo',
          'NZ',
          'NZ-CHAT',
          'Pacific/Apia',
          'Pacific/Auckland',
          'Pacific/Bougainville',
          'Pacific/Chatham',
          'Pacific/Chuuk',
          'Pacific/Easter',
          'Pacific/Efate',
          'Pacific/Enderbury',
          'Pacific/Fakaofo',
          'Pacific/Fiji',
          'Pacific/Funafuti',
          'Pacific/Galapagos',
          'Pacific/Gambier',
          'Pacific/Guadalcanal',
          'Pacific/Guam',
          'Pacific/Honolulu',
          'Pacific/Johnston',
          'Pacific/Kiritimati',
          'Pacific/Kosrae',
          'Pacific/Kwajalein',
          'Pacific/Majuro',
          'Pacific/Marquesas',
          'Pacific/Midway',
          'Pacific/Nauru',
          'Pacific/Niue',
          'Pacific/Norfolk',
          'Pacific/Noumea',
          'Pacific/Pago_Pago',
          'Pacific/Palau',
          'Pacific/Pitcairn',
          'Pacific/Pohnpei',
          'Pacific/Ponape',
          'Pacific/Port_Moresby',
          'Pacific/Rarotonga',
          'Pacific/Saipan',
          'Pacific/Samoa',
          'Pacific/Tahiti',
          'Pacific/Tarawa',
          'Pacific/Tongatapu',
          'Pacific/Truk',
          'Pacific/Wake',
          'Pacific/Wallis',
          'Pacific/Yap',
          'Poland',
          'Portugal',
          'PRC',
          'PST8PDT',
          'ROC',
          'ROK',
          'Singapore',
          'Turkey',
          'UCT',
          'Universal',
          'US/Alaska',
          'US/Aleutian',
          'US/Arizona',
          'US/Central',
          'US/Eastern',
          'US/East-Indiana',
          'US/Hawaii',
          'US/Indiana-Starke',
          'US/Michigan',
          'US/Mountain',
          'US/Pacific',
          'US/Pacific-New',
          'US/Samoa',
          'UTC',
          'WET',
          'W-SU',
          'Zulu'
        ]
      },

      // Systems
      systems: {
        ratio: [
          {key: 'auto', value: i18n.__("Automatique")},
          {key: '4/3', value: '4/3'},
          {key: '16/9', value: '16/9'},
          {key: '16/10', value: '16/10'},
          {key: 'custom', value: i18n.__("Personnalisé")}
        ],

        shaderset: [
          {key: 'none', value: i18n.__("Aucun")},
          {key: 'retro', value: i18n.__("Retro")},
          {key: 'scanlines', value: i18n.__("Scanlines")},
        ],

        tvservice: {
          CEA: `Group CEA has 17 modes:
               mode 1: 640x480 @ 60Hz 4:3, clock:25MHz progressive
               mode 2: 720x480 @ 60Hz 4:3, clock:27MHz progressive
               mode 3: 720x480 @ 60Hz 16:9, clock:27MHz progressive
               mode 4: 1280x720 @ 60Hz 16:9, clock:74MHz progressive
               mode 5: 1920x1080 @ 60Hz 16:9, clock:74MHz interlaced
               mode 6: 720x480 @ 60Hz 4:3, clock:27MHz x2 interlaced
               mode 7: 720x480 @ 60Hz 16:9, clock:27MHz x2 interlaced
               mode 14: 720x480 @ 60Hz 4:3, clock:54MHz x2 progressive
               mode 15: 720x480 @ 60Hz 16:9, clock:54MHz x2 progressive
               mode 16: 1920x1080 @ 60Hz 16:9, clock:148MHz progressive
               mode 17: 720x576 @ 50Hz 4:3, clock:27MHz progressive
               mode 18: 720x576 @ 50Hz 16:9, clock:27MHz progressive
               mode 19: 1280x720 @ 50Hz 16:9, clock:74MHz progressive
               mode 20: 1920x1080 @ 50Hz 16:9, clock:74MHz interlaced
               mode 21: 720x576 @ 50Hz 4:3, clock:27MHz x2 interlaced
               mode 22: 720x576 @ 50Hz 16:9, clock:27MHz x2 interlaced
               mode 31: 1920x1080 @ 50Hz 16:9, clock:148MHz progressive`,
          DMT: `Group DMT has 19 modes:
               mode 4: 640x480 @ 60Hz 4:3, clock:25MHz progressive
               mode 5: 640x480 @ 72Hz 4:3, clock:31MHz progressive
               mode 6: 640x480 @ 75Hz 4:3, clock:31MHz progressive
               mode 8: 800x600 @ 56Hz 4:3, clock:36MHz progressive
               mode 9: 800x600 @ 60Hz 4:3, clock:40MHz progressive
               mode 10: 800x600 @ 72Hz 4:3, clock:50MHz progressive
               mode 11: 800x600 @ 75Hz 4:3, clock:49MHz progressive
               mode 16: 1024x768 @ 60Hz 4:3, clock:65MHz progressive
               mode 17: 1024x768 @ 70Hz 4:3, clock:75MHz progressive
               mode 18: 1024x768 @ 75Hz 4:3, clock:78MHz progressive
               mode 28: 1280x800 @ 60Hz 16:10, clock:83MHz progressive
               mode 32: 1280x960 @ 60Hz 4:3, clock:108MHz progressive
               mode 35: 1280x1024 @ 60Hz 5:4, clock:108MHz progressive
               mode 36: 1280x1024 @ 75Hz 5:4, clock:135MHz progressive
               mode 42: 1400x1050 @ 60Hz 4:3, clock:121MHz progressive
               mode 47: 1440x900 @ 60Hz 16:10, clock:106MHz progressive
               mode 51: 1600x1200 @ 60Hz 4:3, clock:162MHz progressive
               mode 58: 1680x1050 @ 60Hz 16:10, clock:146MHz progressive
               mode 83: 1600x900 @ 60Hz 16:9, clock:108MHz progressive`
        }
      }
    }
  };
};
