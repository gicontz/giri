class giri_sounds {
constructor() {    
	this.shutter_sound = 
	 		new Audio("http://localhost/giri/sounds/shutter.wav"); 
	this.giriintro = 
	 		new Audio("http://localhost/giri/sounds/giri.mp3");
	this.nointernet = 
	 		new Audio("http://localhost/giri/sounds/nonet.mp3");
	 this.no_cmd = 
	 		new Audio("http://localhost/giri/sounds/dontget.mp3");
	 this.curr_weath = 
	 		new Audio("http://localhost/giri/sounds/current.mp3");
	 this.nextday = 
	 		new Audio("http://localhost/giri/sounds/nextday.mp3");
	 this.postfb = 
	 		new Audio("http://localhost/giri/sounds/postfb.mp3");
	 this.prec = 
	 		new Audio("http://localhost/giri/sounds/prec.mp3");
	 this.temp = 
	 		new Audio("http://localhost/giri/sounds/temp.mp3");
	 this.windspeed = 
	 		new Audio("http://localhost/giri/sounds/windspeed.mp3");
	 this.wakeup = 
	 		new Audio("http://localhost/giri/sounds/wakeup.mp3");
	 this.notget = 
	 		new Audio("http://localhost/giri/sounds/notget.mp3");
	 this.showW = 
	 		new Audio("http://localhost/giri/sounds/showweath.mp3");
	 this.donepost = 
	 		new Audio("http://localhost/giri/sounds/donepost.mp3");
	 this.errpost = 
	 		new Audio("http://localhost/giri/sounds/errorpost.mp3");
	 this.saysw = 
	 		new Audio("http://localhost/giri/sounds/saysw.mp3");
  }

	shutter(){			 		
	 		this.shutter_sound.play();
	}
	introduce(){
	 		this.giriintro.play();
	}
	no_connection(){
		
	 		this.nointernet.play();
	}
	no_command(){
			this.no_cmd.play();
	}
	current_weather(){
			this.curr_weath.play();
	}
	nextdayf(){
			this.nextday.play();
	}
	postonfb(){
			this.postfb.play();
	}
	precW(){
			this.prec.play();
	}
	tempF(){
			this.temp.play();
	}
	wakeupgiri(){
			this.wakeup.play();
	}
	windS(){
			this.windspeed.play();
	}
	notgetS(){
			this.notget.play();
	}
	showweath(){
			this.showW.play();
	}
	postDone(){
			this.donepost.play();
	}
	postErr(){
			this.errpost.play();
	}
	notif_sw(){
			this.saysw.play();
	}
}