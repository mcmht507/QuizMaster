module UtilsFunc
  # response function
  def res_success(resObj)
    render status: 200, json: resObj
  end
  module_function :res_success

  def res_bad_request(param)
    render status: 400, json: { message: Constants::RES_MSG_400.sub(/¥{0¥}/, param) }
  end
  module_function :res_bad_request

  def res_unauthorized
    render status: 401, json: { message: Constants::RES_MSG_401 }
  end
  module_function :res_unauthorized

  def res_not_found
    render status: 404, json: { message: Constants::RES_MSG_404 }
  end
  module_function :res_not_found

  def res_conflict
    render status: 409, json: { message: Constants::RES_MSG_409 }
  end
  module_function :res_conflict

  def res_server_err(err)
    render status: 500, json: { err: err , message: Constants::RES_MSG_500 }
  end
  module_function :res_server_err

end