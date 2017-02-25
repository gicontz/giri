      //Ocean Current
                  var occr_canvas = document.getElementById('scale_occr');     
                  var context_occr = occr_canvas.getContext('2d');
                  context_occr.rect(0, 0, occr_canvas.width, occr_canvas.height);
                  // add linear gradient
                  var grd_occr = context_occr.createLinearGradient(0, 0, occr_canvas.width, occr_canvas.height);
                  occr_canvas.addEventListener('mousemove', showdataoccr_canvas, false); 
                  function showdataoccr_canvas(e){
                    occr_canvas_x = e.pageX - 103;      
                    $(this).attr("title", (occr_canvas_x/260).toFixed(2) + "m/s" )
                  }
                  grd_occr.addColorStop(0.05, '#004CB3');   
                  grd_occr.addColorStop(0.17, '#0F78B8'); 
                  grd_occr.addColorStop(0.29, '#8ED6FF');
                  grd_occr.addColorStop(0.37, '#15D07C');
                  grd_occr.addColorStop(0.48, '#3BFB5E');
                  grd_occr.addColorStop(0.56, '#90F361');
                  grd_occr.addColorStop(0.63, '#F1EA65');
                  grd_occr.addColorStop(0.69, '#FFE93B');
                  grd_occr.addColorStop(0.73, '#FFE70F');
                  grd_occr.addColorStop(0.8, '#FFBD0F');
                  grd_occr.addColorStop(0.87, '#FF8E0F');
                  grd_occr.addColorStop(0.92, '#FF5A0F');
                  grd_occr.addColorStop(0.98, '#FF350F');
                  grd_occr.addColorStop(1, '#FF120F');

                  context_occr.fillStyle = grd_occr;
                  context_occr.fill();    
      //Wind Speed
                  var ws_canvas = document.getElementById('scale_ws');     
                  var context_ws = ws_canvas.getContext('2d');
                  context_ws.rect(0, 0, ws_canvas.width, ws_canvas.height);
                  // add linear gradient
                  var grd_ws = context_ws.createLinearGradient(0, 0, ws_canvas.width, ws_canvas.height);
                  ws_canvas.addEventListener('mousemove', showdataws_canvas, false); 
                  function showdataws_canvas(e){
                    ws_canvas_x = e.pageX - 103;      
                    $(this).attr("title", ws_canvas_x + "km/h" )
                  }
                  grd_ws.addColorStop(0.05, '#004CB3');   
                  grd_ws.addColorStop(0.1, '#15D07C');
                  grd_ws.addColorStop(0.15, '#3BFB5E');
                  grd_ws.addColorStop(0.20, '#F1EA65');
                  grd_ws.addColorStop(0.30, '#FF8E0F');
                  grd_ws.addColorStop(0.35, '#FF120F');
                  grd_ws.addColorStop(0.45, '#BE00A9');
                  grd_ws.addColorStop(0.7, '#CA4CCA');
                  grd_ws.addColorStop(0.75, '#DC8ADC');
                  grd_ws.addColorStop(0.8, '#EEC5EE');
                  grd_ws.addColorStop(1, '#FCF6FC');

                  context_ws.fillStyle = grd_ws;
                  context_ws.fill(); 
      //Precipitation

                  var prec_canvas = document.getElementById('scale_prec');     
                  var context_prec = prec_canvas.getContext('2d');
                  context_prec.rect(0, 0, prec_canvas.width, prec_canvas.height);
                  // add linear gradient
                  var grd_prec = context_prec.createLinearGradient(0, 0, prec_canvas.width, prec_canvas.height);
                  prec_canvas.addEventListener('mousemove', showdataprec_canvas, false); 
                  function showdataprec_canvas(e){
                    prec_canvas_x = e.pageX - 103;      
                    $(this).attr("title", (prec_canvas_x/5.57).toFixed(2) + "kg/m²" )
                  }
                  grd_prec.addColorStop(0.05, '#E6A51E');   
                  grd_prec.addColorStop(0.2, '#B88A38');
                  grd_prec.addColorStop(0.35, '#35355C');
                  grd_prec.addColorStop(0.5, '#201F84');
                  grd_prec.addColorStop(0.65, '#3026D6');
                  grd_prec.addColorStop(0.75, '#435AED');
                  grd_prec.addColorStop(0.85, '#2CB4F7');
                  grd_prec.addColorStop(0.95, '#1AFFFF');
                  grd_prec.addColorStop(1, '#8EFFFF');

                  context_prec.fillStyle = grd_prec;
                  context_prec.fill();