var daten = new Date();
		var nMonth = daten.getMonth();
		function getCrop(month){
			var cropName = "Temperature or Windspeed or Precipitable Water is above/below expected rate! Please Call the Developer to adjust Measurements";
			switch(month) {
				case 0:
						cropName = giri_crop.January[0].crop;
						break;		
				case 1:
						cropName = giri_crop.February[0].crop;
						break;
				case 2:
						cropName = giri_crop.March[0].crop;
						break;
				case 3:
						cropName = giri_crop.April[0].crop;
						break;
				case 4:
						cropName = giri_crop.May[0].crop;
						break;
				case 5:
						cropName = giri_crop.June[0].crop;
						break;
				case 6:
						cropName = giri_crop.July[0].crop;
						break;				
				case 7:
						cropName = giri_crop.August[0].crop;
						break;
				case 8:
						cropName = giri_crop.September[0].crop;
						break;
				case 9:
						cropName = giri_crop.October[0].crop;
						break;

				case 10:
						cropName = giri_crop.November[0].crop;
						break;
				case 11:
						cropName = giri_crop.December[0].crop;
						break;

			}
			return cropName;			
		}



		var current_crop = getCrop(nMonth);