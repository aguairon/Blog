class WelcomeController < ApplicationController
  def index
  	@periods = Period.all
  	@props = {
      title: {
        text: "Periodos historicos",
        admin_signed_in: admin_signed_in?, 
        path_title: 'Nuevo periodo', 
        path: new_period_path
      },
      list: {
        items: @periods,
        path: '/periods/'
      }
	   }
  end
end
