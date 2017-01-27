var config = {
    // Lenguage for the mirror (currently not implemented)

    greets : {
        early:[
        "It so early Master",
        "You are in a hurry?"
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
        key : "36da509268d347e6997fcb8983ced0a4", // Your forcast.io api key
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
            classname: 'adlas',
            lng: 120.123454,
            lat: 14.23454
        },
         { 
            classname: 'balite1',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'balite2',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'balubad',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'brgy1',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'brgy2',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'brgy3',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'brgy4',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'brgy5',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'batas',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'biga1',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'biga2',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'biluso',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'bucal',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'buho',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'bulihan',
            lng: 120.996236,
            lat: 14.275078
        },
        { 
            classname: 'cabangaan',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'carmen',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'hoyo',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'hukay',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'iba',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'inchikan',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'kalubkob',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'kaong',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'lalaan1',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'lalaan2',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'litlit',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'lucsuhin',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'lumil',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'maguyam',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'malabag',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'malakit',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'mataasnab',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'muntingi',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'paligawan',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'pasonglangka',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'pooc1',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'pooc2',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'pulongsaging',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'pulongbunga',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'putingkahoy',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'sabutan',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'santol',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'sanvic1',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'adlsanvic2as',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'tartaria',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'tibig',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'toledo',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'tubuan1',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'tubuan2',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'tubuan3',
            lng: 120.123454,
            lat: 14.23454
        },
        { 
            classname: 'ulat',
            lng: 120.123454,
            lat: 14.23454
        }          
    ]
};