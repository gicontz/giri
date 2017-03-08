
initial_forecast_usage();

var the_fd = new Date();
var theM = (the_fd.getMonth()+1) < 10 ? "0" + (the_fd.getMonth()+1) : (the_fd.getMonth()+1);
var theD = the_fd.getDate() < 10 ? "0" + the_fd.getDate() : the_fd.getDate();
the_fd = the_fd.getFullYear() + "-" + theM + "-" + theD;

var num_req = $.giriReader('admin/forecast-dump/usage/' + the_fd + '-fioUsage.txt');
num_req = parseInt(num_req);
//36da509268d347e6997fcb8983ced0a4
var forcast_key = $.giriReader('api_configs/forecast-api.giri');

//If tutorial is on
var is_tutorial;
is_tutorial = $.giriReader('tutorial_config.giri') == 'YES' ? true : false;

var config = {
    // Lenguage for the mirror (currently not implemented)

    greets : {
        early:[
        "It so early Master",
        "Are You in a hurry?"
        ],
        day: [
        "Hello Master!",
        "Have a Nice Day"
        ],
        afternoon: [
        "God is Good!",
        "Good Afternoon!"
        ],
        eve: [
        "Good Evening!",
        "Zzzz"
        ],
        mn: [
        "Want to Sleep?",
        "I'm Sleepy"
        ]
    },

    lenguage : "en",
    // forcast.io
    forcast : {
        key : forcast_key, // Your forcast.io api key
        units : "uk2" // See forcast.io documentation if you are getting the wrong units
    },
    // Facebook API Integration
    facebook : {
        api_key: "609849629194835",
        secret_key: "0c581414f7543f21200f83728a3dfff2",
        app_token: "EAAIqp66DulMBAH4ML880ZAO63QzZANbaf2OLgkYmpEZBtk2RVy9c2codJgyWSfh7CZAKa35ircMjR0ceKXZBnRAXhx5ZAlCSCRIg62Tv7WZAD1kP6hyV52JU0nnUsJLqeNglZB4o2up3Wq4gxhZA3KNfkZBYxeznXl6OlDPuuIHfIPhAZDZD"
    },
    //use this only if you want to hardcode your geoposition (used for weather)
    
    geo_position: {
       latitude: 14.218309,
       longitude: 120.972854
    },
    
    gp_barangays:{
        Adlas:{
           latitude: 14.218309,
           longitude: 120.972854           
        }
    }
};



var brgy_config = {
    brgy_name: [
        { 
            classname: 'Acacia',
            lng: 120.992365,
            lat: 14.276899
        },
              
       { 
            classname: 'Adlas',
            lng: 120.965359,
            lat: 14.256701 
        },
       { 
            classname: 'Anahaw I',
            lng: 120.993861,
            lat: 14.271950 
        },
       { 
            classname: 'Anahaw II',
            lng: 120.998133,
            lat: 14.2826244
        },        
         { 
            classname: 'Balite 1',
            lng: 120.926491,
            lat: 14.2118263
        },
        { 
            classname: 'Balite 2',
            lng: 120.970881,
            lat: 14.215241
        },
        { 
            classname: 'Balubad',
            lng: 120.974998,
            lat: 14.230556
        },
        { 
            classname: 'Banaba',
            lng: 120.9941154,
            lat: 14.2827261
        },
        { 
            classname: 'Barangay 1',
            lng: 120.971329,
            lat: 14.216298 
        },
        { 
            classname: 'Barangay 5',
            lng: 120.973753,
            lat: 14.220666
        },
        { 
            classname: 'Batas',
            lng: 121.008306,
            lat: 14.212391
        },
        { 
            classname: 'Biga 1',
            lng: 120.975545,
            lat: 14.247502 
        },
        { 
            classname: 'Biga 2',
            lng: 120.973023,
            lat: 14.246493 
        },
        { 
            classname: 'Biluso',
            lng: 120.956838,
            lat: 14.243099
        },
        { 
            classname: 'Bucal',
            lng: 120.972548,
            lat: 14.143042 
        },
        { 
            classname: 'Buho',
            lng: 120.955613,
            lat: 14.142416
        },
        { 
            classname: 'Bulihan',
            lng: 120.996236,
            lat: 14.275078 
        },
        { 
            classname: 'Cabangaan',
            lng: 120.996038,
            lat: 14.232882
        },
        { 
            classname: 'Carmen',
            lng: 120.992237,
            lat: 14.167016
        },
        { 
            classname: 'Hoyo',
            lng: 120.974998,
            lat: 14.230556
        },
        { 
            classname: 'Hukay',
            lng: 121.012147,
            lat: 14.235035 
        },
        { 
            classname: 'Iba',
            lng: 120.973158,
            lat: 14.218101
        },
        { 
            classname: 'Inchican',
            lng: 121.044777,
            lat: 14.246622 
        },
        { 
            classname: 'Ipil 1',
            lng: 120.996836,
            lat: 14.273276 
        },
        { 
            classname: 'Ipil 2',
            lng: 120.994053,
            lat: 14.278173  
        },
        { 
            classname: 'Kalubkob',
            lng: 120.962927,
            lat: 14.210827 
        },
        { 
            classname: 'Kaong',
            lng: 120.971983,
            lat: 14.221533 
        },
        { 
            classname: 'Lalaan 1',
            lng: 120.95651,
            lat: 14.152754 
        },
        { 
            classname: 'Lalaan 2',
            lng: 120.955364,
            lat: 14.149995
        },
        { 
            classname: 'Litlit',
            lng: 120.946237,
            lat: 14.207385 
        },
        { 
            classname: 'Lucsuhin',
            lng: 120.959775,
            lat: 14.211265
        },
        { 
            classname: 'Lumil',
            lng: 120.971435,
            lat: 14.22452 
        },
        { 
            classname: 'Maguyam',
            lng: 121.006268,
            lat: 14.264713
        },
        { 
            classname: 'Malabag',
            lng: 120.961545,
            lat: 14.237947
        },
        { 
            classname: 'Malaking Tatiao',
            lng: 120.987475,
            lat: 14.223065
        },
        { 
            classname: 'Mataas Na Burol',
            lng: 120.974998,
            lat: 14.230556
        },
        { 
            classname: 'Munting Ilog',
            lng: 120.996521,
            lat: 14.21899 
        },
        { 
            classname: 'Narra 1',
            lng: 120.995048,
            lat: 14.278939   
        },
        { 
            classname: 'Narra 2',
            lng: 120.994219,
            lat: 14.276053 
        },
        { 
            classname: 'Narra 3',
            lng: 120.993323,
            lat: 14.278279 
        },
        
        { 
            classname: 'Paligawan',
            lng: 120.96563,
            lat: 14.243993 
        },
        { 
            classname: 'Pasong Langka',
            lng: 121.006268,
            lat: 14.264713 
        },
        { 
            classname: 'Pooc 1',
            lng: 120.99418,
            lat: 14.189981 
        },
        { 
            classname: 'Pooc 2',
            lng: 120.991285,
            lat: 14.198667 
        },
        { 
            classname: 'Pulong Saging',
            lng: 120.977814,
            lat: 14.208568 
        },
        { 
            classname: 'Pulong Bunga',
            lng: 120.972078,
            lat: 14.229493 
        },
        { 
            classname: 'Puting Kahoy',
            lng: 121.031287,
            lat: 14.216585 
        },
        { 
            classname: 'Sabutan',
            lng: 120.977417,
            lat: 14.2254 
        },
        { 
            classname: 'Santol',
            lng: 120.96328,
            lat: 14.285329 
        },
        { 
            classname: 'San Miguel 1',
            lng: 120.972854,
            lat: 14.218309
        },      
        { 
            classname: 'San Miguel 2',
            lng: 120.970425,
            lat: 14.22333 
        },      
        { 
            classname: 'San Vicente 1',
            lng: 120.976,
            lat: 14.2289 
        },
        { 
            classname: 'San Vicente 2',
            lng: 120.973026,
            lat: 14.224095
        },
        { 
            classname: 'Tartaria',
            lng: 120.972261,
            lat: 14.219335 
        },
        { 
            classname: 'Tibig',
            lng: 121.001173,
            lat: 14.22682
        },
        { 
            classname: 'Toledo',
            lng: 120.978379,
            lat: 14.150201
        },
        { 
            classname: 'Tubuan 1',
            lng: 120.971041,
            lat: 14.214419
        },
        { 
            classname: 'Tubuan 2',
            lng: 120.969667,
            lat: 14.214833
        },
        { 
            classname: 'Tubuan 3',
            lng: 120.975603,
            lat: 14.215038
        },
        { 
            classname: 'Ulat',
            lng: 120.984078,
            lat: 14.176831
        },          
        { 
            classname: 'Yakal',
            lng: 120.968278,
            lat: 14.223902 
        }          
        ]
};