class giri{
	constructor() {
		this.monthnames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 	 	this.daynames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 
	}

	getDayname(newdname){	 
     switch(newdname){
        case 'Mon':
        newdname = this.daynames[0];
        break;
        case 'Tue':
        newdname = this.daynames[1];
        break;
        case 'Wed':
        newdname = this.daynames[2];
        break;
        case 'Thu':
        newdname = this.daynames[3];
        break;
        case 'Fri':
        newdname = this.daynames[4];
        break;
        case 'Sat':
        newdname = this.daynames[5];
        break;
        case 'Sun':
        newdname = this.daynames[6];
        break;
        default:
        newdname = "";
        break;
     }
     return newdname;
	}

	getMonthname(newmonth){

     switch(newmonth){
        case '01' || '1':
        newmonth = this.monthnames[0];
        break;

        case '02' || '2':
        newmonth = this.monthnames[1];
        break;

        case '03' || '3':
        newmonth = this.monthnames[2];
        break;

        case '04' || '4':
        newmonth = this.monthnames[3];
        break;

        case '05' || '5':
        newmonth = this.monthnames[4];
        break;

        case '06' || '6':
        newmonth = this.monthnames[5];
        break;

        case '07' || '7':
        newmonth = this.monthnames[6];
        break;

        case '08' || '8':
        newmonth = this.monthnames[7];
        break;

        case '09' || '9':
        newmonth = this.monthnames[8];
        break;

        case '10':
        newmonth = this.monthnames[9];
        break;

        case '11':
        newmonth = this.monthnames[10];
        break;

        case '12':
        newmonth = this.monthnames[11];
        break;

        default:
        newmonth = "";
        break;   
        }   
        return newmonth;
	}

	incrDayName(newdname){
     switch(newdname){
        case 'Mon':
        newdname = this.daynames[1];
        break;
        case 'Tue':
        newdname = this.daynames[2];
        break;
        case 'Wed':
        newdname = this.daynames[3];
        break;
        case 'Thu':
        newdname = this.daynames[4];
        break;
        case 'Fri':
        newdname = this.daynames[5];
        break;
        case 'Sat':
        newdname = this.daynames[6];
        break;
        case 'Sun':
        newdname = this.daynames[0];
        break;
        default:
        newdname = "";
        break;
     }
     return newdname;
	}

	getDayname_byAdd(newdname, numd){
		var nd;

     switch(newdname){
        case 'Mon':
        nd = 0 + numd;       
        if(nd > 6){ nd = (nd - 6) - 1; }
        newdname = this.daynames[nd];
        break;
        case 'Tue':
        nd = 1 + numd;       
        if(nd>=6){ nd = (nd - 6); }
        newdname = this.daynames[nd];
        break;
        case 'Wed':
        nd = 2 + numd;       
        if(nd>=6){ nd = (nd - 6); }
        newdname = this.daynames[nd];
        break;
        case 'Thu':
        nd = 3 + numd;       
        if(nd>=6){ nd = (nd - 6); }
        newdname = this.daynames[nd];
        break;
        case 'Fri':
        nd = 4 + numd;       
        if(nd>=6){ nd = (nd - 6); }
        newdname = this.daynames[nd];
        break;
        case 'Sat':
        nd = 5 + numd;       
        if(nd>=6){ nd = (nd - 6); }
        newdname = this.daynames[nd];
        break;
        case 'Sun':
        nd = 6 + numd;       
        if(nd>=6){ nd = (nd - 6); }
        newdname = this.daynames[nd];
        break;
        default:
        newdname = "";
        break;
     }
     return newdname;
	}
}