<!DOCTYPE html>
<html>
<head>
	<title>GIRI | Admin</title>
  <link rel="shortcut icon" href="favicon.png" />
</head>
<?php include_once('functions.php'); ?>
<?php 
get_header_scripts(); 
high_chart_head();
?>
<body class="dashboard">

	
<?php get_admin_menu(); ?>
<div class="title col-md-12 col-md-offset-2">
	<h1>Dashboard</h1>
</div>

	<div class="admin_content">
		<div class="container col-md-10 col-md-offset-2">
			<div id="dashboard" class="visible">
                <div class="settings">
                    <form class="form" method="post">
                        <div class="form-group">
                            <label class="control-lable" for="tutopt">Turn On Tutorial:</label>
                            <input class="" type="radio" id="tutopt-yes" name="tutopt" value="YES"> YES
                            <input class="" type="radio" id="tutopt-no" name="tutopt" value="NO"> NO
                        </div>
                        <input type="submit" id="dash-submit" name="dash-submit" value="UPDATE">
                    </form>
                    <?php 
                        if(isset($_POST['dash-submit'])){
                            if(isset($_POST['tutopt'])){
                                write_settings("../tutorial_config.giri", $_POST['tutopt']);
                            }
                        }
                        ?>
                </div>
			</div>
		</div>
<?php 
high_chart_body();
?>        
<div id="container" style="height: 400px"></div>
<button class="refresh_chart">REFRESH CHART</button>
	</div>

<?php 
giri_bottom_scripts();
?>

<script type="text/javascript">
    var the_tut_y = $("#tutopt-yes");
    var the_tut_n = $("#tutopt-no");
    var __tutopt = $.giriReader('../tutorial_config.giri');
        if (__tutopt == 'YES') {
            the_tut_y.attr("checked", "");
        }else{
            the_tut_n.attr("checked", "");
        }
    $("#dash-submit").click(function(){
        $.ajax({
        type: "post",
        url: "http://" + window.location.hostname.toString() + "/giri/admin/tutorial-.php",
        success: function(){    
                console.log("Tutorial OFF upon reboot");            
         }
        });
        window.reload();
    });
    $(".refresh_chart").click(function(){
        forecast_chart();
    });
</script>
</body>
</html>
