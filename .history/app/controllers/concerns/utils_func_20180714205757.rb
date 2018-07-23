module UtilsFunc
  # response function
  def res_success(resObj)
    render status: 200, json: resObj
  end
  module_function :res_success

  def res_unauthorized
    render status: 401, json: { message: 'Unauthorized' }
  end
  module_function :res_unauthorized

  def res_not_found()
    render status: 404, json: { message: "Not Found" }
  end
  module_function :res_not_found

  def res_not_found()
    render status: 404, json: { message: "Not Found" }
  end
  module_function :res_not_found

  def res_server_err(err)
    render status: 500, json: { err: err , message: 'Internal Server Error' }
  end
  module_function :res_server_err

end