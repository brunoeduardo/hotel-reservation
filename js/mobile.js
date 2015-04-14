$(function(){	
	// button on 
	$("#booking_info #customer_name").change(function(event) {
		$("#booking_info .button_box a").removeClass("ui-state-disabled");
	});

	//on button city list
	$("#city_list").change(function(event) {
		$("#city_select .button_box a").removeClass("ui-state-disabled");
	});
	//check city
	$(".go_hotel").click(function(){
			if ($("#city_list").val() == "City 1"){
				$( ":mobile-pagecontainer" ).pagecontainer( "change", "#hotel_select_city1", { transition: "slide" } );
				$(".city_choice").html($("#city_list").val());
			}
			if ($("#city_list").val() == "City 2"){
				$( ":mobile-pagecontainer" ).pagecontainer( "change", "#hotel_select_city2", { transition: "slide" } );
				$(".city_choice").html($("#city_list").val());
			}
	});

	//on button hotel list
	$("#hotel_list").change(function(event) {
		$(".pick_hotel .button_box a").removeClass("ui-state-disabled");
	});
	$("#hotel_list1").change(function(event) {
		$(".pick_hotel .button_box a").removeClass("ui-state-disabled");

	});

	//check hotel
	$(".button_hotel").click(function(){
		getDate();
		if ($("#hotel_select_city1 .city_choice").html() == "City 1") {
			$( ":mobile-pagecontainer").pagecontainer( "change", "#booking_info", { transition: "slide" } );				
			$(".city_choice").html($("#city_list").val());
			$(".hotel_list").html($("#hotel_list").val());				
			
		}
		if ($("#hotel_select_city2 .city_choice").html() == "City 2") {
			$( ":mobile-pagecontainer").pagecontainer( "change", "#booking_info", { transition: "slide" } );				
			$(".city_choice").html($("#city_list").val());
			$(".hotel_list").html($("#hotel_list1").val());				
			
		}

	function getDate(){
		//get date 
		data = new Date();
		d = data.getDate();
		y = data.getFullYear();
		m = data.getMonth();
		// date arrival
		allDateIn = d.toString() + 0 + (m + 1).toString() + y.toString();
		//writes current date in the field 
		$("#date_in").val(allDateIn);
		//date departure
		allDateOut = (1 + d).toString() + 0 + (m + 1).toString() + y.toString();
		//writes current date in the field
		$("#date_out").val(allDateOut);
		//mask
		$("#date_in").mask("00/00/0000");
		$("#date_out").mask("00/00/0000");		
	}
});

	//info page confirm and pay
	$(".next_confirm").click(function(event) {	
			$( ":mobile-pagecontainer" ).pagecontainer( "change", "#confirm", { transition: "slide" } );				
			$(".customer_name").html($("#customer_name").val());
			$(".city_choice").html($("#city_list").val());
			$(".hotel_list").html($("#hotel").html());				
			$(".date_in").html($("#date_in").val());
			$(".date_out").html($("#date_out").val());
			$(".number_adult").html($("#number_adult").val());
			$(".number_child").html($("#number_child").val());			
			
			// couter days
				// get value arrival
				var getValueIn = $("#date_in").val().replace( /[^0-9]/g , "");
				var dayIn = getValueIn.charAt(0) + getValueIn.charAt(1);
				var monthIn = getValueIn.charAt(2) + getValueIn.charAt(3);
				var yearIn = getValueIn.charAt(4) + getValueIn.charAt(5);
				// get value departure
				var getValueOut = $("#date_out").val().replace( /[^0-9]/g , "");
				var dayOut = getValueOut.charAt(0) + getValueOut.charAt(1);
				var monthOut = getValueOut.charAt(2) + getValueOut.charAt(3);
				var yearOut = getValueOut.charAt(4) + getValueOut.charAt(5);

				function daysElapsed(dt1, dt2){
				    var day = 86400000;    
				    var dif = Math.abs(dt2.getTime() - dt1.getTime());
				    return Math.ceil(dif / day);
				}

				var data1 = new Date(yearIn , monthIn , dayIn);
			  	var data2 = new Date(yearOut , monthOut , dayOut);

			var elapsedDays = daysElapsed(data1, data2);
			$(".days_counter").html(elapsedDays);			

			//calculate daily
			var adult = 3000;
			var child = 2000;
			var valueDaily = adult * $("#number_adult").val() + child * $("#number_child").val() * elapsedDays;
			$(".value_total").html(valueDaily).mask('000.000.000.000.000,00', {reverse: true});
			

	});

	// page tank you 
	$(".tks").click(function(event) {
		$( ":mobile-pagecontainer" ).pagecontainer( "change", "#thankyou", { transition: "slide" } );				
			$(".city_choice").html($("#city_list").val());
			$(".hotel_list").html($("#hotel").html());				
			$(".date_in").html($("#date_in").val());
			$(".value_total").html($("#value_total").val());
	});

	// check input phone and card / button on
	var cardMask = "" ;
	var phoneMask = "" ;
	
	var options = { 
  		onComplete: function () {
  			phoneMask = "ok";
  			if (cardMask !== ""){
	  			chamar();
	  		}
		}		
	};
	var checkCard = { 
  		onComplete: function () {
  			cardMask = "ok";
  			if (phoneMask !== ""){
  				chamar();
  			}
		}		
	};
	
	function chamar(){
		if (phoneMask == "ok" && cardMask == "ok"){
			$("#confirm .button_box a").removeClass("ui-state-disabled");
		}	
	}

	//mask
	$("#customer_phone").mask("(00) 0000-0000" , options);
	$("#customer_card").mask("0000-0000-0000-0000" , checkCard); 
});