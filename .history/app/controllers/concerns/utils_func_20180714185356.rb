module UtilsFunc
  # response function
  def res_success(resObj)
    render status: 200, json: resObj
  end
  module_function :res_success
  def res_unauthorized
    render status: 401, json: { message: 'Unauthorized' }
  end
  def res_not_found()
    render status: 404, json: { message: "Not Found" }
  end
  def res_server_err(err)
    render status: 500, json: { err: err , message: 'Internal Server Error' }
  end

end