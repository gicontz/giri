<!DOCTYPE html>
<html>
<head>
	<title>GIRI | Admin</title>
</head>
<?php include_once('functions.php'); ?>
<?php get_header_scripts(); ?>
<body class="dashboard">

	
<?php get_admin_menu(); ?>
<div class="title col-md-10 col-md-offset-2">
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
	</div>

<?php giri_bottom_scripts(); ?>
<script type="text/javascript">
    var the_tut_y = $("#tutopt-yes");
    var the_tut_n = $("#tutopt-no");
    var __tutopt = admin_menu.readTextFile('../tutorial_config.giri');
        if (__tutopt == 'YES') {
            the_tut_y.attr("checked", "");
        }else{
            the_tut_n.attr("checked", "");
        }
    $("#dash-submit").click(function(){
    if (true) {};
        $.ajax({
        type: "post",
        url: "http://" + window.location.hostname.toString() + "/giri/admin/tutorial-.php",
        success: function(){    
                console.log("Tutorial OFF upon reboot");            
         }
        });
        window.reload();
    });
</script>
</body>
</html>
