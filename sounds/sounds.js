class giri_sounds {
constructor() {    
	this.shutter_sound = 
	 		new Audio("sounds/shutter.wav"); 
	this.giriintro = 
	 		new Audio("sounds/giri.mp3");
	this.nointernet = 
	 		new Audio("sounds/nonet.mp3");
	 this.no_cmd = 
	 		new Audio("sounds/dontget.mp3");
	 this.curr_weath = 
	 		new Audio("sounds/current.mp3");
	 this.postfb = 
	 		new Audio("sounds/postfb.mp3");
	 this.prec = 
	 		new Audio("sounds/prec.mp3");
	 this.temp = 
	 		new Audio("sounds/temp.mp3");
	 this.windspeed = 
	 		new Audio("sounds/windspeed.mp3");
	 this.wakeup = 
	 		new Audio("sounds/wakeup.mp3");
	 this.notget = 
	 		new Audio("sounds/notget.mp3");
	 this.showW = 
	 		new Audio("sounds/showweath.mp3");
	 this.donepost = 
	 		new Audio("sounds/donepost.mp3");
	 this.errpost = 
	 		new Audio("sounds/errorpost.mp3");
	 this.saysw = 
	 		new Audio("sounds/saysw.mp3");
	 this.crops = 
	 		new Audio("sounds/crops.wav");
	 this.endm = 
	 		new Audio("sounds/endofmonth.wav");
	 this.avaicom = 
	 		new Audio("sounds/commands.wav");
	 this.gh = 
	 		new Audio("sounds/go_home.wav");
	 this.gsleep = 
	 		new Audio("sounds/sleep.wav");
	 this.map = 
	 		new Audio("sounds/show_map.wav");
	 this.req_map = 
	 		new Audio("sounds/req_map.wav");
	 this.zoomin = 
	 		new Audio("sounds/zoom_in.wav");
	 this.zoomout = 
	 		new Audio("sounds/zoom_out.wav");	 
	 this.zooom = 
	 		new Audio("sounds/zooom.wav");
	 this.maxzoomout = 
	 		new Audio("sounds/max-zo.wav");
	 this.max_days = 
	 		new Audio("sounds/max-days.wav");
	 this.sd = 
	 		new Audio("sounds/shutdown.wav");
	 this.abort = 
	 		new Audio("sounds/abort.wav");
	 this.listen = 
	 		new Audio("sounds/listen.wav");
	 this.silence = 
	 		new Audio("sounds/silence.wav");
	 this.occ = 
	 		new Audio("sounds/oceanCur.wav");
	 this.sig1 = 
	 		new Audio("sounds/sig1.wav");
	 this.sig2 = 
	 		new Audio("sounds/sig2.wav");
	 this.sig3 = 
	 		new Audio("sounds/sig3.wav");
	 this.sig4 = 
	 		new Audio("sounds/sig4.wav");
	 this.sig5 = 
	 		new Audio("sounds/sig5.wav");
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
	show_crops(){
		this.crops.play();
	}
	endofMonth(){
		this.endm.play();
	}
	show_commands(){
		this.avaicom.play();
	}
	go_home(){
		this.gh.play();	
	}
	go_sleep(){
		this.gsleep.play();
	}
	showMap(){
		this.map.play();
	}
	reqMap(){
		this.req_map.play();
	}	
	Zoom_In(){
		this.zoomin.play();		
	}
	Zoom_Out(){
		this.zoomout.play();
	}
	zooooom(){
		this.zooom.play();
	}
	Max_ZoomOut(){
		this.maxzoomout.play();
	}
	Max_FDate(){
		this.max_days.play();
	}
	Shutdown(){
		this.sd.play();
	}
	Abort_sd(){
		this.abort.play();
	}
	silence_mode(){
		this.silence.play();
	}
	listen_mode(){
		this.listen.play();
	}
	oceanCur(){
		this.occ.play();
	}
	signal_1(){
		this.sig1.play();
	}	
	signal_2(){
		this.sig2.play();
	}
	signal_3(){
		this.sig3.play();
	}
	signal_4(){
		this.sig4.play();
	}
	signal_5(){
		this.sig5.play();
	}
}