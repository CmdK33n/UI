
$(function() {
	var numSelected = 0;

	$('#facebook, #twitter, #google, #reddit, #coffe, #cash, #tee').click(
		function() {
			$('#optionsListContainer').show();
		},
		function() {
			$('#optionsListContainer').hide();
		}
	);
});


/*			<!-- ---------------------------------------- -->
				<!-- Start of Actions                         -->
				<!-- ---------------------------------------- -->
				<div class="row-fluid">
					<div class="span12 alert alert-info">
						<ul class="actions unstyled">
							<li><span class="badge badge-warning">
								<i class="icon-facebook"></i></span>
								<span class="label">Like on Facebook</span>
							</li>
							<li><span class="badge badge-warning">
								<i class="icon-twitter-3"></i></span>
								<span class="label">Tweet on Twitter</span>
							</li>
							<li><span class="badge badge-warning">
								<i class="icon-google__x2B_"></i></span>
								<span class="label">+1 on Google Plus</span>
							</li>
							<li>
								<span class="badge badge-warning">
									<i class="icon-coffee2"></i>
								</span>
								<span class="label">Contribute $1</span>
							</li>
							<li>
								<span class="badge badge-warning">
									<i class="icon-cash-usd"></i>
								</span>
								<span class="label">Contribute $5</span>
							</li>
							<li>
								<span class="badge badge-warning">
									<i class="icon-tee"></i>
								</span>
								<span class="label">Buy a T-Shirt</span>
							</li>
						</ul>
					</div>
				</div>
				<!-- ---------------------------------------- -->
				<!-- End of Actions                           -->
				<!-- ---------------------------------------- -->
*/

if (jQuery.ui) {
  //alert("jQuery UI Loaded.");
}




  $(function() {
    $( document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
  });

